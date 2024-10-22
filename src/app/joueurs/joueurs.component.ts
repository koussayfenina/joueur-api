import { Component } from '@angular/core';
import { joueur } from '../modele/joueur.modele';
import { JoueurService } from '../services/joueur.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-joueurs',
  templateUrl: './joueurs.component.html',
  styleUrls: ['./joueurs.component.css']
})
export class JoueursComponent {
  Joueurs? : joueur[]; //un tableau de joueurs
  constructor(private joueurservice:JoueurService,public authService: AuthService) {
    
    }
    ngOnInit(): void {
     this.chargerjoueur();
  }

  chargerjoueur(){
    this.joueurservice.listeJoueur().subscribe(prods => {
    console.log(prods);
    this.Joueurs = prods;
    }); 
    }
  supprimerJoueur(j :joueur)
{
  let conf = confirm("Etes-vous sûr ?");
  if (conf)
    this.joueurservice.supprimerJoueur(j.idjoueur).subscribe(() => {
    console.log("produit supprimé");
    this.chargerjoueur();
});

}
}
