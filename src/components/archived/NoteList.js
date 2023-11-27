import NoteListItem from './archived/NoteListItem';
import './NoteList.scss';

const NoteList = ({ notes, onRemove }) => {
  return (
    <div className="NoteList">
      {notes.map((note) => (
        <NoteListItem note={note} key={note.id} onRemove={onRemove} />
      ))}
    </div>
  );
};

export default NoteList;
