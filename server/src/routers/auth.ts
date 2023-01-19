import express from 'express';
import { register, login, logout } from '../controllers/Auth';
const router = express();

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);


export default router