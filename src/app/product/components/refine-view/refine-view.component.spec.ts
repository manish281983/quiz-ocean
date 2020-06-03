import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefineViewComponent } from './refine-view.component';

describe('RefineViewComponent', () => {
  let component: RefineViewComponent;
  let fixture: ComponentFixture<RefineViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefineViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefineViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
