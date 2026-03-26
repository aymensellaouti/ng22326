import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth-service';
import { Credentials } from '../dto/credentials.dto';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { APP_ROUTES } from '../../config/app-routes.config';
import { APP_CONST } from '../../config/app-constantes.config';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  authService = inject(AuthService);
  toastr = inject(ToastrService);
  router = inject(Router);
  login(credentials: Credentials) {
    this.authService.login(credentials).subscribe({
      next:(response) => {
        this.router.navigate([APP_ROUTES.cv]);
      },
      error:(error) => {
        this.toastr.error('Veuillez vérifier vos credentials')
      },
    })
  }
}
