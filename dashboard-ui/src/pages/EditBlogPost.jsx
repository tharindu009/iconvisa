import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { AdminContext } from '../context/AdminContext';
import { useNavigate, useParams } from 'react-router-dom';

const EditBlogPost = () => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const { aToken } = useContext(AdminContext);
    const navigate = useNavigate();
    const { id } = useParams();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await axios.get(`${backendUrl}/api/blog/${id}`, {
                    headers: { aToken },
                });
                if (response.data.success) {
                    const { title, content, image } = response.data.blogPost;
                    setTitle(title);
                    setContent(content);
                    setImage(image);
                } else {
                    toast.error('Failed to fetch blog post.');
                }
            } catch (error) {

                toast.error(error.response?.data?.message || 'Error fetching blog post.');
            }
        };

        fetchBlog();
    }, [id]);

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);
        if (image) {
            formData.append('image', image);
        }

        try {
            const response = await axios.put(`${backendUrl}/api/blog/${id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'aToken': aToken,
                },
            });

            if (response.data.success) {
                toast.success('Blog post updated successfully!');
                navigate('/manage-blogs');
            } else {
                toast.error('Failed to update blog post.');
            }
        } catch (error) {
            console.error('Error updating blog post:', error);
            toast.error('Error updating blog post.');
        }
    };

    return (
        <div className="container mt-4">
            <h2>Edit Blog Post</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="content" className="form-label">Content</label>
                    <textarea
                        className="form-control"
                        id="content"
                        rows="5"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    ></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="image" className="form-label">Image</label>
                    <input
                        type="file"
                        className="form-control"
                        id="image"
                        onChange={handleImageChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Update Post
                </button>
            </form>
        </div>
    );
};

export default EditBlogPost;