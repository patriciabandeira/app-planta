import { TestBed } from '@angular/core/testing';

import { BiomaService } from '../bioma/bioma.service';

describe('BiomaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BiomaService = TestBed.get(BiomaService);
    expect(service).toBeTruthy();
  });
});
