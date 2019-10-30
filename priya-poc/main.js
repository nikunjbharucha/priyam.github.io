(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _component_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/home/home.component */ "./src/app/component/home/home.component.ts");
/* harmony import */ var _component_how_it_works_how_it_works_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/how-it-works/how-it-works.component */ "./src/app/component/how-it-works/how-it-works.component.ts");
/* harmony import */ var _component_landing_section_landing_section_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/landing-section/landing-section.component */ "./src/app/component/landing-section/landing-section.component.ts");






var routes = [
    { path: '', component: _component_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'how-it-works', component: _component_how_it_works_how_it_works_component__WEBPACK_IMPORTED_MODULE_4__["HowItWorksComponent"] },
    { path: 'landing-section', component: _component_landing_section_landing_section_component__WEBPACK_IMPORTED_MODULE_5__["LandingSectionComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-landing-section></app-landing-section>\r\n\r\n<app-header></app-header>\r\n\r\n<div class=\"container content-body mt-5\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content-body {\n  color: #424876; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxuaWt1blxcU0ZEWCBQcm9qZWN0XFxwcml5YVBvY1xccHJpeWEtcG9jL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0M6XFxVc2Vyc1xcbmlrdW5cXFNGRFggUHJvamVjdFxccHJpeWFQb2NcXHByaXlhLXBvYy9zcmNcXHNjc3NcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLGNDQXFCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vc2Nzcy92YXJpYWJsZXNcIjtcclxuXHJcblxyXG4uY29udGVudC1ib2R5IHtcclxuICAgIGNvbG9yOiAkYm9keS1jb250ZW50LWNvbG9yO1xyXG59IiwiJGNvbG9yLXR1cnF1b2lzZTogIzAwQUVCOCAhZGVmYXVsdDtcclxuJGNvbG9yLWxpZ2h0dHVycXVvaXNlOiAjMzVDNUMzICFkZWZhdWx0O1xyXG4kY29sb3Itd2hpdGU6ICNGRkZGRkYgIWRlZmF1bHQ7XHJcbiRjb2xvci1ibHVlOiAjMjEyODVFICFkZWZhdWx0O1xyXG4kY29sb3ItbGlnaHRibHVlOiAjNDI0ODc2ICFkZWZhdWx0O1xyXG4kY29sb3ItZGVlcGxpZ2h0Ymx1ZTogI0VGRUZGMiAhZGVmYXVsdDtcclxuJGNvbG9yLXJveWFsYmx1ZTogIzFDNzBGMiAhZGVmYXVsdDtcclxuJGNvbG9yLWdyZXk6ICM5NTk4QjIgIWRlZmF1bHQ7XHJcbiRjb2xvci1saWdodGdyZXk6ICNEQ0RCREMgIWRlZmF1bHQ7XHJcblxyXG5cclxuJGhlYWRlci1iZzogdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XHJcblxyXG4kYm9keS1jb250ZW50LWNvbG9yOiAkY29sb3ItbGlnaHRibHVlICFkZWZhdWx0OyJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'priya-poc';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _component_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/home/home.component */ "./src/app/component/home/home.component.ts");
/* harmony import */ var _component_how_it_works_how_it_works_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/how-it-works/how-it-works.component */ "./src/app/component/how-it-works/how-it-works.component.ts");
/* harmony import */ var _component_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/header/header.component */ "./src/app/component/header/header.component.ts");
/* harmony import */ var _service_about_us_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./service/about-us.service */ "./src/app/service/about-us.service.ts");
/* harmony import */ var _pipe_order_by_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pipe/order-by.pipe */ "./src/app/pipe/order-by.pipe.ts");
/* harmony import */ var _pipe_calculate_age_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pipe/calculate-age.pipe */ "./src/app/pipe/calculate-age.pipe.ts");
/* harmony import */ var _component_landing_section_landing_section_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./component/landing-section/landing-section.component */ "./src/app/component/landing-section/landing-section.component.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _component_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _component_how_it_works_how_it_works_component__WEBPACK_IMPORTED_MODULE_7__["HowItWorksComponent"],
                _component_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                _pipe_order_by_pipe__WEBPACK_IMPORTED_MODULE_10__["OrderByDatePipe"],
                _pipe_calculate_age_pipe__WEBPACK_IMPORTED_MODULE_11__["CalculateAgePipe"],
                _component_landing_section_landing_section_component__WEBPACK_IMPORTED_MODULE_12__["LandingSectionComponent"]
            ],
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]
            ],
            providers: [
                _service_about_us_service__WEBPACK_IMPORTED_MODULE_9__["AboutUsService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/component/header/header.component.html":
/*!********************************************************!*\
  !*** ./src/app/component/header/header.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar sticky-top navbar-expand-lg navbar-light bg-light header\">\r\n  <div class=\"container\">\r\n    <a class=\"navbar-brand\" href routerLink = \"\"><img src=\"../../assets/img/logo_bubble.png\"></a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n      <ul class=\"navbar-nav\">\r\n        <li class=\"nav-item \">\r\n          <span class=\"nav-link labeled-text\" >Welcome to Zip </span>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" href routerLink = \"how-it-works\" routerLinkActive=\"active\">How it works</a>\r\n        </li>\r\n      </ul>\r\n\r\n      <ul class=\"navbar-nav ml-auto\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" href routerLink = \"\" >Start accepting Zip today</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link btn secondary-btn round-btn\" href routerLink = \"\" >App!</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link btn bordered-btn round-btn\" href routerLink = \"\" >Contact sales</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/component/header/header.component.scss":
/*!********************************************************!*\
  !*** ./src/app/component/header/header.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  background-color: transparent;\n  opacity: 0.95;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n  color: #21285E !important; }\n  .header.navbar .navbar-brand {\n    padding: 0 !important; }\n  .header.navbar .navbar-brand img {\n      height: 44px; }\n  .header.navbar .nav-item {\n    margin-right: 20px; }\n  .header.navbar .nav-item .nav-link {\n      color: inherit; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2hlYWRlci9DOlxcVXNlcnNcXG5pa3VuXFxTRkRYIFByb2plY3RcXHByaXlhUG9jXFxwcml5YS1wb2Mvc3JjXFxhcHBcXGNvbXBvbmVudFxcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudC9oZWFkZXIvQzpcXFVzZXJzXFxuaWt1blxcU0ZEWCBQcm9qZWN0XFxwcml5YVBvY1xccHJpeWEtcG9jL3NyY1xcc2Nzc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksNkJDUW1CO0VEUG5CLGFBQWE7RUFDYiw2RUFBdUU7RUFDdkUseUJBQTZCLEVBQUE7RUFKakM7SUFRWSxxQkFBcUIsRUFBQTtFQVJqQztNQVVnQixZQUFZLEVBQUE7RUFWNUI7SUFjWSxrQkFBa0IsRUFBQTtFQWQ5QjtNQWdCZ0IsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vc2Nzcy92YXJpYWJsZXNcIjtcclxuXHJcbi5oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGhlYWRlci1iZztcclxuICAgIG9wYWNpdHk6IDAuOTU7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDAsMCwwLDAuMTYpLCAwIDJweCAxMHB4IDAgcmdiYSgwLDAsMCwwLjEyKTtcclxuICAgIGNvbG9yOiAkY29sb3ItYmx1ZSAhaW1wb3J0YW50O1xyXG5cclxuICAgICYubmF2YmFyIHtcclxuICAgICAgICAubmF2YmFyLWJyYW5kIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0NHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5uYXYtaXRlbSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgICAgICAgICAgLm5hdi1saW5rIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiJGNvbG9yLXR1cnF1b2lzZTogIzAwQUVCOCAhZGVmYXVsdDtcclxuJGNvbG9yLWxpZ2h0dHVycXVvaXNlOiAjMzVDNUMzICFkZWZhdWx0O1xyXG4kY29sb3Itd2hpdGU6ICNGRkZGRkYgIWRlZmF1bHQ7XHJcbiRjb2xvci1ibHVlOiAjMjEyODVFICFkZWZhdWx0O1xyXG4kY29sb3ItbGlnaHRibHVlOiAjNDI0ODc2ICFkZWZhdWx0O1xyXG4kY29sb3ItZGVlcGxpZ2h0Ymx1ZTogI0VGRUZGMiAhZGVmYXVsdDtcclxuJGNvbG9yLXJveWFsYmx1ZTogIzFDNzBGMiAhZGVmYXVsdDtcclxuJGNvbG9yLWdyZXk6ICM5NTk4QjIgIWRlZmF1bHQ7XHJcbiRjb2xvci1saWdodGdyZXk6ICNEQ0RCREMgIWRlZmF1bHQ7XHJcblxyXG5cclxuJGhlYWRlci1iZzogdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XHJcblxyXG4kYm9keS1jb250ZW50LWNvbG9yOiAkY29sb3ItbGlnaHRibHVlICFkZWZhdWx0OyJdfQ== */"

/***/ }),

/***/ "./src/app/component/header/header.component.ts":
/*!******************************************************!*\
  !*** ./src/app/component/header/header.component.ts ***!
  \******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/component/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/component/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/component/home/home.component.html":
/*!****************************************************!*\
  !*** ./src/app/component/home/home.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/home/home.component.scss":
/*!****************************************************!*\
  !*** ./src/app/component/home/home.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/component/home/home.component.ts":
/*!**************************************************!*\
  !*** ./src/app/component/home/home.component.ts ***!
  \**************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/component/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/component/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/component/how-it-works/how-it-works.component.html":
/*!********************************************************************!*\
  !*** ./src/app/component/how-it-works/how-it-works.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  how-it-works works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/component/how-it-works/how-it-works.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/component/how-it-works/how-it-works.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9ob3ctaXQtd29ya3MvaG93LWl0LXdvcmtzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/component/how-it-works/how-it-works.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/component/how-it-works/how-it-works.component.ts ***!
  \******************************************************************/
/*! exports provided: HowItWorksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HowItWorksComponent", function() { return HowItWorksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HowItWorksComponent = /** @class */ (function () {
    function HowItWorksComponent() {
    }
    HowItWorksComponent.prototype.ngOnInit = function () {
    };
    HowItWorksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-how-it-works',
            template: __webpack_require__(/*! ./how-it-works.component.html */ "./src/app/component/how-it-works/how-it-works.component.html"),
            styles: [__webpack_require__(/*! ./how-it-works.component.scss */ "./src/app/component/how-it-works/how-it-works.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HowItWorksComponent);
    return HowItWorksComponent;
}());



/***/ }),

/***/ "./src/app/component/landing-section/landing-section.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/component/landing-section/landing-section.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"landing-section\">\r\n  <div class=\"landing-section-top\">\r\n    <div class=\"container\">\r\n        \r\n      <div class=\"row\">\r\n        <div class=\"col-md-8\">\r\n            <nav class=\"navbar navbar-expand-lg navbar-light header\">\r\n                <a class=\"navbar-brand\" href routerLink = \"\"><img src=\"../../assets/img/logo_bubble.png\"></a>\r\n                <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                  <span class=\"navbar-toggler-icon\"></span>\r\n                </button>\r\n            \r\n                <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n                  <ul class=\"navbar-nav\">\r\n                    <li class=\"nav-item \">\r\n                      <a class=\"nav-link\" href routerLink = \"\" routerLinkActive=\"active\">How it works </a>\r\n                    </li>\r\n                  </ul>\r\n                </div>\r\n              \r\n            </nav>\r\n\r\n            <div class=\"row welcomeSection\">\r\n              <div class=\"col-md-8\">\r\n                <h1>\r\n                  Welcome To Zip\r\n                </h1>\r\n                <p>\r\n                  Say hello to more sales more often, and over 1 million new opportunities. Zip offers a better way for customers to pay for your products or services over time, interest free, without any risk to you.\r\n                </p>\r\n                <button class=\"btn primary-btn round-btn top40\">Apply now</button>\r\n              </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-4 bg-turquoise-45\">\r\n          <form class=\"eligibility-check-form\">\r\n            <h3>Find out if your business is eligible in three quick steps</h3>\r\n            <div class=\"input-fields\">\r\n              <input type=\"text\" name=\"businessName\" id=\"businessName\" placeholder=\"Business name\">\r\n              <input type=\"email\" name=\"email\" id=\"email\" placeholder=\"Email address\">\r\n              <input type=\"text\" name=\"firstName\" id=\"firstName\" placeholder=\"First name\">\r\n              <input type=\"text\" name=\"lastName\" id=\"lastName\" placeholder=\"Last name\">\r\n              <input type=\"text\" name=\"mobile\" id=\"mobile\" placeholder=\"Mobile number\">\r\n            </div>\r\n            <button class=\"btn bordered-btn round-btn strech top20\">Continue your 3 step check</button>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"landing-section-bottom\">\r\n    <div class=\"container\">\r\n      <div class=\"row text-center\">\r\n        <div class=\"col-md-4\">\r\n            <img src=\"../../../assets/img/magnifier.png\">\r\n            <h3>Increase your traffic</h3>\r\n            <p>\r\n                Our Store Directory gives you access to almost \u20281 million customers every month\r\n            </p>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n            <img src=\"../../../assets/img/mobile.png\">\r\n            <h3>Reach more customers</h3>\r\n            <p>\r\n                Every week, Zip marketing campaigns drive awareness and sales for our featured partners\r\n            </p>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n            <img src=\"../../../assets/img/megaphone.png\">\r\n            <h3>Measurable results</h3>\r\n            <p>\r\n                Access real-time sales performance and gain insights to support your business\r\n            </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>"

/***/ }),

/***/ "./src/app/component/landing-section/landing-section.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/component/landing-section/landing-section.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  overflow-x: hidden; }\n\nh1 {\n  font-size: 60px; }\n\nh2 {\n  font-size: 40px; }\n\nh3 {\n  font-size: 24px; }\n\nh4 {\n  font-size: 20px; }\n\nh5 {\n  font-size: 60px; }\n\n.top10 {\n  margin-top: 10px; }\n\n.top20 {\n  margin-top: 20px; }\n\n.top30 {\n  margin-top: 30px; }\n\n.top40 {\n  margin-top: 40px; }\n\n.top50 {\n  margin-top: 50px; }\n\n.top100 {\n  margin-top: 100px; }\n\n.bottom10 {\n  margin-bottom: 10px; }\n\n.bottom20 {\n  margin-bottom: 20px; }\n\n.bottom30 {\n  margin-bottom: 30px; }\n\n.bottom40 {\n  margin-bottom: 40px; }\n\n.bottom50 {\n  margin-bottom: 50px; }\n\n.btn {\n  padding: 8px 50px !important; }\n\n.btn.round-btn {\n    border-radius: 100px;\n    -webkit-border-radius: 100px;\n    -moz-border-radius: 100px; }\n\n.btn.primary-btn {\n    background: #21285E !important;\n    color: #FFFFFF !important;\n    border: 1px solid #21285E !important; }\n\n.btn.secondary-btn {\n    background: #1C70F2 !important;\n    color: #FFFFFF !important;\n    border: 1px solid #1C70F2 !important; }\n\n.btn.bordered-btn {\n    background: #FFFFFF !important;\n    color: #1C70F2 !important;\n    border: 1px solid #1C70F2 !important; }\n\ninput, select, textarea, button {\n  outline: 0; }\n\ninput.strech, select.strech, textarea.strech, button.strech {\n    width: 100%; }\n\n.labeled-text {\n  padding: 8px 30px !important;\n  background: #EFEFF2;\n  color: #21285E !important;\n  border: 1px solid #EFEFF2 !important;\n  border-radius: 100px;\n  -webkit-border-radius: 100px;\n  -moz-border-radius: 100px; }\n\n.landing-section {\n  height: calc(100vh - 60px); }\n\n.landing-section .landing-section-top {\n    background-image: linear-gradient(45deg, #35C5C3 0%, #27BABE 52%, #01AEB9 100%);\n    padding: 50px 0 100px 0; }\n\n.landing-section .landing-section-top .navbar {\n      padding-left: 0;\n      color: #FFFFFF; }\n\n.landing-section .landing-section-top .navbar .active {\n        color: inherit; }\n\n.landing-section .landing-section-top .welcomeSection {\n      color: #FFFFFF;\n      margin-top: 80px; }\n\n@media (max-width: 460px) {\n        .landing-section .landing-section-top .welcomeSection {\n          margin-top: 60px; } }\n\n.landing-section .landing-section-top .bg-turquoise-45::before {\n      content: \"\";\n      -webkit-transform: rotate(-135deg);\n              transform: rotate(-135deg);\n      background: #00AEB8;\n      border-radius: 237px;\n      transform: rotate(-135deg);\n      display: block;\n      height: 850px;\n      width: 350px;\n      position: absolute;\n      top: -70%;\n      left: 42%; }\n\n@media (max-width: 460px) {\n        .landing-section .landing-section-top .bg-turquoise-45::before {\n          display: none; } }\n\n.landing-section .landing-section-top .bg-turquoise-45 .eligibility-check-form {\n      background-color: #FFFFFF;\n      padding: 20px;\n      height: 100%;\n      position: absolute; }\n\n.landing-section .landing-section-top .bg-turquoise-45 .eligibility-check-form .input-fields input {\n        height: 40px;\n        width: 100%;\n        border: 0;\n        border-bottom: 1px solid #DCDBDC;\n        margin-top: 10px; }\n\n@media (max-width: 460px) {\n        .landing-section .landing-section-top .bg-turquoise-45 .eligibility-check-form {\n          position: relative; } }\n\n.landing-section .landing-section-bottom {\n    background: #21285E;\n    color: #FFFFFF;\n    padding: 30px 0 30px 0; }\n\n.landing-section .landing-section-bottom img {\n      margin: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2xhbmRpbmctc2VjdGlvbi9DOlxcVXNlcnNcXG5pa3VuXFxTRkRYIFByb2plY3RcXHByaXlhUG9jXFxwcml5YS1wb2Mvc3JjXFxzY3NzXFxfaGVscGVycy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnQvbGFuZGluZy1zZWN0aW9uL0M6XFxVc2Vyc1xcbmlrdW5cXFNGRFggUHJvamVjdFxccHJpeWFQb2NcXHByaXlhLXBvYy9zcmNcXHNjc3NcXF9taXhpbnMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50L2xhbmRpbmctc2VjdGlvbi9DOlxcVXNlcnNcXG5pa3VuXFxTRkRYIFByb2plY3RcXHByaXlhUG9jXFxwcml5YS1wb2Mvc3JjXFxzY3NzXFxfdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudC9sYW5kaW5nLXNlY3Rpb24vQzpcXFVzZXJzXFxuaWt1blxcU0ZEWCBQcm9qZWN0XFxwcml5YVBvY1xccHJpeWEtcG9jL3NyY1xcYXBwXFxjb21wb25lbnRcXGxhbmRpbmctc2VjdGlvblxcbGFuZGluZy1zZWN0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0ksa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksZUFBZSxFQUFBOztBQUVuQjtFQUNJLGVBQWUsRUFBQTs7QUFFbkI7RUFDSSxlQUFlLEVBQUE7O0FBRW5CO0VBQ0ksZUFBZSxFQUFBOztBQUVuQjtFQUNJLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxtQkFBbUIsRUFBQTs7QUFFdkI7RUFDSSxtQkFBbUIsRUFBQTs7QUFFdkI7RUFDSSxtQkFBbUIsRUFBQTs7QUFFdkI7RUFDSSxtQkFBbUIsRUFBQTs7QUFFdkI7RUFDSSxtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSw0QkFBNEIsRUFBQTs7QUFEaEM7SUN0REksb0JBQW9CO0lBQ3BCLDRCQUE0QjtJQUM1Qix5QkFBeUIsRUFBQTs7QURvRDdCO0lBUVEsOEJBQWtDO0lBQ2xDLHlCQUE4QjtJQUM5QixvQ0FBd0MsRUFBQTs7QUFWaEQ7SUFjUSw4QkFBdUM7SUFDdkMseUJBQThCO0lBQzlCLG9DQUE2QyxFQUFBOztBQWhCckQ7SUFvQlEsOEJBQW1DO0lBQ25DLHlCQUFrQztJQUNsQyxvQ0FBNkMsRUFBQTs7QUFJckQ7RUFDSSxVQUFVLEVBQUE7O0FBRGQ7SUFHUSxXQUFXLEVBQUE7O0FBSW5CO0VBQ0ksNEJBQTRCO0VBQzVCLG1CRXpGeUI7RUYwRnpCLHlCQUE2QjtFQUM3QixvQ0FBaUQ7RUMzRmpELG9CQUFvQjtFQUNwQiw0QkFBNEI7RUFDNUIseUJBQXlCLEVBQUE7O0FFSDdCO0VBQ0ksMEJBQTBCLEVBQUE7O0FBRDlCO0lGSEksK0VBQStFO0lFUTNFLHVCQUF1QixFQUFBOztBQUwvQjtNQVFZLGVBQWU7TUFDZixjRFhTLEVBQUE7O0FDRXJCO1FBWWdCLGNBQWMsRUFBQTs7QUFaOUI7TUFpQlksY0RuQlM7TUNvQlQsZ0JBQWdCLEVBQUE7O0FBRWhCO1FBcEJaO1VBcUJnQixnQkFBZ0IsRUFBQSxFQUV2Qjs7QUF2QlQ7TUE0QmdCLFdBQVc7TUFDWCxrQ0FBMEI7Y0FBMUIsMEJBQTBCO01BQzFCLG1CRGxDUztNQ21DVCxvQkFBb0I7TUFDcEIsMEJBQTBCO01BQzFCLGNBQWM7TUFDZCxhQUFhO01BQ2IsWUFBWTtNQUNaLGtCQUFrQjtNQUNsQixTQUFTO01BQ1QsU0FBUyxFQUFBOztBQUVUO1FBeENoQjtVQXlDb0IsYUFBYSxFQUFBLEVBRXBCOztBQTNDYjtNQStDZ0IseUJEakRLO01Da0RMLGFBQWE7TUFDYixZQUFZO01BQ1osa0JBQWtCLEVBQUE7O0FBbERsQztRQXNEd0IsWUFBWTtRQUNaLFdBQVc7UUFDWCxTQUFTO1FBQ1QsZ0NEckRDO1FDc0RELGdCQUFnQixFQUFBOztBQUl4QjtRQTlEaEI7VUErRG9CLGtCQUFrQixFQUFBLEVBRXpCOztBQWpFYjtJQXFFUSxtQkR0RVk7SUN1RVosY0R4RWE7SUN5RWIsc0JBQXNCLEVBQUE7O0FBdkU5QjtNQTBFWSxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvbGFuZGluZy1zZWN0aW9uL2xhbmRpbmctc2VjdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJtaXhpbnNcIjtcclxuQGltcG9ydCBcInZhcmlhYmxlc1wiO1xyXG5cclxuXHJcbmJvZHkge1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgICBmb250LXNpemU6IDYwcHg7XHJcbn1cclxuaDIge1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG59XHJcbmgzIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxufVxyXG5oNCB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuaDUge1xyXG4gICAgZm9udC1zaXplOiA2MHB4O1xyXG59XHJcblxyXG4udG9wMTAge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG4udG9wMjAge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4udG9wMzAge1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG4udG9wNDAge1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxufVxyXG4udG9wNTAge1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxufVxyXG4udG9wMTAwIHtcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG59XHJcblxyXG4uYm90dG9tMTAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4uYm90dG9tMjAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4uYm90dG9tMzAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG4uYm90dG9tNDAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxufVxyXG4uYm90dG9tNTAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgICBwYWRkaW5nOiA4cHggNTBweCAhaW1wb3J0YW50O1xyXG5cclxuICAgICYucm91bmQtYnRuIHtcclxuICAgICAgICBAaW5jbHVkZSBidG4tcmFkaXVzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgJi5wcmltYXJ5LWJ0biB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJGNvbG9yLWJsdWUgIWltcG9ydGFudDtcclxuICAgICAgICBjb2xvcjogJGNvbG9yLXdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yLWJsdWUgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAmLnNlY29uZGFyeS1idG4ge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICRjb2xvci1yb3lhbGJsdWUgIWltcG9ydGFudDtcclxuICAgICAgICBjb2xvcjogJGNvbG9yLXdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yLXJveWFsYmx1ZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgICYuYm9yZGVyZWQtYnRuIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkY29sb3Itd2hpdGUgIWltcG9ydGFudDtcclxuICAgICAgICBjb2xvcjogJGNvbG9yLXJveWFsYmx1ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvci1yb3lhbGJsdWUgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWEsIGJ1dHRvbiB7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gICAgJi5zdHJlY2gge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG59XHJcblxyXG4ubGFiZWxlZC10ZXh0IHtcclxuICAgIHBhZGRpbmc6IDhweCAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAkY29sb3ItZGVlcGxpZ2h0Ymx1ZTtcclxuICAgIGNvbG9yOiAkY29sb3ItYmx1ZSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yLWRlZXBsaWdodGJsdWUgIWltcG9ydGFudDtcclxuICAgIEBpbmNsdWRlIGJ0bi1yYWRpdXMoKTtcclxufSIsIkBtaXhpbiBiYWNrZ3JvdW5kLWxpbmVhci10dXJxdW9pc2UoKSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICMzNUM1QzMgMCUsICMyN0JBQkUgNTIlLCAjMDFBRUI5IDEwMCUpO1xyXG59XHJcblxyXG5AbWl4aW4gYnRuLXJhZGl1cygpIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbn0iLCIkY29sb3ItdHVycXVvaXNlOiAjMDBBRUI4ICFkZWZhdWx0O1xyXG4kY29sb3ItbGlnaHR0dXJxdW9pc2U6ICMzNUM1QzMgIWRlZmF1bHQ7XHJcbiRjb2xvci13aGl0ZTogI0ZGRkZGRiAhZGVmYXVsdDtcclxuJGNvbG9yLWJsdWU6ICMyMTI4NUUgIWRlZmF1bHQ7XHJcbiRjb2xvci1saWdodGJsdWU6ICM0MjQ4NzYgIWRlZmF1bHQ7XHJcbiRjb2xvci1kZWVwbGlnaHRibHVlOiAjRUZFRkYyICFkZWZhdWx0O1xyXG4kY29sb3Itcm95YWxibHVlOiAjMUM3MEYyICFkZWZhdWx0O1xyXG4kY29sb3ItZ3JleTogIzk1OThCMiAhZGVmYXVsdDtcclxuJGNvbG9yLWxpZ2h0Z3JleTogI0RDREJEQyAhZGVmYXVsdDtcclxuXHJcblxyXG4kaGVhZGVyLWJnOiB0cmFuc3BhcmVudCAhZGVmYXVsdDtcclxuXHJcbiRib2R5LWNvbnRlbnQtY29sb3I6ICRjb2xvci1saWdodGJsdWUgIWRlZmF1bHQ7IiwiQGltcG9ydCBcIi4uLy4uLy4uL3Njc3MvdmFyaWFibGVzXCI7XHJcbkBpbXBvcnQgXCIuLi8uLi8uLi9zY3NzL2hlbHBlcnNcIjtcclxuQGltcG9ydCBcIi4uLy4uLy4uL3Njc3MvbWl4aW5zXCI7XHJcblxyXG4ubGFuZGluZy1zZWN0aW9uIHtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDYwcHgpO1xyXG5cclxuICAgIC5sYW5kaW5nLXNlY3Rpb24tdG9wIHtcclxuICAgICAgICBAaW5jbHVkZSBiYWNrZ3JvdW5kLWxpbmVhci10dXJxdW9pc2UoKTtcclxuICAgICAgICBwYWRkaW5nOiA1MHB4IDAgMTAwcHggMDtcclxuXHJcbiAgICAgICAgLm5hdmJhciB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDsgXHJcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3Itd2hpdGU7XHJcblxyXG4gICAgICAgICAgICAuYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC53ZWxjb21lU2VjdGlvbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3Itd2hpdGU7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDgwcHg7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDYwcHgpIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDYwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIC5iZy10dXJxdW9pc2UtNDV7XHJcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTEzNWRlZyk7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkY29sb3ItdHVycXVvaXNlO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjM3cHg7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTM1ZGVnKTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA4NTBweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAzNTBweDtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHRvcDogLTcwJTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDQyJTtcclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDYwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuZWxpZ2liaWxpdHktY2hlY2stZm9ybXtcclxuICAgICAgICAgICAgICAgIC8vIHRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG5cclxuICAgICAgICAgICAgICAgIC5pbnB1dC1maWVsZHN7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkY29sb3ItbGlnaHRncmV5OyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ2MHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmxhbmRpbmctc2VjdGlvbi1ib3R0b20ge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICRjb2xvci1ibHVlO1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3Itd2hpdGU7XHJcbiAgICAgICAgcGFkZGluZzogMzBweCAwIDMwcHggMDtcclxuXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/component/landing-section/landing-section.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/component/landing-section/landing-section.component.ts ***!
  \************************************************************************/
/*! exports provided: LandingSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingSectionComponent", function() { return LandingSectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LandingSectionComponent = /** @class */ (function () {
    function LandingSectionComponent() {
    }
    LandingSectionComponent.prototype.ngOnInit = function () {
    };
    LandingSectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-landing-section',
            template: __webpack_require__(/*! ./landing-section.component.html */ "./src/app/component/landing-section/landing-section.component.html"),
            styles: [__webpack_require__(/*! ./landing-section.component.scss */ "./src/app/component/landing-section/landing-section.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LandingSectionComponent);
    return LandingSectionComponent;
}());



/***/ }),

/***/ "./src/app/pipe/calculate-age.pipe.ts":
/*!********************************************!*\
  !*** ./src/app/pipe/calculate-age.pipe.ts ***!
  \********************************************/
/*! exports provided: CalculateAgePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculateAgePipe", function() { return CalculateAgePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CalculateAgePipe = /** @class */ (function () {
    function CalculateAgePipe() {
    }
    CalculateAgePipe.prototype.transform = function (value, args) {
        var startDate = Date.parse(new Date(value).toDateString());
        var endDate = Date.parse(new Date().toDateString());
        return Math.floor((((endDate - startDate) / 86400000) + 1) / 365);
    };
    CalculateAgePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: "calculateAge"
        })
    ], CalculateAgePipe);
    return CalculateAgePipe;
}());



/***/ }),

/***/ "./src/app/pipe/order-by.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/pipe/order-by.pipe.ts ***!
  \***************************************/
/*! exports provided: OrderByDatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderByDatePipe", function() { return OrderByDatePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OrderByDatePipe = /** @class */ (function () {
    function OrderByDatePipe() {
    }
    OrderByDatePipe.prototype.transform = function (array, args) {
        if (array != null) {
            if (typeof args[0] === "undefined") {
                return array;
            }
            var direction_1 = args[0][0];
            var column_1 = args.replace('-', '');
            array.sort(function (a, b) {
                var left = Number(new Date(a[column_1]));
                var right = Number(new Date(b[column_1]));
                return (direction_1 === "-") ? right - left : left - right;
            });
        }
        return array;
    };
    OrderByDatePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: "orderByDate"
        })
    ], OrderByDatePipe);
    return OrderByDatePipe;
}());



/***/ }),

/***/ "./src/app/service/about-us.service.ts":
/*!*********************************************!*\
  !*** ./src/app/service/about-us.service.ts ***!
  \*********************************************/
/*! exports provided: AboutUsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsService", function() { return AboutUsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var AboutUsService = /** @class */ (function () {
    function AboutUsService(http) {
        this.http = http;
    }
    AboutUsService.prototype.getAboutUsData = function () {
        return this.http.get("./../../assets/json/about-us.json");
    };
    AboutUsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AboutUsService);
    return AboutUsService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\nikun\SFDX Project\priyaPoc\priya-poc\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map