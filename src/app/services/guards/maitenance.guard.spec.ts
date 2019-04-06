import { TestBed, async, inject } from '@angular/core/testing';

import { MaitenanceGuard } from './maitenance.guard';

describe('MaitenanceGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MaitenanceGuard]
    });
  });

  it('should ...', inject([MaitenanceGuard], (guard: MaitenanceGuard) => {
    expect(guard).toBeTruthy();
  }));
});
