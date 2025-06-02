import React, { useState, useContext } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { AdminContext } from '../context/AdminContext';
import { useNavigate } from 'react-router-dom';

import { Editor } from "primereact/editor";


const CreateBlogPost = () => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const { aToken } = useContext(AdminContext);
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);

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
            const response = await axios.post(backendUrl + '/api/blog/create', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'aToken': aToken, // Assuming you need admin authentication
                },
            });

            if (response.data.success) {
                toast.success('Blog post created successfully!');
                navigate('/blog'); // Redirect to the blog list page
            } else {
                toast.error(response.data.message || 'Failed to create blog post.');
            }
        } catch (error) {
            console.error('Error creating blog post:', error);
            toast.error('Error creating blog post. Please check the console.');
        }
    };

    return (
        <div className="container mt-4 mb-4">
            <h2 className='mb-3'>Create New Blog Post</h2>
            <form onSubmit={handleSubmit}>
                <div className='bg-white p-4 border rounded'>
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
                        {/* <textarea
                        className="form-control"
                        id="content"
                        rows="5"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    ></textarea> */}
                        <Editor value={content} onTextChange={(e) => setContent(e.htmlValue)} style={{ height: '320px' }} />
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
                        Create Post
                    </button>

                </div>
            </form>
        </div>
    );
};

export default CreateBlogPost;