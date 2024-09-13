import { IsNotEmpty, IsOptional } from 'class-validator';
export class CreateAnswerDto {
    @IsNotEmpty()
    name?: string;

    @IsOptional()
    descripcion?: string;
}