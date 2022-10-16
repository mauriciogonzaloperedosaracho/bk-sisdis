import { PostsService } from './post.service';
import { PostController } from './post.controller';
import { Module} from '@nestjs/common';

@Module({
    controllers: [PostController],
    providers: [PostsService]
})
export class PostsModule {

}