import { MdOutlineCancel } from 'react-icons/md';

const Comment = ({ comment, onRemoveComment }) => {
  if (!comment) {
    return;
  }
  const { commentId, postId, content } = comment;

  return (
    <div className="flex items-center bg-gray-200 p-2 pl-3 mb-2 rounded break-words">
      {content}
      <MdOutlineCancel
        className="inline pl-1 w-6"
        onClick={() => onRemoveComment(postId, commentId)}
      />
    </div>
  );
};
export default Comment;
