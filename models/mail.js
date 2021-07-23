import mongoose from 'mongoose';

const { Schema } = mongoose;


const MailSchema = new Schema({
    email: {
        type: String,
        trim: true,
        required: "Email is required",
        unique: true
    }
}, { timestamps: true })

export default mongoose.model("mail", MailSchema)