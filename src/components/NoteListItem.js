import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
  MdLink,
} from 'react-icons/md';
import cn from 'classnames';
import './NoteListItem.scss';

const NoteListItem = ({ note, onRemove, onToggle, onChange }) => {
  const { id, sentence, reference, url, checked } = note;

  const handleChange = (e) => {
    onChange(id, e.target.value);
  };

  return (
    <div>
      <div className="NoteListItem">
        <div className={cn('checkbox', { checked })}>
          <div onClick={() => onToggle(id)}>
            {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
          </div>
          <div className="sentence">
            <div className="sentenceReference">
              <span>{sentence}</span>
              <a href={url} target="_blank" rel="noreferrer">
                <MdLink className="url" />
              </a>
            </div>
            <div className="sentenceVariety">
              {checked ? (
                <textarea
                  name="sentenceVarietyNoteArea"
                  rows="4"
                  cols="50"
                  onChange={handleChange}
                />
              ) : (
                ''
              )}
            </div>
          </div>
          <div className="reference">{reference}</div>
        </div>
        <div className="remove" onClick={() => onRemove(id)}>
          <MdRemoveCircleOutline />
        </div>
      </div>
    </div>
  );
};

export default NoteListItem;
