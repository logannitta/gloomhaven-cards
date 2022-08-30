import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-health-tracker',
  templateUrl: './health-tracker.component.html',
  styleUrls: ['./health-tracker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HealthTrackerComponent implements OnInit, OnChanges {
  @Input() health: number;
  @Input() maxHealth: number;

  currentHealth: number;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    const { health = null } = changes;
    if (health) {
      this.currentHealth = health.currentValue;
    }
  }

  public percentageHealth() {
    return (this.currentHealth / this.maxHealth) * 100;
  }
}
