import { Component, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-agregar-tarea',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './agregar-tarea.component.html',
  styleUrl: './agregar-tarea.component.css'
})
export class AgregarTareaComponent {
  @Input() agregarTareasRecibidas: string[] = [];
  
  //Método para agragar tareas
  nuevaTarea = "";
  agregarTarea(){
    if(this.nuevaTarea.trim() !== ""){
      this.agregarTareasRecibidas.push(this.nuevaTarea);
      localStorage.setItem('tareas', JSON.stringify(this.agregarTareasRecibidas));
     
      this.nuevaTarea="";
    }
  }
}
