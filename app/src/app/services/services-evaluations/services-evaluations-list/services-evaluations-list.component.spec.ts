import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesEvaluationsListComponent } from './services-evaluations-list.component';

describe('ServicesEvaluationsListComponent', () => {
  let component: ServicesEvaluationsListComponent;
  let fixture: ComponentFixture<ServicesEvaluationsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesEvaluationsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesEvaluationsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
