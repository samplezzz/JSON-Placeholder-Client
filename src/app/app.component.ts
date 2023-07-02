import { trigger, style, animate, transition } from '@angular/animations';
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
  animations: [loadingInfoAnimation()],
})
export class AppComponent {
  posts$: Observable<Post[]> | undefined;
  constructor(private postClient: PostsClient) {
    this.posts$ = this.postClient.list();
  }
}

function loadingInfoAnimation() {
  return trigger('loadingInfo', [
    transition(':leave', [
      style({
        opacity: 1,
        height: '*',
      }),
      animate('700ms ease-in-out', style({ opacity: 0, height: 0 })),
    ]),
  ]);
}
