import { TestBed } from '@angular/core/testing';

import { KartuKeluargaService } from './kartu-keluarga.service';

describe('KartuKeluargaService', () => {
  let service: KartuKeluargaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KartuKeluargaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
