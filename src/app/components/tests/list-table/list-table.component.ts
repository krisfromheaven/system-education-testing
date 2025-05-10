import { Component, inject, OnInit } from '@angular/core';
import { TestsRequestService } from '@services/requests/tests-request.service';
import { TestFilterService } from '@services/test-filter.service';
import { map, switchMap } from 'rxjs';
import { TuiButton } from '@taiga-ui/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-list-table',
  standalone: true,
  imports: [TuiButton],
  templateUrl: './list-table.component.html',
  styleUrl: './list-table.component.scss',
  providers: [TestsRequestService],
})
export class ListTableComponent implements OnInit {
  testsRequestService: TestsRequestService = inject(TestsRequestService);
  testFilterService: TestFilterService = inject(TestFilterService);

  data$ = new FormGroup({
    typeControl: this.testFilterService.typeControl,
    disciplinesControl: this.testFilterService.disciplinesControl,
    purposesControl: this.testFilterService.purposesControl,
    searchControl: this.testFilterService.searchControl,
  }).valueChanges.pipe(
    map(
      ({
        typeControl,
        purposesControl,
        disciplinesControl,
        searchControl,
      }) => ({
        type: typeControl?.map(({ value }) => value),
        purpose: purposesControl?.map(({ value }) => value),
        disciplines: disciplinesControl?.map(({ value }) => value),
        search: searchControl,
      }),
    ),
    switchMap((data) => {
      const { search } = data;
      return this.testsRequestService.get({
        offset: 0,
        limit: 50,
        search,
      });
    }),
  );

  // this.testsRequestService.get({ offset: 0, limit: 50 });

  ngOnInit(): void {
    this.data$.subscribe(console.log);
  }

  addTest(): void {
    console.log('add test', this.testFilterService.typeControl.getRawValue());
  }
}
