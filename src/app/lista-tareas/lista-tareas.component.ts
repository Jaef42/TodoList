import { Component, Inject } from '@angular/core';
import { AgregarTareaComponent } from '../agregar-tarea/agregar-tarea.component';
import { EliminarTareaComponent } from '../eliminar-tarea/eliminar-tarea.component';
import { DOCUMENT,  } from '@angular/common';

@Component({
  selector: 'app-lista-tareas',
  standalone: true,
  imports: [AgregarTareaComponent, EliminarTareaComponent],
  templateUrl: './lista-tareas.component.html',
  styleUrl: './lista-tareas.component.css'
})
export class ListaTareasComponent {
  //Array
 tareas: string[] = [];
  //Contador()
  contador:  number =1;
  
 /*  constructor(@Inject(DOCUMENT) private document: Document) {
    // Inicializar las tareas desde el almacenamiento local (si existen)
    const datos = localStorage?.getItem('tareas');
    if (datos !== null) {
      const arreglo = JSON.parse(datos);
      if (arreglo !== null) {
        this.tareas = arreglo;
      }
    }
    this.tareaCompletada = Array(this.tareas.length).fill(true);
  } */
  
  //Propiedad para cambiar el estado de la tarea
  tareaCompletada: boolean[] = Array(this.tareas.length).fill(true);

  //Método para cambiar estado
  cambiarEstado(index: number){
    this.tareaCompletada[index]= !this.tareaCompletada[index];
    
  }
}
