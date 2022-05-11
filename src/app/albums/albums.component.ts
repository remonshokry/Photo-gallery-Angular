import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AlbumsService } from 'src/service/albums.service';
import { PhotosService } from 'src/service/photos.service';
import { UsersService } from 'src/service/users.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
})
export class AlbumsComponent implements OnInit {
  userId: any;
  user: any;
  albums: any;
  photosNumber  = new Array();

  constructor(
    private usersService: UsersService,
    private albumsService: AlbumsService,
    private photosService: PhotosService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // extraction 
    this.route.paramMap.subscribe((params :ParamMap) => {
      this.userId = params.get('userId');
      });
      // get user data
      this.usersService.getUserById(this.userId)
      .subscribe((res :any) => {
        this.user = res;
      // get albums data
      this.albumsService.getAlbums(this.userId)
      .subscribe((res : any) => {
        this.albums = res;

        this.albums.forEach((element: any) => {
          this.photosService
          .getPhotos(element.id)
          .subscribe((res:any)=>
          {
            let picNo = res.length; 
            this.photosNumber.push({
              id: element.id,
              photoNumber: picNo});
          })
        });
      });
    });
  }
}
