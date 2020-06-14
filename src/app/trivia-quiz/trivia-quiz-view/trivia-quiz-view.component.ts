import { Component, OnInit, ViewChild } from '@angular/core';
import mockProductList from '../../../assets/mock-json/product-list.json';
import { Observable } from 'rxjs';
import { TriviaQuizHelperService } from '../helpers/trivia-quiz-helper.service';
import { TriviaQuizModel } from '../services/trivia-quiz-service.model';
import {APP_LABELS} from '../../app.constant';
import { ActivatedRoute, Router } from '@angular/router';
import { ITriviaAnswer, ITriviaQuiz } from 'src/app/core/models/triviaQuiz';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-trivia-quiz-view',
  templateUrl: './trivia-quiz-view.component.html',
  styleUrls: ['./trivia-quiz-view.component.scss']
})
export class TriviaQuizViewComponent implements OnInit {
  public inProgress$: Observable<boolean>;
  public triviaQuizData$: Observable<TriviaQuizModel>;

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
    private db: AngularFireDatabase,
    private router: Router,
    private route: ActivatedRoute,
    private triviaQuizHelperService: TriviaQuizHelperService) {
      this.inProgress$ = this.triviaQuizHelperService.inProgress$;
      this.triviaQuizData$ = this.triviaQuizHelperService.triviaQuizData$;
  }

  ngOnInit() {
    //this.createTodo();
    this.dateTime = {
      start: new Date(),
      end: null
    }
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
    this.triviaQuizHelperService.resetTriviaQuiz();
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
    });
    this.pageLabel = APP_LABELS;
    window.scrollTo(0, 0);
    if (this.route.snapshot.params[`id`]) {
      setTimeout( () => {
        this.triviaQuizHelperService.getTriviaQuiz(this.route.snapshot.params[`id`]);
      }, 2000);
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
        this.getProgressBar();
      }
    }
  }

  getProgressBar() {
    setTimeout( () => {
      let increment = this.progressWidth;
      increment = increment + 3;
      if (increment <= 100) {
          this.progressWidth = increment;
          this.getProgressBar();
      } else {
        setTimeout( () => {
          if(this.totalQuestions !== this.questionNumber) {
            this.nextQuestion();
          } else {
            this.resultSummary = true;
            this.dateTime.end = new Date();
          }
        }, 1000);
      }
    }, 50);
  }

  goToHomePage() {
    if (confirm('Are you sure to exist?')) {
      this.router.navigate(['/dashboard']);
    }
  }

  nextQuestion() {
    this.progressWidth = 0;
    if(this.totalQuestions !== this.questionNumber) {
      this.questionNumber ++; 
      this.userAnswer = {
        answer: '',
        status: false
      };
      this.inUse = false;
    }
  }


  createTodo() {
    return this.db.list('trivia-aca751fb-7bcc-4304-a745-99eaf1f4765f').push({
      "home": {
          "featureProductList": null,
          "categoryProductList": null
      },
      "category": {
          "categoryProductList": null
      },
      "product": {
          "categoryList": null,
          "category": null,
          "productList": null
      },
      "detail": {
          "productDetail": null
      },
      "trivia": {
          "productDetail": {
              "deleted": false,
              "categoryId": "a13642a1-9ef8-4d20-b0e1-b501efa4b666",
              "unavailable": false,
              "featureProduct": true,
              "thumbImage": "https://quiz-ocean.s3.us-east-2.amazonaws.com/survey-quiz/superheros/batman.JPG",
              "id": "12ca372c-7cbd-44fc-86a0-dc26f9322101",
              "price": "",
              "description": "The Dark Knight has many secrets that you need to uncover in this gk questions quiz",
              "name": "The Ultimate Dark Night Trivia"
          },
          "triviaQuizList": [
              {
                  "question": "What planet is Superman from?",
                  "id": "efb75d6b-90dc-4d88-9d1c-f03ba119e1d5",
                  "answers": [
                      {
                          "answer": "Krypton",
                          "points": "0",
                          "status": "true"
                      },
                      {
                          "answer": "Mars",
                          "points": "0",
                          "status": "false"
                      },
                      {
                          "answer": "Pluto",
                          "points": "0",
                          "status": "false"
                      },
                      {
                          "answer": "Jupitor",
                          "points": "0",
                          "status": "false"
                      }
                  ]
              },
              {
                  "question": "Who is Superman's Pal?",
                  "id": "efb75d6b-90dc-4d88-9d1c-f03ba119e1d6",
                  "answers": [
                      {
                          "answer": "Batman",
                          "points": "0",
                          "status": "false"
                      },
                      {
                          "answer": "Jimmy Olsen",
                          "points": "0",
                          "status": "true"
                      },
                      {
                          "answer": "Perry White",
                          "points": "0",
                          "status": "false"
                      },
                      {
                          "answer": "Pete Ross",
                          "points": "0",
                          "status": "false"
                      }
                  ]
              },
              {
                  "question": "What is Superman's Kryptonian name?",
                  "id": "efb75d6b-90dc-4d88-9d1c-f03ba119e1d7",
                  "answers": [
                      {
                          "answer": "Jor-El",
                          "points": "0",
                          "status": "false"
                      },
                      {
                          "answer": "Kal-El",
                          "points": "0",
                          "status": "true"
                      },
                      {
                          "answer": "Ken-El",
                          "points": "0",
                          "status": "false"
                      },
                      {
                          "answer": "Tom-El",
                          "points": "0",
                          "status": "false"
                      }
                  ]
              },
              {
                  "question": "What is Superman's human name?",
                  "id": "efb75d6b-90dc-4d88-9d1c-f03ba119e1d8",
                  "answers": [
                      {
                          "answer": "Clark Kent",
                          "points": "0",
                          "status": "true"
                      },
                      {
                          "answer": "Hal Jordan",
                          "points": "0",
                          "status": "false"
                      },
                      {
                          "answer": "Bruce Wayne",
                          "points": "0",
                          "status": "false"
                      },
                      {
                          "answer": "Barry Allen",
                          "points": "0",
                          "status": "false"
                      }
                  ]
              },
              {
                  "question": "Who are Superman's adopted Parents?",
                  "id": "efb75d6b-90dc-4d88-9d1c-f03ba119e1d9",
                  "answers": [
                      {
                          "answer": "Joseph and Sarah",
                          "points": "0",
                          "status": "false"
                      },
                      {
                          "answer": "Ben and May",
                          "points": "0",
                          "status": "false"
                      },
                      {
                          "answer": "Jonathan and Martha",
                          "points": "0",
                          "status": "true"
                      },
                      {
                          "answer": "Thomas and Martha",
                          "points": "0",
                          "status": "false"
                      }
                  ]
              },
              {
                  "question": "Name of Superman's most famous pet",
                  "id": "efb75d6b-90dc-4d88-9d1c-f03ba119e1d10",
                  "answers": [
                      {
                          "answer": "Comet",
                          "points": "0",
                          "status": "false"
                      },
                      {
                          "answer": "Beppo",
                          "points": "0",
                          "status": "false"
                      },
                      {
                          "answer": "Ace",
                          "points": "0",
                          "status": "false"
                      },
                      {
                          "answer": "Krypto",
                          "points": "0",
                          "status": "true"
                      }
                  ]
              },
              {
                  "question": "What is Superman's greatest weakness?",
                  "id": "efb75d6b-90dc-4d88-9d1c-f03ba119e1d11",
                  "answers": [
                      {
                          "answer": "Gold",
                          "points": "0",
                          "status": "false"
                      },
                      {
                          "answer": "Fire",
                          "points": "0",
                          "status": "false"
                      },
                      {
                          "answer": "Water",
                          "points": "0",
                          "status": "false"
                      },
                      {
                          "answer": "Kryptonite",
                          "points": "0",
                          "status": "true"
                      }
                  ]
              },
              {
                  "question": "What Boxer did Superman fight?",
                  "id": "efb75d6b-90dc-4d88-9d1c-f03ba119e1d12",
                  "answers": [
                      {
                          "answer": "Sugar Ray Robinson",
                          "points": "0",
                          "status": "false"
                      },
                      {
                          "answer": "Joe Louis",
                          "points": "0",
                          "status": "false"
                      },
                      {
                          "answer": "Muhammad Ali",
                          "points": "0",
                          "status": "true"
                      },
                      {
                          "answer": "George Foreman",
                          "points": "0",
                          "status": "false"
                      }
                  ]
              }
            
          ]
      }
  });
  }

}
