import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ITriviaQuiz, ITriviaAnswer } from 'src/app/core/models/triviaQuiz';

@Component({
  selector: 'app-trivia-quiz-question',
  templateUrl: './trivia-quiz-questions.component.html',
  styleUrls: ['./trivia-quiz-questions.component.scss']
})
export class TriviaQuizQuestionsComponent implements OnInit {
 
  @Input() triviaQuizList: ITriviaQuiz[];
  @Input() questionNumber: number;

  userAnswer: ITriviaAnswer;
  constructor() {
  }

  ngOnInit() {
    this.userAnswer = {
      answer: '',
      status: false
    };
  }

  getAnswerAction(ans: any) {
    this.userAnswer = {
      answer: ans.answer,
      status: (ans.status === 'true')
    };
  }

  getUserResponse(ans: any) {
    if(this.userAnswer.answer!== ''){
      if(this.userAnswer.answer === ans.answer) {
        if(this.userAnswer.status) {
          return 'green';
        } else {
          return 'red';
        }
      } else {
        if (ans.status === 'true') {
          return 'green';
        } else {
          return 'orange';
        }
      }
    } else {
      return 'orange';
    }
  }
}
