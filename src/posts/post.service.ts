// import { CreatePostDto } from './dto/create-post.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Postt } from '../entities/post.entity';
// import { UpdatePostDto } from './dto/update-post.dto';
import { Repository } from 'typeorm';
import { InjectModel } from '@nestjs/mongoose';
import { PostS, PostSDocument } from './schemas/post.schema';
import { Model } from 'mongoose';
@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Postt) private postRepo: Repository<Postt>,
    @InjectModel(PostS.name) private postSModule: Model<PostSDocument>,
  ) {}

  findAll() {
    this.postSModule.find().exec();
    return this.postRepo.find();
  }

  async create(body: any) {
    await this.postSModule.create(body);
    const newPost = new Postt();
    newPost.name = body.name;
    // const newPost = this.postRepo.create(body);
    return this.postRepo.save(newPost);
  }
}
