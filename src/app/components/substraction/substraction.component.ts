import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-substraction',
  templateUrl: './substraction.component.html',
  styleUrls: ['./substraction.component.css']
})
export class SubstractionComponent implements OnInit {
  calculadoraform: FormGroup;
  resultadoresta: string = "";

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

  calcularresta() {
    let value1:number = this.calculadoraform.value.value1
    let value2:number = this.calculadoraform.value.value2
    this.resultadoresta = `La resta de los numeros es: ${this.resta(value1,value2)}`

  }

  resta(val1:number, val2:number):number{
    return val1 - val2;
  }

}
