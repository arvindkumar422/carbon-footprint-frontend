import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsDataComponent } from './stats-data.component';

describe('StatsDataComponent', () => {
  let component: StatsDataComponent;
  let fixture: ComponentFixture<StatsDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatsDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
