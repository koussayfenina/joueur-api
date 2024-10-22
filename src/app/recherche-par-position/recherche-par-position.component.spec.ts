import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheParPositionComponent } from './recherche-par-position.component';

describe('RechercheParPositionComponent', () => {
  let component: RechercheParPositionComponent;
  let fixture: ComponentFixture<RechercheParPositionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RechercheParPositionComponent]
    });
    fixture = TestBed.createComponent(RechercheParPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
