import React from 'react';
import PropTypes from 'prop-types';
import './styles/Article.css';

const Article = ({ title, content, author }) => {
  return (
    <div className="article">
      <h2 className="article-title">{title}</h2>
      <p className="article-author">By: {author}</p>
      <div className="article-content">{content}</div>
    </div>
  );
};

Article.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Article;
