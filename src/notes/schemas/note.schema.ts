import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose'
import * as mongoose from 'mongoose'

export type NoteDocument = Note & mongoose.Document

@Schema()
export class Note {
  @Prop({required: true})
  title: string

  @Prop({required: true})
  content: string

  @Prop({required: true})
  createdAt: Date

  @Prop()
  updatedAt?: Date
}

export const NoteSchema = SchemaFactory.createForClass(Note)
