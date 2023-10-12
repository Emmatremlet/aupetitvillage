import { Component, Input } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Product[];

  constructor(private productService: ProductService) {
    this.products = productService.getProducts();
  }
}

