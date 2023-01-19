import React, {useContext, useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
const Login = () => {
  const navigate = useNavigate();
  const {login}:any = useContext(AuthContext);
  const [error, setError] = useState("");
  const [input, setInput] = useState({
    email: "",
    password: ""
  });
  
  const handleInputChange = (e:any) => {
    e.preventDefault();
    setInput((prev:any)=>({...prev, [e.target.name]: e.target.value}))
  }
  
  const onSubmit = async (e:any) => {
    e.preventDefault();
    try {
      await login(input);
      navigate("/");
    } catch (err:any) {
      setError(err.response.data.errors);
    }
  };
  return (
    <div className="auth">
      <h1>Login</h1>
      <form>
        <input required type="text" name='email' placeholder='email' onChange={handleInputChange}/>
        <input required type="password" name='password' placeholder='password' onChange={handleInputChange}/>
        <button onClick={onSubmit}>Login</button>
        <p>{error}</p>
        <span>Don't you have an account</span><Link to='/register'>Register</Link>
      </form>
    </div>
  )
}

export default Login