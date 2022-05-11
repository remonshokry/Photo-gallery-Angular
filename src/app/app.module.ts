import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UsersService } from 'src/service/users.service';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UsersListComponent } from './users-list/users-list.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumComponent } from './album/album.component';
import { PhotosComponent } from './photos/photos.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NewUserFormComponent } from './new-user-form/new-user-form.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UsersListComponent,
    AlbumsComponent,
    AlbumComponent,
    PhotosComponent,
    NotFoundComponent,
    NewUserFormComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    UsersService,
    FormBuilder
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
