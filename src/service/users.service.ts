import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { JSDocTagName } from '@angular/compiler/src/output/output_ast';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private url = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http : HttpClient) { }

  getUsers(){
    return this.http.get(this.url);
  }
  getUserById(userId : any){
    return this.http.get(`${this.url}/${userId}`);
  }

  editUser( userId : any,  newData: any){
    return this.http.patch(`${this.url}/${userId}` , JSON.stringify(newData));
  }

  createNewUser(newData : any){
    return this.http.post(this.url , JSON.stringify(newData))
  }

  deleteUser(userId : any){
    return this.http.delete(`${this.url}/${userId}`);
  }
  

}
