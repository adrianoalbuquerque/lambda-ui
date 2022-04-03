import { TestBed } from '@angular/core/testing';

import { LambdaUiService } from './lambda-ui.service';

describe('LambdaUiService', () => {
  let service: LambdaUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LambdaUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
