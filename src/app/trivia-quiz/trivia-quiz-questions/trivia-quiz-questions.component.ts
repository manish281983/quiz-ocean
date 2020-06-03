import { Component, OnInit, ViewChild, Input, Output, EventEmitter} from '@angular/core';
import { ITriviaQuiz, ITriviaAnswer } from 'src/app/core/models/triviaQuiz';

@Component({
  selector: 'app-trivia-quiz-question',
  templateUrl: './trivia-quiz-questions.component.html',
  styleUrls: ['./trivia-quiz-questions.component.scss']
})
export class TriviaQuizQuestionsComponent implements OnInit {
 
  @Input() triviaQuizList: ITriviaQuiz[];
  @Input() questionNumber: number;

  @Output() submitAnswer= new EventEmitter<any>();

  @Input() userAnswer: ITriviaAnswer;
  constructor() {
  }

  ngOnInit() {
  
  }

  getAnswerAction(ans: any) {
    this.submitAnswer.emit(ans);
  }

  getUserResponse(ans: any) {
    if(this.userAnswer.answer!== ''){
      if(this.userAnswer.answer === ans.answer) {
        if(this.userAnswer.status) {
          this.triviaQuizList[this.questionNumber- 1].status = true;
          return 'green';
        } else {
          this.triviaQuizList[this.questionNumber- 1].status = false;
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
