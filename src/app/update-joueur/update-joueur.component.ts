import { Component } from '@angular/core';
import { JoueurService } from '../services/joueur.service';
import { ActivatedRoute, Router } from '@angular/router';
import { joueur } from '../modele/joueur.modele';
import { Position } from '../modele/position.modele';

@Component({
  selector: 'app-update-joueur',
  templateUrl: './update-joueur.component.html',
  styleUrls: ['./update-joueur.component.css']
})
export class UpdateJoueurComponent {
  currentjoueur = new joueur;
  position!:Position[];
  updatedposId! : number;

  constructor(private activatedRoute: ActivatedRoute,
    private produitService: JoueurService,private router:Router){}
    ngOnInit() {
    this.produitService.listePositions().
    subscribe(cats => {this.position = cats;
    console.log(cats);});

    this.produitService.consulterJoueur(this.activatedRoute.snapshot.params['id']).subscribe( prod =>{ this.currentjoueur = prod; 
    this.updatedposId = 
    this.currentjoueur.position.idPos;
    } ) ;
    }
    updateProduit()
{ 
      this.currentjoueur.position = this.position.
    find(cat => cat.idPos == this.updatedposId)!;
    this.produitService.updatejoueur(this.currentjoueur).subscribe(prod => {
    this.router.navigate(['joueurs']); }
    );
    
}

}
