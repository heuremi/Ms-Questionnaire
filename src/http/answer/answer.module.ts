import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { MongooseModule } from '@nestjs/mongoose';
import { Answer, AnswerSchema } from 'src/schemas/answer.schema';
import { AnswerService } from './answer.service';
import { AnswerController } from './answer.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Answer.name, schema: AnswerSchema }]),
    HttpModule,
  ],
  controllers: [AnswerController],
  providers: [AnswerService],
})
export class AnswerModule {}
