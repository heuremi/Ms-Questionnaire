import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Alternative, AlternativeSchema } from './alternative.schema';
import { Types } from 'mongoose';
import { InputAnswer, InputAnswerSchema } from './inputAnswer.schema';

@Schema()
export class Question {
  @Prop({ required: true })
  number?: number;

  @Prop({ required: true })
  title?: string;

  @Prop()
  observations?: string;
  
  @Prop({ type: [AlternativeSchema] })
  alternatives?: Alternative[];

  @Prop({ type: InputAnswerSchema })
  inputAnswer?: InputAnswer;
}

export const QuestionSchema = SchemaFactory.createForClass(Question);