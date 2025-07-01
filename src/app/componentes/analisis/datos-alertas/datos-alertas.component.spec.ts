import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosAlertasComponent } from './datos-alertas.component';

describe('DatosAlertasComponent', () => {
  let component: DatosAlertasComponent;
  let fixture: ComponentFixture<DatosAlertasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatosAlertasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatosAlertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
