import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Section, SectionSchema } from './section.schema';

@Schema()
export class Answer extends Document {
  @Prop({ required: true })
  idUser?: string;

  @Prop({ required: true })
  idQuestionnaire?: string;

  @Prop({ type: [SectionSchema], default: [] })
  sections?: Section[];

  @Prop({ default: Date.now })
  createdAt?: Date;
}

export const AnswerSchema = SchemaFactory.createForClass(Answer);
