import {
    TriviaQuizActions,
    TriviaQuizActionTypes,
    TriviaQuizFailedAction,
    TriviaQuizSuccessAction
    } from './trivia-quiz.action';
import { TriviaQuizModel } from '../services/trivia-quiz-service.model';


export interface TriviaQuizState {
    inProgress: boolean;
    triviaQuizData?: TriviaQuizModel;
    error?: any;
}

const defaultState = {
    inProgress: false,
    error: false,
    triviaQuizData: {
        productDetail: null,
        triviaQuizList: []
    }
};

export function triviaQuizReducer(
state: TriviaQuizState = { ...defaultState },
action: TriviaQuizActions) {
    switch (action.type) {
        case TriviaQuizActionTypes.TRIVIAQUIZ_INIT:
        return {
            ...state,
            inProgress: true,
            error: false,
        };
        case TriviaQuizActionTypes.TRIVIAQUIZ_SUCCESS:
        console.log((action as TriviaQuizSuccessAction).triviaQuizData);
        return {
            ...state,
            inProgress: false,
            error: false,
            triviaQuizData: (action as TriviaQuizSuccessAction).triviaQuizData
        };
        case TriviaQuizActionTypes.TRIVIAQUIZ_FAILED:
        return {
            ...state,
            inProgress: false,
            error: true
        };
        case TriviaQuizActionTypes.TRIVIAQUIZ_RESET:
        return {
            ...state,
            triviaQuizData: {
                productDetail: null,
                triviaQuizList: []
            }
        };
        default:
        return state;
    }
}