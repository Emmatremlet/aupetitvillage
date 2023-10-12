import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  @Input() title :string = ''
  @Input() description :string = ''
  @Input() materiau: string = ''
  @Input() hauteur :string = ''
  @Input() prix :string = ''
  @Input() disponibilite :string = ''
}
