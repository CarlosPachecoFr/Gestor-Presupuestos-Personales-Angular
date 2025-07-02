import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportarDatosComponent } from './exportar-datos.component';

describe('ExportarDatosComponent', () => {
  let component: ExportarDatosComponent;
  let fixture: ComponentFixture<ExportarDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExportarDatosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExportarDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
