import { useState } from 'react';
import type { CommentType, User } from './CommentsSection';
import CommentForm from './CommentForm';
import DeleteModal from './DeleteModal';

// Import SVG icons
import iconReply from '../images/icon-reply.svg';
import iconDelete from '../images/icon-delete.svg';
import iconEdit from '../images/icon-edit.svg';
import iconPlus from '../images/icon-plus.svg';
import iconMinus from '../images/icon-minus.svg';

interface CommentProps {
  comment: CommentType;
  currentUser: User;
  parentId?: number;
  onReply: (commentId: number, content: string, replyingTo: string, parentId?: number) => void;
  onEdit: (id: number, content: string, parentId?: number) => void;
  onDelete: (id: number, parentId?: number) => void;
  onUpdateScore: (id: number, increment: boolean, parentId?: number) => void;
}

const Comment = ({
  comment,
  currentUser,
  parentId,
  onReply,
  onEdit,
  onDelete,
  onUpdateScore
}: CommentProps) => {
  const [isReplying, setIsReplying] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState(comment.content);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  
  const isCurrentUser = comment.user.username === currentUser.username;
  
  const handleReply = () => {
    setIsReplying(true);
  };
  
  const handleEdit = () => {
    setIsEditing(true);
    setEditContent(comment.content);
  };
  
  const handleDelete = () => {
    setShowDeleteModal(true);
  };
  
  const confirmDelete = () => {
    onDelete(comment.id, parentId);
    setShowDeleteModal(false);
  };
  
  const cancelDelete = () => {
    setShowDeleteModal(false);
  };
  
  const handleSubmitEdit = () => {
    onEdit(comment.id, editContent, parentId);
    setIsEditing(false);
  };
  
  const handleSubmitReply = (content: string) => {
    onReply(comment.id, content, comment.user.username, parentId);
    setIsReplying(false);
  };
  
  const handleUpvote = () => {
    onUpdateScore(comment.id, true, parentId);
  };
  
  const handleDownvote = () => {
    onUpdateScore(comment.id, false, parentId);
  };

  return (
    <div className="comment-thread mb-4">
      <div className="comment bg-white rounded-lg p-4 shadow-sm mb-4 md:flex">
        {/* Vertical vote bar on the left for desktop, hidden on mobile */}
        <div className="score-container hidden md:flex md:flex-col items-center bg-gray-100 rounded-lg mr-4 self-start">
          <button 
            className="p-2 text-gray-500 hover:text-blue-600"
            onClick={handleUpvote}
          >
            <img src={iconPlus} alt="Upvote" />
          </button>
          <span className="font-bold text-blue-600 py-2">{comment.score}</span>
          <button 
            className="p-2 text-gray-500 hover:text-blue-600"
            onClick={handleDownvote}
          >
            <img src={iconMinus} alt="Downvote" />
          </button>
        </div>
        
        {/* Main comment content */}
        <div className="flex-1">
          <div className="comment-header flex items-center mb-3">
            <img 
              src={comment.user.image.webp || comment.user.image.png} 
              alt={comment.user.username} 
              className="w-8 h-8 rounded-full mr-3"
            />
            <div className="font-bold mr-2">{comment.user.username}</div>
            {isCurrentUser && (
              <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded">you</span>
            )}
            <div className="text-gray-500 ml-2">{comment.createdAt}</div>
            
            <div className="action-buttons flex ml-auto">
              {isCurrentUser ? (
                <>
                  <button 
                    className="flex items-center mr-4 text-red-500 font-bold"
                    onClick={handleDelete}
                  >
                    <img src={iconDelete} alt="Delete" className="mr-1" />
                    Delete
                  </button>
                  <button 
                    className="flex items-center text-blue-600 font-bold"
                    onClick={handleEdit}
                  >
                    <img src={iconEdit} alt="Edit" className="mr-1" />
                    Edit
                  </button>
                </>
              ) : (
                <button 
                  className="flex items-center text-blue-600 font-bold"
                  onClick={handleReply}
                >
                  <img src={iconReply} alt="Reply" className="mr-1" />
                  Reply
                </button>
              )}
            </div>
          </div>
          
          {isEditing ? (
            <div className="edit-form">
              <textarea
                className="w-full p-3 border border-gray-300 rounded-lg mb-3"
                value={editContent}
                onChange={(e) => setEditContent(e.target.value)}
                rows={3}
              />
              <button
                className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
                onClick={handleSubmitEdit}
              >
                UPDATE
              </button>
            </div>
          ) : (
            <div className="comment-content mb-3">
              {comment.replyingTo && (
                <span className="font-bold text-blue-600">@{comment.replyingTo} </span>
              )}
              {comment.content}
            </div>
          )}
          
          {/* Horizontal vote bar for mobile, hidden on desktop */}
          <div className="flex justify-between items-center md:hidden">
            <div className="score-container flex items-center bg-gray-100 rounded-lg">
              <button 
                className="p-2 text-gray-500 hover:text-blue-600"
                onClick={handleUpvote}
              >
                <img src={iconPlus} alt="Upvote" />
              </button>
              <span className="font-bold text-blue-600 px-3">{comment.score}</span>
              <button 
                className="p-2 text-gray-500 hover:text-blue-600"
                onClick={handleDownvote}
              >
                <img src={iconMinus} alt="Downvote" />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {isReplying && (
        <div className="reply-form mb-4">
          <CommentForm
            currentUser={currentUser}
            onSubmit={handleSubmitReply}
            buttonText="REPLY"
            replyingTo={comment.user.username}
          />
        </div>
      )}
      
      {comment.replies && comment.replies.length > 0 && (
        <div className="replies ml-4 pl-4 border-l-2 border-gray-200">
          {comment.replies.map(reply => (
            <Comment
              key={reply.id}
              comment={reply}
              currentUser={currentUser}
              parentId={comment.id}
              onReply={onReply}
              onEdit={onEdit}
              onDelete={onDelete}
              onUpdateScore={onUpdateScore}
            />
          ))}
        </div>
      )}
      
      {showDeleteModal && (
        <DeleteModal onCancel={cancelDelete} onConfirm={confirmDelete} />
      )}
    </div>
  );
};

export default Comment; 