import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '../models/user.js';
// Assuming you have a User model defined in models/User.js


//API for Admin Login
const loginAdmin = async (req, res) => {
    try {
        const { email, password } = req.body;

        console.log(email);

        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {

            console.log("Admin Login Successful");
            // console.log(`Email: ${email}, Password: ${password}`);
            const token = jwt.sign(email + password, process.env.JWT_SECRET);
            res.json({ success: true, token });
        }
        else {

            // Find user by email
            const user = await User.findOne({ email });
            if (!user) {

                return res.status(404).json({ success: false, message: 'User not found' });
            }

            // Verify password
            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) {
                return res.status(401).json({ success: false, message: 'Invalid password' });
            }

            // Generate JWT token
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '5d' });

            res.status(200).json({ success: true, token });
            // res.json({ success: false, message: "Invalid credentials" });

        }
    }
    catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });

    }
};

const createUser = async (req, res) => {
    try {
        const { fullName, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ fullName, email, password: hashedPassword });
        await newUser.save();
        // Here you would typically save the user to your database
        // For demonstration purposes, we'll just return the user data
        res.json({ success: true, message: 'User created successfully', user: { fullName, email } });
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: 'Failed to create user' });
    }
}

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.json({ success: true, users });
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: 'Failed to fetch users' });
    }
}

const deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;
        await User.findByIdAndDelete(userId);
        res.json({ success: true, message: 'User deleted successfully' });
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: 'Failed to delete user' });
    }
}





export { loginAdmin, createUser, getAllUsers, deleteUser };
