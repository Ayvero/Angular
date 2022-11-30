import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { clothesCartService } from '../clothes-cart.service';
import { clothes } from '../clothes-list/clothes';

@Component({
  selector: 'app-clothes-cart',
  templateUrl: './clothes-cart.component.html',
  styleUrls: ['./clothes-cart.component.scss']
})
export class ClothesCartComponent implements OnInit{
  

  cartList$:Observable<clothes[]>;


  constructor(private cart: clothesCartService){
    this.cartList$= cart.cartList.asObservable();


  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}


