import { Module } from '@nestjs/common';
import { QuestionnaireService } from './questionnaire.service';
import { QuestionnaireController } from './questionnaire.controller';
import { Questionnaire, QuestionnaireSchema } from 'src/schemas/questionnaire.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { HttpModule } from '@nestjs/axios';
import { AuthGuard } from '../guards/auth.guard';  

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Questionnaire.name, schema: QuestionnaireSchema }]),
    HttpModule,
  ],
  controllers: [QuestionnaireController],
  providers: [QuestionnaireService, AuthGuard],
})
export class QuestionnaireModule {}