import { Component, OnInit } from '@angular/core';
import { ProductService } from "../../services/product.service";
import { Products } from "../../interfaces/product.interface";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{

  public products: Products[] = [];

  constructor(
    private _productsServices: ProductService
  ){}

  ngOnInit(): void {

    this._productsServices.getProducts()
    .subscribe( products => this.products = products );


  }
}
