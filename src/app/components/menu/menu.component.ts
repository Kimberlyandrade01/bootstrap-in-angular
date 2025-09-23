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

}
