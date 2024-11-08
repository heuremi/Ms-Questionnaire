import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class QuestionAnswerDto {
  @IsNotEmpty()
  @IsString()
  question?: string;

  @IsOptional()
  @IsString()
  selectedAnswer?: string;

  @IsOptional()
  @IsString()
  observations?: string;
}
