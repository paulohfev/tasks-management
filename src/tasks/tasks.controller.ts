import { Controller, Get } from '@nestjs/common';
import { Task } from './task.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  // taskService param is a private property of the controller, therefore we can use in the class
  constructor(private tasksService: TasksService) {}

  // whenever a GET request to tasks comes in, this method is called.
  @Get()
  getAllTasks(): Task[] {
    return this.tasksService.getAllTasks();
  }
}
