import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerPizzasComponent } from './ver-pizzas.component';

describe('VerPizzasComponent', () => {
  let component: VerPizzasComponent;
  let fixture: ComponentFixture<VerPizzasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerPizzasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerPizzasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
