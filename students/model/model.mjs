import mongoose from 'mongoose'
import StudentSchema from './schema.mjs'

export const Student = mongoose.model('Student', StudentSchema);