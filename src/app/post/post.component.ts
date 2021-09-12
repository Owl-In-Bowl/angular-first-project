import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() postAutor: string = 'Paul';
  @Input() postTitle: string ='du nouveau vin !';
  @Input() postContent: string = 'le nouveau nez est arrivé ce samedi en bourgogne';
  @Input() postIndex: number = 0;
  @Input() postId: number = 0;

  nbLike = 0;
  nbDislike=0;

  constructor() { }

  ngOnInit(): void {
  }

  getPostContent () {
    return this.postContent;
  }

  addLike(){
    this.nbLike +=1 ;
  }

  addDislike(){
    this.nbDislike+=1;
  }

  getTendance(){
    if (this.nbDislike<=this.nbLike){
      return true;
    }
    else {
      return false;
    }
  }

}
