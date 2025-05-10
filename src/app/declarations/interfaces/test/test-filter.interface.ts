import { TestPurposes, TestTypes } from '@eios/tests-common';
import { Uuid } from '@shared/type/uuid.type';

export interface TestFilter {
  type: TestTypes[];
  purpose: TestPurposes;
  disciplines: Uuid[];
}
