import { Component } from '@angular/core';
import { joueur } from '../modele/joueur.modele';
import { JoueurService } from '../services/joueur.service';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styleUrls: ['./recherche-par-nom.component.css']
})
export class RechercheParNomComponent {
  joueurs: joueur[] = [];
  alljoueurs: joueur[] = [];
  searchTerm: string = '';

  constructor(private JoueurService: JoueurService) {}

  ngOnInit(): void {
    // Fetch all players initially
    this.JoueurService.listeJoueur().subscribe(joueurs => {
      this.alljoueurs = joueurs;
      this.joueurs = [...this.alljoueurs]; // Copy to players to be displayed
    });
  }

  onKeyUp(filterText: string) {
    // Reset the displayed list to alljoueurs and filter it
    this.joueurs = this.alljoueurs.filter(joueur =>
      joueur.nomjoueur.toLowerCase().includes(filterText.toLowerCase())
    );
  }
}
