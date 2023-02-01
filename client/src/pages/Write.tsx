import axios from 'axios';
import React,{useState} from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { useLocation, useNavigate } from 'react-router-dom';
import moment from 'moment';

const Write = () => {
  const [file, setFile]:any = useState(null);
  const state = useLocation().state
  const [title, setTitle] = useState(state?.title || '');
  const [desc, setDesc] = useState(state?.desc ||'');
  const [cate, setCate] = useState('');
  const navigate = useNavigate();
  
  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append('file', file);
      const res = await axios.post(`http://localhost:8080/api/upload`, formData);
      return res.data;
    } catch (error) {
      console.log(error)
    }
  }

  const handleClicks = async (e:any) => {
    e.preventDefault();
    const imgUrl = await upload();
    try {
      state ? await axios.put(`http://localhost:8080/api/posts/update-post/${state.id}`,{
        id:state.id,title, desc:title, cate, img:file ? imgUrl : ""
      }) 
      : await axios.post(`http://localhost:8080/api/posts/create-post`, {
        title, desc:title, cate, img:file ? imgUrl : "", date: moment(Date.now()).format("yyyy-MM-dd HH:mm:ss")
      });
      navigate("/")
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='add'>
      <div className="content">
        <input type="text" placeholder='Title' value={title} onChange={(e:any)=>{setTitle(e.target.value)}}/>
        <div className="editorContainer">
          <ReactQuill className='editor' theme='snow' value={desc} onChange={setDesc} />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status:</b> Draft
          </span>
          <span>
            <b>Visibility:</b> Public
          </span>
          <input style={{display:"none"}} type="file" name='' id='file'  onChange={(e:any)=>{setFile(e.target.files[0])}} />
          <label className="file" htmlFor='file' style={{cursor:"pointer", margin:"5px 0", fontWeight:"700"}}>
            Upload File
          </label>
          <div className="buttons">
            <button>Save as a draft</button>
            <button onClick={handleClicks}>Public</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="cat">
          <input type="radio" name='cart'  checked={cate === "art"} value="art" id='art' onChange={(e:any)=>{setCate(e.target.value)}}/>
          <label htmlFor="art">Art</label>
          </div>
          <div className="cat">
          <input type="radio" name='cart' checked={cate === "science"} value="science" id='science' onChange={(e:any)=>{setCate(e.target.value)}}/>
          <label htmlFor="science">Science</label>
          </div>
          <div className="cat">
          <input type="radio" name='cart' checked={cate === "technology"} value="technology" id='technology' onChange={(e:any)=>{setCate(e.target.value)}}/>
          <label htmlFor="technology">Technology</label>
          </div>
          <div className="cat">
          <input type="radio" name='cart' checked={cate === "cinema"} value="cinema" id='cinema' onChange={(e:any)=>{setCate(e.target.value)}}/>
          <label htmlFor="cinema">Cinema</label>
          </div>
          <div className="cat">
          <input type="radio" name='cart' checked={cate === "design"} value="design" id='design' onChange={(e:any)=>{setCate(e.target.value)}}/>
          <label htmlFor="design">Design</label>
          </div>
          <div className="cat">
          <input type="radio" name='cart' checked={cate === "food"} value="food" id='food' onChange={(e:any)=>{setCate(e.target.value)}}/>
          <label htmlFor="food">Food</label>
        </div>
          </div>
      </div>
    </div>
  )
}

export default Write