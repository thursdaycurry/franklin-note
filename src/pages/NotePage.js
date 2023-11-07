import { useCallback, useRef, useState } from 'react';

import FranklinTemplate from '../components/FranklinTemplate';
import NoteInsert from '../components/NoteInsert';
import NoteList from '../components/NoteList';
import NoteSender from '../components/NoteSender';
import TestSpeak from '../components/TestSpeak';

const NotePage = () => {
  const [notes, setNotes] = useState([
    {
      id: 1,
      sentence:
        'All happy families are alike; each unhappy family is unhappy in its own way. ',
      reference: 'Leo Tolstoy, Anna Karenina',
      url: 'https://www.goodreads.com/work/quotes/3252320-the-call-of-the-wild',
      checked: false,
      comments: '',
    },
    {
      id: 2,
      sentence:
        'It was a bright cold day in April, and the clocks were striking thirteen.',
      reference: 'George Orwell, 1984',
      url: 'https://www.goodreads.com/work/quotes/3252320-the-call-of-the-wild',
      checked: false,
      comments: '',
    },
    {
      id: 3,
      sentence: 'Knowledge grows fractally',
      reference: 'Paul graham',
      url: 'http://www.paulgraham.com',
      checked: false,
      comments: '',
    },
  ]);

  // id as unique value by using ref
  const nextId = useRef(4);

  const onInsert = useCallback(
    (data) => {
      const { sentence, reference, url } = data;

      if (sentence.trim().length === 0) {
        alert('Please input something in sentence');
        return;
      }

      const note = {
        id: nextId.current,
        sentence,
        reference,
        url,
        checked: false,
        comments: '',
      };
      setNotes(notes.concat(note));
      nextId.current += 1; // add nextId +1
    },
    [notes],
  );

  const onRemove = useCallback(
    (id) => {
      setNotes(notes.filter((note) => note.id !== id));
    },
    [notes],
  );

  const onToggle = useCallback(
    (id) => {
      setNotes(
        notes.map((note) =>
          note.id === id ? { ...note, checked: !note.checked } : note,
        ),
      );
    },
    [notes],
  );

  const onChange = useCallback(
    (id, value) => {
      setNotes(
        notes.map((note) =>
          note.id === id ? { ...note, comments: value } : note,
        ),
      );
    },
    [notes],
  );

  // Testing for Note List V2

  return (
    <>
      <FranklinTemplate>
        <NoteInsert onInsert={onInsert} />
        <NoteList
          notes={notes}
          onRemove={onRemove}
          onToggle={onToggle}
          onChange={onChange}
        />
        {/* <NoteListV2 /> */}
        <NoteSender notes={notes} />
        <TestSpeak />
      </FranklinTemplate>
    </>
  );
};
export default NotePage;
