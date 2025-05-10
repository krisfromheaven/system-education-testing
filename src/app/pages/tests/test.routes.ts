import { Routes } from '@angular/router';
import { TestsRoutes } from '@declarations/enums/tests-routes.enum';

export const testRoutes: Routes = [
  {
    path: TestsRoutes.List,
    loadComponent: () =>
      import('@components/tests/list/list.component').then(
        (c) => c.ListComponent,
      ),
  },
  {
    path: TestsRoutes.Manual,
    loadComponent: () =>
      import('@components/tests/manual/manual.component').then(
        (c) => c.ManualComponent,
      ),
  },
  {
    path: TestsRoutes.History,
    loadComponent: () =>
      import('@components/tests/history/history.component').then(
        (c) => c.HistoryComponent,
      ),
  },
];
