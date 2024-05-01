import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { MoviesService } from './movie.service';
import { CreateMovieDto } from './dto/create-movie.dto'; 
import { UpdateMovieDto } from './dto/update-movie.dto'; 

@ApiTags('Movies') 
@Controller('movie') 
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new movie' })
  @ApiResponse({ status: 201, description: 'Movie created successfully.' })
  @ApiBody({ type: CreateMovieDto })
  async create(@Body() createMovieDto: CreateMovieDto) {
    return await this.moviesService.create(createMovieDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all movies' })
  @ApiResponse({ status: 200, description: 'List of all movies.' })
  async findAll() {
    return this.moviesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a specific movie by ID' })
  @ApiResponse({ status: 200, description: 'Details of the movie.' })
  @ApiParam({ name: 'id', description: 'ID of the movie' })
  async findOne(@Param('id') id: string) {
    return this.moviesService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a specific movie' })
  @ApiResponse({ status: 200, description: 'Movie updated successfully.' })
  @ApiBody({ type: UpdateMovieDto })
  async update(
    @Param('id') id: string,
    @Body() updateMovieDto: UpdateMovieDto,
  ) {
    return this.moviesService.update(id, updateMovieDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a specific movie' })
  @ApiResponse({ status: 200, description: 'Movie deleted successfully.' })
  @ApiParam({ name: 'id', description: 'ID of the movie' })
  async remove(@Param('id') id: string) {
    return this.moviesService.remove(id);
  }
}

