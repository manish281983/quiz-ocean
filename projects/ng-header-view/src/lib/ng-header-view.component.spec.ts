import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgHeaderViewComponent } from './ng-header-view.component';

describe('NgHeaderViewComponent', () => {
  let component: NgHeaderViewComponent;
  let fixture: ComponentFixture<NgHeaderViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgHeaderViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgHeaderViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
