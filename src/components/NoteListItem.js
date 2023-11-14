// import {
//   MdCheckBoxOutlineBlank,
//   MdCheckBox,
//   MdRemoveCircleOutline,
//   MdLink,
// } from 'react-icons/md';
// import cn from 'classnames';
// import './NoteListItem.scss';

// const NoteListItem = ({ note, onRemove, onToggle, onChange }) => {
//   // const { id, sentence, reference, url, checked } = note;
//   const { id, sentence, reference, checked } = note;

//   const handleChange = (e) => {
//     onChange(id, e.target.value);
//   };

//   return (
//     <>
//       <div className="NoteListItem">
//         <div className="originSentence">
//           <div className={cn('checkbox', { checked })}>
//             <div onClick={() => onToggle(id)}>
//               {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
//             </div>
//             <div className="sentence">
//               <div className="sentenceReference">
//                 <span>{sentence}</span>
//                 {/* <a href={url} target="_blank" rel="noreferrer">
//                 <MdLink className="url" />
//               </a> */}
//               </div>
//               <div className="sentenceVariety">
//                 {checked ? (
//                   // <textarea
//                   //   name="sentenceVarietyNoteArea"
//                   //   rows="4"
//                   //   cols="50"
//                   //   onChange={handleChange}
//                   // />
//                   <div className="newSentence">
//                     <input type="text" onChange={handleChange} />
//                   </div>
//                 ) : (
//                   ''
//                 )}
//               </div>
//             </div>
//             {/* <div className="reference">{reference}</div> */}
//           </div>
//           <div className="remove" onClick={() => onRemove(id)}>
//             <MdRemoveCircleOutline />
//           </div>
//         </div>
//         <div className="newSentence">
//           <input type="text" />
//         </div>
//       </div>
//     </>
//   );
// };

// export default NoteListItem;

import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
  MdLink,
  MdSubdirectoryArrowLeft,
} from 'react-icons/md';
import cn from 'classnames';
import './NoteListItem.scss';

const NoteListItem = ({ note, onRemove, onToggle, onChange }) => {
  const { id, sentence, checked } = note;

  const handleChange = (e) => {
    onChange(id, e.target.value);
  };

  return (
    <>
      <div className="NoteListItem">
        <div className="originSentence">
          <div className={cn('checkbox', { checked })}>
            {/* <div onClick={() => onToggle(id)}>
              {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
            </div> */}
            <div className="sentence">
              <div className="sentenceReference">
                <span>{sentence}</span>
                {/* <a href={url} target="_blank" rel="noreferrer">
                <MdLink className="url" />
              </a> */}
              </div>
              <div className="sentenceVariety">
                <div className="newSentence">
                  <input
                    type="text"
                    placeholder="write and enter"
                    onChange={handleChange}
                  />
                </div>
                {/* {checked ? (
                  // <textarea
                  //   name="sentenceVarietyNoteArea"
                  //   rows="4"
                  //   cols="50"
                  //   onChange={handleChange}
                  // />
                  <div className="newSentence">
                    <input type="text" onChange={handleChange} />
                  </div>
                ) : (
                  ''
                )} */}
              </div>
            </div>
            {/* <div className="reference">{reference}</div> */}
          </div>
          <div className="remove" onClick={() => onRemove(id)}>
            <MdRemoveCircleOutline />
          </div>
        </div>
        {/* <div className="newSentence">
          <input type="text" />
        </div> */}
      </div>
    </>
  );
};

export default NoteListItem;
