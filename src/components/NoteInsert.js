import { MdAdd } from 'react-icons/md';
import './NoteInsert.scss';
import { useCallback, useState } from 'react';

const NoteInsert = ({ onInsert }) => {
  const [sentence, setSentence] = useState('');

  const onChangeSentence = useCallback((e) => {
    setSentence(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onInsert({ sentence });
      setSentence('');
      e.preventDefault();
    },
    [onInsert, sentence],
  );

  return (
    <form className="NoteInsert" onSubmit={onSubmit}>
      <input
        placeholder="sentence.."
        value={sentence}
        onChange={onChangeSentence}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default NoteInsert;
