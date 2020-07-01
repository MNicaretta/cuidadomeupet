import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressesSelectorComponent } from './addresses-selector.component';

describe('AddressesSelectorComponent', () => {
  let component: AddressesSelectorComponent;
  let fixture: ComponentFixture<AddressesSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressesSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressesSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
