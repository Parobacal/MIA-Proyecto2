import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {ProductsService} from '../../../services/products.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  product: any = [];

  constructor(private productsService: ProductsService, private activedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activedRoute.snapshot.params;
    this.productsService.productDetail(params.id).subscribe(
      res => {
        //console.log(res);
        this.product = res;
      },
      err => console.log(err)
    );
  }
  
  addLike(){
    this.productsService.addLike(this.product).subscribe(
      res => {
        console.log(res);
        location.reload();
      },
      err => console.log(err)
    );
  }

  addDeslike(){
    this.productsService.addDeslike(this.product).subscribe(
      res => {
        console.log(res);
        location.reload();
      },
      err => console.log(err)
    );  
  }

}
