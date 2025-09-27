import express from 'express'
import { createNote, deleteNote, getAllNotes, getNotesById, updateNote } from '../controllers/notesControllers.js'

const route = express.Router()


route.get('/user/:userId', getAllNotes)

route.get('/:id', getNotesById)

route.post("/", createNote)

route.put("/:id", updateNote)

route.delete("/:id", deleteNote)

export default route