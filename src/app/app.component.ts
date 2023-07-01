import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

import { PostsClient } from './client/posts-client';
import { Post } from './model/post.model';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'jp-root',
  standalone: true,
  imports: [CommonModule, PostComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  posts$: Observable<Post[]> | undefined;
  constructor(private postClient: PostsClient) {
    this.posts$ = this.postClient.list();
  }
}
