import { Component, OnInit, Input } from '@angular/core';
import { ITriviaQuiz } from 'src/app/core/models/triviaQuiz';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trivia-quiz-result',
  templateUrl: './trivia-quiz-result.component.html',
  styleUrls: ['./trivia-quiz-result.component.scss']
})
export class TriviaQuizResultComponent implements OnInit {
 
  @Input() triviaQuizList: ITriviaQuiz[];

  @Input() dateTime: any;

  triviaResult: any;
  constructor( private router: Router) {
  }

  ngOnInit() {

    const correctAns = this.triviaQuizList.filter(trivia=> trivia.status).length;
    const wrongAns = this.triviaQuizList.length - correctAns;
    console.log(this.triviaQuizList);
    this.triviaResult = {
      correct: correctAns,
      wrong: wrongAns,
      percent: ((correctAns/this.triviaQuizList.length)*100).toFixed(),
      time: '',
      status: false
    };

    const startTime = this.dateTime.start.getTime();
    const endTime = this.dateTime.end.getTime();

    const diffTime = endTime - startTime;

    const diff = Math.abs(endTime - startTime);
    const minutes = Math.floor((diff/1000)/60);
    let displayMin = '';
    if(minutes !== 0){
      displayMin = minutes + ' Min ';
    }
    this.triviaResult.time = displayMin + ' ' + Math.floor(diffTime / 1000 % 60);

    this.triviaResult.status = (this.triviaResult.percent>= 75)
  }

  goToHomePage() {
    this.router.navigate(['/dashboard']);
  }

}
