import React, { useEffect, useState } from 'react';
import EmptyList from '../../components/common/EmptyList/EmptyList';
import Header from '../../components/Home/Header';
import BlogList from '../../components/Home/BlogList/BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('https://affiliate-backend.onrender.com/image')
      .then(response => response.json())
      .then(data => setBlogs(data))
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

return (
  <div>
    <Header />
    {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs}/>}
  </div>
);
};



export default Home;
