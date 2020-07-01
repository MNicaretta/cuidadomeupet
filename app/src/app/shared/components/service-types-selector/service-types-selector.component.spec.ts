import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceTypesSelectorComponent } from './service-types-selector.component';

describe('ServiceTypesSelectorComponent', () => {
  let component: ServiceTypesSelectorComponent;
  let fixture: ComponentFixture<ServiceTypesSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceTypesSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceTypesSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
