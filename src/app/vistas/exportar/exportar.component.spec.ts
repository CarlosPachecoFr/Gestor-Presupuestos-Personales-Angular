import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportarComponent } from './exportar.component';

describe('ExportarComponent', () => {
  let component: ExportarComponent;
  let fixture: ComponentFixture<ExportarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExportarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExportarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
