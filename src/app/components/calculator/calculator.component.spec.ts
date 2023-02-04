import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorComponent } from './calculator.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

fdescribe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,               // << ----- add this line
        ReactiveFormsModule
      ],
      declarations: [
        CalculatorComponent,
      ],

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); //Life cycle
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add correctly', function () {
    //Arrange
    let val1: number = 3;
    let val2: number = 7;
    //Act
    const rta = component.suma(val1, val2);
    //Assert
    expect(rta).toEqual(10);
  });

  it('should assign correct string', function () {
    component.calculadoraform.controls['value1'].setValue(3);
    component.calculadoraform.controls['value2'].setValue(7);
    component.calcular();
    expect(component.result).toEqual("La suma de los números es: 10");
    expect(component.calculadoraform.valid).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.calculadoraform.valid).toBeFalsy();
  });

});
