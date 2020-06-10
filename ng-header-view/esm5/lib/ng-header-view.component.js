/**
 * @fileoverview added by tsickle
 * Generated from: lib/ng-header-view.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
var NgHeaderViewComponent = /** @class */ (function () {
    function NgHeaderViewComponent() {
        this.menuChangeAction = new EventEmitter();
    }
    /**
     * @return {?}
     */
    NgHeaderViewComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} page
     * @return {?}
     */
    NgHeaderViewComponent.prototype.menuAction = /**
     * @param {?} page
     * @return {?}
     */
    function (page) {
        this.menuChangeAction.emit(page);
    };
    NgHeaderViewComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-ng-header-view',
                    template: "\r\n  <nav class=\"gbl_menu-list navbar navbar-expand-md navbar-dark fixed-top\">\r\n    <a class=\"menu-logo\" href=\"#\">\r\n      <i class=\"fa fa-2x fa-shopping-basket\" aria-hidden=\"true\"></i>\r\n    </a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n  \r\n    <div class=\"collapse navbar-collapse menu-row\" id=\"navbarsExampleDefault\">\r\n      <div class=\"navbar-nav mr-auto\">\r\n        <div *ngFor = \"let menu of menuList;let i=index\">\r\n          <div class=\"nav-item active\">\r\n            <div class=\"nav-link menu-text\" (click)=\"menuAction(menu.page)\" *ngIf=\"!menu.subMenuList\">{{menu.name}}</div>\r\n            <div class=\"nav-item dropdown\" *ngIf=\"menu.subMenuList\">\r\n              <a class=\"nav-link menu-text dropdown-toggle\" href=\"#\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">{{menu.name}}</a>\r\n              <div class=\"dropdown-menu\">\r\n                <a class=\"dropdown-item\" href=\"#\" *ngFor = \"let subMenu of menu.subMenuList;\">{{subMenu.name}}</a>\r\n              </div>\r\n            </div>\r\n   \r\n          </div>\r\n        </div>\r\n      </div>\r\n      <form class=\"form-inline my-2 my-lg-0\">\r\n        <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">\r\n        <button class=\"menu-button btn btn-secondary my-2 my-sm-0\" type=\"submit\">Search</button>\r\n      </form>\r\n    </div>\r\n  </nav>",
                    styles: [".gbl_menu-list{background-color:#343a40;padding-right:30px;padding-left:30px}.gbl_menu-list .menu-logo{padding-right:15px}.gbl_menu-list .navbar-nav .nav-item .nav-link{cursor:pointer}.gbl_menu-list .checkout-btn{position:relative}.gbl_menu-list .checkout-btn .badge{position:absolute;top:-10px;right:-10px;padding:5px 10px;border-radius:50%;background-color:red;color:#fff}"]
                }] }
    ];
    /** @nocollapse */
    NgHeaderViewComponent.ctorParameters = function () { return []; };
    NgHeaderViewComponent.propDecorators = {
        menuList: [{ type: Input }],
        menuChangeAction: [{ type: Output }],
        productCount: [{ type: Input }]
    };
    return NgHeaderViewComponent;
}());
export { NgHeaderViewComponent };
if (false) {
    /** @type {?} */
    NgHeaderViewComponent.prototype.menuList;
    /** @type {?} */
    NgHeaderViewComponent.prototype.menuChangeAction;
    /** @type {?} */
    NgHeaderViewComponent.prototype.productCount;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctaGVhZGVyLXZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctaGVhZGVyLXZpZXcvIiwic291cmNlcyI6WyJsaWIvbmctaGVhZGVyLXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRTtJQVVFO1FBRlUscUJBQWdCLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQUVyQyxDQUFDOzs7O0lBRWpCLHdDQUFROzs7SUFBUjtJQUNBLENBQUM7Ozs7O0lBRUQsMENBQVU7Ozs7SUFBVixVQUFXLElBQUk7UUFDYixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25DLENBQUM7O2dCQWpCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsaXJEQUE4Qzs7aUJBRS9DOzs7OzsyQkFHRSxLQUFLO21DQUNMLE1BQU07K0JBQ1IsS0FBSzs7SUFVTiw0QkFBQztDQUFBLEFBbkJELElBbUJDO1NBZFkscUJBQXFCOzs7SUFFaEMseUNBQXVCOztJQUN2QixpREFBcUQ7O0lBQ3ZELDZDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGliLW5nLWhlYWRlci12aWV3JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbmctaGVhZGVyLXZpZXcuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL25nLWhlYWRlci12aWV3LmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIE5nSGVhZGVyVmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIG1lbnVMaXN0OiBhbnk7XHJcbiAgQE91dHB1dCgpIG1lbnVDaGFuZ2VBY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuQElucHV0KCkgcHJvZHVjdENvdW50OiBudW1iZXI7XHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxuICBtZW51QWN0aW9uKHBhZ2UpIHtcclxuICAgIHRoaXMubWVudUNoYW5nZUFjdGlvbi5lbWl0KHBhZ2UpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19