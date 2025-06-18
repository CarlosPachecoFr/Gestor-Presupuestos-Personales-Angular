import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetasDatosComponent } from './tarjetas-datos.component';

describe('TarjetasDatosComponent', () => {
  let component: TarjetasDatosComponent;
  let fixture: ComponentFixture<TarjetasDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarjetasDatosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetasDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
