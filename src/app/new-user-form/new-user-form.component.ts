import { EventEmitter, Component, OnInit, Output, Input } from '@angular/core';
import { FormBuilder,  Validators } from '@angular/forms';
import { UsersService } from 'src/service/users.service';

@Component({
  selector: 'app-new-user-form',
  templateUrl: './new-user-form.component.html',
  styleUrls: ['./new-user-form.component.css']
})
export class NewUserFormComponent {
  form;
  @Output('closeBtn') closeBtn  = new EventEmitter();
  @Output('userForm') newUser  = new EventEmitter();
  @Input('editedUser') editedUser  :any; 
  @Output('editedUserData') editedUserData  = new EventEmitter();


  constructor( 
    private fb: FormBuilder , 
    private usersService : UsersService) {
    this.form = this.fb.group({
      name:['',[Validators.required , Validators.minLength(3)]],
      email:['',[Validators.required , Validators.email]],
      phone:['',[Validators.required ,Validators.minLength(10) , Validators.pattern('^[0-9]*$')]],
      address: fb.group({
          city:['', Validators.required],
          street:[],
          suite:[]
      })
   })
   
  }

   addNewUser(){
    if (!this.editedUser)
    {
      let newUser = this.form.value; 
      this.usersService.createNewUser(this.form.value)
      .subscribe(res =>{
        Object.assign(newUser , res);
        console.log(newUser);
        this.newUser.emit(newUser);
      })
    }
    else
    {
      console.log(this.form);
      console.log(this.editedUser);
      let edited = this.form.value; 
      this.usersService.editUser(this.editedUser.id , edited)
      .subscribe(res =>{
        Object.assign(this.editedUser , res);
        console.log(this.editedUser);
        this.editedUserData.emit(this.editedUserData);
      })
    }
  }

  closeForm(){
    this.closeBtn.emit();
  }

  

}
