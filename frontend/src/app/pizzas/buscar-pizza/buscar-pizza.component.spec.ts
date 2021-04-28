import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarPizzaComponent } from './buscar-pizza.component';

describe('BuscarPizzaComponent', () => {
  let component: BuscarPizzaComponent;
  let fixture: ComponentFixture<BuscarPizzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarPizzaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
