import React from 'react';
import BlogPost from '../BlogPost/BlogPost';

const BlogPage = () => {
  const blogPosts = [
    { title: 'Blog post 1', content: 'This is the first blog post.' },
    { title: 'Blog post 2', content: 'This is the second blog post.' },
    // Add more blog posts as needed
  ];

  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {blogPosts.map((post, index) => (
          <BlogPost key={index} post={post} />
        ))}
      </ul>
    </div>
  );
};

export default BlogPage;
