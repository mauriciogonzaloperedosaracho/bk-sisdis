// import { CreatePostDto } from './dto/create-post.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Postt } from '../entities/post.entity';
// import { UpdatePostDto } from './dto/update-post.dto';
import { Repository } from 'typeorm';

@Injectable()
export class PostsService {
  constructor(@InjectRepository(Postt) private tasksRepo: Repository<Postt>) {}

  findAll() {
    return this.tasksRepo.find();
  }

  findOne(id: number) {
    return this.tasksRepo.findOne(id);
  }

  create(body: any) {
    const newTask = new Postt();
    newTask.name = body.name;
    // const newTask = this.tasksRepo.create(body);
    return this.tasksRepo.save(newTask);
  }

  async update(id: number, body: any) {
    const task = await this.tasksRepo.findOne(id);
    this.tasksRepo.merge(task, body);
    return this.tasksRepo.save(task);
  }

  async remove(id: number) {
    await this.tasksRepo.delete(id);
    return true;
  }
}
