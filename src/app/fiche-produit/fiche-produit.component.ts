import { Component, Input } from '@angular/core';
import { ProductService } from '../products.service';
import { Product } from '../product.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fiche-produit',
  templateUrl: './fiche-produit.component.html',
  styleUrls: ['./fiche-produit.component.css']
})
export class FicheProduitComponent {
  @Input() name: string = ''
  @Input() description: string = ''
  @Input() materiau: string = ''
  @Input() hauteur: string = ''
  @Input() price: number = 0
  @Input() disponibilite: string = ''

  product: Product | undefined;

  constructor(private productService: ProductService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      const productId = +idParam;
      this.product = this.productService.getProductById(productId);
    }
  }


}
