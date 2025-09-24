import { Injectable } from '@angular/core';

export interface Producto {
  titulo: string;
  descripcion: string;
  imagen: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private productos: Producto[] = [
    { titulo: 'Pastel Chocolate', descripcion: 'Chocolate: Lorem ipsum dolor sit amet consectetur adipiscing elit.', imagen: 'chocolate.jpg' },
    { titulo: 'Pastel Fresa', descripcion: 'Fresa: Lorem ipsum dolor sit amet consectetur adipiscing elit.', imagen: 'fresa.jpg' }
  ];

  getProductos() {
    return this.productos;
  }

  agregarProducto(producto: Producto) {
    this.productos.push(producto);
  }
}
