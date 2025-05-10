import { Nullable } from '@shared/type/nullable.type';

export function isNil<T>(entity: Nullable<T>): entity is null | undefined {
  return entity === undefined || entity === null;
}
