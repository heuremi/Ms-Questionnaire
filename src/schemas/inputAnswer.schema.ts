import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class InputAnswer {
  @Prop({ required: true })
  title?: string;
}

export const InputAnswerSchema = SchemaFactory.createForClass(InputAnswer);