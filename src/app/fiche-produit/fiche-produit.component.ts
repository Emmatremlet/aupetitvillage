import { Component, Input } from '@angular/core';
import { ProductService } from '../products.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-fiche-produit',
  templateUrl: './fiche-produit.component.html',
  styleUrls: ['./fiche-produit.component.css']
})
export class FicheProduitComponent {
  @Input() title :string = ''
  @Input() description :string = ''
  @Input() materiau: string = ''
  @Input() hauteur :string = ''
  @Input() prix :string = ''
  @Input() disponibilite: string = ''
  products: Product[];

  constructor(private productService: ProductService) {
    this.products = productService.getProducts();
  }
}
