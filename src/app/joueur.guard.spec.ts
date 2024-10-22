import { TestBed } from '@angular/core/testing';
import { joueurGuard } from './joueur.guard';


describe('joueurGuard', () => {
  let guard: joueurGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [joueurGuard]
    });

    guard = TestBed.inject(joueurGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});