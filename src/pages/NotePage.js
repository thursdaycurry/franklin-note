import { useCallback, useRef, useState } from 'react';

import FranklinTemplate from '../components/FranklinTemplate';
import NoteInsert from '../components/NoteInsert';
import NoteSender from '../components/NoteSender';

import uuid from 'react-uuid';
import NoteListV2 from '../components/NoteListV2';
import Modal from '../components/Modal';

const NotePage = () => {
  const [notes, setNotes] = useState([
    // Default data
    {
      id: 1,
      sentence: 'She exercises every morning',
      comments: [
        {
          commentId: uuid(),
          postId: 1,

          content: 'I read a book every night',
        },
        {
          commentId: uuid(),
          postId: 1,
          content: 'He has breakfast every morning',
        },
      ],
    },

    {
      id: 2,
      sentence: 'Knowledge grows fractally.',
      comments: [],
    },
  ]);

  const nextId = useRef(3);

  const onInsert = useCallback(({ sentence }) => {
    if (sentence.trim().length === 0) {
      alert('Please input something in sentence');
      return;
    }

    setNotes((prevNotes) => {
      const note = {
        id: nextId.current,
        sentence,
        comments: [],
      };
      nextId.current += 1; // increment nextId
      return prevNotes.concat(note); // add the new note
    });
  }, []);

  const onInsertComment = useCallback(
    (id, content) => {
      setNotes(
        notes.map((note) =>
          note.id === id
            ? {
                ...note,
                comments: note.comments.concat({
                  commentId: uuid(),
                  postId: id,
                  content,
                }),
              }
            : note,
        ),
      );
    },
    [notes],
  );

  const onRemove = useCallback(
    (id) => {
      setNotes(notes.filter((note) => note.id !== id));
    },
    [notes],
  );

  const onRemoveComment = useCallback(
    (postId, commentId) =>
      setNotes(
        notes.map((note) =>
          note.id === postId
            ? {
                ...note,
                comments: note.comments.filter(
                  (comment) => comment.commentId !== commentId,
                ),
              }
            : note,
        ),
      ),
    [notes],
  );

  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <>
      {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} />}
      <FranklinTemplate>
        <NoteInsert onInsert={onInsert} />
        <NoteListV2
          notes={notes}
          onRemove={onRemove}
          onInsertComment={onInsertComment}
          onRemoveComment={onRemoveComment}
        />
      </FranklinTemplate>
      <NoteSender notes={notes} />
    </>
  );
};
export default NotePage;
