import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { StartComponent } from './components/products/start/start.component';
import {AuthService} from './services/auth.service';
import {ProductsService} from './services/products.service';
import {AdminService} from './services/admin.service';

import { DetailComponent } from './components/products/detail/detail.component';
import { AddproductComponent } from './components/products/addproduct/addproduct.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { ReportComponent } from './components/admin/report/report.component';
import { DenunceComponent } from './components/admin/denunce/denunce.component';
import { CategoryComponent } from './components/admin/category/category.component';
import { ShoppingComponent } from './components/products/shopping/shopping.component';
import { CommentsComponent } from './components/products/comments/comments.component';
import { DatePipe } from '@angular/common';
import { DenunceformComponent } from './components/products/denunceform/denunceform.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    StartComponent,
    DetailComponent,
    AddproductComponent,
    ProfileComponent,
    ReportComponent,
    DenunceComponent,
    CategoryComponent,
    ShoppingComponent,
    CommentsComponent,
    DenunceformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AuthService,
    ProductsService,
    AdminService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
