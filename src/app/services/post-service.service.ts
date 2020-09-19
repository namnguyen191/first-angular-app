import {
  HttpClient,
  HttpEventType,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Post } from '../http-demo/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostServiceService {
  error = new Subject<string>();

  constructor(private http: HttpClient) {}

  createAndStorePost(title: string, content: string) {
    const postData: Post = { title, content };
    // Send Http request
    this.http
      .post<{ name: string }>(
        'https://angular-recipe-project-fa966.firebaseio.com/posts.json',
        postData,
        {
          observe: 'response',
        }
      )
      .subscribe(
        (resData) => {
          console.log(resData);
        },
        (error) => {
          this.error.next(error.message);
        }
      );
  }

  fetchPosts() {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('print', 'pretty');
    searchParams = searchParams.append('customparam', 'test');

    return this.http
      .get<{ [key: string]: Post }>(
        'https://angular-recipe-project-fa966.firebaseio.com/posts.json',
        {
          headers: new HttpHeaders({ 'Custom-Header': 'Hello' }),
          params: searchParams,
        }
      )
      .pipe(
        map((resData) => {
          const postsArray: Post[] = [];
          for (const key in resData) {
            if (resData.hasOwnProperty(key)) {
              postsArray.push({ ...resData[key], id: key });
            }
          }
          return postsArray;
        }),
        catchError((errorRes) => {
          // U CAN DO ANYTHING TASK HERE LIKE SENDING TO AN ANALYTIC SERVER....
          return throwError(errorRes);
        })
      );
  }

  deleteAllPosts() {
    return this.http
      .delete(
        'https://angular-recipe-project-fa966.firebaseio.com/posts.json',
        {
          observe: 'events',
          // responseType: 'text'
        }
      )
      .pipe(
        tap((event) => {
          console.log(event);
          if (event.type === HttpEventType.Sent) {
            // No body but u can do other stuffs like updating ui...
          }
          if (event.type === HttpEventType.Response) {
            console.log(event.body);
          }
        })
      );
  }
}
