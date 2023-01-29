import React, { useState, useEffect, useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Edit from '../assets/imgs/edit.png'
import Delete from '../assets/imgs/delete.png'
import Menu from '../components/Menu'
import axios from 'axios';
import moment from 'moment'
import { AuthContext } from '../context/AuthContext'

export const Single = () => {
  const {currentUser}:any = useContext(AuthContext);
  const location = useLocation();
  const [posts, setPosts]:any = useState([]);
  const postId = location.pathname.split("/")[2];
  useEffect(() =>{
    const fetchPosts = async () =>{
      try{
        const res:any = await axios.get(`http://localhost:8080/api/posts/post/${postId}`);
        setPosts(res.data);
        // console.log(res)
      }catch(err){
        console.log(err);
      }
    }
    fetchPosts();
  },[postId])
  console.log(location)
  return (
    <div className="single">
      <div className="content">
        <img src={posts?.img} alt="" />
        <div className="user">
          <img src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
          <div className="info">
            <span>{posts?.username}</span>
            <p>Posted {moment(posts?.date).fromNow()}</p>
          </div>
          {currentUser.username === posts.username && (
            <div className="edit">
              <Link to={`/write?edit=2`}>
                <img src={Edit} alt="" />
              </Link>
              <img src={Delete} alt="" />
            </div>
          )}
        </div>
        <h1>{posts.title}</h1>
        <p>
          {posts.desc}
        </p>
      </div>
      <Menu />
    </div>
  )
}
