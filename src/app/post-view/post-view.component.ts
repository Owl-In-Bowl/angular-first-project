import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
//import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.scss']
})

export class PostViewComponent implements OnInit {

  //isAuth: boolean = false;
  posts: any[] = [];


  constructor(private postService: PostService) { //private postService: PostService
    //this.isAuth=true;
  }

  ngOnInit(){
    this.posts=this.postService.posts;
  }

}
