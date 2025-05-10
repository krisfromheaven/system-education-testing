import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-manual',
  standalone: true,
  imports: [],
  templateUrl: './manual.component.html',
  styleUrl: './manual.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManualComponent {}
