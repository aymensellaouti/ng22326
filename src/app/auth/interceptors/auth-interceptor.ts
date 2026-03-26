import { HttpHeaders, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth-service';
import { APP_CONST } from '../../config/app-constantes.config';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  if (authService.isAuthenticated()) {
    const headers = new HttpHeaders().set(
          APP_CONST.authHeader,
          localStorage.getItem(APP_CONST.authToken) ?? ''
    );
    const newReq = req.clone({headers});
    return next(newReq);
  }
  return next(req);
};
