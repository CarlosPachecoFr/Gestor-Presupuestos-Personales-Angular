import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficosTransaccionesComponent } from './graficos-transacciones.component';

describe('GraficosTransaccionesComponent', () => {
  let component: GraficosTransaccionesComponent;
  let fixture: ComponentFixture<GraficosTransaccionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraficosTransaccionesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficosTransaccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
