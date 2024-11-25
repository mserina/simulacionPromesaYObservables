import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SimuladorComponent } from "./simulador/simulador.component";
import { UsersComponent } from "./users/users.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SimuladorComponent, UsersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'simulacion';
}
