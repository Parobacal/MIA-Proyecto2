import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Denunce } from 'src/app/models/denunce';
import { AuthService } from 'src/app/services/auth.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-denunceform',
  templateUrl: './denunceform.component.html',
  styleUrls: ['./denunceform.component.css']
})
export class DenunceformComponent implements OnInit {

  dn: Denunce = {
    fk_idProduct: 0,
    fk_mail: '',
    description: ''
  }
  constructor(private activedRoute: ActivatedRoute, private userService: AuthService, private productsService: ProductsService) { }

  ngOnInit(): void {
    const params = this.activedRoute.snapshot.params;
    this.dn.fk_idProduct = params.id;
    this.dn.fk_mail = this.userService.getUser();
  }

  newDenunce(){
    this.productsService.newDenunce(this.dn).subscribe(
      res => {
        console.log(res);
      },
      err => console.log(err)
    );
  }

}
