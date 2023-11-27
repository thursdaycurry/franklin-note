import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
  MdLink,
  MdSubdirectoryArrowLeft,
} from 'react-icons/md';
import cn from 'classnames';
import './NoteListItem.scss';
import { useCallback, useState } from 'react';
import Comment from '../Comment';

const NoteListItem = ({ note, onRemove, onToggle, onChange }) => {
  const { id, sentence, checked, comments } = note;

  const [comment, setComment] = useState('');

  const handleChange = useCallback((e) => {
    setComment(e.target.value);
    console.log(comment);
  }, []);

  return (
    <>
      <div className="NoteListItem">
        <div className="originSentence">
          <div className={cn('checkbox', { checked })}>
            <div className="sentence">
              <div className="sentenceReference">
                <span>{sentence}</span>
              </div>
              <div className="sentenceVariety">
                <div className="newSentence">
                  <input
                    placeholder="write and enter"
                    value={comment}
                    onChange={handleChange}
                  />
                </div>

                {/* Comments List */}
                <div>
                  {comments.map((comment) => {
                    return (
                      <>
                        <Comment comment={comment} />
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="remove" onClick={() => onRemove(id)}>
            <MdRemoveCircleOutline />
          </div>
        </div>
      </div>
    </>
  );
};

export default NoteListItem;
