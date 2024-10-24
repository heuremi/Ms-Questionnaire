import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class AlternativeDto {
  @IsNotEmpty()
  @IsString()
  alternative?: string;
}