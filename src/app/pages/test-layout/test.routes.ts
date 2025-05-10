import { Routes } from '@angular/router';
import { TestsRoutes } from '@declarations/enums/tests-routes.enum';

export const testRoutes: Routes = [
  {
    title: 'Тесты',
    path: TestsRoutes.List,
    loadComponent: () =>
      import('@pages/test-layout/components/list/list.component').then(
        (c) => c.ListComponent,
      ),
  },
  {
    title: 'Методичка по тестам',
    path: TestsRoutes.Manual,
    loadComponent: () =>
      import('@pages/test-layout/components/manual/manual.component').then(
        (c) => c.ManualComponent,
      ),
  },
  {
    title: 'История выполнений',
    path: TestsRoutes.History,
    loadComponent: () =>
      import('@pages/test-layout/components/history/history.component').then(
        (c) => c.HistoryComponent,
      ),
  },
];
