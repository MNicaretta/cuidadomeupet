import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeciesListSelectorComponent } from './species-list-selector.component';

describe('SpeciesListSelectorComponent', () => {
  let component: SpeciesListSelectorComponent;
  let fixture: ComponentFixture<SpeciesListSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeciesListSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeciesListSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
