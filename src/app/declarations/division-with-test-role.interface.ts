import { Uuid } from '@shared/type/uuid.type';
import { TestRoleNames } from '@eios/tests-common/src/interfaces/test-roles.interfaces';

export interface DivisionWithTestRole {
  id: Uuid;
  shortName: string;
  fullName: string;
  roleName: TestRoleNames;
}
