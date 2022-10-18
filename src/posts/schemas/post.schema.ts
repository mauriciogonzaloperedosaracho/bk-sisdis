import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PostSDocument = PostS & Document;

@Schema()
export class PostS {
  @Prop()
  id: number;

  @Prop()
  name: string;

  @Prop()
  completed: boolean;
}

export const PostSSchema = SchemaFactory.createForClass(PostS);
