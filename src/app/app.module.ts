import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { FormsModule } from '@angular/forms';
import { AuthComponent } from './auth/auth.component';
import { PostService } from './services/post.service';
import { PostViewComponent } from './post-view/post-view.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { AuthService } from './services/auth.service';
import { SinglePostComponent } from './single-post/single-post.component';
import { NotFoundFourOFourComponent } from './not-found-four-o-four/not-found-four-o-four.component';
import { AuthGuard } from './services/auth-guard.service';

import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  //{ path: 'posts', canActivate: [AuthGuard], component: PostViewComponent},
  //{ path: 'posts/:id', canActivate: [AuthGuard], component: SinglePostComponent},
  { path: 'posts', component: PostViewComponent},
  { path: 'posts/:id', component: SinglePostComponent},
  { path: 'auth', component: AuthComponent},
  { path: '', component:AuthComponent},
  { path: 'not-found', component: NotFoundFourOFourComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    AuthComponent,
    PostViewComponent,
    NotFoundFourOFourComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  exports: [RouterModule],
  providers: [
    PostService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
