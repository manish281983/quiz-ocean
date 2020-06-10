import { OnInit, EventEmitter } from '@angular/core';
export declare class NgHeaderViewComponent implements OnInit {
    menuList: any;
    menuChangeAction: EventEmitter<any>;
    productCount: number;
    constructor();
    ngOnInit(): void;
    menuAction(page: any): void;
}
