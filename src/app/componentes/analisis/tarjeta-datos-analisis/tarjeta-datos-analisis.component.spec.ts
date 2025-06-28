import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaDatosAnalisisComponent } from './tarjeta-datos-analisis.component';

describe('TarjetaDatosAnalisisComponent', () => {
  let component: TarjetaDatosAnalisisComponent;
  let fixture: ComponentFixture<TarjetaDatosAnalisisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarjetaDatosAnalisisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetaDatosAnalisisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
