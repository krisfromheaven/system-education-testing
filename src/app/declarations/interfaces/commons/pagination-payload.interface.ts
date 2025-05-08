import { Nullable } from '@shared/type/nullable.type';

export interface PaginationPayload<T extends object = object> {
  offset: number;
  limit: number;
  search: Nullable<string>;
  payload: T;
}
