import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJoueursComponent } from './add-joueurs.component';

describe('AddJoueursComponent', () => {
  let component: AddJoueursComponent;
  let fixture: ComponentFixture<AddJoueursComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddJoueursComponent]
    });
    fixture = TestBed.createComponent(AddJoueursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
