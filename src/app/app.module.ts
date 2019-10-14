import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {NavComponent} from './nav/nav.component';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {HttpClientModule } from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';


@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpClientModule,ReactiveFormsModule,AppRoutingModule],
  declarations: [ AppComponent,NavComponent,HomeComponent,AboutComponent,ContactComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
