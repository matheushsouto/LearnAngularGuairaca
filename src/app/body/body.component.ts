import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  /** Input - Recebendo Informação do componente pai */
  @Input() message!: string[];
  /** Output - Criando um event emitter para enviar informação
   * para o componente pai */
  @Output() messageEvent = new EventEmitter<string>();

  constructor() {
    console.log(this.message);
  }

  /** Metódo para enviar informaçoes para o pai */
  sendMessage() {
    this.messageEvent.emit('Passando valor para pai');
  }
}
