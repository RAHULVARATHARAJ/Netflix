import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, model } from 'mongoose';


@Schema({ timestamps: true }) 
export class Movie extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  director: string;

  @Prop({ required: true })
  releaseYear: number;

  @Prop()
  genre?: string;

  @Prop({ type: Number, min: 0, max: 10 })
  rating?: number;

  @Prop()
  duration?: number;
  
  @Prop()
  synopsis?: string;

  @Prop({ type: [String] })
  cast?: string[];
}

export interface MovieDocument extends Document {
  title: string;
  director: string;
  releaseYear: number;
  genre?: string;
  rating?: number;
  duration?: number;
  synopsis?: string;
  cast?: string[];
  createdAt?: Date;
  updatedAt?: Date;
}


export const MovieSchema = SchemaFactory.createForClass(Movie);


export const MovieModel = model<Movie>('Movie', MovieSchema); 
