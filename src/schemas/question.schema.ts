import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Alternative, AlternativeSchema } from './alternative.schema';
import { Types } from 'mongoose';

@Schema()
export class Question {
  @Prop({ required: true })
  number?: number;

  @Prop({ required: true })
  title?: string;

  @Prop()
  observations?: string;

  @Prop({ required: true })
  selectedAnswer?: string;
}

export const QuestionSchema = SchemaFactory.createForClass(Question);