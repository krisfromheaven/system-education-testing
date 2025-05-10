import { Nullable } from '@shared/type/nullable.type';
import { TestPurposes, TestTypes } from '@eios/tests-common';
import { DefaultSessionSettings } from '@declarations/interfaces/default-session-settings.interface';
import { ToAssociate } from '@declarations/interfaces/to-associate.interface';
import { Uuid } from '@shared/type/uuid.type';
import { UsersWithRoles } from '@declarations/interfaces/users-with-roles.interface';
import { DivisionWithTestRole } from '@declarations/division-with-test-role.interface';

export namespace TestModel {
  export interface Create {
    fullName: Nullable<string>;
    type: Nullable<TestTypes>;
    purpose: Nullable<TestPurposes>;
    objective: Nullable<string>;
    description: Nullable<string>;
    defaultSessionSettings: Nullable<DefaultSessionSettings>;
    shortName: Nullable<string>;
  }

  export interface Update {
    fullName: Nullable<string>;
    type: Nullable<TestTypes>;
    purpose: Nullable<TestPurposes>;
    objective: Nullable<string>;
    description: Nullable<string>;
    defaultSessionSettings: Nullable<DefaultSessionSettings>;
    shortName: Nullable<string>;
    accessRoles: ToAssociate;
    disciplines: string[];
  }

  export interface View {
    id: Uuid;
    shortName: string;
    fullName: Nullable<string>;
    type: Nullable<TestTypes>;
    purpose: Nullable<TestPurposes>;
    objective: Nullable<string>;
    description: Nullable<string>;
    defaultSessionSettings: Nullable<DefaultSessionSettings>;
    created: string;
    updated: string;
    deleted: Nullable<string>;
    usersWithRoles: UsersWithRoles[];
    divisionsWithRoles: DivisionWithTestRole[];
  }
}
