export interface PaginationPayload<T extends object = object> {
  offset: number;
  limit: number;
  search?: string;
  payload?: T;
}
