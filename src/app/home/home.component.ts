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
  sortedProducts: Product[];
  sortDirection: string = 'asc'; // Par défaut, tri croissant

  constructor(private productService: ProductService) {
    this.products = productService.getProducts();
    this.sortedProducts = [...this.products]; // Copie de la liste non triée
  }

  sortProducts(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.sortDirection = target.value;

    this.sortedProducts = this.products.slice(); // Créez une copie pour éviter de modifier l'original

    if (this.sortDirection === 'asc') {
      this.sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (this.sortDirection === 'desc') {
      this.sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
    }
  }

}
