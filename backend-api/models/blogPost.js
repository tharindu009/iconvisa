import mongoose from 'mongoose';

const blogPostSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    image: { type: String }, // Store the image path/URL
    createdAt: { type: Date, default: Date.now },
});

const blogPost = mongoose.model('BlogPost', blogPostSchema);

export default blogPost;