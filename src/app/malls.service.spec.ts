import { TestBed, inject } from '@angular/core/testing';
import { MallsService } from './malls.service';

describe('MallsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MallsService]
    });
  });

  it('should be created', inject([MallsService], (service: MallsService) => {
    expect(service).toBeTruthy();
  }));
});
