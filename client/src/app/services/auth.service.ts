import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { tap } from 'rxjs/operators';
import {User} from '../models/user';
import { JWT } from '../models/jwtResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  API_URL = 'http://localhost:3000/user';
  private token: string = null;
  private user: string = null;

  constructor(private http: HttpClient) { }

  createUser(user: User, photo: File){
    const fd = new FormData();
    fd.append('clave',user.password);
    fd.append('nombre',user.name);
    fd.append('apellido',user.lastname);
    fd.append('correo',user.mail);
    fd.append('fecha_nacimiento',user.birthdate);
    fd.append('pais',user.country);
    fd.append('credito',user.credit.toString());
    fd.append('estado',user.state.toString());
    fd.append('image',photo);
    return this.http.post(`${this.API_URL}/register`,fd);
  }

  login(user: Object){
    return this.http.post(`${this.API_URL}/login`,user)
    .pipe(tap(
      (res: JWT) => {
          this.saveToken(res.accessToken);
          this.saveUser(res.mail);
      },
      err => {  
        console.log(err);
      }
    ));;
  }
//
  public getUser():string{
    if(!this.user){
      this.user = localStorage.getItem("CURRENT_USER");
    }
    console.log(this.user);
    return this.user;
  }

  public getUserData(username:string){
    return this.http.get(`${this.API_URL}/getUser/${username}`);
  }

  public updateUser(user: any){
    return this.http.put(`${this.API_URL}/update`,user);
  }

  private saveToken(token: string){
    console.log(token);
    localStorage.setItem('ACCESS_TOKEN',token);
    this.token = token;
  }

  private saveUser(user: string){
    localStorage.setItem("CURRENT_USER",user);
    this.user = user;
  }

  public getToken():string{
    if(!this.token){
      this.token = localStorage.getItem("ACCESS_TOKEN")
    }
    return this.token;
  }

  public logout(){
    this.token = null;
    this.user = null;
    localStorage.removeItem('ACCESS_TOKEN');
    localStorage.removeItem('CURRENT_USER');
  }

}
