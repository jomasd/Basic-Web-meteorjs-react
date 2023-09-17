import React, { useState } from 'react';
import Button from '../../UIComponents/Button/Button';
import TextInput from '../../UIComponents/TextInput/TextInput';
import TextArea from '../../UIComponents/TextArea/TextArea';
import Checkbox from '../../UIComponents/Checkbox/Checkbox';
import RadioButton from '../../UIComponents/RadioButton/RadioButton';

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
  const [isChecked, setIsChecked] = useState(false);
  const [selectedValue, setSelectedValue] = useState('option1');

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
        <TextInput
        type="text"
        placeholder="Title"
        value={newPost.title}
        onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
        />
        <TextArea
          placeholder="Content"
          value={newPost.content}
          onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
        />
        <TextInput
          type="text"
          placeholder="Author"
          value={newPost.author}
          onChange={(e) => setNewPost({ ...newPost, author: e.target.value })}
        />
        <Checkbox
          label="I agree to the terms and conditions"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />
        <RadioButton
          name="sampleRadio"
          label="Option 1"
          value="option1"
          checked={selectedValue === 'option1'}
          onChange={(e) => setSelectedValue(e.target.value)}
        />
        <RadioButton
          name="sampleRadio"
          label="Option 2"
          value="option2"
          checked={selectedValue === 'option2'}
          onChange={(e) => setSelectedValue(e.target.value)}
        />
        <Button label="Submit" onClick={addPost} />
      </div>
    </div>
  );
};

export default BlogPage;
