import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-simulador',
  standalone: true,
  imports: [],
  templateUrl: './simulador.component.html',
  styleUrl: './simulador.component.css'
})
export class SimuladorComponent implements OnInit {

  datosPromesa: string = '';
  datosObservables: string[] = [];

  ngOnInit(): void{
    //Llamar al inicializar el componente
    this.obtenerDatosConPromesa();
    this.obtenerDatosConObservables().subscribe({
      next: (dato) => this.datosObservables.push(dato),
      complete: () => console.log('Observable completado'),
    });
  }


  obtenerDatosConPromesa(){
    const promesa = new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        resolve('Hola, soy un dato obtenido con promesa');
      }, 2000);
    });

    promesa
    .then((dato) =>{
      this.datosPromesa = dato;
      console.log(dato);
    })
    .catch((error) => console.log(error));
  }

  obtenerDatosConObservables(): Observable<string>{
    return new Observable<string> ((subscriber) =>{
      subscriber.next('Primer dato del observable');
      setTimeout(() => subscriber.next('Segundo dato del observable'), 1000);
      setTimeout(() => subscriber.next('Tercer dato del observable'), 2000);
      setTimeout(() => subscriber.complete(), 3000);

    });
  }

}