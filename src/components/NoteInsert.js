import { MdAdd } from 'react-icons/md';
import './NoteInsert.scss';
import { useCallback, useState } from 'react';

const NoteInsert = ({ onInsert }) => {
  const [sentence, setSentence] = useState('');
  const [reference, setReference] = useState('');
  const [url, setUrl] = useState('');

  const onChangeSentence = useCallback((e) => {
    setSentence(e.target.value);
  }, []);

  const onChangeReference = useCallback((e) => {
    setReference(e.target.value);
  }, []);

  const onChangeUrl = useCallback((e) => {
    setUrl(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onInsert({ sentence, reference, url });
      // 초기화
      setSentence('');
      setReference('');
      setUrl('');

      // submit 이벤트 새로고침 방지
      e.preventDefault();
    },
    [onInsert, sentence, reference, url],
  );

  return (
    <form className="NoteInsert" onSubmit={onSubmit}>
      <input
        placeholder="sentence.."
        value={sentence}
        onChange={onChangeSentence}
      />
      <input
        placeholder="reference.."
        value={reference}
        onChange={onChangeReference}
      />
      <input placeholder="url.." value={url} onChange={onChangeUrl} />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default NoteInsert;
