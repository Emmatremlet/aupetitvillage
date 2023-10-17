import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AproposComponent } from './apropos/apropos.component';
import { ContactComponent } from './contact/contact.component';
import { FicheProduitComponent } from './fiche-produit/fiche-produit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AproposComponent,
    ContactComponent,
    FicheProduitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ]
})
export class AppModule { }
