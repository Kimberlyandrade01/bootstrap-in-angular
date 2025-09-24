import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';

// 👇 importa tus componentes
import { MenuComponent } from './components/menu/menu.component';
import { TarjetaComponent } from './components/tarjeta/tarjeta.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,      // 👈 necesario para [(ngModel)]
    MenuComponent,    // 👈 importa el menú standalone
    TarjetaComponent  // 👈 importa el componente standalone
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component } from '@angular/core';