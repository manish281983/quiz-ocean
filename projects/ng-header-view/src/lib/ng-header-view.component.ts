import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-ng-header-view',
  templateUrl: './ng-header-view.component.html',
  styleUrls: ['./ng-header-view.component.scss']
})
export class NgHeaderViewComponent implements OnInit {

  @Input() menuList: any;
  @Output() menuChangeAction = new EventEmitter<any>();
@Input() productCount: number;
  constructor() { }

  ngOnInit() {
  }

  menuAction(page) {
    this.menuChangeAction.emit(page);
  }

}
