import { Routes } from '@angular/router';
import { TestsRoutes } from '@declarations/enums/tests-routes.enum';

export const testRoutes: Routes = [
  {
    path: TestsRoutes.List,
    loadComponent: () =>
      import('@pages/test-layout/components/list/list.component').then(
        (c) => c.ListComponent,
      ),
  },
  {
    path: TestsRoutes.Manual,
    loadComponent: () =>
      import('@pages/test-layout/components/manual/manual.component').then(
        (c) => c.ManualComponent,
      ),
  },
  {
    path: TestsRoutes.History,
    loadComponent: () =>
      import('@pages/test-layout/components/history/history.component').then(
        (c) => c.HistoryComponent,
      ),
  },
];
