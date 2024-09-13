import { IsNotEmpty, IsOptional } from 'class-validator';
export class CreateQuestionnaireDto {
    @IsNotEmpty()
    name?: string;

    @IsOptional()
    descripcion?: string;
}
