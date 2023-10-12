import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AproposComponent } from './apropos/apropos.component';
import { HomeComponent } from './home/home.component'
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { FicheProduitComponent } from './fiche-produit/fiche-produit.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "products", component: ProductsComponent },
  { path: "apropos", component: AproposComponent },
  { path: "contact", component: ContactComponent },
  { path: "ficheproduit", component: FicheProduitComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
