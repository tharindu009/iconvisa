import express from 'express';
import multer from 'multer';
import path from 'path';
import authAdmin from '../middleware/authAdmin.js'; // Assuming you have an admin auth middleware
import { createBlogPost, getBlogPostById, updateBlogPost } from '../controllers/blogController.js';
import blogPost from '../models/blogPost.js';

const router = express.Router();

// Multer configuration for image uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/blog/'); // Store images in 'uploads/blog'
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    },
});

const upload = multer({ storage: storage });

// Route to create a new blog post
router.post('/create', authAdmin, upload.single('image'), createBlogPost);

router.get('/posts', async (req, res) => {
    try {
        const posts = await blogPost.find();
        res.status(200).json({ success: true, posts });
    } catch (error) {
        console.log('Error fetching blog posts:', error);
        res.status(500).json({ success: false, message: 'Failed to fetch blog posts. ' });
    }
});

router.get('/:id', getBlogPostById);

router.put('/:id', authAdmin, upload.single('image'), updateBlogPost);

export default router;