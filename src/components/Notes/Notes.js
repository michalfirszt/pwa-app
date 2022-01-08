import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { createUseStyles } from 'react-jss';
import { useLocalStorage } from 'react-use';

import { tKeys } from '../../constants';

const useStyles = createUseStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
});

const Notes = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [notes, setNotes] = useLocalStorage('notes', '[]');

  const handleOnSubmit = useCallback(
    (event) => {
      event.preventDefault();

      setNotes(JSON.stringify([...JSON.parse(notes), { title, description }]));
      setTitle('');
      setDescription('');
    },
    [description, notes, setNotes, title]
  );

  return (
    <div className={classes.container} data-testid="notes">
      <div>
        <form onSubmit={handleOnSubmit}>
          <div>
            <input
              type="text"
              value={title}
              onChange={({ target: { value } }) => setTitle(value)}
              placeholder="Title"
              required
            />
          </div>
          <div>
            <input
              type="text"
              value={description}
              onChange={({ target: { value } }) => setDescription(value)}
              placeholder="Description"
              required
            />
          </div>
          <div>
            <input type="submit" value={t(tKeys.SAVE)} />
          </div>
        </form>
      </div>
      <div>
        {notes && (
          <ul>
            {JSON.parse(notes).map((note, index) => (
              <li key={index}>{note.title}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Notes;
