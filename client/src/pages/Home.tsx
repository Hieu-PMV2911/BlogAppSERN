import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  const [posts, setPosts]:any = useState([]);
  useEffect(() =>{
    const fetchPosts = async () =>{
      try{
        const res:any = await axios.get("http://localhost:8080/api/posts");
        setPosts(res.data);
        // console.log(res)
      }catch(err){
        console.log(err);
      }
    }
    fetchPosts();
  },[])
  return (
    <div className='home'>
      <div className="posts">
        {posts.map((post:any)=>(
          <div className="post" key={post.id}>
            <div className="img">
              <img src={`/${post.img}`} alt="" />
            </div>
            <div className="content">
              <Link className="link" to={`post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home