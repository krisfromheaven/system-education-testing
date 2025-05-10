import { Routes } from '@angular/router';
import { CommonRoute } from '@declarations/enums/common-routes.enum';
import { NavigationRoutes } from '@declarations/enums/navigation-routes.enum';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'test' },
  {
    path: 'test',
    loadComponent: () =>
      import('@pages/tests/tests.component').then((c) => c.TestsComponent),
    loadChildren: () =>
      import('./pages/tests/test.routes').then((m) => m.testRoutes),
  },
  {
    path: CommonRoute.NotFound,
    loadComponent: () =>
      import(
        './pages/error-pages/components/error-404-page/error-404-page.component'
      ).then((c) => c.Error404PageComponent),
    title: NavigationRoutes.NonFound,
  },
  {
    path: CommonRoute.Forbidden,
    loadComponent: () =>
      import(
        './pages/error-pages/components/error-403-page/error-403-page.component'
      ).then((c) => c.Error403PageComponent),
    title: NavigationRoutes.Forbidden,
  },
  { path: '**', redirectTo: CommonRoute.NotFound },
];
