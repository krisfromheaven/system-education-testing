import { Component } from '@angular/core';
import { TuiBlockStatus } from '@taiga-ui/layout';

@Component({
  selector: 'app-error-404-page',
  standalone: true,
  imports: [TuiBlockStatus],
  templateUrl: './error-404-page.component.html',
  styleUrl: './error-404-page.component.scss',
})
export class Error404PageComponent {}
