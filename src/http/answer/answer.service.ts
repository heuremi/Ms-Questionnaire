import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Answer } from 'src/schemas/answer.schema';
import { CreateAnswerDto } from './dto/create-answer.dto';
import { Questionnaire } from 'src/schemas/questionnaire.schema';

@Injectable()
export class AnswerService {
  constructor(
    @InjectModel(Answer.name) private answerModel: Model<Answer>,
    @InjectModel(Questionnaire.name) private questionnaireModel: Model<Questionnaire>,
  ) {}

  async createAnswer(createAnswerDto: CreateAnswerDto): Promise<Answer> {
    const { idQuestionnaire, licencePlate } = createAnswerDto;

    const questionnaire = await this.questionnaireModel
      .findById(idQuestionnaire)
      .exec();

    if (!questionnaire) {
      throw new BadRequestException('El cuestionario no existe.');
    }

    if (questionnaire.licencePlate !== licencePlate) {
      throw new BadRequestException(
        'La patente no coincide con la del cuestionario.',
      );
    }

    const newAnswer = new this.answerModel(createAnswerDto);
    return newAnswer.save();
  }

  async findAll(): Promise<Answer[]> {
    return this.answerModel.find().exec();
  }

  async findOneById(id: string): Promise<Answer | null> {
    return this.answerModel.findById(id).exec();
  }

  async findAnswerByQuestionnaireAndUser(idUser: string, idQuestionnaire: string): Promise<Answer | null> {
    return this.answerModel.findOne({ idUser, idQuestionnaire }).exec();
  }

  async findAnswerByUser(idUser: string): Promise<Answer[]> {
    const answers = await this.answerModel.find({ idUser }).exec();

    if (!answers || answers.length === 0) {
      throw new NotFoundException('No se encontraron respuestas para este usuario.');
    }

    return answers;
  }
}
