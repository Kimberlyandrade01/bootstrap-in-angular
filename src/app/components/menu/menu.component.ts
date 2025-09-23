import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TarjetaComponent } from '../tarjeta/tarjeta.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [TarjetaComponent, FormsModule, CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
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
      imagen: "assets/porshe.avif",
      titulo: "Porsche 911 GT3",
      descripcion: "El icónico deportivo alemán con motor atmosférico."
    },
    { 
      imagen: "assets/porshe911.png",
      titulo: "Porsche 718 Cayman",
      descripcion: "Coupé de motor central perfecto para carretera y pista."
    },
    { 
      imagen: "assets/Taycan.png",
      titulo: "Porsche Taycan",
      descripcion: "El primer deportivo 100% eléctrico de Porsche."
    }
  ];

  // Función para mostrar/ocultar el formulario
  toggleFormulario() {
    this.mostrarFormulario = !this.mostrarFormulario;
    if (!this.mostrarFormulario) {
      this.limpiarFormulario();
    }
  }

  // Función para agregar nueva tarjeta
  agregarTarjeta() {
    if (this.nuevaTarjeta.titulo && this.nuevaTarjeta.descripcion && this.nuevaTarjeta.imagen) {
      this.listaPorsche.push({
        imagen: this.nuevaTarjeta.imagen,
        titulo: this.nuevaTarjeta.titulo,
        descripcion: this.nuevaTarjeta.descripcion
      });
      this.limpiarFormulario();
    }
  }

  // Función para limpiar el formulario
  limpiarFormulario() {
    this.nuevaTarjeta = {
      imagen: '',
      titulo: '',
      descripcion: ''
    };
  }
}
