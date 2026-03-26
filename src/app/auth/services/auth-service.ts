import { inject, Injectable } from '@angular/core';
import { Credentials } from '../dto/credentials.dto';
import { Observable, tap } from 'rxjs';
import { LoginResponseDto } from '../dto/login-response.dto';
import { HttpClient } from '@angular/common/http';
import { APP_CONST } from '../../config/app-constantes.config';
import { APP_API } from '../../config/app-api.config';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  http = inject(HttpClient);
  isAuthenticated(): boolean {
    return !! localStorage.getItem(APP_CONST.authToken);
  }
  login(credentials: Credentials): Observable<LoginResponseDto> {
    return this.http.post<LoginResponseDto>(APP_API.login, credentials);
  }

  logout() {
    localStorage.removeItem(APP_CONST.authToken);
  }
}
