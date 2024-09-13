import { Module } from '@nestjs/common';
import { AnswerService } from './answer.service';
import { AnswerController } from './answer.controller';
import { Answer, AnswerSchema } from 'src/schemas/answer.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Answer.name, schema: AnswerSchema }]),
  ],
  controllers: [AnswerController],
  providers: [AnswerService],
})
export class AnswerModule {}
