import { Component, Input } from '@angular/core';

export interface Product {
  titulo: string;
  descripcion: string;
  imagen?: string;
}

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent {
  // Opción segura: puede ser undefined, el template lo maneja con *ngIf o ?.
  @Input() myCard?: Product;
}
