const mongoose = require('mongoose');

const { Schema } = mongoose;
const { ObjectId } = mongoose.Schema;

const glassesSchema = new Schema({
    title: {
        type: String,
        required: "title is required"
    },
    price: {
        type: Number,
        required: "Price is required",
        trim: true
    },
    number: {
        type: Number,
        trim: true
    },
    description: {
        type: String,
        required: "Description is required"
    },
    quantity: {
        type: Number,
        default: 0
    },
    image: {
        data: Buffer,
        contentType: String
    },
    postedBy: {
        type: ObjectId,
        ref: "User"
    }
}, { timestamps: true })

module.exports = Glasses = mongoose.model("Glasses", glassesSchema)
