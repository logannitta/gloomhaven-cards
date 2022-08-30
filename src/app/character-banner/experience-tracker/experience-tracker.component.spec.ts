import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceTrackerComponent } from './experience-tracker.component';

describe('ExperienceTrackerComponent', () => {
  let component: ExperienceTrackerComponent;
  let fixture: ComponentFixture<ExperienceTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienceTrackerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
