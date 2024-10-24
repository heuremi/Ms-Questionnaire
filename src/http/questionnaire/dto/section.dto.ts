import { IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { QuestionDto } from './question.dto';

export class SectionDto {
  @IsNotEmpty()
  @IsString()
  title?: string;

  @ValidateNested({ each: true })
  @Type(() => QuestionDto)
  questions?: QuestionDto[];
}