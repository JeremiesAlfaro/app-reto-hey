import { Component } from '@angular/core';

@Component({
  selector: 'app-tu-salud-financiera',
  templateUrl: './tu-salud-financiera.component.html',
  styleUrls: ['./tu-salud-financiera.component.css']
})
export class TuSaludFinancieraComponent {

  inputValue: number = 0.000000;
  value50: number = 0.000000;
  value30: number = 0.000000;
  value20: number = 0.000000;
  pressedButton: boolean = false;
  value: any;

  constructor() { }

  calcular(){
    this.value50 = this.inputValue * 0.50;
    this.value30 = this.inputValue * 0.30;
    this.value20 = this.inputValue * 0.20;
    this.pressedButton = true;
  }
}
