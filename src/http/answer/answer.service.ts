import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Answer } from 'src/schemas/answer.schema';
import { CreateAnswerDto } from './dto/create-answer.dto';

@Injectable()
export class AnswerService {
  constructor(@InjectModel(Answer.name) private answerModel: Model<Answer>) {}

  async createAnswer(createAnswerDto: CreateAnswerDto): Promise<Answer> {
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
}
