import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorTransaccionesComponent } from './buscador-transacciones.component';

describe('BuscadorTransaccionesComponent', () => {
  let component: BuscadorTransaccionesComponent;
  let fixture: ComponentFixture<BuscadorTransaccionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuscadorTransaccionesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscadorTransaccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
