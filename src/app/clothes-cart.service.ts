import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { clothes } from './clothes-list/clothes';

@Injectable({
  providedIn: 'root'
})


export class clothesCartService {
  
   private _cartList:clothes[]= [];
  cartList: BehaviorSubject<clothes[]>= new BehaviorSubject(this._cartList);

  constructor(){}
  
    addToCart(clothes:clothes) {
       let item : clothes =this._cartList.find( (v1)=> v1.nombre == clothes.nombre);
      if(!item){
        this._cartList.push({...clothes});


      }else{
      item.quantity+=clothes.quantity;
  }
  console.log(this._cartList);
  this.cartList.next(this._cartList);

    }


}

