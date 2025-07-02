import React, { useState } from 'react';

const AddBlogPostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Call the Meteor method to add a new blog post
    // We'll implement this in the next step
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Title"
      />
      <textarea
        value={content}
        onChange={(event) => setContent(event.target.value)}
        placeholder="Content"
      />
      <button type="submit">Add Blog Post</button>
    </form>
  );
};

export default AddBlogPostForm;
