import { Uuid } from '@shared/type/uuid.type';
import { Nullable } from '@shared/type/nullable.type';

export interface TreeNodeToAssociate {
  divisionId: string;
  userIds: Nullable<Uuid[]>;
}
