import { Component, OnDestroy, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
//import { ActivatedRoute, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs-compat/Subscription';
@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.scss']
})

export class PostViewComponent implements OnInit, OnDestroy {

  //isAuth: boolean = false;
  posts: any[] = [];
  postSubscription!: Subscription;


  constructor(private postService: PostService) { //private postService: PostService
    //this.isAuth=true;
  }

  ngOnInit(){
    this.postSubscription = this.postService.postSubject.subscribe(
      (posts: any[]) => { this.posts=posts;}
    );
    this.postService.emitPostSubject();
  }

  ngOnDestroy(){
    this.postSubscription.unsubscribe();
  }
}
