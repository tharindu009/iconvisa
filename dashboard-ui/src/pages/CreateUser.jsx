import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { AdminContext } from '../context/AdminContext';


const CreateUser = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [users, setUsers] = useState([]);

    const { aToken } = useContext(AdminContext);

    // Fetch all users
    const fetchUsers = async () => {
        try {
            const { data } = await axios.get(`${backendUrl}/api/admin/users`, {
                headers: { 'aToken': aToken },
            });
            setUsers(data.users);
        } catch (error) {
            console.error(error);
            toast.error('Failed to fetch users.');
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const onSubmitHandler = async (event) => {
        event.preventDefault();

        try {
            const { data } = await axios.post(`${backendUrl}/api/admin/create-user`, {
                fullName,
                email,
                password,
            },
                { headers: { 'aToken': aToken } });

            if (data.success) {
                toast.success('User created successfully!');
                setFullName('');
                setEmail('');
                setPassword('');
                fetchUsers(); // Refresh the user list
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.error(error);
            toast.error('Failed to create user. Please try again.');
        }
    };

    // Delete a user
    const deleteUser = async (userId) => {
        try {
            const { data } = await axios.delete(`${backendUrl}/api/admin/delete-user/${userId}`, { headers: { 'aToken': aToken } });
            if (data.success) {
                toast.success('User deleted successfully!');
                setUsers((prevUsers) => prevUsers.filter((user) => user._id !== userId)); // Remove the user from the list

            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.error(error);
            toast.error('Failed to delete user.');
        }
    };

    return (
        <div className="container mt-5">
            <form onSubmit={onSubmitHandler} className="container mt-5 w-50">

                <h2 className="text-center mb-4">Create User</h2>
                <div className='bg-white p-4 border rounded'>
                    <div className="mb-3 ">
                        <label htmlFor="fullName" className="form-label">Full Name</label>
                        <input
                            type="text"
                            id="fullName"
                            className="form-control"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Create User</button>
                </div>
            </form>
            <hr />
            <h2 className="text-center my-4">User List</h2>
            <div className="bg-white p-4 border rounded mb-4">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(users) && users.map((user) => (
                            <tr key={user._id}>
                                <td>{user.fullName}</td>
                                <td>{user.email}</td>
                                <td>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => deleteUser(user._id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CreateUser;