import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildEmployeeListComponent } from './child-employee-list.component';

describe('ChildEmployeeListComponent', () => {
  let component: ChildEmployeeListComponent;
  let fixture: ComponentFixture<ChildEmployeeListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildEmployeeListComponent]
    });
    fixture = TestBed.createComponent(ChildEmployeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
