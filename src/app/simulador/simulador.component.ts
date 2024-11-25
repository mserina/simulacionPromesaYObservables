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


  ngOnInit(): void {
    // Este método se ejecuta automáticamente cuando el componente se inicializa.
  
    // Llamada al método que utiliza una promesa para obtener un dato asíncrono.
    this.obtenerDatosConPromesa();
  
    // Llamada al método que devuelve un Observable.
    // Se suscribe al Observable para recibir sus valores emitidos.
    this.obtenerDatosConObservables().subscribe({
      // 'next': Se ejecuta cada vez que el Observable emite un nuevo valor.
      // Cada valor recibido se agrega al array 'datosObservables'.
      next: (dato) => this.datosObservables.push(dato),
  
      // 'complete': Se ejecuta cuando el Observable finaliza su emisión de valores.
      complete: () => console.log('Observable completado'),
    });
  }
  
  

  obtenerDatosConPromesa() {
    // Se crea una nueva promesa que emitirá un string como resultado.
    const promesa = new Promise<string>((resolve, reject) => {
      // Simula una operación asíncrona con un retraso de 2 segundos.
      setTimeout(() => {
        // Llama a 'resolve' para resolver la promesa con el dato.
        resolve('Hola, soy un dato obtenido con promesa');
      }, 2000);
    });
  
    // Se maneja la promesa una vez que se resuelve.
    promesa
      .then((dato) => {
        // Si la promesa se resuelve correctamente:
        // - Guarda el dato en la variable 'datosPromesa'.
        this.datosPromesa = dato;
        // - Muestra el dato en la consola.
        console.log(dato);
      })
      .catch((error) => {
        // Si ocurre un error, lo captura y lo muestra en la consola.
        console.log(error);
      });
  }
  

  obtenerDatosConObservables(): Observable<string> {
    // Devuelve un Observable que emitirá datos de tipo 'string'.
    return new Observable<string>((subscriber) => {
      // Inmediatamente emite el primer valor.
      subscriber.next('Primer dato del observable');
  
      // Después de 1 segundo, emite el segundo valor.
      setTimeout(() => subscriber.next('Segundo dato del observable'), 1000);
  
      // Después de 2 segundos, emite el tercer valor.
      setTimeout(() => subscriber.next('Tercer dato del observable'), 2000);
  
      // Después de 3 segundos, finaliza el flujo llamando a 'complete'.
      setTimeout(() => subscriber.complete(), 3000);
    });
  }
  

}