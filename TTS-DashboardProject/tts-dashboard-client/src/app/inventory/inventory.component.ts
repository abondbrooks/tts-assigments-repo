import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  products: Product[];

  constructor(private productService: ProductService) { }
  
  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts()
      .subscribe(products => this.products = products);
  }

refresh(){
    location.reload();
  }

}
