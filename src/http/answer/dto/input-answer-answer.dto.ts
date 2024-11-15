import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class InputAnswerAnswerDto {

  @IsNotEmpty()
  @IsString()
  title?: string;
}