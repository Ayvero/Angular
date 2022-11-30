import { Component, OnInit } from '@angular/core';
import { clothesCartService} from '../clothes-cart.service';
import { clothes } from './clothes';

@Component({
  selector: 'app-clothes-list',
  templateUrl: './clothes-list.component.html',
  styleUrls: ['./clothes-list.component.scss']
})


export class clothesListComponent {

  clothes: clothes []=[];
 
 constructor(private cart: (clothesCartService)){

 }
 
  addToCart (clothes: clothes) : void{


    this.cart.addToCart(clothes);
    clothes.stock-= clothes.quantity;
    clothes.quantity=0;

  }
  
   
  
   
  

 maxReached( m:string ){
  alert(m);
 }

 clothes : clothes[] = [
  {
    image: 'assets/vestidoazul.jpeg',
    nombre: 'Vestido',
    descripcion: 'vestido de fiesta corto',
    talle: 'small',
    precio: 20000,
    stock: 5,
    clearance: false,
    quantity:0,
  
  },
  {
    image: 'assets/vestidoazul.jpeg',
    nombre: 'Vestido',
    descripcion: 'vestido de fiesta largo',
    talle: 'medium',
    precio: 15000,
    stock: 0,
    clearance: false,
    quantity:0,
    
  },
    {
      image: 'assets/vestidoazul.jpeg',
      nombre: 'Vestido',
      descripcion: 'vestido de noche largo',
      talle: 'xlarge',
      precio: 10000,
      stock: 7,
      clearance: true,
      quantity:0,
      
    
    },
  
];
  


}







  






