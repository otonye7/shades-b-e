import mongoose from 'mongoose';

const { Schema } = mongoose;
const { ObjectId } = mongoose.Schema;

const reviewsSchema = new Schema({
    email: {
        type: String,
        trim: true,
        required: "Email is required",
        unique: true
    },
    title: {
        type: String,
        required: "Title is required"
    },
    name: {
        type: String,
        required: "Name is required"
    },
    reviews: {
        type: String,
        required: "Cant be Empty!"
    }
}, { timestamps: true })

export default mongoose.model("Reviews", reviewsSchema)