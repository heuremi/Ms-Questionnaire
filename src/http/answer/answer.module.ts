import { Module } from '@nestjs/common';
import { AnswerService } from './answer.service';
import { AnswerController } from './answer.controller';
import { Answer, AnswerSchema } from 'src/schemas/answer.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { HttpModule } from '@nestjs/axios';
import { AuthGuard } from '../guards/auth.guard';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Answer.name, schema: AnswerSchema }]),
    HttpModule,
  ],
  controllers: [AnswerController],
  providers: [AnswerService, AuthGuard],
})
export class AnswerModule {}
