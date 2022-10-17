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
    return this.postRepo.find();
  }

  findOne(id: number) {
    return this.postRepo.findOne(id);
  }

  async create(body: any) {
    this.postSModule.create(body);
    const newPost = new Postt();
    newPost.name = body.name;
    // const newPost = this.postRepo.create(body);
    return this.postRepo.save(newPost);
  }

  async update(id: number, body: any) {
    const post = await this.postRepo.findOne(id);
    this.postRepo.merge(post, body);
    return this.postRepo.save(post);
  }

  async remove(id: number) {
    await this.postRepo.delete(id);
    return true;
  }
}
