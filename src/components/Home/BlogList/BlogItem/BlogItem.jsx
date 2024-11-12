import React from 'react';
import { Link } from 'react-router-dom';
import './BlogItem.css';

const BlogItem = ({ blog }) => {
  return (
    <div>
      <div className='blogItem-wrap'>
        <img className='blogItem-cover' src={`https://affiliate-backend.onrender.com/image/${blog._id}`} alt='cover' />
        <h3>{blog.name}</h3>
        <a href={blog.link}>Buy</a>
      </div>

    </div>
  );
};

export default BlogItem;
