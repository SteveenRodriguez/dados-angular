import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  dadoIzquierda = '../assets/img/dice1.png';
  dadoDerecha = '../assets/img/dice2.png';

  numeroUno: number = 1;
  numeroDos: number = 2;

  tirarDados(): void {
    this.numeroUno = Math.round(Math.random() * 5) + 1;
    this.numeroDos = Math.round(Math.random() * 5) + 1;
    this.dadoIzquierda = `../assets/img/dice${this.numeroUno}.png`;
    this.dadoDerecha = `../assets/img/dice${this.numeroDos}.png`;
  }
}
