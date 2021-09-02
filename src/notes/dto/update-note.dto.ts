import {BaseNoteDTO} from './base-note.dto'
import {PartialType} from '@nestjs/mapped-types'

export class UpdateNoteDTO extends PartialType(BaseNoteDTO) {}
