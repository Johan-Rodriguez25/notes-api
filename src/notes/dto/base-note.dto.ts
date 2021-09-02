import {IsNotEmpty, IsString, IsBoolean} from 'class-validator'

export class BaseNoteDTO {
  @IsNotEmpty()
  @IsString()
  title: string

  @IsNotEmpty()
  @IsString()
  content: string

  // @IsNotEmpty()
  // @IsBoolean()
  // important: Boolean
}
