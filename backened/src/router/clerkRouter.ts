import express from 'express';
import { postUserInfo, getUserInfo } from '../services/clerkService';

const router = express.Router();

router.post('/user', postUserInfo);
router.get('/user/:id', getUserInfo);

export default router;