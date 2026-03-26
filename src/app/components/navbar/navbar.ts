import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from "@angular/router";
import { AuthService } from '../../auth/services/auth-service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  authservice = inject(AuthService);
  router = inject(Router);
  isAuthenticated() {
    return this.authservice.isAuthenticated();
  }

  logout() {
    this.authservice.logout();
    this.router.navigate(['login']);
  }
}
