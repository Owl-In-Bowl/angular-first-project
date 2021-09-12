import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-first-project';
  isAuth = false;

  posts = [
    {
      autor: 'Paul',
      title: 'rodrigez en fuite',
      postContent: 'mon chien rodriguez est parti en tournée du quartier mais n est jamais revenu'
    },
    {
      autor: 'Jamy',
      title: 'Jermaine a repris du poid',
      postContent: 'jermaine ne sait pas se tenir, elle est obligé de manger plus gras que nécéssaire'
    },
    {
      autor: 'titus',
      title: 'main coon',
      postContent: 'my cat is an asshole !'
    }
  ];

  constructor() {
    this.isAuth=true;
  }
}
