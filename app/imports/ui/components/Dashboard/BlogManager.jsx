import React, { useState } from 'react';

const initialPosts = [
  { id: 1, title: 'First Post', content: 'This is the first post.' },
  { id: 2, title: 'Second Post', content: 'This is the second post.' },
];

const BlogManager = () => {
  const [posts, setPosts] = useState(initialPosts);
  const [newPost, setNewPost] = useState({ title: '', content: '' });
  const [editingPost, setEditingPost] = useState(null);

  const addPost = () => {
    const newId = posts.length ? Math.max(posts.map(p => p.id)) + 1 : 1;
    setPosts([...posts, { id: newId, ...newPost }]);
    setNewPost({ title: '', content: '' });
  };

  const updatePost = () => {
    setPosts(posts.map(post => (post.id === editingPost.id ? editingPost : post)));
    setEditingPost(null);
  };

  const deletePost = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  return (
    <div>
      <h1>Blog Manager</h1>

      {/* Create Post */}
      <div>
        <h2>Create New Post</h2>
        <input
          type="text"
          placeholder="Title"
          value={newPost.title}
          onChange={e => setNewPost({ ...newPost, title: e.target.value })}
        />
        <textarea
          placeholder="Content"
          value={newPost.content}
          onChange={e => setNewPost({ ...newPost, content: e.target.value })}
        ></textarea>
        <button onClick={addPost}>Add Post</button>
      </div>

      {/* List of Posts */}
      <div>
        <h2>All Posts</h2>
        {posts.map(post => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <button onClick={() => setEditingPost(post)}>Edit</button>
            <button onClick={() => deletePost(post.id)}>Delete</button>
          </div>
        ))}
      </div>

      {/* Edit Post */}
      {editingPost && (
        <div>
          <h2>Edit Post</h2>
          <input
            type="text"
            value={editingPost.title}
            onChange={e => setEditingPost({ ...editingPost, title: e.target.value })}
          />
          <textarea
            value={editingPost.content}
            onChange={e => setEditingPost({ ...editingPost, content: e.target.value })}
          ></textarea>
          <button onClick={updatePost}>Update Post</button>
          <button onClick={() => setEditingPost(null)}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default BlogManager;
