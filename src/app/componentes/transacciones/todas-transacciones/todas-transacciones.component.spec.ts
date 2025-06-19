import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodasTransaccionesComponent } from './todas-transacciones.component';

describe('TodasTransaccionesComponent', () => {
  let component: TodasTransaccionesComponent;
  let fixture: ComponentFixture<TodasTransaccionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodasTransaccionesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodasTransaccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
