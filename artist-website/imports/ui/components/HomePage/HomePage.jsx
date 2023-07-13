import React from 'react';
import BlogPost from '../BlogPost/BlogPost';
import PortfolioHighlight from '../PortfolioHighlight/PortfolioHighlight';

const HomePage = () => {
  const blogPosts = [
    { title: 'Blog post 1', content: 'This is the first blog post.' },
    { title: 'Blog post 2', content: 'This is the second blog post.' },
    // Add more blog posts as needed
  ];

  const portfolioHighlights = [
    { title: 'Portfolio piece 1', image: '/path/to/image.jpg', description: 'This is the first portfolio piece.' },
    { title: 'Portfolio piece 2', image: '/path/to/image.jpg', description: 'This is the second portfolio piece.' },
    // Add more portfolio pieces as needed
  ];

  return (
    <div>
      <h1>Welcome to My Artist Website</h1>
      <p>This is a brief introduction to who I am and what I do.</p>
      <h2>Blog</h2>
      <ul>
        {blogPosts.map((post, index) => (
          <BlogPost key={index} post={post} />
        ))}
      </ul>
      <h2>Portfolio Highlights</h2>
      <ul>
        {portfolioHighlights.map((piece, index) => (
          <PortfolioHighlight key={index} piece={piece} />
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
