import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comment, Enpoints, Post } from '../models/endpoint.models';
import { Observable } from 'rxjs';

/**
 * 
 Assignment requirements
  Using Angular to build a post list.
  
  For each post, there are a few comments: For example, the first post, there are 5 comments (https://jsonplaceholder.typicode.com/comments?postId=1). You should render all the 100 posts, when you click one post, its comments will show up. Click again those comments will disappear.
  
  You can have your own UI design.

Data/API
  https://jsonplaceholder.typicode.com/posts

  https://jsonplaceholder.typicode.com/comments.

https://www.evernote.com/shard/s546/client/snv?isnewsnv=true&noteGuid=b5b218bd-b728-c211-ac88-56591c2fb390&noteKey=Jokdmmd4C2gH5zSZ6a7pU18WJaS3eNf-fnDAc9bFphBdcIanekoGweOhKA&sn=https%3A%2F%2Fwww.evernote.com%2Fshard%2Fs546%2Fsh%2Fb5b218bd-b728-c211-ac88-56591c2fb390%2FJokdmmd4C2gH5zSZ6a7pU18WJaS3eNf-fnDAc9bFphBdcIanekoGweOhKA&title=post%2Blist%2Band%2Bcomments

 * 
 */

@Injectable()
export class TodoApiService {
  constructor(private httpClient: HttpClient) {}
  fetchPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(Enpoints.POSTS);
  }
  fetchComments(postId: number): Observable<Comment[]> {
    return this.httpClient.get<Comment[]>(`${Enpoints.COMMENTS}${postId}`);
  }
}
