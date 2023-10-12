import { Component, OnInit } from '@angular/core';
import { ProductService } from '../products.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  AsterixObelix: any = "../assets/asterixobelix.jpg"

  products: Product[];

  constructor(private productService: ProductService) {
    this.products = productService.getProducts();
  }

  sortProductsByNameAscending() {
    this.products = this.productService.sortProductsByNameAscending();
  }

  sortProductsByNameDescending() {
    this.products = this.productService.sortProductsByNameDescending();
  }
  
}
