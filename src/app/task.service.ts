import { Injectable } from '@angular/core';
import { WebrequestService } from './webrequest.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private webRequestService: WebrequestService) { }

  createList(title: string) {
    return this.webRequestService.post('lists', { title });
  }

  getLists() {
    return this.webRequestService.get('lists');
  }

  createTask(title: string, listId: string) {
    return this.webRequestService.post(`lists/${listId}/tasks`, { title });
  }

  getTasks(listId: string) {
    return this.webRequestService.get(`lists/${listId}/tasks`);
  }

  complete(task: any) {
    return this.webRequestService.patch(`lists/${task._listId}/tasks/${task._id}`, { completed: !task.completed });
  }

  deleteList(id: string) {
    return this.webRequestService.delete(`lists/${id}`);
  }

  updateList(id: string, title: string) {
    return this.webRequestService.patch(`lists/${id}`, { title });
  }

  deleteTask(listId: string, taskId: string) {
    return this.webRequestService.delete(`lists/${listId}/tasks/${taskId}`);
  }

  updateTask(listId: string , taskId: string, title: string) {
    return this.webRequestService.patch(`lists/${listId}/tasks/${taskId}`, { title });
  }
}
