import { Component, HostBinding, OnInit } from '@angular/core';
import {ProductsService} from '../../../services/products.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  products: any = [];

  constructor(private productsServices: ProductsService) { }

  ngOnInit(): void {

    this.productsServices.getProducts().subscribe(
      res => {
        this.products = res;
      },
      err => console.log(err)
    );
  }

}
