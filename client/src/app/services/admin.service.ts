import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

}
