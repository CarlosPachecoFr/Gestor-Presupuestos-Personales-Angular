import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficosAnalisisComponent } from './graficos-analisis.component';

describe('GraficosAnalisisComponent', () => {
  let component: GraficosAnalisisComponent;
  let fixture: ComponentFixture<GraficosAnalisisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraficosAnalisisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficosAnalisisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
