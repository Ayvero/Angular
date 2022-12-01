import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, pipe, tap } from 'rxjs';
import { clothes } from './clothes-list/clothes';

const URL= "https://6387f5b9d94a7e5040905a0f.mockapi.io/api/clothes";

@Injectable({
  providedIn: 'root'
})
export class ClothesDataService {

  constructor(private http: HttpClient) { }

  public  getAll(): Observable<clothes[]>{
     return this.http.get<clothes[]>(URL)
     .pipe(
      tap(  ( clothes:clothes[] )=>clothes.forEach(clothes  =>  clothes.quantity= 0 ))
     );

  }
}
