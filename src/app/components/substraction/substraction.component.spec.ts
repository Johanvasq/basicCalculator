import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubstractionComponent } from './substraction.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

describe('SubstractionComponent', () => {
  let component: SubstractionComponent;
  let fixture: ComponentFixture<SubstractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,               // << ----- add this line
        ReactiveFormsModule
      ],
      declarations: [ SubstractionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubstractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
