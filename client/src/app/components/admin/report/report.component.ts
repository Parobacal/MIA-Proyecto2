import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../../services/admin.service';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  likes: any = [];
  deslikes: any = [];
  publications: any = [];
  credits: any = [];

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.adminService.getReport1().subscribe(
      res => {
        this.likes = res;
      },
      err => console.log(err)
    );

    this.adminService.getReport2().subscribe(
      res => {
        this.deslikes = res;
      },
      err => console.log(err)
    );

    this.adminService.getReport3().subscribe(
      res => {
        this.publications = res;
      },
      err => console.log(err)
    );
    
    this.adminService.getReport4().subscribe(
      res => {
        this.credits = res;
      },
      err => console.log(err)
    );

  }


}
