import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class QuestionAnswerDto {

  @IsNotEmpty()
  @IsNumber()
  number?: number;

  @IsNotEmpty()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  selectedAnswer?: string;

  @IsOptional()
  @IsString()
  observations?: string;
}
