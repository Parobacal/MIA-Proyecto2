import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  API_URL = 'http://localhost:3000/user';

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

}
