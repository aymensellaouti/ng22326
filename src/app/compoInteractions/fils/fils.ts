import { Component, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-fils',
  imports: [],
  templateUrl: './fils.html',
  styleUrl: './fils.css',
})
export class Fils {
  messagePapa = input.required({
    alias: 'message',
    transform: (value: string) => {
     return "Le message de papa est " + value;
    }
  });

  sendMessageToDad = output<string>();

  onSendMessage() {
    this.sendMessageToDad.emit('Ok ama nakhou el ba9i :D');
  }
}

