import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:any ={};
  response: any = {};

  constructor(private auth: AuthService, private router: Router, private location: Location) { }

  ngOnInit(): void {}

  login(){
    //console.log(this.user);
    this.auth.login(this.user)
    .subscribe(
      res => {
        this.response = res;
        if(this.response.nombre != 'admin'){
          this.router.navigate(['/user/profile']);
          this.location.replaceState("/user/profile");
          //location.reload();
        }else{
          this.router.navigate(['/admin/editHome']);
          //this.location.replaceState("/admin/editHome");
          location.reload();
        }
      },
      err => {
        if(err.status == 500){
          //this.toastr.Error("Inactive user","Please check your email");
        }else if(err.status == 501){
          //this.toastr.Error("Incorrect password","Try again");
        }else if(err.status == 404){
          //this.toastr.Error("Unexisting user");
        }
      }
    )
  }

}
