import { Component, Injectable, OnInit } from '@angular/core';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

@Injectable()
export class AppComponent implements OnInit {
  title = 'angular-first-project';
  isAuth = false;
  posts: any[] = [];

  constructor(private postService: PostService) { //private postService: PostService
    this.isAuth=true;
  }

  ngOnInit(){
    this.posts=this.postService.posts;
  }

}
