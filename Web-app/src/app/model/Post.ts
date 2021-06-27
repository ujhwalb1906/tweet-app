export interface PostInfo {
    id: string;
    author: string;
    postMessage: string;
    likesCount: number;
    dateOfPost: Date;
    comments: Comment[]    
    hasTag: string;    
}

export interface Comment {
      commentId: string;
      postId: string;
      author: string;
      commentMessage: string;
      dateOfComment: Date;
}