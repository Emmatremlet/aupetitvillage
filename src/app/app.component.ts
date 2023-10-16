import { Component } from '@angular/core';
import { Product } from './product.model';
import { ProductService } from './products.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], 
})
export class AppComponent {
  title = 'au-petit-village';
  logo: any = "../assets/logo.png";
  panier: any = "../assets/panier.png";
  compte: any = "../assets/astérix.png";
  Facebook: any = "../assets/facebook.png";
  Instagram: any = "../assets/instagram.png";
  Linkedin: any = "../assets/linkedin.png"
  
  products: Product[];

  product: Product | undefined;
  

  constructor(private productService: ProductService, private route: ActivatedRoute) {
    this.products = productService.getProducts();
  }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      const productId = +idParam;
      this.product = this.productService.getProductById(productId);
    }
  }
}
