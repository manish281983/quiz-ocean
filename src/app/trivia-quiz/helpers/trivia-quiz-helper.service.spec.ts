import { TestBed } from '@angular/core/testing';

import { TriviaQuizHelperService } from './trivia-quiz-helper.service';

describe('TriviaQuizHelperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TriviaQuizHelperService = TestBed.get(TriviaQuizHelperService);
    expect(service).toBeTruthy();
  });
});
