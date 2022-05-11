import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  private url = 'https://jsonplaceholder.typicode.com/albums';
  constructor(private http : HttpClient) { }

  getAlbums(userId : any){
    return this.http.get(`${this.url}?userId=${userId}`);
  }

  deleteAlbum(albumId :any){
    this.http.delete(`${this.url}/${albumId}`)
  }
}
