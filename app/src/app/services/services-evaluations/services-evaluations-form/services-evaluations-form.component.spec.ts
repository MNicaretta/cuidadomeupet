import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesEvaluationsFormComponent } from './services-evaluations-form.component';

describe('ServicesEvaluationsFormComponent', () => {
  let component: ServicesEvaluationsFormComponent;
  let fixture: ComponentFixture<ServicesEvaluationsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesEvaluationsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesEvaluationsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
