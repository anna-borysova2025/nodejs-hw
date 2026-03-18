
import { model, Schema } from 'mongoose';

const noteSchema = new Schema(
{
title: {
type: String,
trim: true,
required: true
},
content: {
type: String,
trim: true,
default: '',
},
tag: {
type: String,
required: true,
enum: ['Work', 'Personal', 'Meeting', 'Shopping', 'Ideas', 'Travel', 'Finance', 'Health', 'Important', 'Todo'],
default: 'Todo',
},
},
);

export const Note = model('Note', noteSchema);
