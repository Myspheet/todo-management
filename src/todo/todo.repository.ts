import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { TodoEntity } from './entities/todo.entity';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodoRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createTodoDto: CreateTodoDto): Promise<TodoEntity> {
    const { title, description } = createTodoDto;
    return await this.prismaService.todo.create({
      data: {
        title,
        description,
      },
    });
  }

  async getAllTodos(): Promise<TodoEntity[]> {
    return await this.prismaService.todo.findMany();
  }

  async getTodoById(id: number): Promise<TodoEntity> {
    return await this.prismaService.todo.findUnique({ where: { id } });
  }

  async update(id: number, updateTodoDto: UpdateTodoDto): Promise<TodoEntity> {
    return await this.prismaService.todo.update({
      where: { id },
      data: { ...updateTodoDto },
    });
  }

  async delete(id): Promise<TodoEntity> {
    return await this.prismaService.todo.delete({ where: { id } });
  }
}
