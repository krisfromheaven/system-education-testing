import { inject, Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { PaginationPayload } from '@declarations/interfaces/commons/pagination-payload.interface';
import { Observable } from 'rxjs';
import { PaginationData } from '@declarations/interfaces/commons/pagination-data.interface';
import { DisciplinesModel } from '@declarations/models/disciplines.model';
import { DisciplinesFilter } from '@declarations/interfaces/disciplines/disciplines-filter.interface';
import { isNil } from '@helpers/isNil.function';

@Injectable()
export class DisciplinesRequestService {
  private readonly requestUrl: string = `${environment.baseUrl}/api/v1/disciplines`;

  httpClient: HttpClient = inject(HttpClient);

  get(
    data: PaginationPayload<DisciplinesFilter>,
  ): Observable<PaginationData<DisciplinesModel.View>> {
    const { offset, limit, search } = data;

    const params = new HttpParams({
      fromObject: {
        ...data.payload,
        offset,
        limit,
      },
    });

    if (!isNil(search)) {
      params.set('search', search);
    }

    return this.httpClient.get<PaginationData<DisciplinesModel.View>>(
      this.requestUrl,
      { params },
    );
  }
}
