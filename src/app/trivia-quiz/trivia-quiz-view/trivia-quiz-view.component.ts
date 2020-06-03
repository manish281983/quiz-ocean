import { Component, OnInit, ViewChild } from '@angular/core';
import mockProductList from '../../../assets/mock-json/product-list.json';
import { Observable } from 'rxjs';
import { TriviaQuizHelperService } from '../helpers/trivia-quiz-helper.service';
import { TriviaQuizModel } from '../services/trivia-quiz-service.model';
import {APP_LABELS} from '../../app.constant';
import { ActivatedRoute, Router } from '@angular/router';
import { ITriviaAnswer, ITriviaQuiz } from 'src/app/core/models/triviaQuiz';

@Component({
  selector: 'app-trivia-quiz-view',
  templateUrl: './trivia-quiz-view.component.html',
  styleUrls: ['./trivia-quiz-view.component.scss']
})
export class TriviaQuizViewComponent implements OnInit {
  public inProgress$: Observable<boolean>;
  public triviaQuizData$: Observable<TriviaQuizModel>;

  nextLbl: string;
  inUse: boolean;
  totalQuestions : number;
  resultSummary: boolean;
  progressWidth: number;
  questionNumber: number;
  userAnswer: ITriviaAnswer;

  dateTime: any;
  triviaQuizList: ITriviaQuiz[];
  pageLabel: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private triviaQuizHelperService: TriviaQuizHelperService) {
      this.inProgress$ = this.triviaQuizHelperService.inProgress$;
      this.triviaQuizData$ = this.triviaQuizHelperService.triviaQuizData$;
  }

  ngOnInit() {
    this.dateTime = {
      start: new Date(),
      end: null
    }
    this.nextLbl = 'SKIP';
    this.inUse = false;
    this.progressWidth = 0;
    this.questionNumber = 1;
    this.totalQuestions = 0;
    this.triviaQuizList = [];
    this.resultSummary = false;
    this.userAnswer = {
      answer: '',
      status: false
    };
    this.triviaQuizData$.subscribe((triviaQuizData: any) => {
      if(triviaQuizData.productDetail) {
        this.totalQuestions = triviaQuizData.triviaQuizList.length;
      }
      this.triviaQuizList = triviaQuizData.triviaQuizList.map (trivia=> {
        return {
          question: trivia.question,
          answers: trivia.answers,
          id: trivia.id,
          status: false,
          time: '' 
        };
      });
      //this.triviaQuizList = [ 
      //  { "question": "Where do kids nowadays spend most of their time?", "answers": [ { "answer": "Room", "points": "30", "status": "false" }, { "answer": "School", "points": "20", "status": "false" }, { "answer": "Internet", "points": "12", "status": "true" }, { "answer": "Friend House", "points": "6", "status": "false" } ], "id": "4a40ad33-a1f8-4a46-af1a-00ac0c75f6ad", "status": true, "time": "" }, { "question": "Name a reason a person might wake up at 2 in the morning.", "answers": [ { "answer": "Bathroom", "points": "33", "status": "true" }, { "answer": "Baby/ Child", "points": "27", "status": "false" }, { "answer": "Bad dream", "points": "17", "status": "false" }, { "answer": "Heard Noise", "points": "11", "status": "false" }, { "answer": "Hot / Cold", "points": "6", "status": "false" } ], "id": "4a40ad33-a1f8-4a46-af1a-00ac0c75f6af", "status": false, "time": "" }, { "question": "Tell me something many people do just once a week.", "answers": [ { "answer": "Church", "points": "45", "status": "false" }, { "answer": "Groceries", "points": "32", "status": "true" }, { "answer": "Shopping", "points": "27", "status": "false" }, { "answer": "Cleaning", "points": "13", "status": "false" }, { "answer": "Sleep", "points": "6 ", "status": "false" } ], "id": "4a40ad33-a1f8-4a46-af1a-00ac0c75f6ae", "status": true, "time": "" } ];
      //this.resultSummary = true;
    });


    this.pageLabel = APP_LABELS;
    window.scrollTo(0, 0);
    if (this.route.snapshot.params[`id`]) {
      setTimeout( () => {
        this.triviaQuizHelperService.getTriviaQuiz(this.route.snapshot.params[`id`]);
      }, 0);
    }

  }

  submitAnswer(ans: any){
    if (!this.inUse) {
      this.inUse = true;
      this.userAnswer = {
        answer: ans.answer,
        status: (ans.status === 'true')
      };
      if(this.totalQuestions !== this.questionNumber) {
        this.nextLbl = 'NEXT';
      } else {
        this.nextLbl = 'RESULT';
      }
    }
  }

  getProgressBar() {
    setTimeout( () => {
      let increment = this.progressWidth;
      increment = increment + 1;
      if (increment <= 100) {
          this.progressWidth = increment;
          this.getProgressBar();
      } else {
        setTimeout( () => {
          this.nextQuestion();
        }, 1000);
      }
    }, 100);
  }

  skipQuestion() {
    if(this.nextLbl==='RESULT') {
      this.resultSummary = true;
      this.dateTime.end = new Date();
    } else {
      this.nextQuestion();
    }
  }

  goToHomePage() {
    this.router.navigate(['/dashboard']);
  }

  nextQuestion() {
    this.progressWidth = 0;
    if(this.totalQuestions !== this.questionNumber) {
      console.log(this.triviaQuizList);
      this.questionNumber ++; 
      this.userAnswer = {
        answer: '',
        status: false
      };
      this.inUse = false;
    }

    if(this.totalQuestions >this.questionNumber) {
      this.nextLbl = 'SKIP';
    } else {
      this.nextLbl = '';
    }
  }
}
