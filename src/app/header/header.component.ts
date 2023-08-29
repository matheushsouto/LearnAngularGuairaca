import { Router } from '@angular/router';
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
    private contadorService: ContadorService,
    private router: Router
    )
    {
      this.getUsers();
      console.log(this.users);
  }

  getUsers() {
    this.users = this.contadorService.getUsers();
  }

  goToHome() {
    this.router.navigate(['/']);
  }

  goToAbout(id: number) {
    this.router.navigate(['/about', id]);
  }

  goToContact(id: number) {
    this.router.navigate(['/contact', id]);
  }
}
