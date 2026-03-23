import { Component } from '@angular/core';
import { Second } from "../second/second";

@Component({
  selector: 'app-first',
  imports: [Second],
  templateUrl: './first.html',
  styleUrl: './first.css',
})
export class First {
  // attributs => Etat / State
  name = 'aymen';
  // méthodes => Comportement / Beahviour
  /**
   * @var gére le fait que l'élement est caché ou non
   */
  isHidden = false;
  /**
   * @var le contenu de l'input
   */
  message = '';
  constructor() {
    // setTimeout(() => {
    //   this.name = "cherif"
    // }, 2000)
  }

  showHide() {
    this.isHidden = !this.isHidden;
  }

  changeMessage(newMessage: string) {
    this.message = newMessage;
  }
}
