import { Component, Input } from '@angular/core';

export interface Product {
  titulo: string;
  descripcion: string;
  imagen?: string;
}

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css'],
  standalone: true
})
export class TarjetaComponent {
  @Input() myCard: any;  // 👈 necesario para recibir [myCard] en el menú
}