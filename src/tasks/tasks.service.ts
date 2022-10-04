import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  private tasks = [];

  // public by default
  getAllTasks() {
    return this.tasks;
  }
}
