import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
// import Logo from "../img/logo.png";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
	const { currentUser, logout }:any = useContext(AuthContext);
	const navigation = useNavigate();
	const handleLogout = () =>{
		logout();
		alert("Logout Success, You need to login!");
		location.reload()
	}
	  return (
	    <div className="navbar">
	      <div className="container">
		<div className="logo">
		  <Link to="/">
		  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnj-CXKzsPtEZnenM-Woqp7dY86k3naJKUPw&usqp=CAU" alt="" />
		  </Link>
		</div>
		<div className="links">
		  <Link className="link" to="/?cat=art">
		    <h6>ART</h6>
		  </Link>
		  <Link className="link" to="/?cat=science">
		    <h6>SCIENCE</h6>
		  </Link>
		  <Link className="link" to="/?cat=technology">
		    <h6>TECHNOLOGY</h6>
		  </Link>
		  <Link className="link" to="/?cat=cinema">
		    <h6>CINEMA</h6>
		  </Link>
		  <Link className="link" to="/?cat=design">
		    <h6>DESIGN</h6>
		  </Link>
		  <Link className="link" to="/?cat=food">
		    <h6>FOOD</h6>
		  </Link>
		   <span>{currentUser?.user.username}</span> 
		  {currentUser ? (
		    <span onClick={handleLogout}>Logout</span>
		  ) : (
		    <Link className="link" to="/login">
		      Login
		    </Link>
		  )}
		  <span className="write">
		    <Link className="link" to="/write">
		      Write
		    </Link>
		  </span>
		</div>
	      </div>
	    </div>
	  );
}

export default Navbar