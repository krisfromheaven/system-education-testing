import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TestsRoutes } from '@declarations/enums/tests-routes.enum';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NgForOf } from '@angular/common';
import { TuiTabs } from '@taiga-ui/kit';
import { TestFilterService } from '@services/test-filter.service';

interface Tab {
  label: string;
  url: TestsRoutes;
}

@Component({
  selector: 'app-test-layout',
  standalone: true,
  templateUrl: './tests.component.html',
  styleUrl: './tests.component.scss',
  imports: [RouterLinkActive, RouterOutlet, RouterLink, NgForOf, TuiTabs],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [TestFilterService],
})
export class TestsComponent {
  activeIndex: number = 0;

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
