import { TreeNodeToAssociate } from '@declarations/interfaces/tree-node-to-associate.interface';
import { TestRoleNames } from '@eios/tests-common/src/interfaces/test-roles.interfaces';

export interface ToAssociate {
  treeNodes: TreeNodeToAssociate;
  roleName: TestRoleNames;
}
