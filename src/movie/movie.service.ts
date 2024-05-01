import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Movie, MovieDocument } from './schema/movie.schema';
import { CreateMovieDto} from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Injectable()
export class MoviesService {
  constructor(
    @InjectModel('Movie') private readonly movieModel: Model<MovieDocument>,
  ) {}

  create(createMovieDto: CreateMovieDto) {
    const newMovie = new this.movieModel(createMovieDto);
    return newMovie.save();
  }

  findAll() {
    return this.movieModel.find().exec();
  }

  findOne(id: string) {
    return this.movieModel.findById(id).exec();
  }

  update(id: string, updateMovieDto: UpdateMovieDto) {
    return this.movieModel.findByIdAndUpdate(id, updateMovieDto, { new: true }).exec();
  }

  remove(id: string) {
    return this.movieModel.findByIdAndDelete(id).exec(); 
  }
}