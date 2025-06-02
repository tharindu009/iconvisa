import BlogPost from '../models/blogPost.js';

// Create a new blog post
const createBlogPost = async (req, res) => {
    try {
        const { title, content } = req.body;
        let image = null;

        if (req.file) {
            image = req.file.path; // Save the path to the image
        }

        const newBlogPost = new BlogPost({
            title,
            content,
            image,
        });

        const savedBlogPost = await newBlogPost.save();

        res.status(201).json({ success: true, message: 'Blog post created successfully', data: savedBlogPost });
    } catch (error) {
        console.error('Error creating blog post:', error);
        res.status(500).json({ success: false, message: 'Failed to create blog post', error: error.message });
    }
};

// Get blog post details by ID
const getBlogPostById = async (req, res) => {
    try {
        const { id } = req.params;

        // Find the blog post by ID
        const blogPost = await BlogPost.findById(id);

        if (!blogPost) {
            return res.status(404).json({ success: false, message: 'Blog post not found' });
        }

        res.status(200).json({ success: true, blogPost });
    } catch (error) {
        console.error('Error fetching blog post:', error);
        res.status(500).json({ success: false, message: 'Failed to fetch blog post', error: error.message });
    }
};



export { createBlogPost, getBlogPostById };