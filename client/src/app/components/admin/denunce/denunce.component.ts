import { Component, OnInit, ɵConsole } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-denunce',
  templateUrl: './denunce.component.html',
  styleUrls: ['./denunce.component.css']
})
export class DenunceComponent implements OnInit {

  denunces: any = [];

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.loadDenunces();
  }

  acept(idProducto: string){
    this.productService.aceptDenunce(idProducto).subscribe(
      res => {
        console.log(res);
        location.reload();
      },
      err => console.log(err)
    );
  }

  delete(idProducto: string){
    this.productService.deleteDenunce(idProducto).subscribe(
      res => {
        console.log(res);
        location.reload();
      },
      err => console.log(err)
    );
  }

  loadDenunces(){
    this.productService.getDenunce().subscribe(
      res => {
        this.denunces = res;
      },
      err => console.log(err)
    );
  }

}
