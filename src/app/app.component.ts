import { Component } from '@angular/core';
import { AgregarTareaComponent } from './agregar-tarea/agregar-tarea.component';
import { ListaTareasComponent } from './lista-tareas/lista-tareas.component';
import { EliminarTareaComponent } from './eliminar-tarea/eliminar-tarea.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ListaTareasComponent, EliminarTareaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
