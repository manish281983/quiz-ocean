import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ITriviaQuiz } from 'src/app/core/models/triviaQuiz';

@Component({
  selector: 'app-trivia-quiz-question',
  templateUrl: './trivia-quiz-questions.component.html',
  styleUrls: ['./trivia-quiz-questions.component.scss']
})
export class TriviaQuizQuestionsComponent implements OnInit {
 
  @Input() triviaQuizList: ITriviaQuiz[];
  @Input() questionNumber: number;

  constructor() {
  }

  ngOnInit() {
  }
}
