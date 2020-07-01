import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationsFormComponent } from './evaluations-form.component';

describe('EvaluationsFormComponent', () => {
  let component: EvaluationsFormComponent;
  let fixture: ComponentFixture<EvaluationsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluationsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluationsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
