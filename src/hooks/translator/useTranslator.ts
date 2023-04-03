import {useState} from 'react';
import {ES} from './constants/languages/Es';
import {LanguageKey} from './models/Language';

export const useTranslator = () => {
  const [currentLanguage, setCurrentLanguage] = useState<LanguageKey>('es');
  const translator = {
    es: ES,
  }[currentLanguage];

  return {
    translator,
    changeLanguage: (language: LanguageKey) => setCurrentLanguage(language),
  };
};
