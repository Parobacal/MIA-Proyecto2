import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { StartComponent } from './components/products/start/start.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import {DetailComponent} from './components/products/detail/detail.component';
import {AddproductComponent} from './components/products/addproduct/addproduct.component';
import {ProfileComponent} from './components/user/profile/profile.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'user/login', component: LoginComponent},
  {path: 'user/register', component: RegisterComponent},
  {path: 'products/start', component: StartComponent},
  {path: 'products/detail/:id', component: DetailComponent},
  {path: 'products/addproduct', component: AddproductComponent},
  {path: 'user/profile', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
