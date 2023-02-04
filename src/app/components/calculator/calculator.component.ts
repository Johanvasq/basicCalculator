import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  calculadoraform: FormGroup;
  result: string = "";

  constructor(private formbuilder: FormBuilder) {
    this.calculadoraform = formbuilder.group(
      {
        value1: ["", [Validators.required, Validators.pattern('^[0-9]*$')]],
        value2: ["", [Validators.required, Validators.pattern('^[0-9]*$')]],
      }
    )
  }

  ngOnInit(): void {
  }

  calcular() {
    let value1 = parseInt(this.calculadoraform.value.value1);
    let value2 = parseInt(this.calculadoraform.value.value2);
    this.result = `La suma de los números es: ${this.suma(value1, value2)}`
  }

  suma(val1: number, val2: number): number {
    return val1 + val2;
  }

}
