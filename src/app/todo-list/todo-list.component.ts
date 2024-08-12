import { Component, OnInit } from '@angular/core';
import { TodoApiService } from './services/todo-api.service';
import { Comment, Post } from './models/endpoint.models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  posts$: Observable<Post[]> = this.todoApiService.fetchPosts();
  comments$: Observable<Comment[]>;
  expandedCommentId: number;
  constructor(private todoApiService: TodoApiService) {}

  ngOnInit() {}

  handlePostClick(postId: number) {
    if (this.expandedCommentId === postId) {
      this.expandedCommentId = null;
    } else {
      this.comments$ = this.todoApiService.fetchComments(postId);
      this.expandedCommentId = postId;
    }
  }
}
