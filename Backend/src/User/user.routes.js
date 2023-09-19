import express from 'express';
import{  getAll , addUser,getUserById } from './user.controller.js';
const router = express.Router();

router.get('/', getAll);
router.post('/', addUser);
router.get('/:id', getUserById);

export default router ; 