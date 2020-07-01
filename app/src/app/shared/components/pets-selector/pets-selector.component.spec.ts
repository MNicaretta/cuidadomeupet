import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetsSelectorComponent } from './pets-selector.component';

describe('PetsSelectorComponent', () => {
  let component: PetsSelectorComponent;
  let fixture: ComponentFixture<PetsSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetsSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetsSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
