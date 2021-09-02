import {Body, Param, Controller, Delete, Get, Post, Put} from '@nestjs/common'
import {CreateNoteDTO} from './dto/create-note-dto'
import {UpdateNoteDTO} from './dto/update-note.dto'
import {NotesService} from './notes.service'
import {Note} from 'src/notes/schemas/note.schema'

@Controller('')
export class NotesController {
  constructor(private notesService: NotesService) {}

  @Get()
  async findAllNotes(): Promise<Note[]> {
    return this.notesService.findAll()
  }

  @Post()
  createNote(@Body() createNoteDTO: CreateNoteDTO): Promise<Note> {
    return this.notesService.create(createNoteDTO)
  }

  @Put('/:noteId')
  updateNote(
    @Param('noteId') noteId: string,
    @Body() updateNoteDTO: UpdateNoteDTO
  ): Promise<Note> {
    return this.notesService.update(noteId, updateNoteDTO)
  }

  @Delete('/:noteId')
  deleteNote(@Param('noteId') noteId: string): Promise<Note> {
    return this.notesService.delete(noteId)
  }
}
