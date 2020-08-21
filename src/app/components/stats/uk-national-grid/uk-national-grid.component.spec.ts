import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UkNationalGridComponent } from './uk-national-grid.component';

describe('UkNationalGridComponent', () => {
  let component: UkNationalGridComponent;
  let fixture: ComponentFixture<UkNationalGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UkNationalGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UkNationalGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
