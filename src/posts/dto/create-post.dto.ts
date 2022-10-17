import { IsString } from 'class-validator';
export class CreatePostDto {
  @IsString()
  heading: string;

  @IsString()
  content: string;
}
