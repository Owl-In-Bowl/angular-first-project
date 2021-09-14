import { Component, Injectable, OnInit, OnDestroy } from '@angular/core';
import { PostService } from './services/post.service';
import { Observable } from 'rxjs-compat/Observable'
import 'rxjs-compat/add/observable/interval'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

@Injectable()
export class AppComponent implements OnInit, OnDestroy{
  title = 'angular-first-project';
  constructor() {
  }

  counterSubscription!: Subscription;
  secondes: number=0;
  ngOnInit() {
    const counter = Observable.interval(1000);
    counter.subscribe(
      (value) => { this.secondes  = value;},
      (error) => { console.log('Error occured : ' + error);},
      () => {console.log('Observable complete !');}
    );
  }

  ngOnDestroy() {
    this.counterSubscription.unsubscribe();
  }
}
