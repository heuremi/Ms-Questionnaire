import { IsNotEmpty, IsOptional, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { QuestionAnswerDto } from './question-answer.dto';

export class SectionAnswerDto {
  @IsNotEmpty()
  @IsString()
  title?: string;

  @ValidateNested({ each: true })
  @Type(() => QuestionAnswerDto)
  questions?: QuestionAnswerDto[];
}
