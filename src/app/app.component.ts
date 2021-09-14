import { Component, Injectable, OnInit } from '@angular/core';
import { PostService } from './services/post.service';
import { Observable } from 'rxjs-compat/Observable'
import 'rxjs-compat/add/observable/interval'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

@Injectable()
export class AppComponent implements OnInit{
  title = 'angular-first-project';
  constructor() {
  }

  secondes: number=0;
  ngOnInit() {
    const counter = Observable.interval(1000);
    counter.subscribe(
      (value) => { this.secondes  =value;},
      (error) => { console.log('Error occured : ' + error);},
      () => {console.log('Observable complete !');}
    );
  }
}
