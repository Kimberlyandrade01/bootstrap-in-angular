import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TarjetaComponent } from '../tarjeta/tarjeta.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  standalone: true,
  imports: [CommonModule, TarjetaComponent]
})
export class MenuComponent {
  // Propiedades para el formulario
    mostrarFormulario = false; // Cambio a false para que inicie oculto
    nuevaTarjeta = {
    imagen: '',
    titulo: '',
    descripcion: ''
  };

  listaPorsche = [
    { 
      imagen: "assets/pastel.png",
      titulo: "Pastel de 3 leches",
      descripcion: "El icónico es delicioso."
    },
    { 
      imagen: "assets/pastel2.png",
      titulo: "Delicioso de chocolate",
      descripcion: "Recomendado por la sociedad de chocolateros."
    },
    { 
      imagen: "assets/pastel3.png",
      titulo: "Pastel de fresa",
      descripcion: "Delicioso y fresco."
    }
  ];

  // Función para mostrar/ocultar el formulario
  toggleFormulario() {
    this.mostrarFormulario = !this.mostrarFormulario;
    if (!this.mostrarFormulario) {
      this.limpiarFormulario();
    }
  }
  limpiarFormulario() {
    throw new Error('Method not implemented.');
  }

  // Función para agregar nueva tarjeta
    agregarTarjetaSinNgModel(titulo: string, imagen: string, descripcion: string, 
                            tituloInput: HTMLInputElement, imagenInput: HTMLInputElement, descripcionInput: HTMLTextAreaElement) {
      if (titulo && imagen && descripcion) {
        this.listaPorsche.push({ titulo, imagen, descripcion });
        this.limpiarCamposSinNgModel(tituloInput, imagenInput, descripcionInput);
        this.mostrarFormulario = false; // opcional: ocultar formulario después de agregar
      }
    }

  // Función para limpiar el formulario
  limpiarCamposSinNgModel(tituloInput: HTMLInputElement, imagenInput: HTMLInputElement, descripcionInput: HTMLTextAreaElement) {
  tituloInput.value = '';
  imagenInput.value = '';
  descripcionInput.value = '';
}}
