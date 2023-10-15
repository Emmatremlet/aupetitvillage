import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../products.service';
import { Product } from '../product.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fiche-produit',
  templateUrl: './fiche-produit.component.html',
  styleUrls: ['./fiche-produit.component.css']
})
export class FicheProduitComponent implements OnInit{
  @Input() title :string = ''
  @Input() description :string = ''
  @Input() materiau: string = ''
  @Input() hauteur :string = ''
  @Input() prix :string = ''
  @Input() disponibilite: string = ''

  product: Product | undefined;

  constructor(private route: ActivatedRoute, private productService: ProductService) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      const productId = +idParam;
      this.product = this.productService.getProductById(productId);
    }
  }
}
