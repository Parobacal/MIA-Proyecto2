import { Injectable, ɵConsole } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  API_URL = 'http://localhost:3000/product';

  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get(`${this.API_URL}/product-list`);
  }

  productDetail(id: string){
    return this.http.get(`${this.API_URL}/product-list/${id}`);
  }

  saveProduct(product: Product, image: File){
    console.log(product);
    const fd = new FormData();
    fd.append('fk_idCategoria', product.fk_idCategory.toString());
    fd.append('fk_correo', product.fk_mail);
    fd.append('nombre', product.name);
    fd.append('detalle_producto', product.product_detail);
    fd.append('palabras_clave', product.key_words);
    fd.append('precio', product.price.toString());
    fd.append('me_gusta', product.likes.toString());
    fd.append('no_me_gusta', product.deslikes.toString());
    fd.append('image',image);//
    return this.http.post(`${this.API_URL}/add-product`, fd);
  }

  addLike(product: any){
    return this.http.put(`${this.API_URL}/add-like`, product);
  }

  addDeslike(product: any){
    return this.http.put(`${this.API_URL}/add-deslike`, product);
  }

}

