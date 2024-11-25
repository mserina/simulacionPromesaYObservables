import { Component, inject, OnInit } from '@angular/core';
import { UsersService } from '../servicios/users.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit{


  private usersService = inject(UsersService); //Para injectar un servicio a un componente

  users: any[] = [];

  ngOnInit() {
    this.usersService.getUsers().subscribe ((resp: any) => {
      this.users = resp.data;
      console.log('Usuarios -> ', this.users);
    })

    console.log("Este texto se imprimio antes");
    
  }
}
