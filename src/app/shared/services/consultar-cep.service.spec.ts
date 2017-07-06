import { TestBed, inject } from '@angular/core/testing';

import { ConsultarCepService } from './consultar-cep.service';

describe('ConsultarCepService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConsultarCepService]
    });
  });

  it('should be created', inject([ConsultarCepService], (service: ConsultarCepService) => {
    expect(service).toBeTruthy();
  }));
});
