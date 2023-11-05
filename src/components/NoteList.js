import NoteListItem from './NoteListItem';
import './NoteList.scss';

const NoteList = ({ notes, onRemove, onToggle, onChange }) => {
  return (
    <div className="NoteList">
      {notes.map((note) => (
        <NoteListItem
          note={note}
          key={note.id}
          onRemove={onRemove}
          onToggle={onToggle}
          onChange={onChange}
        />
      ))}
    </div>
  );
};

export default NoteList;
