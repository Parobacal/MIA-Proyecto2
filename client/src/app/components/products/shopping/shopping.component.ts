import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ProductsService } from 'src/app/services/products.service';
import {Cart} from '../../../models/cart';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {

  carts: any = []

  constructor(private productService: ProductsService, private userService: AuthService) { }

  ngOnInit(): void {
    this.productService.getCart(this.userService.getUser())
    .subscribe(
      res => {
        this.carts = res;
        console.log(res);
      },
      err => console.error(err)
    )
  }

  buy(){
    
  }

  clear(){
    this.productService.clearCart(this.userService.getUser())
    .subscribe(
      res => {
        console.log(res);
        location.reload();
      },
      err => console.error(err)
    )
  }

}
