import {  inject, Injectable, Signal, signal } from '@angular/core';
import { Cv } from '../model/cv';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_API } from '../../config/app-api.config';
import { Observable } from 'rxjs';
import { APP_CONST } from '../../config/app-constantes.config';



@Injectable({
  providedIn: 'root',
})
export class CvService {
  #cvs = signal<Cv[]>([
    new Cv(1, 'Kherfani', 'Yassmine', 'Dev', '12345678', 'rotating_card_profile.png', 20),
    new Cv(2, 'Abassi', 'Oussama', 'Dev', '12345677', '', 20),
    new Cv(3, 'Ben Younes', 'Cherif', 'Dev', '12345679', '             ', 20),
  ]);
  httpClient = inject(HttpClient);

  #selectedCv = signal<Cv | null>(null);
  /**
   * var le cv séléctionné
   */
  selectedCv = this.#selectedCv.asReadonly();
  /**
   * Retourne la liste des cvs
   * @returns Signal<Cv[]>
   */
  getCvs(): Signal<Cv[]> {
    return this.#cvs.asReadonly();
  }

  getCvsFromApi(): Observable<Cv[]> {
    return this.httpClient.get<Cv[]>(APP_API.cv);
  }

  getCvByIdFromApi(id: number):Observable<Cv> {
    return this.httpClient.get<Cv>(APP_API.cv + id);
  }

  deleteCvFromApi(id: number): Observable<{count: number}> {

    //const params = new HttpHeaders().set('access_token', 'token');
    return this.httpClient.delete<{ count: number }>(APP_API.cv + id);
  }

  /**
   *
   * Cherche un cv avec son id dans lai liste fictive de cvs
   *
   * @param id
   * @returns Cv | null
   */
  findCvById(id: number): Cv | null {
    return this.#cvs().find((cv) => cv.id == id) ?? null;
  }

  /**
   *
   * Supprime un cv s'il le trouve
   *
   * @param cv : Cv
   * @returns boolean
   */
  deleteCv(cv: Cv): void {
    this.#cvs.update((cvs) => cvs.filter((actualCv) => actualCv != cv));
  }

  selectCv(cv: Cv) {
    this.#selectedCv.set(cv);
  }
}
