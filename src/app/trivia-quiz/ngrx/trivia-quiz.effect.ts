import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { switchMap, catchError, map, tap } from 'rxjs/operators';

import { TriviaQuizAction, 
    TriviaQuizActionTypes, 
    TriviaQuizSuccessAction, 
    TriviaQuizFailedAction 
} from './trivia-quiz.action';
import { TriviaQuizService } from '../services/trivia-quiz.service';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class TriviaQuizEffects {
  constructor(
    private service: TriviaQuizService,
    private actions$: Actions<TriviaQuizAction>
  ) {}

  
  @Effect()
  public performTriviaQuiz$: Observable<any> = this.actions$.pipe(
    ofType(TriviaQuizActionTypes.TRIVIAQUIZ_INIT),
    switchMap((action: TriviaQuizAction) => {
      return this.service.getTriviaQuiz(action.productId).pipe(
        map(data => {
          return new TriviaQuizSuccessAction(this.service.mapTriviaQuizResponse(data));
        }),
        catchError(error => {
            return of(new TriviaQuizFailedAction());
        })
      );

    })
  );
}