(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layout-layout-module"],{

/***/ "./src/app/layout/components/sidebar/sidebar.component.html":
/*!******************************************************************!*\
  !*** ./src/app/layout/components/sidebar/sidebar.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"sidebar\">\n    <mat-nav-list>\n        <a mat-list-item [routerLinkActive]=\"'active'\" [routerLink]=\"['/dashboard']\">\n            <mat-icon class=\"sidenav-icon\">dashboard</mat-icon> {{ 'Dashboard' | translate }}\n        </a>\n        <a mat-list-item [routerLinkActive]=\"'active'\" [routerLink]=\"['/tables']\">\n            <mat-icon class=\"sidenav-icon\">table_chart</mat-icon> {{ 'Tables' | translate }}\n        </a>\n        <a mat-list-item [routerLinkActive]=\"'active'\" [routerLink]=\"['/event']\">\n            <mat-icon class=\"sidenav-icon\">input</mat-icon> {{ 'Events' | translate }}\n        </a>\n        <a mat-list-item [routerLinkActive]=\"'active'\" [routerLink]=\"['/charts']\">\n            <mat-icon class=\"sidenav-icon\">bar_chart</mat-icon> {{ 'Charts' | translate }}\n        </a>\n        <!-- <a mat-list-item [routerLinkActive]=\"'active'\" [routerLink]=\"['/grid']\">\n            <mat-icon class=\"sidenav-icon\">grid_on</mat-icon> {{ 'Material Grid' | translate }}\n        </a> -->\n        <!-- <a mat-list-item [routerLinkActive]=\"'active'\" [routerLink]=\"['/components']\">\n            <mat-icon class=\"sidenav-icon\">code</mat-icon> {{ 'Material Component' | translate }}\n        </a>\n        <a mat-list-item [routerLinkActive]=\"'active'\" [routerLink]=\"['/blank-page']\">\n            <mat-icon class=\"sidenav-icon\">insert_drive_file</mat-icon> {{ 'Blank Page' | translate }}\n        </a> -->\n        <!-- <div class=\"nested-menu\">\n            <a mat-list-item (click)=\"addExpandClass('pages')\">\n                <mat-icon class=\"sidenav-icon\">add</mat-icon> {{ 'Menu' | translate }}\n            </a>\n            <ul class=\"nested submenu\" [class.expand]=\"showMenu === 'pages'\">\n                <li>\n                    <a href=\"javascript:void(0)\"><span>{{ 'Submenu' | translate }}</span></a>\n                </li>\n                <li>\n                    <a href=\"javascript:void(0)\"><span>{{ 'Submenu' | translate }}</span></a>\n                </li>\n                <li>\n                    <a href=\"javascript:void(0)\"><span>{{ 'Submenu' | translate }}</span></a>\n                </li>\n            </ul>\n        </div>\n        <div class=\"nested-menu\">\n            <a mat-list-item (click)=\"addExpandClass('pages')\">\n                <mat-icon class=\"sidenav-icon\">add</mat-icon> Novo Menu\n            </a>\n            <ul class=\"nested submenu\" [class.expand]=\"showMenu === 'pages'\">\n                <li>\n                    <a href=\"javascript:void(0)\"><span>{{ 'Submenu' | translate }}</span></a>\n                </li>\n                <li>\n                    <a href=\"javascript:void(0)\"><span>{{ 'Submenu' | translate }}</span></a>\n                </li>\n                <li>\n                    <a href=\"javascript:void(0)\"><span>{{ 'Submenu' | translate }}</span></a>\n                </li>\n            </ul>\n        </div> -->\n    </mat-nav-list>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/components/sidebar/sidebar.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/layout/components/sidebar/sidebar.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#sidebar {\n  width: 250px;\n  position: fixed;\n  top: 56px;\n  bottom: 0;\n  background-color: black;\n  box-shadow: 3px 0 6px rgba(0, 0, 0, 0.24);\n  z-index: 999;\n  -ms-overflow-y: auto;\n  overflow-y: auto; }\n  #sidebar .mat-nav-list {\n    width: 100%; }\n  #sidebar .mat-nav-list a {\n      color: #C4AF95;\n      display: block; }\n  #sidebar .mat-nav-list a .mat-icon {\n        margin-right: 15px; }\n  .nested-menu .nested {\n  list-style-type: none; }\n  .nested-menu .submenu {\n  display: none;\n  height: 0; }\n  .nested-menu .expand.submenu {\n  display: block;\n  list-style-type: none;\n  height: auto;\n  margin: 0; }\n  .nested-menu .expand.submenu li a {\n    padding: 10px;\n    display: block; }\n  @media screen and (max-width: 992px) {\n  #sidebar {\n    left: -250px; } }\n"

/***/ }),

/***/ "./src/app/layout/components/sidebar/sidebar.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/layout/components/sidebar/sidebar.component.ts ***!
  \****************************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
        this.showMenu = '';
    }
    SidebarComponent.prototype.ngOnInit = function () { };
    SidebarComponent.prototype.addExpandClass = function (element) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        }
        else {
            this.showMenu = element;
        }
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/layout/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/layout/components/sidebar/sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/layout/components/topnav/topnav.component.html":
/*!****************************************************************!*\
  !*** ./src/app/layout/components/topnav/topnav.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"black\" class=\"fix-nav\">\n    <button type=\"button\" mat-icon-button class=\"visible-md\" (click)=\"toggleSidebar()\">\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n    </button>\n    <div class=\"nav-brand\" style=\"float: left; display: flex;\">\n        <img src=\"../../../../assets/images/logo_iconcept.png\" alt=\"\" height=\"60\" width=\"150\">\n    </div>\n    <!-- <form class=\"hidden-sm\" style=\"margin-left: 20px; margin-top: 5px\">\n        <mat-form-field>\n            <input matInput [placeholder]=\"'Search' | translate\">\n        </mat-form-field>\n    </form> -->\n    <span class=\"nav-spacer\"></span>\n    <a href=\"https://github.com/start-javascript/sb-admin-material/archive/master.zip\" class=\"hidden-sm\" mat-raised-button style=\"margin-right: 10px\">\n        <!-- <mat-icon>cloud_download</mat-icon> {{ 'Download Now' | translate }} -->\n    </a>\n    <button class=\"hidden-sm\" mat-icon-button [matMenuTriggerFor]=\"language\">\n        <mat-icon>language</mat-icon>\n    </button>\n    <mat-menu #language=\"matMenu\">\n        <button mat-menu-item (click)=\"changeLang('en')\">\n            <span>{{ 'English' | translate }}</span>\n        </button>\n        <button mat-menu-item (click)=\"changeLang('fr')\">\n            <span>{{ 'French' | translate }}</span>\n        </button>\n        <button mat-menu-item (click)=\"changeLang('ur')\">\n            <span>{{ 'Urdu' | translate }}s</span>\n        </button>\n    </mat-menu>\n    <button class=\"hidden-sm\" mat-icon-button [matMenuTriggerFor]=\"profile\">\n        <mat-icon>account_circle</mat-icon>\n    </button>\n    <mat-menu #profile=\"matMenu\">\n        <button mat-menu-item>\n            <mat-icon>person</mat-icon>\n            <span>{{ 'Profile' | translate }}</span>\n        </button>\n        <button mat-menu-item>\n            <mat-icon>inbox</mat-icon>\n            <span>{{ 'Inbox' | translate }}</span>\n        </button>\n        <button mat-menu-item>\n            <mat-icon>settings</mat-icon>\n            <span>{{ 'Settings' | translate }}</span>\n        </button>\n    </mat-menu>\n    <button mat-icon-button (click)=\"onLoggedout()\">\n        <mat-icon>exit_to_app</mat-icon>\n    </button>\n</mat-toolbar>\n"

/***/ }),

/***/ "./src/app/layout/components/topnav/topnav.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/layout/components/topnav/topnav.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  z-index: 1000; }\n  :host .fix-nav {\n    background-color: black;\n    color: #C4AF95; }\n  .nav-brand {\n  width: 215px;\n  text-align: center; }\n  .topnav-icon {\n  text-decoration: none;\n  display: flex;\n  color: #fff; }\n  .nav-spacer {\n  flex: 1 1 auto; }\n  .visible-md {\n  display: none; }\n  .visible-sm {\n  display: none; }\n  @media screen and (max-width: 992px) {\n  .visible-md {\n    display: block; } }\n  @media screen and (max-width: 768px) {\n  .visible-sm {\n    display: block; }\n  .nav-brand {\n    width: 100%; } }\n  @media screen and (max-width: 768px) {\n  .hidden-sm {\n    display: none; } }\n"

/***/ }),

/***/ "./src/app/layout/components/topnav/topnav.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/components/topnav/topnav.component.ts ***!
  \**************************************************************/
/*! exports provided: TopnavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopnavComponent", function() { return TopnavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TopnavComponent = /** @class */ (function () {
    function TopnavComponent(router, translate) {
        var _this = this;
        this.router = router;
        this.translate = translate;
        this.pushRightClass = 'push-right';
        this.router.events.subscribe(function (val) {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"] && window.innerWidth <= 992 && _this.isToggled()) {
                _this.toggleSidebar();
            }
        });
    }
    TopnavComponent.prototype.ngOnInit = function () { };
    TopnavComponent.prototype.isToggled = function () {
        var dom = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    };
    TopnavComponent.prototype.toggleSidebar = function () {
        var dom = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    };
    TopnavComponent.prototype.onLoggedout = function () {
        localStorage.removeItem('isLoggedin');
        this.router.navigate(['/login']);
    };
    TopnavComponent.prototype.changeLang = function (language) {
        this.translate.use(language);
    };
    TopnavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-topnav',
            template: __webpack_require__(/*! ./topnav.component.html */ "./src/app/layout/components/topnav/topnav.component.html"),
            styles: [__webpack_require__(/*! ./topnav.component.scss */ "./src/app/layout/components/topnav/topnav.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], TopnavComponent);
    return TopnavComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/layout/layout-routing.module.ts ***!
  \*************************************************/
/*! exports provided: LayoutRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutRoutingModule", function() { return LayoutRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout.component */ "./src/app/layout/layout.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"],
        children: [
            {
                path: '',
                redirectTo: 'dashboard'
            },
            {
                path: 'dashboard',
                loadChildren: './dashboard/dashboard.module#DashboardModule'
            },
            {
                path: 'charts',
                loadChildren: './charts/charts.module#ChartsModule'
            },
            {
                path: 'components',
                loadChildren: './material-components/material-components.module#MaterialComponentsModule'
            },
            {
                path: 'forms',
                loadChildren: './forms/forms.module#FormsModule'
            },
            {
                path: 'grid',
                loadChildren: './grid/grid.module#GridModule'
            },
            {
                path: 'tables',
                loadChildren: './tables/tables.module#TablesModule'
            },
            {
                path: 'blank-page',
                loadChildren: './blank-page/blank-page.module#BlankPageModule'
            },
            {
                path: 'event',
                loadChildren: './event/event.module#EventModule'
            }
        ]
    }
];
var LayoutRoutingModule = /** @class */ (function () {
    function LayoutRoutingModule() {
    }
    LayoutRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], LayoutRoutingModule);
    return LayoutRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/layout.component.html":
/*!**********************************************!*\
  !*** ./src/app/layout/layout.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-nav></app-nav> -->\n<app-topnav></app-topnav>\n<app-sidebar></app-sidebar>\n<div class=\"main-container\">\n    <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/layout/layout.component.scss":
/*!**********************************************!*\
  !*** ./src/app/layout/layout.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/layout.component.ts":
/*!********************************************!*\
  !*** ./src/app/layout/layout.component.ts ***!
  \********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LayoutComponent = /** @class */ (function () {
    function LayoutComponent() {
    }
    LayoutComponent.prototype.ngOnInit = function () { };
    LayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./layout.component.html */ "./src/app/layout/layout.component.html"),
            styles: [__webpack_require__(/*! ./layout.component.scss */ "./src/app/layout/layout.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout.module.ts":
/*!*****************************************!*\
  !*** ./src/app/layout/layout.module.ts ***!
  \*****************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "./src/app/layout/components/sidebar/sidebar.component.ts");
/* harmony import */ var _components_topnav_topnav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/topnav/topnav.component */ "./src/app/layout/components/topnav/topnav.component.ts");
/* harmony import */ var _layout_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout-routing.module */ "./src/app/layout/layout-routing.module.ts");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/layout/nav/nav.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _layout_routing_module__WEBPACK_IMPORTED_MODULE_6__["LayoutRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"]
            ],
            declarations: [_layout_component__WEBPACK_IMPORTED_MODULE_7__["LayoutComponent"], _nav_nav_component__WEBPACK_IMPORTED_MODULE_8__["NavComponent"], _components_topnav_topnav_component__WEBPACK_IMPORTED_MODULE_5__["TopnavComponent"], _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"]]
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ }),

/***/ "./src/app/layout/nav/nav.component.html":
/*!***********************************************!*\
  !*** ./src/app/layout/nav/nav.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"sidenav-container\">\n    <mat-sidenav #drawer class=\"sidenav\" fixedInViewport=\"true\" [attr.role]=\"isHandset ? 'dialog' : 'navigation'\" [mode]=\"(isHandset | async)!.matches ? 'over' : 'side'\"\n        [opened]=\"!(isHandset | async)!.matches\">\n        <mat-toolbar color=\"primary\">SB Admin Marerial</mat-toolbar>\n        <mat-nav-list>\n            <a mat-list-item [routerLinkActive]=\"'active'\" [routerLink]=\"['/dashboard']\">\n                <mat-icon class=\"sidenav-icon\">dashboard</mat-icon> Dashbard\n            </a>\n            <a mat-list-item [routerLinkActive]=\"'active'\" [routerLink]=\"['/charts']\">\n                <mat-icon class=\"sidenav-icon\">bar_chart</mat-icon> Charts\n            </a>\n            <a mat-list-item [routerLinkActive]=\"'active'\" [routerLink]=\"['/tables']\">\n                <mat-icon class=\"sidenav-icon\">table_chart</mat-icon> Tables\n            </a>\n            <a mat-list-item [routerLinkActive]=\"'active'\" [routerLink]=\"['/forms']\">\n                <mat-icon class=\"sidenav-icon\">input</mat-icon> Forms\n            </a>\n            <a mat-list-item [routerLinkActive]=\"'active'\" [routerLink]=\"['/grid']\">\n                <mat-icon class=\"sidenav-icon\">grid_on</mat-icon> Grid\n            </a>\n            <a mat-list-item [routerLinkActive]=\"'active'\" [routerLink]=\"['/components']\">\n                <mat-icon class=\"sidenav-icon\">code</mat-icon> Components\n            </a>\n            <a mat-list-item [routerLinkActive]=\"'active'\" [routerLink]=\"['/blank-page']\">\n                <mat-icon class=\"sidenav-icon\">insert_drive_file</mat-icon> Black Page\n            </a>\n            <a mat-list-item>\n                <mat-icon class=\"sidenav-icon\">add</mat-icon> Menu\n            </a>\n        </mat-nav-list>\n    </mat-sidenav>\n    <mat-sidenav-content>\n        <mat-toolbar color=\"primary\" class=\"fix-nav\">\n            <button type=\"button\" aria-label=\"Toggle sidenav\" mat-icon-button (click)=\"drawer.toggle()\" *ngIf=\"(isHandset | async)!.matches\">\n                <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n            </button>\n            <mat-icon class=\"nav-icon\">menu</mat-icon>\n            <span class=\"nav-spacer\"></span>\n            <!--\n            <mat-icon class=\"nav-icon\">person</mat-icon>\n            <span class=\"nav-spacer\"></span>\n            <mat-icon class=\"nav-icon\">notifications</mat-icon>\n            <mat-icon class=\"nav-icon\">apps</mat-icon>\n            <mat-icon class=\"nav-icon\">fullscreen</mat-icon>\n            <mat-icon class=\"nav-icon\">flag</mat-icon>\n            <mat-icon class=\"nav-icon\">search</mat-icon>\n            <mat-icon class=\"nav-icon\">account_circle</mat-icon> -->\n            <a class=\"topnav-icon\" [routerLink]=\"['/login']\">\n                <mat-icon>exit_to_app</mat-icon>\n            </a>\n\n        </mat-toolbar>\n    </mat-sidenav-content>\n</mat-sidenav-container>"

/***/ }),

/***/ "./src/app/layout/nav/nav.component.scss":
/*!***********************************************!*\
  !*** ./src/app/layout/nav/nav.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\n  height: 100%; }\n\n.sidenav {\n  width: 250px;\n  box-shadow: 3px 0 6px rgba(0, 0, 0, 0.24); }\n\n.topnav-icon {\n  text-decoration: none;\n  display: flex;\n  color: #fff; }\n\n.sidenav-icon {\n  text-decoration: none;\n  padding: 0 10px; }\n\n.nav-spacer {\n  flex: 1 1 auto; }\n"

/***/ }),

/***/ "./src/app/layout/nav/nav.component.ts":
/*!*********************************************!*\
  !*** ./src/app/layout/nav/nav.component.ts ***!
  \*********************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavComponent = /** @class */ (function () {
    function NavComponent(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.isHandset = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].Handset);
    }
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/layout/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.scss */ "./src/app/layout/nav/nav.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["BreakpointObserver"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ })

}]);
//# sourceMappingURL=layout-layout-module.js.map