/**
 * @fileoverview added by tsickle
 * Generated from: lib/ng-header-view.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class NgHeaderViewComponent {
    constructor() {
        this.menuChangeAction = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} page
     * @return {?}
     */
    menuAction(page) {
        this.menuChangeAction.emit(page);
    }
}
NgHeaderViewComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-ng-header-view',
                template: "\r\n  <nav class=\"gbl_menu-list navbar navbar-expand-md navbar-dark fixed-top\">\r\n    <a class=\"menu-logo\" href=\"#\">\r\n      <i class=\"fa fa-2x fa-shopping-basket\" aria-hidden=\"true\"></i>\r\n    </a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n  \r\n    <div class=\"collapse navbar-collapse menu-row\" id=\"navbarsExampleDefault\">\r\n      <div class=\"navbar-nav mr-auto\">\r\n        <div *ngFor = \"let menu of menuList;let i=index\">\r\n          <div class=\"nav-item active\">\r\n            <div class=\"nav-link menu-text\" (click)=\"menuAction(menu.page)\" *ngIf=\"!menu.subMenuList\">{{menu.name}}</div>\r\n            <div class=\"nav-item dropdown\" *ngIf=\"menu.subMenuList\">\r\n              <a class=\"nav-link menu-text dropdown-toggle\" href=\"#\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">{{menu.name}}</a>\r\n              <div class=\"dropdown-menu\">\r\n                <a class=\"dropdown-item\" href=\"#\" *ngFor = \"let subMenu of menu.subMenuList;\">{{subMenu.name}}</a>\r\n              </div>\r\n            </div>\r\n   \r\n          </div>\r\n        </div>\r\n      </div>\r\n      <form class=\"form-inline my-2 my-lg-0\">\r\n        <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">\r\n        <button class=\"menu-button btn btn-secondary my-2 my-sm-0\" type=\"submit\">Search</button>\r\n      </form>\r\n    </div>\r\n  </nav>",
                styles: [".gbl_menu-list{background-color:#343a40;padding-right:30px;padding-left:30px}.gbl_menu-list .menu-logo{padding-right:15px}.gbl_menu-list .navbar-nav .nav-item .nav-link{cursor:pointer}.gbl_menu-list .checkout-btn{position:relative}.gbl_menu-list .checkout-btn .badge{position:absolute;top:-10px;right:-10px;padding:5px 10px;border-radius:50%;background-color:red;color:#fff}"]
            }] }
];
/** @nocollapse */
NgHeaderViewComponent.ctorParameters = () => [];
NgHeaderViewComponent.propDecorators = {
    menuList: [{ type: Input }],
    menuChangeAction: [{ type: Output }],
    productCount: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NgHeaderViewComponent.prototype.menuList;
    /** @type {?} */
    NgHeaderViewComponent.prototype.menuChangeAction;
    /** @type {?} */
    NgHeaderViewComponent.prototype.productCount;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctaGVhZGVyLXZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctaGVhZGVyLXZpZXcvIiwic291cmNlcyI6WyJsaWIvbmctaGVhZGVyLXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU8vRSxNQUFNLE9BQU8scUJBQXFCO0lBS2hDO1FBRlUscUJBQWdCLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQUVyQyxDQUFDOzs7O0lBRWpCLFFBQVE7SUFDUixDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxJQUFJO1FBQ2IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuQyxDQUFDOzs7WUFqQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLGlyREFBOEM7O2FBRS9DOzs7Ozt1QkFHRSxLQUFLOytCQUNMLE1BQU07MkJBQ1IsS0FBSzs7OztJQUZKLHlDQUF1Qjs7SUFDdkIsaURBQXFEOztJQUN2RCw2Q0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xpYi1uZy1oZWFkZXItdmlldycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL25nLWhlYWRlci12aWV3LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9uZy1oZWFkZXItdmlldy5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ0hlYWRlclZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBASW5wdXQoKSBtZW51TGlzdDogYW55O1xyXG4gIEBPdXRwdXQoKSBtZW51Q2hhbmdlQWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbkBJbnB1dCgpIHByb2R1Y3RDb3VudDogbnVtYmVyO1xyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbiAgbWVudUFjdGlvbihwYWdlKSB7XHJcbiAgICB0aGlzLm1lbnVDaGFuZ2VBY3Rpb24uZW1pdChwYWdlKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==