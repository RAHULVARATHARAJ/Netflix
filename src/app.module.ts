import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MovieModule } from './movie/movie.module';
import { MongooseModule } from '@nestjs/mongoose';



@Module({
  imports: [MovieModule,MongooseModule.forRoot('mongodb://localhost:27017/netflix-api')],
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule {}
