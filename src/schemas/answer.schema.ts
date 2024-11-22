import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { AnswerQuestion } from './answer-question.schema';

class AnswerSection {
  @Prop({ type: String, required: true })
  title?: string;

  @Prop({ type: [AnswerQuestion], required: true })
  questions?: AnswerQuestion[];
}

@Schema()
export class Answer extends Document {
  @Prop({ required: true })
  idUser?: string;

  @Prop({ required: true })
  idQuestionnaire?: string;

  @Prop({ required: true })
  licencePlate?: string;

  @Prop({ type: [AnswerSection], required: true })
  sections?: AnswerSection[];

  @Prop({ type: String, required: false })
  imageBase64?: string;
}

export const AnswerSchema = SchemaFactory.createForClass(Answer);
