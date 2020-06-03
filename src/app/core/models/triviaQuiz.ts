
export interface ITriviaQuiz {
    question: string;
    data: string;
    answers: ITriviaAnswer[];
    ID: string;
}

export interface ITriviaAnswer {
    answer: string;
    status: boolean;
    points?: string;
}