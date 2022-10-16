import { CreatePostDto } from './dto/create-post.dto';
import { Injectable } from "@nestjs/common";

@Injectable()
export class PostsService{
    findAll(){
        return [{ id: 1, headding: 'fisrts post' }];
    }

    find(id: string){
        return [{ id: 1, headding: 'fisrts post' }];
    }

    create(post: CreatePostDto){
        return {heading: post.heading, description: post.description}    }
}