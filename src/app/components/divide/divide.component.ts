import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-divide',
  templateUrl: './divide.component.html',
  styleUrls: ['./divide.component.css']
})
export class DivideComponent implements OnInit {

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

  calcularDiv() {
    let value1: number = this.calculadoraform.value.value1
    let value2: number = this.calculadoraform.value.value2
    if (value2 == 0) {
      alert("No se puede dividir por cero")
    } else {
      this.resultado = `La división de los numeros es: ${this.dividir(value1, value2)}`
    }


  }

  dividir(val1: number, val2: number): number {
    return val1 / val2;
  }

}
