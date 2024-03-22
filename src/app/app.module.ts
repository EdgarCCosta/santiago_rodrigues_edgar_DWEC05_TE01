import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'; // Importa RouterModule y Routes

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JuegoAdivinacionComponent } from './juego/juego.component';

const routes: Routes = [
  { path: '', component: JuegoAdivinacionComponent } // Ruta para el componente principal
];

@NgModule({
  declarations: [
    AppComponent,
    JuegoAdivinacionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(routes) // Configura las rutas principales
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
