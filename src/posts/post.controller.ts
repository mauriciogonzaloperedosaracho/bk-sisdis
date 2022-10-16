import { PostsService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { Controller, Post, Get, Body, Param } from '@nestjs/common';

@Controller('posts')
export class PostController {
  constructor(private readonly postsService: PostsService) {}
  @Get('/')
  findAll() {
    return this.postsService.findAll();
  }
  @Get('/:id')
  find(@Param('id') id: string) {
    console.log(id);
    return this.postsService.find(id);
  }
  @Post('/')
  create(@Body() createPostDto: CreatePostDto) {
    return this.postsService.create(createPostDto);
  }
}
