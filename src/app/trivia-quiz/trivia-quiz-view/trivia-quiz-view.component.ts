import { Component, OnInit, ViewChild } from '@angular/core';
import mockProductList from '../../../assets/mock-json/product-list.json';
import { Observable } from 'rxjs';
import { TriviaQuizHelperService } from '../helpers/trivia-quiz-helper.service';
import { TriviaQuizModel } from '../services/trivia-quiz-service.model';
import {APP_LABELS} from '../../app.constant';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-trivia-quiz-view',
  templateUrl: './trivia-quiz-view.component.html',
  styleUrls: ['./trivia-quiz-view.component.scss']
})
export class TriviaQuizViewComponent implements OnInit {
  public inProgress$: Observable<boolean>;
  public triviaQuizData$: Observable<TriviaQuizModel>;
  
  progressWidth: number;
  questionNumber: number;
  
  pageLabel: any;

  constructor(
    private route: ActivatedRoute,
    private triviaQuizHelperService: TriviaQuizHelperService) {
      this.inProgress$ = this.triviaQuizHelperService.inProgress$;
      this.triviaQuizData$ = this.triviaQuizHelperService.triviaQuizData$;
  }

  ngOnInit() {
    this.progressWidth = 0;
    this.getProgressBar();
    this.questionNumber = 1;
    this.pageLabel = APP_LABELS;
    window.scrollTo(0, 0);
    if (this.route.snapshot.params[`id`]) {
      setTimeout( () => {
        this.triviaQuizHelperService.getTriviaQuiz(this.route.snapshot.params[`id`]);
      }, 0);
    }

  }

  getProgressBar() {
    setTimeout( () => {
      let increment = this.progressWidth;
      increment = increment + 1;
      if (increment <= 100) {
        if(this.progressWidth === 0) {
          setTimeout( () => {
            this.progressWidth = increment;
            this.getProgressBar();
          }, 1000);
        } else {
          this.progressWidth = increment;
          this.getProgressBar();
        }
      } else {
       // this.submitAnswerResponse.emit('');
      }
    }, 100);
  }
}
