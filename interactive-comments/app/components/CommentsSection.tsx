import { useState, useEffect } from 'react';
import initialData from '../data.json';
import Comment from './Comment';
import CommentForm from './CommentForm';

export interface User {
  image: {
    png: string;
    webp: string;
  };
  username: string;
}

export interface CommentType {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  user: User;
  replies?: CommentType[];
  replyingTo?: string;
}

export interface AppData {
  currentUser: User;
  comments: CommentType[];
}

const CommentsSection = () => {
  const [data, setData] = useState<AppData>(initialData);
  
  // Load data from localStorage on initial render
  useEffect(() => {
    const savedData = localStorage.getItem('commentsData');
    if (savedData) {
      setData(JSON.parse(savedData));
    }
  }, []);

  // Save data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('commentsData', JSON.stringify(data));
  }, [data]);

  // Add a new comment
  const addComment = (content: string) => {
    const newComment: CommentType = {
      id: Date.now(), // Use timestamp as a simple unique ID
      content,
      createdAt: 'Just now',
      score: 0,
      user: data.currentUser,
    };

    setData(prevData => ({
      ...prevData,
      comments: [...prevData.comments, newComment]
    }));
  };

  // Add a reply to a comment
  const addReply = (commentId: number, content: string, replyingTo: string, parentId?: number) => {
    const newReply: CommentType = {
      id: Date.now(),
      content,
      createdAt: 'Just now',
      score: 0,
      user: data.currentUser,
      replyingTo
    };

    // If parentId is provided, we're replying to a reply
    if (parentId) {
      setData(prevData => {
        const updatedComments = prevData.comments.map(comment => {
          if (comment.id === parentId) {
            return {
              ...comment,
              replies: comment.replies?.map(reply => {
                if (reply.id === commentId) {
                  return {
                    ...reply,
                    replies: [...(reply.replies || []), newReply]
                  };
                }
                return reply;
              })
            };
          }
          return comment;
        });
        return { ...prevData, comments: updatedComments };
      });
    } else {
      // We're replying to a top-level comment
      setData(prevData => {
        const updatedComments = prevData.comments.map(comment => {
          if (comment.id === commentId) {
            return {
              ...comment,
              replies: [...(comment.replies || []), newReply]
            };
          }
          return comment;
        });
        return { ...prevData, comments: updatedComments };
      });
    }
  };

  // Update a comment
  const updateComment = (id: number, content: string, parentId?: number) => {
    if (parentId) {
      // Update a reply
      setData(prevData => {
        const updatedComments = prevData.comments.map(comment => {
          if (comment.id === parentId) {
            return {
              ...comment,
              replies: comment.replies?.map(reply => 
                reply.id === id ? { ...reply, content } : reply
              )
            };
          }
          return comment;
        });
        return { ...prevData, comments: updatedComments };
      });
    } else {
      // Update a top-level comment
      setData(prevData => {
        const updatedComments = prevData.comments.map(comment => 
          comment.id === id ? { ...comment, content } : comment
        );
        return { ...prevData, comments: updatedComments };
      });
    }
  };

  // Delete a comment
  const deleteComment = (id: number, parentId?: number) => {
    if (parentId) {
      // Delete a reply
      setData(prevData => {
        const updatedComments = prevData.comments.map(comment => {
          if (comment.id === parentId) {
            return {
              ...comment,
              replies: comment.replies?.filter(reply => reply.id !== id)
            };
          }
          return comment;
        });
        return { ...prevData, comments: updatedComments };
      });
    } else {
      // Delete a top-level comment
      setData(prevData => ({
        ...prevData,
        comments: prevData.comments.filter(comment => comment.id !== id)
      }));
    }
  };

  // Update the score of a comment
  const updateScore = (id: number, increment: boolean, parentId?: number) => {
    if (parentId) {
      // Update score of a reply
      setData(prevData => {
        const updatedComments = prevData.comments.map(comment => {
          if (comment.id === parentId) {
            return {
              ...comment,
              replies: comment.replies?.map(reply => {
                if (reply.id === id) {
                  return {
                    ...reply,
                    score: increment ? reply.score + 1 : reply.score - 1
                  };
                }
                return reply;
              })
            };
          }
          return comment;
        });
        return { ...prevData, comments: updatedComments };
      });
    } else {
      // Update score of a top-level comment
      setData(prevData => {
        const updatedComments = prevData.comments.map(comment => {
          if (comment.id === id) {
            return {
              ...comment,
              score: increment ? comment.score + 1 : comment.score - 1
            };
          }
          return comment;
        });
        return { ...prevData, comments: updatedComments };
      });
    }
  };

  return (
    <div className="comments-section max-w-3xl mx-auto p-4">
      {data.comments.map(comment => (
        <Comment
          key={comment.id}
          comment={comment}
          currentUser={data.currentUser}
          onReply={addReply}
          onEdit={updateComment}
          onDelete={deleteComment}
          onUpdateScore={updateScore}
        />
      ))}
      <CommentForm 
        currentUser={data.currentUser} 
        onSubmit={addComment} 
        buttonText="SEND"
      />
    </div>
  );
};

export default CommentsSection; 