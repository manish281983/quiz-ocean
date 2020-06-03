import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TriviaQuizViewComponent } from './trivia-quiz-view.component';

describe('TriviaQuizViewComponent', () => {
  let component: TriviaQuizViewComponent;
  let fixture: ComponentFixture<TriviaQuizViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TriviaQuizViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TriviaQuizViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
