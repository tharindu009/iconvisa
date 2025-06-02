import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { AdminContext } from '../context/AdminContext';
import { useNavigate } from 'react-router-dom';

const BlogManagement = () => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const { aToken } = useContext(AdminContext);
    const navigate = useNavigate();

    const [blogs, setBlogs] = useState([]);

    // Fetch all blog posts
    const fetchBlogs = async () => {
        try {
            const response = await axios.get(`${backendUrl}/api/blog/posts`, {
                headers: { aToken },
            });
            if (response.data.success) {
                setBlogs(response.data.posts);
            } else {
                toast.error('Failed to fetch blog posts.');
            }
        } catch (error) {
            console.error('Error fetching blog posts:', error);
            toast.error('Error fetching blog posts.');
        }
    };

    // Delete a blog post
    const deleteBlog = async (id) => {
        try {
            const response = await axios.delete(`${backendUrl}/api/blog/${id}`, {
                headers: { aToken },
            });
            if (response.data.success) {
                toast.success('Blog post deleted successfully.');
                fetchBlogs(); // Refresh the list
            } else {
                toast.error('Failed to delete blog post.');
            }
        } catch (error) {
            console.error('Error deleting blog post:', error);
            toast.error('Error deleting blog post.');
        }
    };

    // Navigate to edit page
    const editBlog = (id) => {
        navigate(`/edit-blog/${id}`);
    };

    useEffect(() => {
        fetchBlogs();
    }, []);

    return (
        <div className="container mt-4">
            <h2>Blog Management</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Created At</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {blogs.map((blog) => (
                        <tr key={blog._id}>
                            <td>{blog.title}</td>
                            <td>{new Date(blog.createdAt).toLocaleDateString()}</td>
                            <td>
                                <button
                                    className="btn btn-warning me-2"
                                    onClick={() => editBlog(blog._id)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => deleteBlog(blog._id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BlogManagement;