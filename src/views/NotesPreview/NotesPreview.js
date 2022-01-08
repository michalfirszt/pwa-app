import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocalStorage } from 'react-use';

import NetworkState from '../../components/NetworkState';
import Notes from '../../components/Notes';
import { languages, tKeys } from '../../constants';
import i18n from '../../i18n';

const NotesPreview = () => {
  const { t } = useTranslation();
  const [lng, setLng] = useLocalStorage('lng');

  const changeLanguage = useCallback(
    ({ target: { value } }) => {
      if (value !== lng) {
        setLng(value);
        i18n.changeLanguage(value);
      }
    },
    [lng, setLng]
  );

  return (
    <div>
      <div>
        <NetworkState />
      </div>
      <div>
        <select onChange={changeLanguage}>
          {languages.map((language, index) => (
            <option key={index} value={language}>
              {language}
            </option>
          ))}
        </select>
      </div>
      <div>{t(tKeys.ADD)}</div>
      <div>
        <Notes />
      </div>
    </div>
  );
};

export default NotesPreview;
