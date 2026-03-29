import { model, Schema } from 'mongoose';
import { TAGS } from '../constans/tags.js';

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
enum: TAGS,
default: 'Todo',
},
},
  {
    timestamps: true,
    versionKey: false,
  },
);
noteSchema.index({ title: 'text', content: 'text' },
  {
    name: 'NoteTextIndex',
    weights: { title: 10, content: 5 },
    default_language: 'english',
  },
);

export const Note = model('Note', noteSchema);
