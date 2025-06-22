import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetasDatosTotalesComponent } from './tarjetas-datos-totales.component';

describe('TarjetasDatosTotalesComponent', () => {
  let component: TarjetasDatosTotalesComponent;
  let fixture: ComponentFixture<TarjetasDatosTotalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarjetasDatosTotalesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetasDatosTotalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
