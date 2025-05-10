import { Routes } from '@angular/router';
import { CommonRoute } from '@declarations/enums/common-routes.enum';
import { NavigationRoutes } from '@declarations/enums/navigation-routes.enum';
import { AppComponent } from '@app/app.component';

export const routes: Routes = [
  { path: '', component: AppComponent },
  {
    path: CommonRoute.NotFound,
    loadComponent: () =>
      import(
        './pages/error-page/components/error-404-page/error-404-page.component'
      ).then((c) => c.Error404PageComponent),
    title: NavigationRoutes.NonFound,
  },
  {
    path: CommonRoute.Forbidden,
    loadComponent: () =>
      import(
        './pages/error-page/components/error-403-page/error-403-page.component'
      ).then((c) => c.Error403PageComponent),
    title: NavigationRoutes.Forbidden,
  },
  { path: '**', redirectTo: CommonRoute.NotFound },
];
