import { TestBed } from '@angular/core/testing';

import { AuthStatesService } from './auth-states.service';

describe('AuthStatesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthStatesService = TestBed.get(AuthStatesService);
    expect(service).toBeTruthy();
  });
});
