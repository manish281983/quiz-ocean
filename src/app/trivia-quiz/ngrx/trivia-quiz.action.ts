import { Action } from '@ngrx/store';
import { TriviaQuizModel } from '../services/trivia-quiz-service.model';

export enum TriviaQuizActionTypes {
    TRIVIAQUIZ_INIT = '[TRIVIAQUIZ] Make Request',
    TRIVIAQUIZ_SUCCESS = '[TRIVIAQUIZ_SUCCESS] Request success',
    TRIVIAQUIZ_FAILED = '[TRIVIAQUIZ_FAILED] Request failed',
    TRIVIAQUIZ_RESET = '[TRIVIAQUIZ_RESET] Make RESET'
}

export class TriviaQuizAction implements Action {
    public type = TriviaQuizActionTypes.TRIVIAQUIZ_INIT;
    constructor(public productId: string) { }
}

export class TriviaQuizResetAction implements Action {
    public type = TriviaQuizActionTypes.TRIVIAQUIZ_RESET;
    constructor() { }
}

export class TriviaQuizSuccessAction implements Action {
    public type = TriviaQuizActionTypes.TRIVIAQUIZ_SUCCESS;
    constructor(public triviaQuizData: TriviaQuizModel) { }
}

export class TriviaQuizFailedAction implements Action {
    public type = TriviaQuizActionTypes.TRIVIAQUIZ_FAILED;
    constructor() { }
}


export type TriviaQuizActions =
    TriviaQuizAction |
    TriviaQuizSuccessAction |
    TriviaQuizFailedAction
;
