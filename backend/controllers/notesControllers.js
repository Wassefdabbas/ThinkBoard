import mongoose from "mongoose"
import Note from "../models/Note.js"

export const getAllNotes = async (_, res) => {
    try {
        const notes = await Note.find().sort({createdAt: -1}) // the new first
        res.status(200).json({
            success: true,
            message: "Success in Get ALL Notes",
            notes
        })

    } catch (error) {
        console.error('Error in Get All Notes : ', error)
        res.status(500).json({ message: 'Internal Server Error' })
    }
}

export const getNotesById = async (req, res) => {
    try {
        const note = await Note.findById(req.params.id)

        if(!note) return res.status(404).json({ message: 'Note Not Found' })

        res.status(200).json({
            success: true,
            message: "Success in Get Note",
            note
        })

    } catch (error) {
        console.error('Error in Get Note : ', error)
        res.status(500).json({ message: 'Internal Server Error' })
    }
}

export const createNote = async (req, res) => {
    try {
        const { title, content } = req.body
        const note = new Note({ title, content })

        const newNote = await note.save()
        res.status(201).json({
            success: true,
            message: "Success in Create Note",
            newNote
        })
    } catch (error) {
        console.error('Error in Create Note : ', error)
        res.status(500).json({ message: 'Internal Server Error' })
    }
}

export const updateNote = async (req, res) => {
    try {
        const { title, content } = req.body
        const updatedNote = await Note.findByIdAndUpdate(
            req.params.id,
            { title, content },
            { new: true } // return after update
        )

        if (!updatedNote) return res.status(404).json({ message: 'Note Not Found' })

        res.status(200).json({
            success: true,
            message: "Success in Update Note",
            updatedNote
        })
    } catch (error) {
        console.error('Error in Update Note : ', error)
        res.status(500).json({ message: 'Internal Server Error' })
    }
}

export const deleteNote = async (req, res) => {
    try {
        const deletedNote = await Note.findByIdAndDelete(
            req.params.id,
        )

        if (!deletedNote) return res.status(404).json({ message: 'Note Not Found' })

        res.status(200).json({
            success: true,
            message: "Success in Delete Note",
        })
    } catch (error) {
        console.error('Error in Delete Note : ', error)
        res.status(500).json({ message: 'Internal Server Error' })
    }
}