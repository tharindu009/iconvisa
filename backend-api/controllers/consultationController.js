import consultationModel from "../models/consultationModel.js";
import path from "path";
import fs from "fs";

// Save consultation data and handle file upload
export const createConsultation = async (req, res) => {
    try {
        const { fullName, email, phone, message } = req.body;
        let resumePath = null;

        // Handle file upload if present
        if (req.file) {
            resumePath = req.file.path;
        }

        const consultation = new consultationModel({
            fullName,
            email,
            phone,
            message,
            resumePath,
        });

        await consultation.save();
        res.status(201).json({ message: "Consultation saved successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};