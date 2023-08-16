import { ContadorService } from './../service/contador.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public users!: string[];
  constructor(
    private contadorService: ContadorService)
    {
      this.getUsers();
      console.log(this.users);
  }

  getUsers() {
    this.users = this.contadorService.getUsers();
  }
}
