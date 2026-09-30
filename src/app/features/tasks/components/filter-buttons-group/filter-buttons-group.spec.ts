import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterButtonsGroup } from './filter-buttons-group';

describe('FilterButtonsGroup', () => {
  let component: FilterButtonsGroup;
  let fixture: ComponentFixture<FilterButtonsGroup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterButtonsGroup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterButtonsGroup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
