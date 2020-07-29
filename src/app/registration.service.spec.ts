import { TestBed } from '@angular/core/testing';

import { RegistrationService } from './registration.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('RegistrationService', () => {
  let service: RegistrationService;

  beforeEach(() => {
    imports: [
      HttpClientTestingModule,
      RouterTestingModule.withRoutes([]),
    ]
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrationService);
  });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });
});
