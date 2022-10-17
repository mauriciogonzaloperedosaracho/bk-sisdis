// import { UpdatePostDto } from './dto/update-post.dto';
import { PostsService } from './post.service';
// import { CreatePostDto } from './dto/create-post.dto';
import {
  Controller,
  Post,
  Get,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';

@Controller('posts')
export class PostController {
  constructor(private postsService: PostsService) {}

  @Get()
  findAll() {
    return this.postsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.postsService.findOne(id);
  }

  @Post()
  create(@Body() body: any) {
    return this.postsService.create(body);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() body: any) {
    return this.postsService.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.postsService.remove(id);
  }
}
