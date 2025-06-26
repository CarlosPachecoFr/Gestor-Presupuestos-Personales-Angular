import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoMetasComponent } from './todo-metas.component';

describe('TodoMetasComponent', () => {
  let component: TodoMetasComponent;
  let fixture: ComponentFixture<TodoMetasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoMetasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoMetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
