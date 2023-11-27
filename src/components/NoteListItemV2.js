import { useCallback, useState } from 'react';
import { MdDeleteForever } from 'react-icons/md';
import Comment from './Comment';

const NoteListItemV2 = ({
  note,
  onRemove,
  onInsertComment,
  onRemoveComment,
}) => {
  const { id, sentence, comments } = note;

  const [newSentence, setNewSentence] = useState('');

  const handleChange = (e) => {
    setNewSentence(e.target.value);
  };

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      onInsertComment(id, newSentence);
      setNewSentence('');
    },
    [newSentence, id, onInsertComment],
  );

  return (
    <div className="p-2 m-2 border-dashed border-2 border-light--200">
      {/* Main Sentence Part */}
      <div className=" flex items-center bg-gray-700 text-white p-3 rounded">
        {sentence}
        <MdDeleteForever
          style={{ display: 'inline' }}
          onClick={() => onRemove(id)}
        />
      </div>

      {/* Practice Part */}
      <form className="pt-2" onSubmit={onSubmit}>
        <div className="flex justify-center items-center">
          <input
            placeholder="🖋️"
            value={newSentence}
            onChange={handleChange}
            className="border border-gray-300 p-1 pl-2 rounded-md focus:outline-none focus:border-blue-500 transition-colors w-full"
          />
        </div>
        <button type="submit"></button>
      </form>
      {/* Comments Part */}

      <div className="commentsContainer">
        {comments.map((comment) => (
          <Comment
            key={comment.commentId}
            comment={comment}
            onRemoveComment={onRemoveComment}
          />
        ))}
      </div>
    </div>
  );
};
export default NoteListItemV2;
