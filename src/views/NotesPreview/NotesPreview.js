import React, { useCallback, useEffect, useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { useLocalStorage } from 'react-use';

import NetworkState from '../../components/NetworkState';
import Notes from '../../components/Notes';
import { languages, tKeys } from '../../constants';
import i18n from '../../i18n';

const NotesPreview = () => {
  const { t } = useTranslation();
  const [lng, setLng] = useLocalStorage('lng');

  const [currentDate, setCurrentDate] = useState(
    new Intl.DateTimeFormat(lng).format(new Date())
  );

  useEffect(() => {
    setCurrentDate(new Intl.DateTimeFormat(lng).format(new Date()));
  }, [lng]);

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
      <hr />
      <div>{t(tKeys.ADD)}</div>
      <div>
        <Notes />
      </div>
      <hr />
      <div>
        <select onChange={changeLanguage}>
          {languages.map((language, index) => (
            <option selected={language === lng} key={index} value={language}>
              {language}
            </option>
          ))}
        </select>
      </div>
      <hr />
      <div>{`${t(tKeys.CURRENT_DATE)}: ${currentDate}`}</div>
      <hr />
      <div dangerouslySetInnerHTML={{ __html: t(tKeys.PARAGRAPH_WITH_NOTE) }} />
      <div>
        <Trans>{t(tKeys.PARAGRAPH_WITH_NOTE)}</Trans>
      </div>
      <hr />
      <div>
        <div>{t(tKeys.OPINION, { count: 1 })}</div>
        <div>{t(tKeys.OPINION, { count: 2 })}</div>
        <div>{t(tKeys.OPINION, { count: 5 })}</div>
      </div>
    </div>
  );
};

export default NotesPreview;
