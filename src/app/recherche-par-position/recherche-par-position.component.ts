import { Component } from '@angular/core';
import { joueur } from '../modele/joueur.modele';
import { Position } from '../modele/position.modele';
import { JoueurService } from '../services/joueur.service';

@Component({
  selector: 'app-recherche-par-position',
  templateUrl: './recherche-par-position.component.html',
  styleUrls: ['./recherche-par-position.component.css']
})
export class RechercheParPositionComponent {
joueurs !: joueur [];
IdCat!:number;
position!:Position[];
ngOnInit(): void {
  this.JoueurService.listePositions().
  subscribe(cats => {this.position = cats;
  console.log(cats);
  });
}
  
constructor(private JoueurService:JoueurService){}
onChange() {
  this.JoueurService.rechercherParpos(this.IdCat).
  subscribe(prods =>{this.joueurs=prods});
  }
  
}


