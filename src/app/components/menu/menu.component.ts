import { Component } from '@angular/core';
import { TarjetaComponent } from '../tarjeta/tarjeta.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [TarjetaComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  listaPorsche = [
    { id: 1, modelo: 'Porsche 911 GT3' },
    { id: 2, modelo: 'Porsche 718 Cayman' },
    { id: 3, modelo: 'Porsche Taycan' }
  ];
}
