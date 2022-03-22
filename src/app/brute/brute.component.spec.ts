import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BruteComponent } from './brute.component';

describe('BruteComponent', () => {
  let component: BruteComponent;
  let fixture: ComponentFixture<BruteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BruteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BruteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
