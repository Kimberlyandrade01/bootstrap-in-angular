import { Component } from '@angular/core';

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
  myCard: Card = {
    imagen: "assets/porshe.avif",
    titulo: "Porsche 911 GT3",
    descripcion: "Esta es la información de la tarjeta. Aquí puedes agregar texto descriptivo sobre el contenido de la imagen o cualquier detalle relevante."
  };
}

