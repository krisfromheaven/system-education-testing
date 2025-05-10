import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TestPurposes, TestTypes } from '@eios/tests-common';
import { Uuid } from '@shared/type/uuid.type';
import { ControlItem } from '@declarations/interfaces/control-items.interface';

@Injectable()
export class TestFilterService {
  typeControl: FormControl<ControlItem<TestTypes>[]> = new FormControl<
    ControlItem<TestTypes>[]
  >([], {
    nonNullable: true,
  });

  disciplinesControl: FormControl<ControlItem<Uuid>[]> = new FormControl<
    ControlItem<Uuid>[]
  >([], { nonNullable: true });

  purposesControl: FormControl<ControlItem<TestPurposes>[]> = new FormControl<
    ControlItem<TestPurposes>[]
  >([], {
    nonNullable: true,
  });

  searchControl: FormControl<string> = new FormControl<string>('', {
    nonNullable: true,
  });
}
