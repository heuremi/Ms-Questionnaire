import { IsNotEmpty, IsOptional, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { SectionAnswerDto } from './section-answer.dto';

export class CreateAnswerDto {
  @IsNotEmpty()
  idUser?: string;

  @IsNotEmpty()
  idQuestionnaire?: string;

  @IsNotEmpty()
  @IsString()
  licencePlate?: string;

  @ValidateNested({ each: true })
  @Type(() => SectionAnswerDto)
  sections?: SectionAnswerDto[];
  
  @IsOptional()
  @IsString()
  imageBase64?: string;

}
