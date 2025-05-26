import express from "express";
import multer from "multer";
import path from "path";
import { adminDashboard, createConsultation } from "../controllers/consultationController.js";
import authAdmin from "../middleware/authAdmin.js";


const router = express.Router();

// Multer setup for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'uploads/'),
    filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});
const upload = multer({ storage });

// Route for form submission
router.post("/", upload.single("resume"), createConsultation);
router.get("/dashboard", authAdmin, adminDashboard);

export default router;