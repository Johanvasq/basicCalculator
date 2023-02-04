import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-multiplication',
  templateUrl: './multiplication.component.html',
  styleUrls: ['./multiplication.component.css']
})
export class MultiplicationComponent implements OnInit {
  calculadoraform: FormGroup;
  resultado: string = "";

  constructor(private formbuilder: FormBuilder) {
    this.calculadoraform = formbuilder.group(
      {
        value1: ["", Validators.required],
        value2: ["", Validators.required],
      }
    )
  }

  ngOnInit(): void {
  }

  calcularMult() {
    let value1:number = this.calculadoraform.value.value1
    let value2:number = this.calculadoraform.value.value2
    this.resultado = `La multiplicación de los numeros es: ${this.multiplicar(value1,value2)}`

  }

  multiplicar(val1:number, val2:number):number{
    return val1 * val2;
  }
}
