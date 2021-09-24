import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostComponent } from '../post/post.component';
import { Observable } from 'rxjs-compat/Observable';

//@Injectable//({  providedIn: 'root'})
export class DataService {

  private REST_API_SERVER = "http://localhost:3000";

  constructor(private httpClient: HttpClient) { }

  public sendGetRequest() {
    return this.httpClient.get(this.REST_API_SERVER);
  }

  public getPosts(): Observable<PostComponent[]> {
    return this.httpClient.get<PostComponent[]>(this.REST_API_SERVER);
  }
}



