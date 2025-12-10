import express from 'express';
import { postUserInfo, getUserInfo } from '../clerkService';

const router = express.Router();

router.post('/user', postUserInfo);
router.get('/user/:userId', getUserInfo);