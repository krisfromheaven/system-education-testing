import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { TestsRoutes } from '@declarations/enums/tests-routes.enum';
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { NgForOf } from '@angular/common';
import { TuiTabs } from '@taiga-ui/kit';
import { filter } from 'rxjs';
import { TestsUrls } from '@app/declarations/enums/tests-urls.enum';

interface Tab {
  label: string;
  url: TestsRoutes;
}

@Component({
  selector: 'app-test-layout',
  standalone: true,
  templateUrl: './test-layout.component.html',
  styleUrl: './test-layout.component.scss',
  imports: [RouterLinkActive, RouterOutlet, RouterLink, NgForOf, TuiTabs],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestLayoutComponent implements OnInit {
  router = inject(Router);

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
  activeItemIndex = 0;
  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        const url = this.router.url;
        if (
          url === TestsUrls.List ||
          url.includes(TestsRoutes.History) ||
          url.includes(TestsRoutes.Manual)
        ) {
          this.activeItemIndex = 0;
        }
      });
  }
}
