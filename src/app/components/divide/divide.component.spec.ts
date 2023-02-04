import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivideComponent } from './divide.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

describe('DivideComponent', () => {
  let component: DivideComponent;
  let fixture: ComponentFixture<DivideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,               // << ----- add this line
        ReactiveFormsModule
      ],
      declarations: [ DivideComponent ]

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DivideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
