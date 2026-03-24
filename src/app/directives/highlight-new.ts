import { Directive, HostBinding, HostListener, input, signal } from '@angular/core';

@Directive({
  selector: '[appHighlightNew]',
  host: {
    '[style.backgroundColor]':'this.bgc()',
    '(mouseenter)':'this.onMouseEnter()',
    '(mouseleave)':'this.onMouseLeave()',
  }
})
export class HighlightNew {
  // moyen défini l'apprence
  in = input('yellow');
  out = input('red')
  bgc = signal(this.out());
  // moyen comportement

  onMouseEnter() {
    this.bgc.set(this.in());
  }
  onMouseLeave() {
    this.bgc.set(this.out());
  }
}
