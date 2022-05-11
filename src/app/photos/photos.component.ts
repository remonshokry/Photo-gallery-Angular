import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotosService } from 'src/service/photos.service';
import { UsersService } from 'src/service/users.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  albumId: any;
  userId: any;
  user: any;
  photos: any;

  constructor(
    private route : ActivatedRoute,
    private photosService : PhotosService,
    private usersService : UsersService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(param=>{
      this.albumId = param.get('albumId');
      this.userId = param.get('userId');
    })
    // get user data
    this.usersService.getUserById(this.userId)
    .subscribe((res :any) => {
      this.user = res;
    })
    //get photos data
    this.photosService.getPhotos(this.albumId)
    .subscribe(res=>{
      this.photos = res;
    })



  }

}
