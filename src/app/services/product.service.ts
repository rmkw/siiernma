import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { environments } from 'src/app/environments/environments';
import { Products } from "../interfaces/product.interface";


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl: string = environments.baseUrl;

  constructor(
    private _http: HttpClient
  ) { }

  getProducts(){
    return this._http.get<Products[]>(`${ this.baseUrl}/products`)
  }
}
