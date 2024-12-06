import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { QuestionnaireService } from './questionnaire.service';
import { CreateQuestionnaireDto } from './dto/create-questionnaire.dto';
import { UpdateQuestionnaireDto } from './dto/update-questionnaire.dto';
import { AuthGuard } from '../guards/auth.guard';

@Controller('questionnaire')
export class QuestionnaireController {
  constructor(private readonly questionnaireService: QuestionnaireService) {}

  @Post()
  create(@Body() createQuestionnaireDto: CreateQuestionnaireDto) {
    return this.questionnaireService.create(createQuestionnaireDto);
  }

  @Get()
  @UseGuards(AuthGuard)
  async findAll() {
    return this.questionnaireService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.questionnaireService.findOne(id);
  }

  @Get('/machine/:licencePlate')
  async findByMachine(@Param('licencePlate') licencePlate: string) {
    return this.questionnaireService.findByMachine(licencePlate);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateQuestionnaireDto: UpdateQuestionnaireDto) {
    try {
      return await this.questionnaireService.update(id, updateQuestionnaireDto);
    } catch (error) {
      throw new Error(`Error al actualizar el cuestionario con ID: ${id}`);
    }
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  remove(@Param('id') id: string): Promise<{ deletedCount?: number }> {
    return this.questionnaireService.remove(id);
  }
}
