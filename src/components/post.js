



import React, { useState } from 'react';

const PostCreation = () => {
  const [showIF, setShowIF] = useState(false);
  const [file, setFile] = useState(null);
  const [likes, setLikes] = useState(0); 
  const [comments, setComments] = useState([]); 
  const [newComment, setNewComment] = useState(''); 

  const handlePostClick = () => {
    setShowIF((prevState) => !prevState);
  };

  const inputFile = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      
      const fileURL = URL.createObjectURL(selectedFile);
      setFile(fileURL);
    } else {
      console.error("No file selected or invalid file.");
    }
  };

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      const newCommentObject = {
        id: Date.now(),
        text: newComment,
      };
      console.log('New Comment Object:', newCommentObject);

      setComments([...comments, newCommentObject]);
      setNewComment('');
    }
  };

  const handleDeleteComment = (id) => {
    const updatedComments = comments.filter((comment) => comment.id !== id);
    console.log(`Deleted Comment ID: ${id}`); 
    setComments(updatedComments); 
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingleft: '10%',
      }}
    >
      <div style={{ width: '30%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <h4 style={{ color: 'blue', textAlign: 'center', marginTop: '60px' }}>Create a Post</h4>
        <button onClick={handlePostClick} style={{ backgroundColor: 'blue', color: 'white' }}>
          {showIF ? 'Close Post' : 'Add Post'}
        </button>
      </div>

      {showIF && (
        <div style={{ display: 'flex', flexDirection: 'row', gap: '10px', marginTop: '10px' }}>
          <input placeholder="Add Post" type="file" onChange={inputFile} />
          <button onClick={handlePostClick} style={{ backgroundColor: 'black', color: 'white' }}>
            Close
          </button>
        </div>
      )}

      {file && (
        <div style={{ width: '100%', paddingLeft: '38%', paddingTop: '10px' }}>
          <img src={file} alt="Uploaded file" style={{ height: '400px', width: '35%' }} />
          <div style={{ display: 'flex', flexDirection: 'row', gap: '10px', marginTop: '10px' }}>
            <button onClick={handleLike}>Like ({likes})</button> {/* Show like count */}
            <button>Share</button>
          </div>

          {/* Comment Section */}
          <div style={{ marginTop: '20px' }}>
            <input
              type="text"
              placeholder="Add a comment"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              style={{ width: '30%', padding: '5px' }}
            />
            <button onClick={handleAddComment} style={{ marginLeft: '10px', backgroundColor: 'green', color: 'white' }}>
              Add Comment
            </button>

            <div style={{ marginTop: '20px' }}>
              <h4>Comments:</h4>
              {comments.length > 0 ? (
                comments.map((comment) => (
                  <div
                    key={comment.id}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      background: '#f3f3f3',
                      padding: '5px',
                      borderRadius: '5px',
                      margin: '5px 0',
                      maxWidth: '433px', 
                      wordWrap: 'break-word', 
                    }}
                  >
                    <p style={{ margin: '0', flex: 1 }}>{comment.text}</p> {/* Added flex to keep text and button aligned */}
                    <button
                      onClick={() => handleDeleteComment(comment.id)}
                      style={{ backgroundColor: 'red', color: 'white', border: 'none', padding: '5px 10px' }}
                    >
                      Delete
                    </button>
                  </div>
                ))
              ) : (
                <p>No comments yet!</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostCreation;



















