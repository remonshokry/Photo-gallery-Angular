import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './albums/albums.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PhotosComponent } from './photos/photos.component';
import { UsersListComponent } from './users-list/users-list.component';

const routes: Routes = [
  {
    path:'users/:userId/albums/:albumId',
    pathMatch: "full",
    component : PhotosComponent
  },
  {
    path : 'users/:userId/albums',
    pathMatch: "full",
    component : AlbumsComponent
  },
  {
    path : 'login',
    component: LoginComponent
  },
  {
    path : '',
    // redirectTo:'users' ,
    component:UsersListComponent
  },
  {
    path : '**',
    // redirectTo:'users' ,
    component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
