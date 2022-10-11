import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskStatus } from './task-status.enum';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';

@Injectable()
export class TasksService {
  // public by default
  // getAllTasks(): Task[] {
  //   return this.tasks;
  // }

  // getTasksWithFilters(filterDto: GetTasksFilterDto): Task[] {
  //   const { status, search } = filterDto;

  //   // define a temporary array to hold the result
  //   let tasks = this.getAllTasks();

  //   // do something with status
  //   if (status) {
  //     tasks = tasks.filter((task) => task.status === status);
  //   }

  //   // do something with search
  //   if (search) {
  //     tasks = tasks.filter((task) => {
  //       return (task.title.includes(search) || task.description.includes(search))
  //     });
  //   }

  //   // return final result
  //   return tasks;
  // }

  // getTaskById(id: string): Task {
  //   // try to get task
  //   const foundTask = this.tasks.find((task) => task.id === id);

  //   if (!foundTask) {
  //         //  if not found, throw an error
  //     throw new NotFoundException(`Task with ID "${id}" not found`);
  //   }
  //   // otherwise, return the found task
  //   return foundTask;
  // }

  // createTask(createTaskDto: CreateTaskDto): Task {
  //   const { title, description } = createTaskDto;

  //   const task: Task = {
  //     id: uuid(),
  //     title,
  //     description,
  //     status: TaskStatus.OPEN,
  //   };

  //   this.tasks.push(task);
  //   return task;
  // }

  // deleteTask(id: string): void {
  //   const foundTask = this.getTaskById(id);

  //   this.tasks = this.tasks.filter((task) => task.id !== foundTask.id);
  // }

  // updateTaskStatus(id: string, status: TaskStatus) {
  //   // NOT BEST PRACTICE - TEMPORARY SOLUTION
  //   const task = this.getTaskById(id);
  //   task.status = status;
  //   return task;
  // }
}
