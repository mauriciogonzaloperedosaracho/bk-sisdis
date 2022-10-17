import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsService } from './post.service';
import { PostController } from './post.controller';
import { Module } from '@nestjs/common';
import { Postt } from 'src/entities/post.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { PostS, PostSSchema } from './schemas/post.schema';

@Module({
  imports: [
    TypeOrmModule.forFeature([Postt]),
    PostsModule,
    MongooseModule.forFeature([{ name: PostS.name, schema: PostSSchema }]),
  ],
  exports: [TypeOrmModule],
  controllers: [PostController],
  providers: [PostsService],
})
export class PostsModule {}
