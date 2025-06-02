import express from 'express'

import { createUser, deleteUser, getAllUsers, loginAdmin } from '../controllers/adminController.js'
import authAdmin from '../middleware/authAdmin.js';


const adminRouter = express.Router();

adminRouter.post('/login', loginAdmin);

adminRouter.post('/create-user', authAdmin, createUser);

adminRouter.get('/users', authAdmin, getAllUsers);

adminRouter.delete('/delete-user/:id', authAdmin, deleteUser);

export default adminRouter;