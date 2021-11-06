import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import {Category} from '../../../models/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  category: Category = {
    name: ''
  }

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
  }

  newCategory(){
    this.adminService.newCategory(this.category).subscribe(
      res => {
        console.log(res);
      },
      err => console.log(err)
    );
  
  }

}
