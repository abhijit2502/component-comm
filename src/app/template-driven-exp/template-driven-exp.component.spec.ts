import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenExpComponent } from './template-driven-exp.component';

describe('TemplateDrivenExpComponent', () => {
  let component: TemplateDrivenExpComponent;
  let fixture: ComponentFixture<TemplateDrivenExpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateDrivenExpComponent]
    });
    fixture = TestBed.createComponent(TemplateDrivenExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
