import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { SubstractionComponent } from './components/substraction/substraction.component';
import { MultiplicationComponent } from './components/multiplication/multiplication.component';
import { DivideComponent } from './components/divide/divide.component';


@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    SubstractionComponent,
    MultiplicationComponent,
    DivideComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[
    AppComponent,
    CalculatorComponent,
    SubstractionComponent,
    MultiplicationComponent,
    DivideComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
