import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheProduitComponent } from './fiche-produit.component';

describe('FicheProduitComponent', () => {
  let component: FicheProduitComponent;
  let fixture: ComponentFixture<FicheProduitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FicheProduitComponent]
    });
    fixture = TestBed.createComponent(FicheProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
