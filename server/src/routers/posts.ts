import express from 'express';
import { createPost, deletePost, getPost, getPosts, updatePost } from '../controllers/Posts';

const router = express();

router.get('/', getPosts);
router.get('/post/:id', getPost);
router.post('/create-post/:id', createPost);
router.put('/update-post/:id', updatePost);
router.delete('/delete-post/:id', deletePost);


export default router