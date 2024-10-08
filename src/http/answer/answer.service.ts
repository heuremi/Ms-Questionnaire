import { Injectable } from '@nestjs/common';
import { CreateAnswerDto } from './dto/create-answer.dto';
import { UpdateAnswerDto } from './dto/update-answer.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Answer } from 'src/schemas/answer.schema';
import { mongoErrorHandler } from 'src/utils/mongo-error-handler';
import { MongoError } from 'mongodb';
import { UpdateResult } from 'mongodb';

@Injectable()
export class AnswerService {
  constructor(@InjectModel(Answer.name) private answerModel: Model<Answer>) {}

  async create(createAnswerDto: CreateAnswerDto): Promise<Answer> {
    try {
      return await this.answerModel.create(createAnswerDto);
    } catch (error) {
      if ((error as Record<string, number>)?.code)
        mongoErrorHandler(error as MongoError);
      throw new Error(error as string);
    }
  }

  async findAll(): Promise<Answer[]> {
    return await this.answerModel.find().exec();
  }

  async findOne(id: string): Promise<Answer | null> {
    return await this.answerModel.findById(id).exec();
  }

  async update(id: string, updateAnswerDto: UpdateAnswerDto): Promise<UpdateResult> {
    try {
      return await this.answerModel.updateOne({ _id: id }, updateAnswerDto);
    } catch (error: unknown) {
      if ((error as Record<string, number>)?.code)
        mongoErrorHandler(error as MongoError);
      throw new Error(error as string);
    }
  }

  async remove(id: string): Promise<{ deletedCount?: number }> {
    return await this.answerModel.deleteOne({ _id: id }).exec();
  }
}