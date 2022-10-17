import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsService } from './post.service';
import { PostController } from './post.controller';
import { Module } from '@nestjs/common';
import { Postt } from 'src/entities/post.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Postt]), PostsModule],
  exports: [TypeOrmModule],
  controllers: [PostController],
  providers: [PostsService],
})
export class PostsModule {}
