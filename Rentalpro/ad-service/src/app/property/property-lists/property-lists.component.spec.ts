import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyListsComponent } from './property-lists.component';

describe('PropertyListsComponent', () => {
  let component: PropertyListsComponent;
  let fixture: ComponentFixture<PropertyListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
