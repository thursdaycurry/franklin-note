import NoteListItem from './NoteListItem';
import './NoteList.scss';

const NoteList = ({ notes, onRemove, onToggle }) => {
  return (
    <div className="NoteList">
      {notes.map((note) => (
        <NoteListItem
          note={note}
          key={note.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default NoteList;
