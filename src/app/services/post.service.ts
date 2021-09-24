import { Subject } from "rxjs-compat/Subject";


export class PostService {
  postSubject = new Subject<any[]>();

  private posts = [
    {
      id: 1,
      autor: 'Paul',
      title: 'rodrigez en fuite',
      content: 'mon chien rodriguez est parti en tournée du quartier mais n est jamais revenu'
    },
    {
      id: 2,
      autor: 'Jamy',
      title: 'Jermaine a repris du poid',
      content: 'jermaine ne sait pas se tenir, elle est obligé de manger plus gras que nécéssaire'
    },
    {
      id: 3,
      autor: 'Titus',
      title: 'main coon',
      content: 'my cat is an asshole !'
    }
  ];

  getPostById(id: number) {
    const post = this.posts.find(
      (s) => {
        return s.id === id;
      }
    );
    return post;
  }

  emitPostSubject(){
    this.postSubject.next(this.posts.slice());
  }
}
