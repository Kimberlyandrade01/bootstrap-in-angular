import { Component, Input } from '@angular/core';

interface Card {
  imagen: string;
  titulo: string;
  descripcion: string;
}

@Component({
  selector: 'app-tarjeta',
  standalone: true,
  imports: [],
  templateUrl: './tarjeta.component.html',
  styleUrl: './tarjeta.component.css'
})
export class TarjetaComponent {
  @Input() myCard?: Card;
}
