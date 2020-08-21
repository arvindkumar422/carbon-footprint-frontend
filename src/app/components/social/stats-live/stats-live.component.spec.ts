import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsLiveComponent } from './stats-live.component';

describe('StatsLiveComponent', () => {
  let component: StatsLiveComponent;
  let fixture: ComponentFixture<StatsLiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatsLiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsLiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
