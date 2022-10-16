import { PostsModule } from './posts/post.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [PostsModule]
})
export class AppModule {}
