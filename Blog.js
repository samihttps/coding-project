import React  from 'react'
import MainLayout from "../Layout/MainLayout";
import { useState, useEffect } from "react";
import axios from 'axios';

function Blog() {

  const[posts,setPosts] = useState([]);
  const[loading, setLoading] = useState(true);

  const fetchPosts = async () =>{
    const responseposts = await axios.get('https://jsonplaceholder.typicode.com/posts');
setPosts(responseposts.data);
setLoading(false);
  }

  useEffect(() => {
  fetchPosts();
  },[])

  return (
    <MainLayout>
      {loading ? <div>Data is loading</div>: 
      <div> { 
          posts.map((post, index) =>
          <div key={index}>
        {post.id}. {post.title}
        <div>
          {post.body}
        </div>
        <hr></hr>
          </div>
          )
      }</div>}
 
      </MainLayout>
  );
}

export default Blog;
