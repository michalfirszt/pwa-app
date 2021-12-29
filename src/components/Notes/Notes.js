import React, { useCallback, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { useLocalStorage } from 'react-use';

const useStyles = createUseStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
});

const Notes = () => {
  const classes = useStyles();

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
    <div className={classes.container}>
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
            <input type="submit" />
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
