import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  API_URL = 'http://localhost:3000/admin';

  constructor(private http: HttpClient) { }

  getReport1(){
    return this.http.get(`${this.API_URL}/report1`);
  }

  getReport2(){
    return this.http.get(`${this.API_URL}/report2`);
  }

  getReport3(){
    return this.http.get(`${this.API_URL}/report3`);
  }

  getReport4(){
    return this.http.get(`${this.API_URL}/report4`);
  }

  getReport5(){
    return this.http.get(`${this.API_URL}/report5`);
  }

  getReport6(){
    return this.http.get(`${this.API_URL}/report6`);
  }

  newCategory(category: Category){
    const fd = new FormData();
    fd.append('nombre', category.name);
    return this.http.post(`${this.API_URL}/new-category`, fd);
  }

}
