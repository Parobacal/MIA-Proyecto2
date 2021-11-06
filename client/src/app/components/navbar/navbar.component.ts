import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public isLogged: boolean = false;
  data: string = "";
  public isUser: boolean= false;
  public isAdmin: boolean = false;

  constructor(private userService: AuthService, private router: Router, private location: Location) { }

  ngOnInit(): void {
    this.onCheckUser();
    this.data = this.userService.getUser();
  }

  logout(){
    this.userService.logout();
    this.router.navigate(['/']);
    this.location.replaceState("/");
    location.reload();
  }

  onCheckUser(): void{
    if(this.userService.getToken() === null){
      this.isLogged = false;
    }else{
      if(this.userService.getUser() !== 'admin')
        this.isUser = true;
      else
        this.isAdmin = true;
      
      this.isLogged = true;
    }
  }

}
