import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { PostServiceService } from '../services/post-service.service';
import { Post } from './post.model';

@Component({
  selector: 'app-http-demo',
  templateUrl: './http-demo.component.html',
  styleUrls: ['./http-demo.component.css'],
})
export class HttpDemoComponent implements OnInit, OnDestroy {
  loadedPosts: Post[] = [];
  isLoading = false;
  error = null;
  private errorSub: Subscription;

  constructor(
    private http: HttpClient,
    private postService: PostServiceService
  ) {}

  ngOnInit(): void {
    this.fetchPosts();
    this.errorSub = this.postService.error.subscribe((errorMessage) => {
      this.error = errorMessage;
    });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.errorSub.unsubscribe();
  }

  onCreatePost(postData: Post) {
    this.postService.createAndStorePost(postData.title, postData.content);
  }

  onFetchPosts() {
    // Send Http request
    this.fetchPosts();
  }

  onClearPosts() {
    this.isLoading = true;
    // Send Http request
    this.postService.deleteAllPosts().subscribe(() => {
      this.loadedPosts = [];
      this.isLoading = false;
    });
  }

  private fetchPosts() {
    this.isLoading = true;
    this.postService.fetchPosts().subscribe(
      (posts) => {
        this.isLoading = false;
        this.loadedPosts = posts;
      },
      (error) => {
        this.isLoading = false;
        this.error = error.error.error;
        console.log(error);
      }
    );
  }

  onHandleError() {
    this.error = null;
  }
}
