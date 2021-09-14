import { Component, OnInit, Input, InjectionToken, Injectable } from '@angular/core';
import { PostService } from '../services/post.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
@Injectable()
export class SinglePostComponent implements OnInit {
  @Input() postAutor: string = 'Paul';
  @Input() postTitle: string ='du nouveau vin !';
  @Input() postContent: string = 'le nouveau nez est arrivé ce samedi en bourgogne';
  postIndex: number = 0;
  @Input() postId: number =0

  constructor(private postService: PostService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.postAutor = this.postService.getPostById(+id)?.autor as string;
    this.postContent = this.postService.getPostById(+id)?.content as string;
    this.postTitle = this.postService.getPostById(+id)?.title as string;
    this.postIndex = id;
  }

  goBack() {
    this.router.navigate(['posts']);
  }

}
