import { Component } from '@angular/core';
import { User } from '../modele/user.modele';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  user = new User();
  erreur = 0;
  err:number = 0;


  constructor(private authService: AuthService,
    private router: Router) { }


  onLoggedin() {
    this.authService.login(this.user).subscribe({
      next: (data) => {
      let jwToken = data.headers.get('Authorization')!;
      this.authService.saveToken(jwToken);
      this.router.navigate(['/']);
      },
      error: (err: any) => {
      this.err = 1;
      }
      });

  }
}
