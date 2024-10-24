import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Section, SectionSchema } from './section.schema';
import { Document } from 'mongoose';

@Schema()
export class Questionnaire extends Document {
  @Prop({ type: String, required: true })
  name?: string;

  @Prop({ type: [SectionSchema], default: [] })
  sections?: Section[];
}

export const QuestionnaireSchema = SchemaFactory.createForClass(Questionnaire);