import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-view',
  templateUrl: './message-view.component.html',
  styleUrls: ['./message-view.component.scss']
})
export class MessageViewComponent implements OnInit {

  selectedId = 0;

  subCategoryList = [];
  constructor() { }

  ngOnInit() {
  this.subCategoryList= [
      {
        id: 1,
        name: 'Action'
      },
      {
        id: 2,
        name: 'Horror'
      },
      {
        id: 3,
        name: 'Romance'
      }

    ];
    window.scrollTo(0, 0);
  }

  selectCategoryAction(id) {
    this.selectedId = id;
  }

}
