import { TestPurposes, TestTypes } from '@eios/tests-common';

export interface TestFilter {
  type: TestTypes[];
  purpose: TestPurposes;
}
