import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        userId: {
            type: String,
            required: true,
            index: true // Adds an index for faster queries by userId
        },
    },
    { timestamps: true }
)

const Note = mongoose.model("Note", noteSchema)

export default Note