import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoTotalesComponent } from './grafico-totales.component';

describe('GraficoTotalesComponent', () => {
  let component: GraficoTotalesComponent;
  let fixture: ComponentFixture<GraficoTotalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraficoTotalesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficoTotalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
