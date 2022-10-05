import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
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

  // path parameter id
  @Get('/:id')
  getTaskById(@Param('id') id: string): Task {
    return this.tasksService.getTaskById(id);
  }

  @Post()
  // @Body ~> the request body that is assigned to the body parameter as an argument
  createTask(@Body() createTaskDto: CreateTaskDto): Task {
    return this.tasksService.createTask(createTaskDto);
  }
}
