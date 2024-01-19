import { Todo } from '@prisma/client';

export class TodoEntity implements Todo {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  userId: number;
}
