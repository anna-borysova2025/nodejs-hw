import { Router } from 'express';
import { celebrate } from 'celebrate';
import { noteIdParamSchema, updateNoteSchema, getAllNotesSchema } from '../validations/notesValidation.js';
import { getAllNotes, getNoteById, createNote, deleteNote, updateNote } from '../controllers/notesController.js';


const router = Router();

router.get('/notes',getAllNotes);
router.get('/notes/:noteId', getNoteById);
router.post('/notes', createNote);
router.delete('/notes/:noteId', deleteNote);
router.patch('/notes/:noteId', updateNote);
router.get('/notes/noteId', celebrate(noteIdParamSchema), getNoteById);
router.delete('/notes/noteId', celebrate(noteIdParamSchema), deleteNote);
router.patch('/notes/noteId', celebrate(updateNoteSchema), updateNote);
router.get('/notes', celebrate(getAllNotesSchema), getAllNotes);

export default router;
