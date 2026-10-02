#!/bin/bash

set -e

# Colors for output
RED=$'\033[0;31m'
GREEN=$'\033[0;32m'
YELLOW=$'\033[1;33m'
NC=$'\033[0m' # No Color

# Check if jq is available
if ! command -v jq &> /dev/null; then
    printf '%sjq is required but not installed. Install it with: brew install jq%s\n' "$RED" "$NC"
    exit 1
fi

# Get npm outdated in JSON format
OUTDATED=$(npm outdated --json 2>/dev/null || echo "{}")

# Extract major version from semver string
get_major_version() {
    echo "$1" | cut -d. -f1
}

# Temporary files to store updates
MINOR_UPDATES_FILE=$(mktemp)
MAJOR_UPDATES_FILE=$(mktemp)
trap 'rm -f "$MINOR_UPDATES_FILE" "$MAJOR_UPDATES_FILE"' EXIT

# Track if any minor/patch updates were applied
UPDATES_MADE=false

printf '%sChecking for minor/patch updates...%s\n\n' "$YELLOW" "$NC"

# Parse each package from npm outdated JSON format
while IFS='|' read -r package current latest; do
    # Skip if versions are the same or not in package.json
    if [[ "$current" == "$latest" ]]; then
        continue
    fi

    # Skip packages not in package.json (current version is null)
    if [[ "$current" == "null" ]]; then
        continue
    fi

    current_major=$(get_major_version "$current")
    latest_major=$(get_major_version "$latest")

    # Collect minor/patch updates for confirmation before applying
    if [[ "$current_major" == "$latest_major" ]]; then
        printf '%s✓%s %s: %s → %s\n' "$GREEN" "$NC" "$package" "$current" "$latest"
        printf '%s|%s|%s\n' "$package" "$current" "$latest" >> "$MINOR_UPDATES_FILE"
    else
        printf '%s✗%s %s: %s → %s (major version change, skipped)\n' "$RED" "$NC" "$package" "$current" "$latest"
        echo "$package|$current|$latest" >> "$MAJOR_UPDATES_FILE"
    fi
done < <(echo "$OUTDATED" | jq -r 'to_entries[] | "\(.key)|\(.value.current)|\(.value.latest)"' 2>/dev/null)

if [[ -s "$MINOR_UPDATES_FILE" ]]; then
    printf '\n'
    printf '%sProceed with applying these minor/patch updates to package.json?%s\n' "$YELLOW" "$NC"
    read -r -p "y (yes) / n (no): " confirm_updates

    if [[ "$confirm_updates" == "y" ]]; then
        while IFS='|' read -r package current latest; do
            # Escape special characters for sed (/, &, etc.)
            escaped_package=$(printf '%s\n' "$package" | sed -e 's/[\/&]/\\&/g')
            escaped_latest=$(printf '%s\n' "$latest" | sed -e 's/[\/&]/\\&/g')

            # Use # as delimiter instead of / to avoid conflicts with package names
            # Use .bak suffix to work with both macOS (BSD) and different sed versions
            sed -i.bak "s#\"$escaped_package\": \"[~^]*[0-9.]*\"#\"$escaped_package\": \"^$escaped_latest\"#g" package.json
            rm -f package.json.bak
        done < "$MINOR_UPDATES_FILE"

        UPDATES_MADE=true
    else
        printf '%sMinor/patch updates were skipped by user.%s\n' "$RED" "$NC"
    fi
fi

printf '\n'

# Show major updates summary if any exist
if [[ -s "$MAJOR_UPDATES_FILE" ]]; then
    printf '\n'
    printf '%s━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━%s\n' "$YELLOW" "$NC"
    printf '%sMajor Version Updates Available (not applied):%s\n' "$YELLOW" "$NC"
    printf '%s━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━%s\n' "$YELLOW" "$NC"
    while IFS='|' read -r package current latest; do
        printf '%s  • %s%s: %s → %s\n' "$RED" "$package" "$NC" "$current" "$latest"
    done < "$MAJOR_UPDATES_FILE"
    printf '%s━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━%s\n' "$YELLOW" "$NC"
fi

# Only run install-dependencies.sh if updates were actually made
if [[ "$UPDATES_MADE" == "true" ]]; then
    printf '\n'
    printf '%sRunning install-dependencies.sh to update node_modules%s\n' "$YELLOW" "$NC"
    bash "$(dirname "$0")/install-dependencies.sh" --non-interactive
    printf '%sUpdate complete!%s\n' "$GREEN" "$NC"
else
    printf '\n'
    printf '%sNo updates applied, skipping build and bundle checks%s\n' "$YELLOW" "$NC"
fi
