import { Component } from '@angular/core';
import { Console } from 'console';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoAdivinacionComponent {
  nombre: string = '';
  apellido: string = '';
  rango: number = 0;
  intentos: number = 0;
  numeroGenerado: number | null = null;
  intentosRestantes: number | null = null;
  numeroIngresado: number | null = null;
  mensajeBienvenida: string = '';
  intentoFallido: boolean = false;
  intentosRealizados: number[] = [];


  // Método para recoger los datos y configurar el juego
  recogerDatos() {
 
    this.numeroGenerado = null;
  
    if (this.nombre && this.apellido && this.rango && this.intentos) {
      // Generar un número aleatorio dentro del rango especificado
      this.numeroGenerado = Math.floor(Math.random() * (this.rango + 1));
      // Inicializar los intentos restantes
      this.intentosRestantes = this.intentos;
      // Crear el mensaje de bienvenida
      this.mensajeBienvenida = `Ongi Etorri ${this.nombre} ${this.apellido}`;
    } else {
      alert('Por favor, complete todos los campos del formulario.');
    }
    console.log("Nombre completo:", this.nombre + " " + this.apellido);
    console.log("Número a adivinar:", this.numeroGenerado);
  }

  // Método para procesar el intento del usuario
  procesarIntento(numeroIngresado: string) {
    const valorNumeroIngresado = parseFloat(numeroIngresado);
    if (this.numeroGenerado !== null && this.intentosRestantes !== null && !isNaN(valorNumeroIngresado)) {
      this.numeroIngresado = valorNumeroIngresado;
      this.intentosRealizados.push(this.numeroIngresado);
      this.intentoFallido = false;
      this.intentosRestantes--;
      if (this.numeroIngresado === this.numeroGenerado) {
        alert('¡Felicidades! Has adivinado el número.');
      } else {
        this.intentoFallido = true;
        if (this.intentosRestantes === 0) {
          alert('¡Se acabaron los intentos! El número era ' + this.numeroGenerado + '.');
        }
      }
    }
  }

  // Método para reiniciar el juego
  reiniciarJuego() {
    window.location.reload();
  }
}
