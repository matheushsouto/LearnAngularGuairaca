import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  public nome: string = 'João das Couves';
  public dataAtual: Date = new Date();
  public valorDolar: number = 4.97;
}
