import { Uuid } from '@shared/type/uuid.type';

export namespace DisciplinesModel {
  export interface View {
    id: Uuid;
    shortName: string;
    fullName: string;
    divisionId: Uuid;
    created: string;
    updated: string;
    deleted: string;
  }
}
