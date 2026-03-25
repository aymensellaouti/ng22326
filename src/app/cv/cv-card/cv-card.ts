import { Component, inject, input } from '@angular/core';
import { Cv } from '../model/cv';
import { DefaultImagePipe } from '../pipes/default-image-pipe';
import { EmbaucheService } from '../services/embauche.service';
import { ToastrService } from 'ngx-toastr';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-cv-card',
  imports: [DefaultImagePipe, RouterLink],
  templateUrl: './cv-card.html',
  styleUrl: './cv-card.css',
})
export class CvCard {
  cv = input<Cv | null>(null);
  embaucheService = inject(EmbaucheService);
  toastr = inject(ToastrService);
  embaucher() {
    const cv = this.cv()
    if (cv) {
      if (this.embaucheService.embaucher(cv)) {
        this.toastr.success(`Le cv ${cv.firstname} ${cv.name} a été préembauché avec succès`);
      } else {
        this.toastr.warning(`Le cv ${cv.firstname} ${cv.name} est déjà préembauché :)`);
      }
    }
  }
}
