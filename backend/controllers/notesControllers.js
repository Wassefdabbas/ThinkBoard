import mongoose from "mongoose"
import Note from "../models/Note.js"

export const getAllNotes = async (req, res) => {
    try {
      const { userId } = req.params
      const notes = await Note.find({ userId }).sort({ createdAt: -1 })

      res.status(200).json({
        success: true,
        message: `Success in getting notes for user ${userId}`,
        notes
      })
    } catch (error) {
      console.error('Error in Get Notes By User ID : ', error)
      res.status(500).json({ message: 'Internal Server Error' })
    }
  }
  

export const getNotesById = async (req, res) => {
    try {
        const note = await Note.findById(req.params.id)

        if (!note) return res.status(404).json({ message: 'Note Not Found' })

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
        // Destructure userId from the request body
        const { title, content, userId } = req.body

        // Add a check to ensure userId was provided
        if (!userId) {
            return res.status(400).json({ message: 'User ID is required' });
        }

        // Pass the userId when creating the new note
        const note = new Note({ title, content, userId })

        const newNote = await note.save()
        res.status(201).json({
            success: true,
            message: "Success in Create Note",
            newNote
        })
    } catch (error) {
        console.error('Error in Create Note fffffffffffff: ', error)
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