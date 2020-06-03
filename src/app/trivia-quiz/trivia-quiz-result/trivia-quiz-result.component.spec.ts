import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TriviaQuizResultComponent } from './trivia-quiz-result.component';

describe('TriviaQuizResultComponent', () => {
  let component: TriviaQuizResultComponent;
  let fixture: ComponentFixture<TriviaQuizResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TriviaQuizResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TriviaQuizResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
