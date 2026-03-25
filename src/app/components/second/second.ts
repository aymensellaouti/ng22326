import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-second',
  imports: [],
  template: `<h2>Hello {{ name() }}</h2>`,
  styles: ``,
})
export class Second {
  name = signal('');
  acr = inject(ActivatedRoute);
  router = inject(Router);
  redirectToCv() {
    this.router.navigate(['cv']);
  }
  constructor() {
    this.name.set(this.acr.snapshot.params['name'])
  }
}
