import React,{useState, useEffect} from 'react'
import axios from 'axios';
const Menu = () => {
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
	<div className="menu">
		<h1>Others posts you may like</h1>
		{posts.map((post:any)=>(
			<div className="post" key={post.id}>
			<img src={`/${post.img}`} alt="" />
			<div className="content">
				<h2>{post.title}</h2>
				<button>Read More</button>
 			</div>
			</div>
		))}
	</div>
  )
}

export default Menu