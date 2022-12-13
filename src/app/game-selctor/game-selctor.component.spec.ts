import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameSelctorComponent } from './game-selctor.component';

describe('GameSelctorComponent', () => {
  let component: GameSelctorComponent;
  let fixture: ComponentFixture<GameSelctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameSelctorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameSelctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
