(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/platform-browser')) :
    typeof define === 'function' && define.amd ? define('ng-header-view', ['exports', '@angular/core', '@angular/platform-browser'], factory) :
    (factory((global['ng-header-view'] = {}),global.ng.core,global.ng.platformBrowser));
}(this, (function (exports,i0,platformBrowser) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/ng-header-view.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgHeaderViewService = /** @class */ (function () {
        function NgHeaderViewService() {
        }
        NgHeaderViewService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        NgHeaderViewService.ctorParameters = function () { return []; };
        /** @nocollapse */ NgHeaderViewService.ngInjectableDef = i0.defineInjectable({ factory: function NgHeaderViewService_Factory() { return new NgHeaderViewService(); }, token: NgHeaderViewService, providedIn: "root" });
        return NgHeaderViewService;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/ng-header-view.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgHeaderViewComponent = /** @class */ (function () {
        function NgHeaderViewComponent() {
            this.menuChangeAction = new i0.EventEmitter();
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
            { type: i0.Component, args: [{
                        selector: 'lib-ng-header-view',
                        template: "\r\n  <nav class=\"gbl_menu-list navbar navbar-expand-md navbar-dark fixed-top\">\r\n    <a class=\"menu-logo\" href=\"#\">\r\n      <i class=\"fa fa-2x fa-shopping-basket\" aria-hidden=\"true\"></i>\r\n    </a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n  \r\n    <div class=\"collapse navbar-collapse menu-row\" id=\"navbarsExampleDefault\">\r\n      <div class=\"navbar-nav mr-auto\">\r\n        <div *ngFor = \"let menu of menuList;let i=index\">\r\n          <div class=\"nav-item active\">\r\n            <div class=\"nav-link menu-text\" (click)=\"menuAction(menu.page)\" *ngIf=\"!menu.subMenuList\">{{menu.name}}</div>\r\n            <div class=\"nav-item dropdown\" *ngIf=\"menu.subMenuList\">\r\n              <a class=\"nav-link menu-text dropdown-toggle\" href=\"#\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">{{menu.name}}</a>\r\n              <div class=\"dropdown-menu\">\r\n                <a class=\"dropdown-item\" href=\"#\" *ngFor = \"let subMenu of menu.subMenuList;\">{{subMenu.name}}</a>\r\n              </div>\r\n            </div>\r\n   \r\n          </div>\r\n        </div>\r\n      </div>\r\n      <form class=\"form-inline my-2 my-lg-0\">\r\n        <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">\r\n        <button class=\"menu-button btn btn-secondary my-2 my-sm-0\" type=\"submit\">Search</button>\r\n      </form>\r\n    </div>\r\n  </nav>",
                        styles: [".gbl_menu-list{background-color:#343a40;padding-right:30px;padding-left:30px}.gbl_menu-list .menu-logo{padding-right:15px}.gbl_menu-list .navbar-nav .nav-item .nav-link{cursor:pointer}.gbl_menu-list .checkout-btn{position:relative}.gbl_menu-list .checkout-btn .badge{position:absolute;top:-10px;right:-10px;padding:5px 10px;border-radius:50%;background-color:red;color:#fff}"]
                    }] }
        ];
        /** @nocollapse */
        NgHeaderViewComponent.ctorParameters = function () { return []; };
        NgHeaderViewComponent.propDecorators = {
            menuList: [{ type: i0.Input }],
            menuChangeAction: [{ type: i0.Output }],
            productCount: [{ type: i0.Input }]
        };
        return NgHeaderViewComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/ng-header-view.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgHeaderViewModule = /** @class */ (function () {
        function NgHeaderViewModule() {
        }
        NgHeaderViewModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [NgHeaderViewComponent],
                        imports: [
                            platformBrowser.BrowserModule
                        ],
                        exports: [NgHeaderViewComponent]
                    },] }
        ];
        return NgHeaderViewModule;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: ng-header-view.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.NgHeaderViewService = NgHeaderViewService;
    exports.NgHeaderViewComponent = NgHeaderViewComponent;
    exports.NgHeaderViewModule = NgHeaderViewModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ng-header-view.umd.js.map