const mongoose = require('mongoose');

const { Schema } = mongoose;


const MailSchema = new Schema({
    email: {
        type: String,
        trim: true,
        required: "Email is required",
        unique: true
    }
}, { timestamps: true })

module.exports = Mail = mongoose.model("mail", MailSchema)
