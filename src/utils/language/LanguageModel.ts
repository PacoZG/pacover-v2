'use client';

import { useEffect, useState } from 'react';
import { getLanguage, setLanguage } from "@/utils/localdb";
import { usePathname, useRouter } from 'next/navigation'

type Language = 'en' | 'es';

interface LanguageModelReturn {
  usersLanguage: Language;
  handleUsersLanguage: () => void;
}

export const LanguageModel = (): LanguageModelReturn => {
  const router = useRouter();
  const pathname = usePathname(); // Get the current path *without* the locale prefix

  const [usersLanguage, setUsersLanguage] = useState<Language>('en');

  useEffect(() => {
    const storedLanguage = getLanguage(); // From localStorage
    let effectiveLanguage: Language;

    if (storedLanguage) {
      effectiveLanguage = storedLanguage;
    } else {
      const defaultBrowserLanguage: string =
        window.navigator.language || (window.navigator as { userLanguage?: string }).userLanguage || 'en-US';

      if (defaultBrowserLanguage.startsWith('es')) {
        effectiveLanguage = 'es';
      } else {
        effectiveLanguage = 'en';
      }
      setLanguage(effectiveLanguage);
    }

    setUsersLanguage(effectiveLanguage);


  }, []); // Empty dependency array: runs only once on mount

  const handleUsersLanguage = () => {
    const newLanguage: Language = usersLanguage === 'en' ? 'es' : 'en';
    setLanguage(newLanguage); // Update local storage
    setUsersLanguage(newLanguage); // Update local state

    router.push(pathname, { locale: newLanguage });
  };

  return { usersLanguage, handleUsersLanguage };
};
