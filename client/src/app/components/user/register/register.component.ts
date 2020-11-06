import { Component, HostBinding, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import {AuthService} from '../../../services/auth.service';


interface HtmlInputEvent extends Event{
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  user: User = {
    name: '',
    lastname: '',
    password: '',
    mail: '',
    birthdate: '',
    country: '',
    credit: 10000,
    state: 0
  };

  file: File;
  photoSelected: string | ArrayBuffer;

  constructor(private userService: AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  registerUser(){
    console.log(this.user);
    this.userService.createUser(this.user,this.file)
    .subscribe(
      res => {
        console.log(res);
      },
      err => console.error(err)
    )
  }

  onPhotoSelected(event:HtmlInputEvent):void{
    if(event.target.files && event.target.files[0]){
      this.file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = e => this.photoSelected = reader.result;
      reader.readAsDataURL(this.file);
    }
  }
  
}
