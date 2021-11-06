import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
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

  bycategory: boolean = false;

  products: any = [];

  categorys: any = [];

  cart: Cart = {
    seller: '',
    fk_idProduct: 0,
    fk_mail: '',
    name: '',
    quantity: 0,
    price: 0
  }

  constructor(private productsServices: ProductsService, private userService: AuthService) { }

  ngOnInit(): void {
      this.getProducts();
      this.getCategorys();
  }

  addToCart(idProduct: number, price: number, name: string, seller: string){
    this.cart.seller = seller;
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

  orderByCategory(idCategory: string){
    this.productsServices.orderByCategory(idCategory).subscribe(
      res => {
        this.products = res;
      },
      err => console.log(err)
    );
  }

  getCategorys(){
    this.productsServices.loadCategorys()
    .subscribe(
      res => {
        this.categorys = res;
        console.log(res);
      },
      err => console.error(err)
    )
  }

  getProducts(){
    this.productsServices.getProducts().subscribe(
      res => {
        this.products = res;
      },
      err => console.log(err)
    );
  }

  less(){
    this.productsServices.less().subscribe(
      res => {
        this.products = res;
      },
      err => console.log(err)
    );
  }

  more(){
    this.productsServices.more().subscribe(
      res => {
        this.products = res;
      },
      err => console.log(err)
    );
  }

}
