import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Question, QuestionSchema } from './question.schema';

@Schema()
export class Section {
  @Prop({ required: true })
  title?: string;

  @Prop({ type: [QuestionSchema], default: [] })
  questions?: Question[];
}

export const SectionSchema = SchemaFactory.createForClass(Section);