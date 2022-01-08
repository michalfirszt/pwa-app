import React from 'react';
import { useTranslation } from 'react-i18next';

import NetworkState from '../../components/NetworkState';
import Notes from '../../components/Notes';
import { tKeys } from '../../constants';

const NotesPreview = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div>
        <NetworkState />
      </div>
      <div>{t(tKeys.ADD)}</div>
      <div>
        <Notes />
      </div>
    </div>
  );
};

export default NotesPreview;
