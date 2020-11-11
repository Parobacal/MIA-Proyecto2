import { Component, HostBinding, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/cart';
import { AuthService } from 'src/app/services/auth.service';
import {ProductsService} from '../../../services/products.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  products: any = [];

  cart: Cart = {
    fk_idProduct: 0,
    fk_mail: '',
    name: '',
    quantity: 0,
    price: 0
  }

  constructor(private productsServices: ProductsService, private userService: AuthService) { }

  ngOnInit(): void {

    this.productsServices.getProducts().subscribe(
      res => {
        this.products = res;
      },
      err => console.log(err)
    );
  }

  addToCart(idProduct: number, price: number, name: string){
    this.cart.fk_mail = this.userService.getUser();
    this.cart.fk_idProduct = idProduct;
    this.cart.price = price;
    this.cart.name = name;
    this.productsServices.addCart(this.cart).subscribe(
      res => {
        this.products = res;
        console.log(res);
      },
      err => console.log(err)
    );
  }

}
