import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class InputAnswerDto {
  @IsNotEmpty()
  @IsString()
  title?: string;
}