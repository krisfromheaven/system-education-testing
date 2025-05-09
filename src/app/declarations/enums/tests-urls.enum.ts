import { TestsRoutes } from '@declarations/enums/tests-routes.enum';
import { MainRoutes } from '@declarations/enums/main-routes.enum';

export enum TestsUrls {
  List = '/' + MainRoutes.Tests + TestsRoutes.List,
  History = '/' + MainRoutes.Tests + '/' + TestsRoutes.History,
  Manual = '/' + MainRoutes.Tests + '/' + TestsRoutes.Manual,
}
