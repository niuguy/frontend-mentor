import { useState } from 'react';
import type { User } from './CommentsSection';

interface CommentFormProps {
  currentUser: User;
  onSubmit: (content: string) => void;
  buttonText: string;
  replyingTo?: string;
}

const CommentForm = ({ currentUser, onSubmit, buttonText, replyingTo }: CommentFormProps) => {
  const [content, setContent] = useState(replyingTo ? `@${replyingTo} ` : '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Remove the @username part if replying to someone
    const finalContent = replyingTo 
      ? content.replace(`@${replyingTo} `, '') 
      : content;
    
    if (finalContent.trim()) {
      onSubmit(finalContent);
      setContent('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg p-4 shadow-sm flex flex-col md:flex-row gap-4">
      <img 
        src={currentUser.image.webp || currentUser.image.png} 
        alt={currentUser.username} 
        className="w-8 h-8 rounded-full"
      />
      
      <textarea
        className="flex-grow p-3 border border-gray-300 rounded-lg"
        placeholder="Add a comment..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows={3}
      />
      
      <button
        type="submit"
        className="bg-blue-600 text-white font-bold py-2 px-6 rounded-lg self-start md:self-end"
      >
        {buttonText}
      </button>
    </form>
  );
};

export default CommentForm; 