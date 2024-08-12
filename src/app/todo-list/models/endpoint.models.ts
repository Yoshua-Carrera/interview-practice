export enum Enpoints {
  POSTS = 'https://jsonplaceholder.typicode.com/posts',
  COMMENTS = 'https://jsonplaceholder.typicode.com/comments?postId=',
}

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
