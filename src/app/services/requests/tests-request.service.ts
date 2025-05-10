import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '@env/environment';
import { PaginationData } from '@declarations/interfaces/commons/pagination-data.interface';
import { Observable } from 'rxjs';
import { PaginationPayload } from '@declarations/interfaces/commons/pagination-payload.interface';
import { TestFilter } from '@declarations/interfaces/test/test-filter.interface';
import { Uuid } from '@shared/type/uuid.type';
import { TestModel } from '@declarations/models/test.model';
import { Successfully } from '@shared/type/successfully.type';
import { isNil } from '@helpers/isNil.function';

@Injectable()
export class TestsRequestService {
  private readonly requestUrl: string = `${environment.baseUrl}/api/v1/tests`;

  httpClient: HttpClient = inject(HttpClient);

  get(
    data: PaginationPayload<Partial<TestFilter>>,
  ): Observable<PaginationData<TestModel.View>> {
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
    return this.httpClient.get<PaginationData<TestModel.View>>(
      this.requestUrl,
      {
        params,
      },
    );
  }

  post(): Observable<TestModel.Create> {
    return this.httpClient.post<TestModel.Create>(this.requestUrl, {});
  }

  getById(id: Uuid): Observable<TestModel.View> {
    return this.httpClient.get<TestModel.View>(`${this.requestUrl}/${id}`);
  }

  patch(id: Uuid, data: Partial<TestModel.View>): Observable<TestModel.Update> {
    return this.httpClient.patch<TestModel.Update>(
      `${this.requestUrl}/${id}`,
      data,
    );
  }

  delete(id: Uuid): Observable<Successfully> {
    return this.httpClient.delete<Successfully>(`${this.requestUrl}/${id}`);
  }
}
