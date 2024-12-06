import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { AnswerService } from './answer.service';
import { CreateAnswerDto } from './dto/create-answer.dto';

@Controller('answer')
export class AnswerController {
  constructor(private readonly answerService: AnswerService) {}

  @Post()
  async create(@Body() createAnswerDto: CreateAnswerDto) {
    console.log('Payload recibido:', createAnswerDto);

    // Verificación de campos obligatorios
    if (!createAnswerDto.idUser) {
      throw new BadRequestException('El campo idUser es obligatorio');
    }
    if (!createAnswerDto.idQuestionnaire) {
      throw new BadRequestException('El campo idQuestionnaire es obligatorio');
    }
    if (!createAnswerDto.sections || createAnswerDto.sections.length === 0) {
      throw new BadRequestException('El campo sections es obligatorio y debe tener al menos un elemento');
    }

    // Verificar si ya existe una respuesta para el usuario y cuestionario dados
    const existingAnswer = await this.answerService.findAnswerByQuestionnaireAndUser(
      createAnswerDto.idUser,
      createAnswerDto.idQuestionnaire
    );

    if (existingAnswer) {
      throw new BadRequestException('La respuesta para este cuestionario ya existe y no se puede modificar.');
    }

    return this.answerService.createAnswer(createAnswerDto);
  }

  @Get()
  async findAll() {
    return this.answerService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const answer = await this.answerService.findOneById(id);
    if (!answer) {
      throw new NotFoundException(`No se encontró la respuesta con ID: ${id}`);
    }
    return answer;
  }

  @Get('/check-response/:idUser/:idQuestionnaire')
  async checkResponse(
    @Param('idUser') idUser: string,
    @Param('idQuestionnaire') idQuestionnaire: string
  ): Promise<{ exists: boolean }> {
    const existingAnswer = await this.answerService.findAnswerByQuestionnaireAndUser(idUser, idQuestionnaire);
    return { exists: !!existingAnswer };
  }

  @Get('/show-response/:idUser/:idQuestionnaire')
  async showResponse(
    @Param('idUser') idUser: string,
    @Param('idQuestionnaire') idQuestionnaire: string
  ) {
    const answer = await this.answerService.findAnswerByQuestionnaireAndUser(idUser, idQuestionnaire);
    return answer;
  }

}
