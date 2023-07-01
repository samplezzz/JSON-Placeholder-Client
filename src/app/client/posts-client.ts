import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Post } from '../model/post.model';

@Injectable({ providedIn: 'root' })
export class PostsClient {
  constructor(private http: HttpClient) {}

  list(): Observable<Post[]> {
    return this.http.get<Post[]>(
      /* TODO: inject URL */ `https://jsonplaceholder.typicode.com/posts`
    );
  }
}
