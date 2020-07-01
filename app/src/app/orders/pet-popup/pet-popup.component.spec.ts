import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetPopupComponent } from './pet-popup.component';

describe('PetPopupComponent', () => {
  let component: PetPopupComponent;
  let fixture: ComponentFixture<PetPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
