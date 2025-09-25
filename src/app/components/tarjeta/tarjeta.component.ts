import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Product {
  titulo: string;
  descripcion: string;
  imagen?: string;
}

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css'],
  standalone: true,
  imports: [CommonModule]  // <-- esto arregla los warnings de *ngIf
})
export class TarjetaComponent {
  @Input() myCard: any;  // 👈 necesario para recibir [myCard] en el menú
}

