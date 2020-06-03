import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import {EffectsModule} from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { triviaQuizReducer } from './ngrx/trivia-quiz.reducer';
import { TriviaQuizEffects } from './ngrx/trivia-quiz.effect';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { TriviaQuizViewComponent } from './trivia-quiz-view/trivia-quiz-view.component';
import { TriviaQuizQuestionsComponent } from './trivia-quiz-questions/trivia-quiz-questions.component';
import { TriviaQuizResultComponent } from './trivia-quiz-result/trivia-quiz-result.component';


const routes: Routes = [
    {path: '', component: TriviaQuizViewComponent, pathMatch: 'full'}
];

@NgModule({
    declarations: [
        TriviaQuizViewComponent,
        TriviaQuizQuestionsComponent,
        TriviaQuizResultComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        EffectsModule.forFeature([
            TriviaQuizEffects
        ]),
        SharedModule,
        InfiniteScrollModule,
        StoreModule.forFeature('triviaQuiz', triviaQuizReducer)
    ],
    providers: [
    ],
})

export class TriviaQuizModule {
}
