import { Injectable } from '@nestjs/common';
import { CreateQuestionnaireDto } from './dto/create-questionnaire.dto';
import { UpdateQuestionnaireDto } from './dto/update-questionnaire.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Questionnaire } from 'src/schemas/questionnaire.schema';
import { mongoErrorHandler } from 'src/utils/mongo-error-handler';
import { MongoError } from 'mongodb';

@Injectable()
export class QuestionnaireService {
  constructor(@InjectModel(Questionnaire.name) private questionnaireModel: Model<Questionnaire>) {}

  async create(createQuestionnaireDto: CreateQuestionnaireDto) {
    try {
      return await this.questionnaireModel.create(createQuestionnaireDto);
    } catch (error) {
      if ((error as Record<string, number>)?.code)
        mongoErrorHandler(error as MongoError);
      throw new Error(error as string);
    }
  }

  async findAll() {
    return await this.questionnaireModel.find().exec();
  }

  async findOne(id: string) {
    return await this.questionnaireModel.findById(id).exec();
  }

  async update(id: string, updateQuestionnaireDto: UpdateQuestionnaireDto) {
    try {
      return await this.questionnaireModel.updateOne({ _id: id }, updateQuestionnaireDto);
    } catch (error: unknown) {
      if ((error as Record<string, number>)?.code)
        mongoErrorHandler(error as MongoError);
      throw new Error(error as string);
    }
  }

  async remove(id: string) {
    return await this.questionnaireModel.deleteOne({ _id: id});
  }
}
