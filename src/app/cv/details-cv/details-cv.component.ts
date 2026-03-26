import { Component, inject, signal } from "@angular/core";
import { Cv } from "../model/cv";
import { ActivatedRoute, Router } from "@angular/router";
import { CvService } from "../services/cv.service";
import { APP_ROUTES } from "../../config/app-routes.config";
import { DefaultImagePipe } from "../pipes/default-image-pipe";


@Component({
  selector: 'app-details-cv',
  templateUrl: './details-cv.component.html',
  styleUrls: ['./details-cv.component.css'],
  imports: [DefaultImagePipe],
})
export class DetailsCvComponent {
  cv = signal<Cv | null>(null);
  acr = inject(ActivatedRoute);
  router = inject(Router);
  cvService = inject(CvService);
  constructor() {
    // 1 récupérer l'id de la route
    const id = this.acr.snapshot.params['id'];
    // 2 appeler le service pour récupérer le cv
    // 21 Si existe j'affiche
    //this.cv.set(this.cvService.findCvById(id));
      this.cvService.getCvByIdFromApi(id).subscribe({
        next: (cv) => {
          this.cv.set(cv);
        },
        error: (error) => {
          // 22 sinon redirige
          this.router.navigate([APP_ROUTES.cv]);
        }
      });

  }
  deleteCv() {
    const cv = this.cv();
    if (cv) {
      this.cvService.deleteCvFromApi(cv.id).subscribe({
        next: () => {
          this.router.navigate([APP_ROUTES.cv]);
        },
        error: (e) => {
          console.log(e);
        }
      })
    }
  }
}
