import { Component, OnInit } from '@angular/core';
import { clothesCartService} from '../clothes-cart.service';
import { ClothesDataService } from '../clothes-data.service';
import { clothes } from './clothes';

@Component({
  selector: 'app-clothes-list',
  templateUrl: './clothes-list.component.html',
  styleUrls: ['./clothes-list.component.scss']
})




export class clothesListComponent {

  clothes: clothes []=[];
 
 constructor(private cart: clothesCartService,
  private clothesDataService: ClothesDataService){

 }

 ngOnInit():void{
  this.clothesDataService.getAll()
    .subscribe(clothes => this.clothes=clothes);
}
 
  addToCart (clothes: clothes) : void{


    this.cart.addToCart(clothes);
    clothes.stock-= clothes.quantity;
    clothes.quantity=0;

  }
  
   
  
   
  

 maxReached( m:string ){
  alert(m);
 }

 
}

 

  








  






