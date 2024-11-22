import { IsNotEmpty, IsOptional, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { SectionDto } from './section.dto';

export class CreateQuestionnaireDto {
  @IsNotEmpty()
  @IsString()
  name?: string;

  @IsNotEmpty()
  @IsString()
  licencePlate?: string; 
  
  @ValidateNested({ each: true })
  @Type(() => SectionDto)
  sections?: SectionDto[];
}
