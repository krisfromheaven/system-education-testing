import { Component, inject } from '@angular/core';
import {
  TuiBlockStatusComponent,
  TuiBlockStatusDirective,
} from '@taiga-ui/layout';
import { TuiButton } from '@taiga-ui/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error-403-page',
  standalone: true,
  imports: [TuiBlockStatusComponent, TuiBlockStatusDirective, TuiButton],
  templateUrl: './error-403-page.component.html',
  styleUrl: './error-403-page.component.scss',
})
export class Error403PageComponent {
  router: Router = inject(Router);

  goHome(): void {
    this.router.navigate(['/']);
  }
}
