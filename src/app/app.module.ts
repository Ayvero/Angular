import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { clothesListComponent } from './clothes-list/clothes-list.component';
import { FormsModule } from '@angular/forms';
import { ClothesAboutComponent } from './clothes-about/clothes-about.component';
import { ClothesSalesComponent } from './clothes-sales/clothes-sales.component';
import { ClothesCartComponent } from './clothes-cart/clothes-cart.component';
import { InputNumberComponent } from './input-number/input-number.component';
import{HttpClientModule} from'@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
    clothesListComponent,
    ClothesAboutComponent,
    ClothesSalesComponent,
    ClothesCartComponent,
    InputNumberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
