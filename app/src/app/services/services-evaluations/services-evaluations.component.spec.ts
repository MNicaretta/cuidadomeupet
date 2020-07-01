import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesEvaluationsComponent } from './services-evaluations.component';

describe('ServicesEvaluationsComponent', () => {
  let component: ServicesEvaluationsComponent;
  let fixture: ComponentFixture<ServicesEvaluationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesEvaluationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesEvaluationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
