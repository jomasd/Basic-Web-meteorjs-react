import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import BlogPost from '../BlogPost/BlogPost';
import { BlogPosts } from '../../../api/BlogPosts/BlogPosts';

const BlogPage = ({ posts }) => {
  return (
    <div>
      <h1>Blog</h1>
      {posts.map((post, index) => (
        <BlogPost key={index} post={post} />
      ))}
    </div>
  );
};


export default withTracker(() => {
  return {
    posts: BlogPosts.find().fetch(),
  };
})(BlogPage);
