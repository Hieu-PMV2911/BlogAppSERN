import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Register = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [input, setInput] = useState({
    username: "",
    password: "",
    email: "",
    location: "",
    img: ""
  });
  
  const handleInputChange = (e:any) => {
    e.preventDefault();
    setInput((prev:any)=>({...prev, [e.target.name]: e.target.value}))
  }
  
  const onSubmit = async (e:any) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/auth/register',input).then(res =>{
        alert('Register successfully');
        navigate("/login");
        // setError(res.errors);
        return res;
      });
    } catch (err:any) {
      setError(err.response.data.errors);
    }
  };
  return (
    <div className="auth">
      <h1>Register</h1>
      <form>
        <input required type="text" placeholder='username' name='username' onChange={handleInputChange}/>
        <input required type="text" placeholder='email' name='email' onChange={handleInputChange}/>
        <input required type="password" placeholder='password' name='password' onChange={handleInputChange}/>
        <input required type="text" placeholder='location' name='location' onChange={handleInputChange}/>
        <input required type="text" placeholder='img' name='img' onChange={handleInputChange}/>
        <button onClick={onSubmit}>Register</button>
        <p>{error}</p>
        <span>Do you have an account</span><Link to='/login'>Login</Link>
      </form>
    </div>
  )
}

export default Register