import { Injectable } from '@angular/core';
import { joueur } from '../modele/joueur.modele';
import { Position } from '../modele/position.modele';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};



@Injectable({
  providedIn: 'root'
})
export class JoueurService {

  joueurs!: joueur[]; //un tableau de joueurs
  j !: joueur;
  position!: Position[];
  apiURL: string = 'http://localhost:8090/joueur/api';
  apiURLj: string = 'http://localhost:8090/joueur/j/pos';
  apiURLjp: string = 'http://localhost:8090/joueur/api/jpos';

  constructor(private http: HttpClient, private authService: AuthService) {
    /*this.position = [ {idCat : 1, nomCat : "BU"},
                      {idCat : 2, nomCat : "MC"},
                      {idCat : 3, nomCat : "GK"}];                      

    this.joueurs = [
      {idjoueur : 1, nomjoueur : "messi52", prixjoueur : 3000.600, equipejoueur :"barcalona",position:{idCat : 1, nomCat : "BU"}},
      {idjoueur : 2, nomjoueur : "ronaldo", prixjoueur : 450, equipejoueur:"real madrid",position:{idCat : 1, nomCat : "GK"}},
      {idjoueur : 3, nomjoueur :"rashford", prixjoueur : 900.123, equipejoueur:"man united",position:{idCat : 2, nomCat : "mc"}},
       ];*/
  }

  listeJoueur(): Observable<joueur[]> {
    let jwt = this.authService.getToken();
    jwt = "Bearer " + jwt;
    let httpHeaders = new HttpHeaders({ "Authorization": jwt })
    return this.http.get<joueur[]>(this.apiURL + "/all", { headers: httpHeaders });
  }

  ajouterjoueurs(j: joueur): Observable<joueur> {
    let jwt = this.authService.getToken();
    jwt = "Bearer " + jwt;
    let httpHeaders = new HttpHeaders({ "Authorization": jwt })
    return this.http.post<joueur>(this.apiURL + "/addjo", j, { headers: httpHeaders });
  }
  supprimerJoueur(id: number) {
    const url = `${this.apiURL}/deljo/${id}`;
    let jwt = this.authService.getToken();
    jwt = "Bearer " + jwt;
    let httpHeaders = new HttpHeaders({ "Authorization": jwt })
    return this.http.delete(url, { headers: httpHeaders });
  }
  consulterJoueur(id: number): Observable<joueur> {
    const url = `${this.apiURL}/getbyid/${id}`;
    let jwt = this.authService.getToken();
    jwt = "Bearer " + jwt;
    let httpHeaders = new HttpHeaders({ "Authorization": jwt })
    return this.http.get<joueur>(url, { headers: httpHeaders });
  }
  trierjoueur() {
    this.joueurs = this.joueurs.sort((n1, n2) => {
      if (n1.idjoueur! > n2.idjoueur!) {
        return 1;
      }
      if (n1.idjoueur! < n2.idjoueur!) {
        return -1;
      }
      return 0;
    });
  }
  updatejoueur(p: joueur): Observable<joueur> {
    let jwt = this.authService.getToken();
    jwt = "Bearer " + jwt;
    let httpHeaders = new HttpHeaders({ "Authorization": jwt })
    return this.http.put<joueur>(this.apiURL + "/updatejo", p, { headers: httpHeaders });
  }

  listePositions(): Observable<Position[]> {
    let jwt = this.authService.getToken();
    jwt = "Bearer " + jwt;
    let httpHeaders = new HttpHeaders({ "Authorization": jwt })
    return this.http.get<Position[]>(this.apiURLj, { headers: httpHeaders }
    );

  }

  consulterPosition(id: number): Position {
    return this.position.find(cat => cat.idPos == id)!;
  }

  rechercherParNom(nom: string): Observable<joueur[]> {
    const url = `${this.apiURL}/ByName/${nom}`;
    return this.http.get<joueur[]>(url);
  }

  rechercherParpos(idPos: number): Observable<joueur[]> {
    const url = `${this.apiURLjp}/${idPos}`;
    return this.http.get<joueur[]>(url);
  }
  ajouterCategorie( cat: Position):Observable<Position>{
    return this.http.post<Position>(this.apiURLj, cat, httpOptions);
    }

}
