'use client'

import React from 'react'
import {
  FolderTree,
  Wrench,
  Languages,
  Mail,
  Paintbrush,
  Rocket,
  CheckSquare,
} from 'lucide-react'

const ProjectOverview: React.FC = () => {
  return (
    <div className="page-layout">
      <section className="py-20 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
        <div className="w-full sm:w-11/12 lg:w-9/12 mx-auto px-4 space-y-16">
          {/* Project Structure */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 flex items-center justify-center gap-3">
              <FolderTree className="w-8 h-8 text-blue-600 dark:text-blue-300" />
              Project Structure
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-400 text-center max-w-3xl mx-auto mb-10">
              The project is organized into a modular, component-based structure
              to ensure scalability and maintainability.
            </p>
            <ul className="space-y-4">
              <li>
                <span className="font-semibold">src/app/:</span> The main entry
                point for the Next.js application, containing the routing logic.
              </li>
              <li>
                <span className="font-semibold">src/components/:</span> Holds
                all reusable and self-contained components (e.g., Header,
                Footer, Skills).
              </li>
              <li>
                <span className="font-semibold">src/utils/:</span> Contains
                utility functions and assets, such as language translations
                (i18n) and SVG logos.
              </li>
              <li>
                <span className="font-semibold">src/assets/:</span> Stores
                static assets like images and SVG files.
              </li>
            </ul>
          </div>

          {/* Customization and Configuration */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 flex items-center justify-center gap-3">
              <Wrench className="w-8 h-8 text-blue-600 dark:text-blue-300" />
              Customization & Configuration
            </h2>
            <div className="space-y-10">
              {/* Translation */}
              <div>
                <h3 className="text-2xl font-semibold flex items-center gap-2">
                  <Languages className="w-6 h-6 text-blue-500 dark:text-blue-300" />
                  Translation
                </h3>
                <p className="mt-2 text-gray-700 dark:text-gray-400">
                  The application uses{' '}
                  <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">
                    next-intl
                  </code>{' '}
                  and{' '}
                  <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">
                    next-i18n-router
                  </code>{' '}
                  for internationalization. To change or add content, edit the
                  translation files in{' '}
                  <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">
                    src/utils/language/
                  </code>
                  .
                </p>
                <ul className="list-disc list-inside mt-2 ml-4">
                  <li>
                    <code>en/translations.json</code>: English strings
                  </li>
                  <li>
                    <code>es/translations.json</code>: Spanish strings
                  </li>
                </ul>
              </div>

              {/* Contact Form */}
              <div>
                <h3 className="text-2xl font-semibold flex items-center gap-2">
                  <Mail className="w-6 h-6 text-blue-500 dark:text-blue-300" />
                  The Contact Form
                </h3>
                <p className="mt-2 text-gray-700 dark:text-gray-400">
                  Configured to use EmailJS. You’ll need to:
                </p>
                <ol className="list-decimal list-inside mt-2 ml-4 space-y-1">
                  <li>Sign up for an account on EmailJS.</li>
                  <li>Set up a new Email Service and Email Template.</li>
                  <li>
                    Update the service ID, template ID, and public key in{' '}
                    <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">
                      src/components/Contact/ContactModel.js
                    </code>
                    .
                  </li>
                </ol>
              </div>

              {/* Tailwind */}
              <div>
                <h3 className="text-2xl font-semibold flex items-center gap-2">
                  <Paintbrush className="w-6 h-6 text-blue-500 dark:text-blue-300" />
                  Tailwind CSS
                </h3>
                <p className="mt-2 text-gray-700 dark:text-gray-400">
                  Styling is handled by Tailwind CSS. Modify the color palette,
                  fonts, and other tokens in{' '}
                  <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">
                    tailwind.config.js
                  </code>
                  . Custom styles (e.g., <code>skill-style.css</code>) are
                  defined alongside their components.
                </p>
              </div>

              {/* Deployment */}
              <div>
                <h3 className="text-2xl font-semibold flex items-center gap-2">
                  <Rocket className="w-6 h-6 text-blue-500 dark:text-blue-300" />
                  Deployment
                </h3>
                <p className="mt-2 text-gray-700 dark:text-gray-400">
                  For a production build:
                </p>
                <pre className="bg-gray-200 dark:bg-gray-800 p-3 rounded text-sm mt-2">
                  npm run build
                </pre>
                <p className="mt-2 text-gray-700 dark:text-gray-400">
                  This generates a build folder for deployment to platforms like
                  Vercel or Netlify.
                </p>
              </div>

              {/* Testing */}
              <div>
                <h3 className="text-2xl font-semibold flex items-center gap-2">
                  <CheckSquare className="w-6 h-6 text-blue-500 dark:text-blue-300" />
                  Testing
                </h3>
                <p className="mt-2 text-gray-700 dark:text-gray-400">
                  Unit tests are implemented with Vitest:
                </p>
                <pre className="bg-gray-200 dark:bg-gray-800 p-3 rounded text-sm mt-2">
                  npm test
                </pre>
                <p className="mt-2 text-gray-700 dark:text-gray-400">
                  This runs all test suits .
                </p>
                <pre className="bg-gray-200 dark:bg-gray-800 p-3 rounded text-sm mt-2">
                  npm run coverage
                </pre>
                <p className="mt-2 text-gray-700 dark:text-gray-400">
                  This runs all tests and provides a detailed report.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProjectOverview
