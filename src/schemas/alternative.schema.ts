import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Alternative {
  @Prop({ required: true })
  alternative?: string;

  @Prop({ type: String })
  answer?: string;
}

export const AlternativeSchema = SchemaFactory.createForClass(Alternative);