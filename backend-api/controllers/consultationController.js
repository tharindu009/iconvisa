import consultationModel from "../models/consultationModel.js";
import path from "path";
import fs from "fs";

// Save consultation data and handle file upload
const createConsultation = async (req, res) => {
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


//get all consultations
const getAllConsultations = async (req, res) => {
    try {
        const consultations = await consultationModel.find();
        res.status(200).json(consultations);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const adminDashboard = async (req, res) => {
    try {
        const users = await userModel.find({});
        const consultations = await consultationModel.find();

        const dashData = {
            consultations: consultations.length,
            clients: users.length,
            services: services.length,
            latestrequests: consultations.reverse().slice(0, 5),
        }

        res.json({ success: true, dashData });
    }
    catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message });
    }
}


export { createConsultation, getAllConsultations, adminDashboard };