import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Comment } from 'src/app/models/comments';
import { AuthService } from 'src/app/services/auth.service';
import { ProductsService } from 'src/app/services/products.service';
import { DatePipe } from '@angular/common';



@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments: any = [];

  cm: Comment = {
    fk_idProduct: 0,
    fk_mail: '',
    description: '',
    date: ''
  }

  constructor(private productsService:ProductsService, private activedRoute: ActivatedRoute, private userService: AuthService, private datepipe: DatePipe) { }

  ngOnInit(): void {
    this.getComments();
  }

  newComment(){
    const date = new Date();
    const params = this.activedRoute.snapshot.params;
    this.cm.fk_idProduct = params.id;
    this.cm.fk_mail = this.userService.getUser();
    this.cm.date = this.datepipe.transform(date, 'yyyy/MM/dd');
    this.productsService.newComment(this.cm).subscribe(
      res => {
        console.log(res);
        location.reload();
      },
      err => console.log(err)
    );
  }

  getComments(){
    const date = new Date();
    const params = this.activedRoute.snapshot.params;
    this.cm.fk_idProduct = params.id;
    this.cm.fk_mail = this.userService.getUser();
    this.cm.date = this.datepipe.transform(date, 'yyyy/MM/dd');
    this.productsService.getComments(params.id).subscribe(
      res => {
        this.comments = res;
      },
      err => console.log(err)
    );
  }
}
