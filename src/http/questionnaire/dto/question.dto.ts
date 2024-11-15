import { IsNotEmpty, IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { AlternativeDto } from './alternative.dto';
import { InputAnswerDto } from './input-answer.dto';

export class QuestionDto {
  @IsNotEmpty()
  @IsNumber()
  number?: number;

  @IsNotEmpty()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  observations?: string;

  @ValidateNested({ each: true })
  @Type(() => AlternativeDto)
  @IsOptional()
  alternatives?: AlternativeDto[];

  @ValidateNested()
  @Type(() => InputAnswerDto)
  @IsOptional()
  inputAnswer?: InputAnswerDto;
}