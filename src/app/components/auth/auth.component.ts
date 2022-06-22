import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  user: User = {};
  error: string | null = null;
  constructor(
    private as: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }
  connexion() {
    this.as.login(this.user).subscribe({
      next: res => {
        if (res.token != null) {
          localStorage.setItem('jeton', res.token);
          this.router.navigateByUrl('/personne');
        }
      },
      error: res => {
        this.error = res.message;
      }
    });
  }
}
