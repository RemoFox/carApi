import { Component } from '@angular/core';
import {  FormControl, FormGroup,  Validators } from '@angular/forms';
import { passwordvalidator } from '../password.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {


loginform:FormGroup = new FormGroup({
  username:new FormControl('',[Validators.required,Validators.minLength(3)]),
  number:new FormControl('',[Validators.required]),
  email:new FormControl('',[Validators.required,Validators.email]),
  password:new FormControl('',[Validators.required,Validators.minLength(8)]),
  retypepassword: new FormControl('',[Validators.required]),
},{validators : passwordvalidator.matchPasswordForm})



login(){
  console.log(this.loginform);
}


}
