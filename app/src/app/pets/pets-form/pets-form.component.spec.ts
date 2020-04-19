import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetsFormComponent } from './pets-form.component';

describe('PetsFormComponent', () => {
  let component: PetsFormComponent;
  let fixture: ComponentFixture<PetsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
