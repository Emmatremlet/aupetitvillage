import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  FigurineAsterix: any = "../assets/figurine-asterix.jpeg"
  FigurineObelix: any = "../assets/figurine-obelix.jpeg"
  FigurineIdefix: any = "../assets/figurine-idefix.webp"

  private products: Product[] = [
    {
      name: 'Astérix Le Gaulois',
      image: this.FigurineAsterix,
      price: 24.99,
      description: "Figurine en résine de haute qualité représentant le célèbre héros gaulois, Astérix. Il est vétu de sa tenue traditionelle, coiffé de son casque ailé, et tient son éternelle potion magique dans une main. Cette figurine est un hommage parfait au personnage d'Astérix créé par René Goscinny et Albert Uderzo.",
      materiau: 'Résine',
      hauteur: '15 cm',
      disponibilite: 'En stock'
    },
    {
      name: 'Obélix Le Gaulois',
      image: this.FigurineObelix,
      price: 26.99,
      description: "Figurine en résine d'Obélix, le fidèle ami d'Astérix. Obélix est vêtu de sa tenue caractéristique avec son short rayé et son casque, et il tient un menhir dans une main. Cette figurine est parfaite pour les collectionneurs et les fans d'Astérix et Obélix.",
      materiau: 'Résine',
      hauteur: '15 cm',
      disponibilite: 'En stock'
    },
    {
      name: 'Idéfix Le Chien',
      image: this.FigurineIdefix,
      price: 12.99,
      description: "Figurine en plastique de haute qualité représentant Idéfix, le petit chien blanc d'Astérix et Obélix. Idéfix est assis paisiblement avec son os à mâcher préféré à ses côtés. Une figurine parfaite pour les enfants et les fans de tous âges.",
      materiau: 'Plastique',
      hauteur: '7 cm',
      disponibilite: 'En stock'
    },
  ];

  getProducts(): Product[] {
    return this.products;
  }

  sortProductsByNameAscending() {
    return(this.products.sort((a, b)=>a.name.localeCompare(b.name)))
  }
  sortProductsByNameDescending() {
    return(this.products.sort((a, b)=>b.name.localeCompare(a.name)))
  }
}

