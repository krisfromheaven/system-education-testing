import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  TuiMultiSelectModule,
  TuiTextfieldControllerModule,
} from '@taiga-ui/legacy';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { TuiButton, TuiTextfield } from '@taiga-ui/core';
import {
  TestPurposes,
  TestTypeI18n,
  TestPurposesI18n,
  TestTypes,
} from '@eios/tests-common';
import { DisciplinesRequestService } from '@services/requests/disciplines-request.service';
import { catchError, map, Observable, of, shareReplay } from 'rxjs';
import { DisciplinesModel } from '@declarations/models/disciplines.model';
import { Uuid } from '@shared/type/uuid.type';
import { PaginationData } from '@declarations/interfaces/commons/pagination-data.interface';
import { AsyncPipe, NgForOf } from '@angular/common';
import { ControlItem } from '@declarations/interfaces/control-items.interface';
import { TestFilterService } from '@services/test-filter.service';

@Component({
  selector: 'app-list-filters',
  standalone: true,
  imports: [
    TuiMultiSelectModule,
    ReactiveFormsModule,
    TuiTextfield,
    TuiTextfieldControllerModule,
    AsyncPipe,
    NgForOf,
    TuiButton,
  ],
  templateUrl: './list-filters.component.html',
  styleUrl: './list-filters.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DisciplinesRequestService],
})
export class ListFiltersComponent {
  testFilterService: TestFilterService = inject(TestFilterService);
  disciplinesRequestService: DisciplinesRequestService = inject(
    DisciplinesRequestService,
  );

  typeControl: FormControl<ControlItem<TestTypes>[]> =
    this.testFilterService.typeControl;
  typeItems: ControlItem<TestTypes>[] = Object.entries(TestTypeI18n).map(
    ([k, v]: [string, string]) => ({
      label: v,
      value: k as TestTypes,
    }),
  );

  disciplinesControl: FormControl<ControlItem<Uuid>[]> =
    this.testFilterService.disciplinesControl;
  disciplinesItems$: Observable<ControlItem<Uuid>[]> =
    this.disciplinesRequestService
      .get({
        offset: 0,
        limit: 50,
      })
      .pipe(
        map((data: PaginationData<DisciplinesModel.View>) =>
          data.rows.map((item: DisciplinesModel.View) => ({
            label: item.fullName,
            value: item.id,
          })),
        ),
        catchError(() => of([])),
        shareReplay(1),
      );

  purposesControl: FormControl<ControlItem<TestPurposes>[]> =
    this.testFilterService.purposesControl;
  purposesItems: ControlItem<TestPurposes>[] = Object.entries(
    TestPurposesI18n,
  ).map(([k, v]: [string, string]) => ({
    label: v,
    value: k as TestPurposes,
  }));

  stringifyItem = <T>(item: ControlItem<T>): string => item.label;

  searchControl: FormControl<string> = this.testFilterService.searchControl;

  addTest(): void {
    console.log('add test');
  }
}
