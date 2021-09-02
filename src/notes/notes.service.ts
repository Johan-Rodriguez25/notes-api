import {Injectable} from '@nestjs/common'
import {InjectModel} from '@nestjs/mongoose'
import {Model} from 'mongoose'
import {Note, NoteDocument} from './schemas/note.schema'
import {CreateNoteDTO} from './dto/create-note-dto'
import {UpdateNoteDTO} from './dto/update-note.dto'

@Injectable()
export class NotesService {
  constructor(@InjectModel(Note.name) private noteModel: Model<NoteDocument>) {}

  async findAll(): Promise<Note[]> {
    const notes = await this.noteModel.find()
    return notes
  }

  async create(createNoteDTO: CreateNoteDTO): Promise<Note> {
    const createdNote = new this.noteModel({
      ...createNoteDTO,
      id: Math.floor(Math.random() * (1000 - 1)) + 1,
      createdAt: new Date()
    }).save()

    return createdNote
  }

  async update(noteId: string, updateNoteDTO: UpdateNoteDTO): Promise<Note> {
    const updatedNote = await this.noteModel.findByIdAndUpdate(
      noteId,
      {
        ...updateNoteDTO,
        updatedAt: new Date()
      },
      {new: true}
    )

    return updatedNote
  }

  async delete(noteId: string): Promise<Note> {
    const deletedNote = await this.noteModel.findByIdAndDelete(noteId)
    return deletedNote
  }
}
