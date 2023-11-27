import NoteListItemV2 from './NoteListItemV2';

const NoteListV2 = ({ notes, onRemove, onInsertComment, onRemoveComment }) => {
  return (
    <div className="NoteListV2">
      {notes.map((note) => (
        <NoteListItemV2
          note={note}
          key={note.id}
          onRemove={onRemove}
          onInsertComment={onInsertComment}
          onRemoveComment={onRemoveComment}
        />
      ))}
    </div>
  );
};
export default NoteListV2;
