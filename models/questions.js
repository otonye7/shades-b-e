import mongoose from 'mongoose';

const { Schema } = mongoose;
const { ObjectId } = mongoose.Schema;

const questionsSchema = new Schema({
    question: {
        type: String,
        required: "Cant be Empty!"
    }
}, { timestamps: true })

export default mongoose.model("Questions", questionsSchema)