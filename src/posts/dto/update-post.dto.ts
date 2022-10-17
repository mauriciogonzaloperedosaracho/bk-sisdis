import { IsString, Length, IsOptional } from 'class-validator';
export class UpdatePostDto {
  @IsString()
  @Length(5, 15)
  @IsOptional()
  heading: string;

  @IsString()
  @IsOptional()
  content: string;
}
