import { Component } from '@angular/core';

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
  Linkedin: any ="../assets/linkedin.png"
}
