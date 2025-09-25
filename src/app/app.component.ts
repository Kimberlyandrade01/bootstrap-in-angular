import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component'; // asegúrate de la ruta correcta

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule, MenuComponent] // <--- IMPORTANTE: importar MenuComponent
})
export class AppComponent {
  title = 'project-bootsrap-22-sep';
}
