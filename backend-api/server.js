import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import consultationRoutes from './routes/consultationRoutes.js';
import adminRouter from './routes/adminRoutes.js';


const app = express();
const port = process.env.PORT || 4000;
connectDB();


// middlewares
app.use(express.json());
const allowedOrigins = ['https://admin.iconvisa.com', 'https://iconvisa.com', 'https://www.iconvisa.com', 'http://localhost:5173', 'http://localhost:3000', 'http://localhost:4000'];
app.use(cors({
    origin: function (origin, callback) {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    //credentials: true
    optionsSuccessStatus: 200
}));


app.use('/uploads', express.static('uploads'));

//API endpoints
app.use("/api/admin", adminRouter);
app.use("/api/consultation", consultationRoutes);


app.get("/", (req, res) => {
    res.send("Visa API Working")
});

app.listen(port, () => console.log(`Server started on PORT:${port}`));