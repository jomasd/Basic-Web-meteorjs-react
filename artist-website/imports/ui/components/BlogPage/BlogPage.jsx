import React, { useState } from 'react';

// Initial mock data
const initialBlogPosts = [
  {
    _id: '1',
    title: 'First Blog Post',
    content: 'This is the content of the first blog post.',
    author: 'John Doe'
  },
  {
    _id: '2',
    title: 'Second Blog Post',
    content: 'This is the content of the second blog post.',
    author: 'Jane Doe'
  }
];

const BlogPage = () => {
  const [blogPosts, setBlogPosts] = useState(initialBlogPosts);
  const [newPost, setNewPost] = useState({ title: '', content: '', author: '' });

  const addPost = () => {
    const newId = (blogPosts.length + 1).toString();
    setBlogPosts([...blogPosts, { _id: newId, ...newPost }]);
    setNewPost({ title: '', content: '', author: '' });
  };

  const deletePost = (id) => {
    setBlogPosts(blogPosts.filter((post) => post._id !== id));
  };

  const editPost = (id) => {
    const postToEdit = blogPosts.find((post) => post._id === id);
    setNewPost(postToEdit);
  };

  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {blogPosts.map((post) => (
          <li key={post._id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <small>Author: {post.author}</small>
            <button onClick={() => deletePost(post._id)}>Delete</button>
            <button onClick={() => editPost(post._id)}>Edit</button>
          </li>
        ))}
      </ul>
      <div>
        <h2>Add/Edit Blog Post</h2>
        <input
          type="text"
          placeholder="Title"
          value={newPost.title}
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
        />
        <textarea
          placeholder="Content"
          value={newPost.content}
          onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
        ></textarea>
        <input
          type="text"
          placeholder="Author"
          value={newPost.author}
          onChange={(e) => setNewPost({ ...newPost, author: e.target.value })}
        />
        <button onClick={addPost}>Submit</button>
      </div>
    </div>
  );
};

export default BlogPage;
