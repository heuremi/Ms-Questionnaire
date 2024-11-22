import { Prop } from '@nestjs/mongoose';
import { InputAnswer } from './inputAnswer.schema';

export class AnswerQuestion {
  @Prop({ type: Number, required: true })
  number?: number;

  @Prop({ type: String, required: true })
  title?: string;

  @Prop({ type: String, required: false })
  selectedAnswer?: string;

  @Prop({ type: InputAnswer, required: false })
  inputAnswer?: InputAnswer;
}
