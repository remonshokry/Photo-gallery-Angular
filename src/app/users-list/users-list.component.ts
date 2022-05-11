import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/service/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users:any;
  userForm = false;
  editedUserData : any ;
  constructor(private usersService : UsersService ) { }

  ngOnInit() {
    this.usersService.getUsers()
    .subscribe(
      res=>{
        this.users = res;
      }
    )
  }
  // getUserAlbums(userId :any){
  // }

  deleteUser(ev :any,  user:any){
    ev.stopPropagation();
    this.usersService.deleteUser(user.id)
    .subscribe(()=>{
      let index = this.users.indexOf(user);
      this.users.splice(index,1);
    })
  }
  
  // editUser(ev :any,  user:any){
    //   ev.stopPropagation();
    //   this.usersService.editUser(user.id)
    //   .subscribe(()=>{
      //     let index = this.users.indexOf(user);
      //     this.users.splice(index,1);
      //   })
      // }
      
  editUser(ev :any,  user:any){
    ev.stopPropagation();
    this.userForm = true;
    this.editedUserData = user ;
  }

  createNewUser(){
    this.userForm = true;
  }

  receiveFromData(data :any){
    this.userForm = false;
    this.users.splice(0,0,data);
    console.log(data);
  }
  
  receiveEditedData(data : any){
    console.log(data);
    this.userForm = false;
    let index = this.users.indexOf(data);
    this.users.splice(index,0,data);
  }
  
  closeForm(){
    this.userForm = false;

  }



}
