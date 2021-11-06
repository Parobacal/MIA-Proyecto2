import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { StartComponent } from './components/products/start/start.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import {DetailComponent} from './components/products/detail/detail.component';
import {AddproductComponent} from './components/products/addproduct/addproduct.component';
import {ProfileComponent} from './components/user/profile/profile.component';
import {ReportComponent} from './components/admin/report/report.component';
import {DenunceComponent} from './components/admin/denunce/denunce.component';
import {CategoryComponent} from './components/admin/category/category.component';
import {ShoppingComponent} from './components/products/shopping/shopping.component';
import {CommentsComponent} from './components/products/comments/comments.component';
import {DenunceformComponent} from './components/products/denunceform/denunceform.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'user/login', component: LoginComponent},
  {path: 'user/register', component: RegisterComponent},
  {path: 'products/start', component: StartComponent},
  {path: 'products/detail/:id', component: DetailComponent},
  {path: 'products/addproduct', component: AddproductComponent},
  {path: 'admin/report', component: ReportComponent},
  {path: 'admin/category', component: CategoryComponent},
  {path: 'admin/denunce', component: DenunceComponent},
  {path: 'products/shopping', component: ShoppingComponent},
  {path: 'products/comments/:id', component: CommentsComponent},
  {path: 'products/denunceform/:id', component: DenunceformComponent},
  {path: 'user/profile', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
