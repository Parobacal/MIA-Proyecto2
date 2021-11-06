import { Component, HostBinding, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { Router } from '@angular/router';
import {ProductsService} from '../../../services/products.service';
import {AuthService} from '../../../services/auth.service';


interface HtmlInputEvent extends Event{
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  categorys : any = [];

  product: Product = {
    fk_idCategory: 1,
    fk_mail: '',
    name: '',
    product_detail: '',
    key_words: '',
    price: 0,
    likes: 0,
    deslikes: 0,
    state: 1,
  };

  file: File;
  photoSelected: string | ArrayBuffer;

  constructor(private productsService: ProductsService, private userService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.loadCategorys();
  }

  addProduct(){
    this.product.fk_mail = this.userService.getUser();
    console.log(this.product);
    this.productsService.saveProduct(this.product, this.file)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/products/start']);
      },
      err => console.error(err)
    )
  }

  onPhotoSelected(event:HtmlInputEvent):void{
    if(event.target.files && event.target.files[0]){
      this.file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = e => this.photoSelected = reader.result;
      reader.readAsDataURL(this.file);
    }
  }

  loadCategorys(){
    this.productsService.loadCategorys()
    .subscribe(
      res => {
        this.categorys = res;
        console.log(res);
      },
      err => console.error(err)
    )
  }

}
