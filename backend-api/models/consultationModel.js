import mongoose from "mongoose";

// Define schema
const ConsultationSchema = new mongoose.Schema({
    fullName: String,
    email: String,
    phone: String,
    message: String,
    resumePath: String,
    requestDate: {
        type: Date,
        default: Date.now
    },
});

const consultationModel = mongoose.model('Consultation', ConsultationSchema);

export default consultationModel;