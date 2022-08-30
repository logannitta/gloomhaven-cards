import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthTickerComponent } from './health-ticker.component';

describe('HealthTickerComponent', () => {
  let component: HealthTickerComponent;
  let fixture: ComponentFixture<HealthTickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthTickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthTickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
