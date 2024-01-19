import { IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateTodoDto {
  @IsString()
  @MinLength(4)
  @MaxLength(32)
  title: string;

  @IsOptional()
  @IsString()
  description?: string;
}
