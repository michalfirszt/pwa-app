import React from 'react';

import NetworkState from '../../components/NetworkState';
import Notes from '../../components/Notes';

const NotesPreview = () => {
  return (
    <div>
      <div>
        <NetworkState />
      </div>
      <div>
        <Notes />
      </div>
    </div>
  );
};

export default NotesPreview;
