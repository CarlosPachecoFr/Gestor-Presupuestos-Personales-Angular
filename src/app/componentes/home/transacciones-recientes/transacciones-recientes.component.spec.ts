import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransaccionesRecientesComponent } from './transacciones-recientes.component';

describe('TransaccionesRecientesComponent', () => {
  let component: TransaccionesRecientesComponent;
  let fixture: ComponentFixture<TransaccionesRecientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransaccionesRecientesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransaccionesRecientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
