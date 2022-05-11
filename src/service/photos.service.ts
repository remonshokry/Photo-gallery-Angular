import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  private url = 'https://jsonplaceholder.typicode.com/photos';
  constructor( private http : HttpClient) { }

  getPhotos(albumId :any){
    return this.http.get(`${this.url}?albumId=${albumId}`);
  }

  deletePhoto(photoId : any){
    return this.http.delete(`${this.url}/${photoId}`);
  }

  getPhotosNumberInAlbum(albumId :any){
    this.http.get(`${this.url}?albumId=${albumId}`)
    .subscribe((res :any)=> {res.length});

  }
}
