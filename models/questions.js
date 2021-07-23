const mongoose = require('mongoose');

const { Schema } = mongoose;
const { ObjectId } = mongoose.Schema;

const questionsSchema = new Schema({
    question: {
        type: String,
        required: "Cant be Empty!"
    }
}, { timestamps: true })

module.exports = Questions = mongoose.model("Questions", questionsSchema)
