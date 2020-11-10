import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userData: any = {}
  newData: any = {}

  constructor(private userService: AuthService) { }

  ngOnInit(): void {
    this.userService.getUserData(this.userService.getUser()).subscribe(
      res => {
        this.userData = res;
      },
      err => console.log(err)
    )
  }

  saveChanges(){
    if(Object.entries(this.newData).length > 0){
      this.newData.hasOwnProperty("NOMBRE") ? console.log("new NOMBRE") : this.newData.NOMBRE = this.userData.NOMBRE;
      this.newData.hasOwnProperty("APELLIDO") ? console.log("new APELLIDO") : this.newData.APELLIDO = this.userData.APELLIDO;
      this.newData.hasOwnProperty("CLAVE") ? console.log("new pass"): this.newData.CLAVE = this.userData.CLAVE;
      this.newData.hasOwnProperty("FECHA_NACIMIENTO") ? console.log("new DATE"): this.newData.FECHA_NACIMIENTO = this.userData.FECHA_NACIMIENTO;
      this.newData.hasOwnProperty("PAIS") ? console.log("new COUNTRY"): this.newData.PAIS = this.userData.PAIS;
      this.newData.CORREO = this.userData.CORREO;
      this.userService.updateUser(this.newData).subscribe(
        res => {
          console.log(res);
        }
      );
    }else{
      this.newData.NOMBRE = this.userData.NOMBRE;
      this.newData.APELLIDO = this.userData.APELLIDO;
      this.newData.CLAVE = this.userData.CLAVE;
      this.newData.FECHA_NACIMIENTO = this.userData.FECHA_NACIMIENTO;
      this.newData.PAIS = this.userData.PAIS;
      this.newData.CORREO = this.userData.CORREO;
      this.userService.updateUser(this.newData).subscribe(
        res => {
            console.log(res);
        }
      );
    }
  }

  showCLAVE(){
    var x = <HTMLInputElement>document.getElementById("myCLAVE");
    if(x.type === 'CLAVE')
      x.type = 'text';
    else
      x.type = 'CLAVE';
  }

}
