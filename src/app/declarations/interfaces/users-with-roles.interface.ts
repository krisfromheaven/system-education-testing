import { Uuid } from '@shared/type/uuid.type';
import { TestRoleNames } from '@eios/tests-common/src/interfaces/test-roles.interfaces';

export interface UsersWithRoles {
  id: Uuid;
  name: string;
  roleName: TestRoleNames;
}
