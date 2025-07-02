import React from 'react';

const BlogPost = ({ post }) => {
  return (
    <li>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </li>
  );
};

export default BlogPost;
