import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { InputAnswerAnswerDto } from './input-answer-answer.dto';

export class QuestionAnswerDto {

  @IsNotEmpty()
  @IsNumber()
  number?: number;

  @IsNotEmpty()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  observations?: string;

  @IsOptional()
  @IsString()
  selectedAnswer?: string;

  @IsOptional()
  inputAnswer?: InputAnswerAnswerDto;
}
