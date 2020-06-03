import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { TriviaQuizAction } from '../ngrx/trivia-quiz.action';
import { TriviaQuizModel } from '../services/trivia-quiz-service.model';

@Injectable({
  providedIn: 'root'
})
export class TriviaQuizHelperService {
  inProgress$: Observable<boolean>;
  triviaQuizData$: Observable<TriviaQuizModel>;

  constructor(private store$: Store<any>) {
    this.inProgress$ = this.store$.pipe(
      select((state: any) => state.triviaQuiz.inProgress)
    );
    this.triviaQuizData$ = this.store$.pipe(
      select((state: any) => state.triviaQuiz.triviaQuizData)
    );
  }

  getTriviaQuiz(productId: string) {
    this.store$.dispatch(new TriviaQuizAction(productId));
  }
}
