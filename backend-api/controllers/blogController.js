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

const updateBlogPost = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, content } = req.body;
        let image = null;

        // Check if a new image is uploaded
        if (req.file) {
            image = req.file.path; // Save the path to the new image
        }

        // Find the blog post by ID and update it
        const updatedBlogPost = await BlogPost.findByIdAndUpdate(
            id,
            {
                title,
                content,
                ...(image && { image }), // Update image only if a new one is provided
            },
            { new: true } // Return the updated document
        );

        if (!updatedBlogPost) {
            return res.status(404).json({ success: false, message: 'Blog post not found' });
        }

        res.status(200).json({ success: true, message: 'Blog post updated successfully', data: updatedBlogPost });
    } catch (error) {
        console.error('Error updating blog post:', error);
        res.status(500).json({ success: false, message: 'Failed to update blog post', error: error.message });
    }
};


export { createBlogPost, getBlogPostById, updateBlogPost };