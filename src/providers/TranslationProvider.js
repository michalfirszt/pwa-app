import React, { useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import { useLocalStorage } from 'react-use';

import { languages } from '../constants';
import i18n from '../i18n';

const TranslationProvider = ({ children }) => {
  const [lng] = useLocalStorage('lng');

  useEffect(() => {
    if (languages.includes(lng)) {
      i18n.changeLanguage(lng);
    }
  }, [lng]);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};

export default TranslationProvider;
