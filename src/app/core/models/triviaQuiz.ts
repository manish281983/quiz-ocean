
export interface ITriviaQuiz {
    question: string;
    data: string;
    answers: ITriviaAnswer[];
    ID: string;
    time?: string;
    status?: boolean;
}

export interface ITriviaAnswer {
    answer: string;
    status: boolean;
    points?: string;
}