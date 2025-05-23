import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import consultationRoutes from './routes/consultationRoutes.js';


const app = express();
const port = process.env.PORT || 4000;
connectDB();


// middlewares
app.use(express.json());
app.use(cors());


app.use('/uploads', express.static('uploads'));

//API endpoints
app.use("/api/consultation", consultationRoutes);


app.get("/", (req, res) => {
    res.send("Visa API Working")
});

app.listen(port, () => console.log(`Server started on PORT:${port}`));