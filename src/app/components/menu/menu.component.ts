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
    mostrarFormulario: boolean = false; // Cambio a false para que inicie oculto
    nuevaTarjeta = {
    imagen: '',
    titulo: '',
    descripcion: ''
  };

toggleFormulario(): void {
  this.mostrarFormulario = !this.mostrarFormulario;
}

// Al inicio de la clase
listaPasteles: any[] = [];

// Cuando se inicialice el componente
ngOnInit() {
  const dataGuardada = localStorage.getItem('listaPasteles');
  if (dataGuardada) {
    this.listaPasteles = JSON.parse(dataGuardada);
  } else {
    // Lista inicial por defecto
    this.listaPasteles = [
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
    this.guardarEnLocalStorage();
  }
}

// Guardar en localStorage cada vez que se modifique la lista
guardarEnLocalStorage() {
  localStorage.setItem('listaPasteles', JSON.stringify(this.listaPasteles));
}

// Agregar nuevo pastel
agregarPastelSinNgModel(
  titulo: string,
  imagen: string,
  descripcion: string,
  tituloInput: any,
  imagenInput: any,
  descripcionInput: any
) {
  if (titulo && descripcion && imagen) {
    this.listaPasteles.push({
      titulo: titulo,
      imagen: imagen,
      descripcion: descripcion
    });
    this.guardarEnLocalStorage(); // 👈 Guardamos la lista actualizada
    this.limpiarCamposSinNgModel(tituloInput, imagenInput, descripcionInput);
  }
}

// Limpiar campos
limpiarCamposSinNgModel(
  tituloInput: any,
  imagenInput: any,
  descripcionInput: any
) {
  tituloInput.value = '';
  imagenInput.value = '';
  descripcionInput.value = '';
}

// Eliminar pastel
eliminarPastel(index: number) {
  this.listaPasteles.splice(index, 1);
  this.guardarEnLocalStorage(); // 👈 Importante guardar cambios
}
}