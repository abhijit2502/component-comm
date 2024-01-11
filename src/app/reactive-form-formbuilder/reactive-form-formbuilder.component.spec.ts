import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormFormbuilderComponent } from './reactive-form-formbuilder.component';

describe('ReactiveFormFormbuilderComponent', () => {
  let component: ReactiveFormFormbuilderComponent;
  let fixture: ComponentFixture<ReactiveFormFormbuilderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReactiveFormFormbuilderComponent]
    });
    fixture = TestBed.createComponent(ReactiveFormFormbuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
