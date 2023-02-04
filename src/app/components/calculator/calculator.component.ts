import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-add-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  calculadoraform: FormGroup;
  result: string = "";
  numeroAdicional = [];

  tupla : [String,number] = ["hola", 5];

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

  calcular() {
    let value1:number = this.calculadoraform.value.value1
    let value2:number = this.calculadoraform.value.value2
    this.result = `La suma de los numeros es: ${this.suma(value1,value2)}`

  }

  suma(val1:number, val2:number):number{

    return val1 + val2;
  }

  validacion(val:number):boolean{
    return (val > 0 && val <= 10 && val % 2 !=0) ? true : false;
  }
  validacion0y100(val:number):boolean{
    return (val > 0 && val <= 10 && val % 2 !=0) ? true : false;
  }

  // agregarNumero(){
  //   this.numeroAdicional.push({valid : 0});
  // }

  // removerNumero(i:number){
  //   this.numeroAdicional.splice(i,1);
  // }

}
