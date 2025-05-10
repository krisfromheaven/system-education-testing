import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TestsRoutes } from '@declarations/enums/tests-routes.enum';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NgForOf } from '@angular/common';

interface Tab {
  label: string;
  url: TestsRoutes;
}

@Component({
  selector: 'app-test-layout',
  standalone: true,
  templateUrl: './test-layout.component.html',
  styleUrl: './test-layout.component.scss',
  imports: [RouterLinkActive, RouterOutlet, RouterLink, NgForOf],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestLayoutComponent {
  tabs: Tab[] = [
    {
      label: 'Тесты',
      url: TestsRoutes.List,
    },
    {
      label: 'История выполнений',
      url: TestsRoutes.History,
    },
    {
      label: 'Методичка',
      url: TestsRoutes.Manual,
    },
  ];
}
