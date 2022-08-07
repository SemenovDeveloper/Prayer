export interface IAddNewComment {
  text: string;
  prayerId: number;
}

export interface IChangeComment {
  commentId: number;
  body: string;
  created: string;
  prayerId: number;
}

export interface IDeleteComment {
  commentId: number;
}
