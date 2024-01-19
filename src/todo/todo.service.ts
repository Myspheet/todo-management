import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { TodoRepository } from './todo.repository';
import { TodoEntity } from './entities/todo.entity';

@Injectable()
export class TodoService {
  constructor(private readonly todoRepository: TodoRepository) {}

  create(createTodoDto: CreateTodoDto): Promise<TodoEntity> {
    return this.todoRepository.create(createTodoDto);
  }

  findAll(): Promise<TodoEntity[]> {
    return this.todoRepository.getAllTodos();
  }

  findOne(id: number): Promise<TodoEntity> {
    return this.todoRepository.getTodoById(id);
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    return this.todoRepository.update(id, updateTodoDto);
  }

  remove(id: number) {
    return this.todoRepository.delete(id);
  }
}
