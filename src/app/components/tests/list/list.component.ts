import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ListFiltersComponent } from '@components/tests/list-filters/list-filters.component';
import { ListTableComponent } from '@components/tests/list-table/list-table.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ListFiltersComponent, ListTableComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent {}
