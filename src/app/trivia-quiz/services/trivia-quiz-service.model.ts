import { IProduct } from 'src/app/core/models/product';
import { ITriviaQuiz } from 'src/app/core/models/triviaQuiz';

export interface TriviaQuizRequestModel {
    trivia: TriviaQuizRequest;
}

export interface TriviaQuizRequest {
    product: TriviaQuizRequestProduct;
}

export interface TriviaQuizRequestProduct {
    productId: string;
}


export interface TriviaQuizModel {
    productDetail: IProduct;
    triviaQuizList: ITriviaQuiz[];
}