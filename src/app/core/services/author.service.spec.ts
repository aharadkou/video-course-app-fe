import { TestBed } from '@angular/core/testing';

import { AuthorService } from './author.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AuthorService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: AuthorService = TestBed.get(AuthorService);
    expect(service).toBeTruthy();
  });
});
