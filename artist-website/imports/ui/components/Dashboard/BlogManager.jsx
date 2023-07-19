import React, { useState } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { BlogPosts } from '../../../api/BlogPosts/BlogPosts';

const BlogManager = ({ posts }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Call a Meteor method to insert a new post
  };

  return (
    <div>
      <h2>Manage Blog Posts</h2>
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
        <button type="submit">Add Post</button>
      </form>
      {posts.map((post, index) => (
        <div key={index}>
          <h3>{post.title}</h3>
          {/* Add buttons for editing and deleting the post */}
        </div>
      ))}
    </div>
  );
};

export default withTracker(() => {
  return {
    posts: BlogPosts.find().fetch(),
  };
})(BlogManager);
