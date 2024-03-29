import { Injectable, ɵConsole } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from '../models/product';
import { Cart } from '../models/cart';
import { Comment } from '../models/comments';
import { Denunce } from '../models/denunce';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  API_URL = 'http://localhost:3000/product';

  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get(`${this.API_URL}/product-list`);
  }

  getCart(id: string){
    return this.http.get(`${this.API_URL}/cart/${id}`);
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

  addCart(cart: Cart){
    const fd = new FormData();
    fd.append('seller', cart.seller);
    fd.append('fk_idProducto', cart.fk_idProduct.toString());
    fd.append('fk_correo', cart.fk_mail);
    fd.append('cantidad', cart.quantity.toString());
    fd.append('nombre', cart.name);
    fd.append('precio', cart.price.toString());
    return this.http.post(`${this.API_URL}/add-cart`, fd);
  }

  addLike(product: any){
    return this.http.put(`${this.API_URL}/add-like`, product);
  }

  addDeslike(product: any){
    return this.http.put(`${this.API_URL}/add-deslike`, product);
  }

  clearCart(id: string){
    return this.http.delete(`${this.API_URL}/cart-clear/${id}`);
  }

  buy(id: string){
    return this.http.get(`${this.API_URL}/cart-buy/${id}`);
  }

  loadCategorys(){
    return this.http.get(`${this.API_URL}/get-categorys`);
  }

  orderByCategory(idCategory: string){
    return this.http.get(`${this.API_URL}/order-category/${idCategory}`);
  }


  less(){
    return this.http.get(`${this.API_URL}/get-categorys-less`);
  }

  more(){
    return this.http.get(`${this.API_URL}/get-categorys-more`);
  }

  newComment(cm: Comment){
    const fd = new FormData();
    fd.append('fk_idProducto', cm.fk_idProduct.toString());
    fd.append('fk_correo', cm.fk_mail);
    fd.append('descripcion', cm.description.toString());
    fd.append('fecha', cm.date);
    return this.http.post(`${this.API_URL}/add-comment`, fd);
  }

  getComments(id: string){
    return this.http.get(`${this.API_URL}/get-comment/${id}`);
  }

  newDenunce(dn: Denunce){
    const fd = new FormData();
    fd.append('fk_idProducto', dn.fk_idProduct.toString());
    fd.append('fk_correo', dn.fk_mail);
    fd.append('descripcion', dn.description);
    return this.http.post(`${this.API_URL}/add-denunce`, fd);
  }

  getDenunce(){
    return this.http.get(`${this.API_URL}/get-denunce`);
  }

  aceptDenunce(id: string){
    return this.http.delete(`${this.API_URL}/delete-product/${id}`);
  }

  deleteDenunce(id: string){
    return this.http.delete(`${this.API_URL}/delete-denunce/${id}`);
  }

}

