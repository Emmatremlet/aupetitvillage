import { Component, Input } from '@angular/core';
import { ProductService } from '../products.service';
import { Product } from '../product.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  AsterixObelix: any = "../assets/asterixobelix.jpg";
  Loupe: any = "../assets/loupe.png"
  @Input() id: number = 0;
  products: Product [];
  sortedProducts: Product[];
  sortDirection: string = 'asc';
  searchTerm: string = '';
  product: Product | undefined;

  constructor(private productService: ProductService, private route: ActivatedRoute,) {
    this.products = productService.getProducts();
    this.sortedProducts = [...this.products];
  }

  sortProducts(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.sortDirection = target.value;

    this.sortedProducts = this.products.slice();

    if (this.sortDirection === 'asc') {
      this.sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (this.sortDirection === 'desc') {
      this.sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
    }
  }

  searchProducts(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.searchTerm = target.value;
    this.sortedProducts = this.products.filter(product =>
      product.name.toLowerCase().includes(target.value.toLowerCase())
    );
  }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      const productId = +idParam;
      this.product = this.productService.getProductById(productId);
    }
  }
}