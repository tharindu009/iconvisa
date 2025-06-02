import jwt from 'jsonwebtoken';


//API for Admin Login
const loginAdmin = async (req, res) => {
    try {
        const { email, password } = req.body;

        //console.log(email);

        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {

            console.log("Admin Login Successful");
            // console.log(`Email: ${email}, Password: ${password}`);
            const token = jwt.sign(email + password, process.env.JWT_SECRET);
            res.json({ success: true, token });
        }
        else {

            res.json({ success: false, message: "Invalid credentials" });

        }
    }
    catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });

    }
};




export { loginAdmin };
