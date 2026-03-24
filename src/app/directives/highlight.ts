import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class Highlight {
  // moyen défini l'apprence
  @HostBinding('style.backgroundColor')
  bgc = 'red';
  // moyen comportement
  @HostListener('mouseenter')
  onMouseEnter() {
    this.bgc = 'yellow';
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    this.bgc = 'red';
  }
}
