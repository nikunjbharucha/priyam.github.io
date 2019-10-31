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
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { scrollPositionRestoration: 'enabled' })],
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

module.exports = "<app-landing-section></app-landing-section>\n\n<app-header></app-header>\n\n<div class=\"container content-body mt-5 mb-5\">\n  <router-outlet></router-outlet>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html {\n  overflow-x: hidden; }\n\nbody {\n  overflow-x: hidden; }\n\n@media (max-width: 480px) {\n    body {\n      font-size: 15px; } }\n\ninput, select, textarea, button, a {\n  outline: 0; }\n\nh1 {\n  font-size: 60px; }\n\n@media (max-width: 480px) {\n    h1 {\n      font-size: 40px; } }\n\nh2 {\n  font-size: 48px; }\n\n@media (max-width: 480px) {\n    h2 {\n      font-size: 28px; } }\n\nh3 {\n  font-size: 24px; }\n\n@media (max-width: 480px) {\n    h3 {\n      font-size: 17px; } }\n\nh4 {\n  font-size: 20px; }\n\nh5 {\n  font-size: 60px; }\n\n.font-size-lg {\n  font-size: 22px; }\n\n.font-size-md {\n  font-size: 17px; }\n\n.font-size-sm {\n  font-size: 13px; }\n\n.top10 {\n  margin-top: 10px; }\n\n.top20 {\n  margin-top: 20px; }\n\n.top30 {\n  margin-top: 30px; }\n\n.top40 {\n  margin-top: 40px; }\n\n.top50 {\n  margin-top: 50px; }\n\n.top100 {\n  margin-top: 100px; }\n\n.bottom10 {\n  margin-bottom: 10px; }\n\n.bottom20 {\n  margin-bottom: 20px; }\n\n.bottom30 {\n  margin-bottom: 30px; }\n\n.bottom40 {\n  margin-bottom: 40px; }\n\n.bottom50 {\n  margin-bottom: 50px; }\n\n.padding20 {\n  padding: 20px; }\n\n.btn {\n  padding: 8px 50px !important; }\n\n.btn.round-btn {\n    border-radius: 100px;\n    -webkit-border-radius: 100px;\n    -moz-border-radius: 100px; }\n\n.btn.primary-btn {\n    background: #21285E !important;\n    color: #FFFFFF !important;\n    border: 1px solid #21285E !important; }\n\n.btn.secondary-btn {\n    background: #1C70F2 !important;\n    color: #FFFFFF !important;\n    border: 1px solid #1C70F2 !important; }\n\n.btn.bordered-btn {\n    background: #FFFFFF !important;\n    color: #1C70F2 !important;\n    border: 1px solid #1C70F2 !important; }\n\ninput, select, textarea, button {\n  outline: 0; }\n\ninput.strech, select.strech, textarea.strech, button.strech {\n    width: 100%; }\n\n.labeled-text {\n  padding: 8px 30px !important;\n  background: #EFEFF2;\n  color: #21285E !important;\n  border: 1px solid #EFEFF2 !important;\n  border-radius: 100px;\n  -webkit-border-radius: 100px;\n  -moz-border-radius: 100px; }\n\n@media (max-width: 480px) {\n  .hidden-xs {\n    display: none; } }\n\n.overflow-hidden {\n  overflow: hidden; }\n\n.overflow-x-hidden {\n  overflow-x: hidden; }\n\n.content-body {\n  color: #424876; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXE5pa3VualxccHJpeWEtcG9jLW1hc3RlclxccHJpeWEtcG9jLW1hc3Rlci9zcmNcXHNjc3NcXF9oZWxwZXJzLnNjc3MiLCJzcmMvYXBwL0M6XFxOaWt1bmpcXHByaXlhLXBvYy1tYXN0ZXJcXHByaXlhLXBvYy1tYXN0ZXIvc3JjXFxzY3NzXFxfbWl4aW5zLnNjc3MiLCJzcmMvYXBwL0M6XFxOaWt1bmpcXHByaXlhLXBvYy1tYXN0ZXJcXHByaXlhLXBvYy1tYXN0ZXIvc3JjXFxzY3NzXFxfdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL0M6XFxOaWt1bmpcXHByaXlhLXBvYy1tYXN0ZXJcXHByaXlhLXBvYy1tYXN0ZXIvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGtCQUFrQixFQUFBOztBQUVsQjtJQUhKO01BSVEsZUFBZSxFQUFBLEVBRXRCOztBQUVEO0VBQ0ksVUFBVSxFQUFBOztBQUdkO0VBQ0ksZUFBZSxFQUFBOztBQUNmO0lBRko7TUFHUSxlQUFlLEVBQUEsRUFFdEI7O0FBQ0Q7RUFDSSxlQUFlLEVBQUE7O0FBQ2Y7SUFGSjtNQUdRLGVBQWUsRUFBQSxFQUV0Qjs7QUFDRDtFQUNJLGVBQWUsRUFBQTs7QUFDZjtJQUZKO01BR1EsZUFBZSxFQUFBLEVBRXRCOztBQUNEO0VBQ0ksZUFBZSxFQUFBOztBQUVuQjtFQUNJLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxlQUFlLEVBQUE7O0FBRW5CO0VBQ0ksZUFBZSxFQUFBOztBQUVuQjtFQUNJLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxtQkFBbUIsRUFBQTs7QUFFdkI7RUFDSSxtQkFBbUIsRUFBQTs7QUFFdkI7RUFDSSxtQkFBbUIsRUFBQTs7QUFFdkI7RUFDSSxtQkFBbUIsRUFBQTs7QUFFdkI7RUFDSSxtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxhQUFhLEVBQUE7O0FBR2pCO0VBQ0ksNEJBQTRCLEVBQUE7O0FBRGhDO0lDeEZJLG9CQUFvQjtJQUNwQiw0QkFBNEI7SUFDNUIseUJBQXlCLEVBQUE7O0FEc0Y3QjtJQVFRLDhCQUFrQztJQUNsQyx5QkFBOEI7SUFDOUIsb0NBQXdDLEVBQUE7O0FBVmhEO0lBY1EsOEJBQXVDO0lBQ3ZDLHlCQUE4QjtJQUM5QixvQ0FBNkMsRUFBQTs7QUFoQnJEO0lBb0JRLDhCQUFtQztJQUNuQyx5QkFBa0M7SUFDbEMsb0NBQTZDLEVBQUE7O0FBSXJEO0VBQ0ksVUFBVSxFQUFBOztBQURkO0lBR1EsV0FBVyxFQUFBOztBQUluQjtFQUNJLDRCQUE0QjtFQUM1QixtQkUzSHlCO0VGNEh6Qix5QkFBNkI7RUFDN0Isb0NBQWlEO0VDN0hqRCxvQkFBb0I7RUFDcEIsNEJBQTRCO0VBQzVCLHlCQUF5QixFQUFBOztBRGdJekI7RUFESjtJQUVRLGFBQWEsRUFBQSxFQUVwQjs7QUFFRDtFQUNJLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGtCQUFrQixFQUFBOztBRzlJdEI7RUFDSSxjREFxQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIm1peGluc1wiO1xuQGltcG9ydCBcInZhcmlhYmxlc1wiO1xuXG5odG1sIHtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5cbmJvZHkge1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgfVxufVxuXG5pbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYSwgYnV0dG9uLCBhIHtcbiAgICBvdXRsaW5lOiAwO1xufVxuXG5oMSB7XG4gICAgZm9udC1zaXplOiA2MHB4O1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgfVxufVxuaDIge1xuICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgIH1cbn1cbmgzIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICB9XG59XG5oNCB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuaDUge1xuICAgIGZvbnQtc2l6ZTogNjBweDtcbn1cblxuLmZvbnQtc2l6ZS1sZyB7XG4gICAgZm9udC1zaXplOiAyMnB4O1xufVxuLmZvbnQtc2l6ZS1tZCB7XG4gICAgZm9udC1zaXplOiAxN3B4O1xufVxuLmZvbnQtc2l6ZS1zbSB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4udG9wMTAge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG4udG9wMjAge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG4udG9wMzAge1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG59XG4udG9wNDAge1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG59XG4udG9wNTAge1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG59XG4udG9wMTAwIHtcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcbn1cblxuLmJvdHRvbTEwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLmJvdHRvbTIwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLmJvdHRvbTMwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuLmJvdHRvbTQwIHtcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuLmJvdHRvbTUwIHtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuXG4ucGFkZGluZzIwIHtcbiAgICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uYnRuIHtcbiAgICBwYWRkaW5nOiA4cHggNTBweCAhaW1wb3J0YW50O1xuXG4gICAgJi5yb3VuZC1idG4ge1xuICAgICAgICBAaW5jbHVkZSBidG4tcmFkaXVzKCk7XG4gICAgfVxuXG4gICAgJi5wcmltYXJ5LWJ0biB7XG4gICAgICAgIGJhY2tncm91bmQ6ICRjb2xvci1ibHVlICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiAkY29sb3Itd2hpdGUgIWltcG9ydGFudDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yLWJsdWUgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAmLnNlY29uZGFyeS1idG4ge1xuICAgICAgICBiYWNrZ3JvdW5kOiAkY29sb3Itcm95YWxibHVlICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiAkY29sb3Itd2hpdGUgIWltcG9ydGFudDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yLXJveWFsYmx1ZSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgICYuYm9yZGVyZWQtYnRuIHtcbiAgICAgICAgYmFja2dyb3VuZDogJGNvbG9yLXdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiAkY29sb3Itcm95YWxibHVlICFpbXBvcnRhbnQ7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvci1yb3lhbGJsdWUgIWltcG9ydGFudDtcbiAgICB9XG59XG5cbmlucHV0LCBzZWxlY3QsIHRleHRhcmVhLCBidXR0b24ge1xuICAgIG91dGxpbmU6IDA7XG4gICAgJi5zdHJlY2gge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG59XG5cbi5sYWJlbGVkLXRleHQge1xuICAgIHBhZGRpbmc6IDhweCAzMHB4ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogJGNvbG9yLWRlZXBsaWdodGJsdWU7XG4gICAgY29sb3I6ICRjb2xvci1ibHVlICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yLWRlZXBsaWdodGJsdWUgIWltcG9ydGFudDtcbiAgICBAaW5jbHVkZSBidG4tcmFkaXVzKCk7XG59XG5cbi5oaWRkZW4teHMge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn1cblxuLm92ZXJmbG93LWhpZGRlbiB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLm92ZXJmbG93LXgtaGlkZGVuIHtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG59IiwiQG1peGluIGJhY2tncm91bmQtbGluZWFyLXR1cnF1b2lzZSgpIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICMzNUM1QzMgMCUsICMyN0JBQkUgNTIlLCAjMDFBRUI5IDEwMCUpO1xufVxuXG5AbWl4aW4gYnRuLXJhZGl1cygpIHtcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgIC1tb3otYm9yZGVyLXJhZGl1czogMTAwcHg7XG59IiwiJGNvbG9yLXR1cnF1b2lzZTogIzAwQUVCOCAhZGVmYXVsdDtcbiRjb2xvci1saWdodHR1cnF1b2lzZTogIzM1QzVDMyAhZGVmYXVsdDtcbiRjb2xvci13aGl0ZTogI0ZGRkZGRiAhZGVmYXVsdDtcbiRjb2xvci1ibHVlOiAjMjEyODVFICFkZWZhdWx0O1xuJGNvbG9yLWxpZ2h0Ymx1ZTogIzQyNDg3NiAhZGVmYXVsdDtcbiRjb2xvci1kZWVwbGlnaHRibHVlOiAjRUZFRkYyICFkZWZhdWx0O1xuJGNvbG9yLXJveWFsYmx1ZTogIzFDNzBGMiAhZGVmYXVsdDtcbiRjb2xvci1ncmV5OiAjOTU5OEIyICFkZWZhdWx0O1xuJGNvbG9yLWxpZ2h0Z3JleTogI0RDREJEQyAhZGVmYXVsdDtcbiRjb2xvci1vcmFuZ2U6ICNGMTVDM0UgIWRlZmF1bHQ7XG4kY29sb3ItZGVlcGxpZ2h0b3JhbmdlOiAjRjVGNEY0ICFkZWZhdWx0O1xuXG5cbiRoZWFkZXItYmc6IHRyYW5zcGFyZW50ICFkZWZhdWx0O1xuXG4kYm9keS1jb250ZW50LWNvbG9yOiAkY29sb3ItbGlnaHRibHVlICFkZWZhdWx0OyIsIkBpbXBvcnQgXCIuLi9zY3NzL3ZhcmlhYmxlc1wiO1xuQGltcG9ydCBcIi4uL3Njc3MvaGVscGVyc1wiO1xuXG4uY29udGVudC1ib2R5IHtcbiAgICBjb2xvcjogJGJvZHktY29udGVudC1jb2xvcjtcbn0iXX0= */"

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
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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
/* harmony import */ var _directive_router_outlet_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./directive/router-outlet.directive */ "./src/app/directive/router-outlet.directive.ts");














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
                _service_about_us_service__WEBPACK_IMPORTED_MODULE_9__["AboutUsService"],
                _directive_router_outlet_directive__WEBPACK_IMPORTED_MODULE_13__["RouterOutletDirective"]
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

module.exports = "<nav class=\"navbar sticky-top navbar-expand-lg navbar-light bg-light header\" #header>\n  <div class=\"container\">\n    <a class=\"navbar-brand hidden-xs\" href routerLink = \"\"><img src=\"../../assets/img/logo_bubble.png\"></a>\n    <ul class=\"navbar-nav mobile-sticky-menu\">\n      <li class=\"nav-item col-xs-6\">\n        <a class=\"nav-link btn secondary-btn round-btn\" href routerLink = \"\" >App!</a>\n      </li>\n      <li class=\"nav-item col-xs-6\">\n        <a class=\"nav-link btn bordered-btn round-btn\" href routerLink = \"\" >Contact sales</a>\n      </li>\n    </ul>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav hidden-xs\">\n        <li class=\"nav-item \">\n          <span class=\"nav-link labeled-text\" >Welcome to Zip </span> \n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href routerLink = \"how-it-works\" routerLinkActive=\"active\">How it works</a>\n        </li>\n      </ul>\n\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item hidden-xs\">\n          <a class=\"nav-link\" href routerLink = \"\" >Start accepting Zip today</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link btn secondary-btn round-btn\" href routerLink = \"\" >App!</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link btn bordered-btn round-btn\" href routerLink = \"\" >Contact sales</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/component/header/header.component.scss":
/*!********************************************************!*\
  !*** ./src/app/component/header/header.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  background-color: transparent;\n  opacity: 0.95;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n  color: #21285E !important; }\n  .header.navbar .navbar-brand {\n    padding: 0 !important; }\n  .header.navbar .navbar-brand img {\n      height: 44px; }\n  .header.navbar .nav-item {\n    margin-right: 20px; }\n  .header.navbar .nav-item .nav-link {\n      color: inherit; }\n  .header.navbar .mobile-sticky-menu {\n    display: none; }\n  @media (max-width: 480px) {\n      .header.navbar .mobile-sticky-menu {\n        display: block; }\n        .header.navbar .mobile-sticky-menu.navbar-nav {\n          width: 100%;\n          display: -webkit-box;\n          display: flex;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: normal;\n                  flex-direction: row; }\n          .header.navbar .mobile-sticky-menu.navbar-nav .nav-item {\n            width: 50%;\n            margin: 5px; }\n            .header.navbar .mobile-sticky-menu.navbar-nav .nav-item .btn {\n              padding: 8px 25px !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2hlYWRlci9DOlxcTmlrdW5qXFxwcml5YS1wb2MtbWFzdGVyXFxwcml5YS1wb2MtbWFzdGVyL3NyY1xcYXBwXFxjb21wb25lbnRcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnQvaGVhZGVyL0M6XFxOaWt1bmpcXHByaXlhLXBvYy1tYXN0ZXJcXHByaXlhLXBvYy1tYXN0ZXIvc3JjXFxzY3NzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSw2QkNVbUI7RURUbkIsYUFBYTtFQUNiLDZFQUF1RTtFQUN2RSx5QkFBNkIsRUFBQTtFQUpqQztJQVFZLHFCQUFxQixFQUFBO0VBUmpDO01BVWdCLFlBQVksRUFBQTtFQVY1QjtJQWNZLGtCQUFrQixFQUFBO0VBZDlCO01BZ0JnQixjQUFjLEVBQUE7RUFoQjlCO0lBcUJZLGFBQWEsRUFBQTtFQUViO01BdkJaO1FBd0JnQixjQUFjLEVBQUE7UUF4QjlCO1VBMEJvQixXQUFXO1VBQ1gsb0JBQWE7VUFBYixhQUFhO1VBQ2IsOEJBQW1CO1VBQW5CLDZCQUFtQjtrQkFBbkIsbUJBQW1CLEVBQUE7VUE1QnZDO1lBK0J3QixVQUFVO1lBQ1YsV0FBVyxFQUFBO1lBaENuQztjQW1DNEIsNEJBQTRCLEVBQUEsRUFDL0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9zY3NzL3ZhcmlhYmxlc1wiO1xuXG4uaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaGVhZGVyLWJnO1xuICAgIG9wYWNpdHk6IDAuOTU7XG4gICAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLDAsMCwwLjE2KSwgMCAycHggMTBweCAwIHJnYmEoMCwwLDAsMC4xMik7XG4gICAgY29sb3I6ICRjb2xvci1ibHVlICFpbXBvcnRhbnQ7XG5cbiAgICAmLm5hdmJhciB7XG4gICAgICAgIC5uYXZiYXItYnJhbmQge1xuICAgICAgICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLm5hdi1pdGVtIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgICAgIC5uYXYtbGluayB7XG4gICAgICAgICAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAubW9iaWxlLXN0aWNreS1tZW51IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG5cbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICYubmF2YmFyLW5hdntcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cbiAgICAgICAgICAgICAgICAgICAgLm5hdi1pdGVtIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDVweDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLmJ0biB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogOHB4IDI1cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCIkY29sb3ItdHVycXVvaXNlOiAjMDBBRUI4ICFkZWZhdWx0O1xuJGNvbG9yLWxpZ2h0dHVycXVvaXNlOiAjMzVDNUMzICFkZWZhdWx0O1xuJGNvbG9yLXdoaXRlOiAjRkZGRkZGICFkZWZhdWx0O1xuJGNvbG9yLWJsdWU6ICMyMTI4NUUgIWRlZmF1bHQ7XG4kY29sb3ItbGlnaHRibHVlOiAjNDI0ODc2ICFkZWZhdWx0O1xuJGNvbG9yLWRlZXBsaWdodGJsdWU6ICNFRkVGRjIgIWRlZmF1bHQ7XG4kY29sb3Itcm95YWxibHVlOiAjMUM3MEYyICFkZWZhdWx0O1xuJGNvbG9yLWdyZXk6ICM5NTk4QjIgIWRlZmF1bHQ7XG4kY29sb3ItbGlnaHRncmV5OiAjRENEQkRDICFkZWZhdWx0O1xuJGNvbG9yLW9yYW5nZTogI0YxNUMzRSAhZGVmYXVsdDtcbiRjb2xvci1kZWVwbGlnaHRvcmFuZ2U6ICNGNUY0RjQgIWRlZmF1bHQ7XG5cblxuJGhlYWRlci1iZzogdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XG5cbiRib2R5LWNvbnRlbnQtY29sb3I6ICRjb2xvci1saWdodGJsdWUgIWRlZmF1bHQ7Il19 */"

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

module.exports = "<div #routerOutlet class=\"how-it-works text-center\">\n  <h2>How it works</h2>\n\n  <nav>\n    <div class=\"nav nav-tabs\" id=\"nav-tab\" role=\"tablist\">\n      <a class=\"col-md-4 col-sm-4 col-xs-4 nav-item nav-link nav-retail-tab active\" id=\"nav-retail-tab\" data-toggle=\"tab\" href=\"#nav-retail\" role=\"tab\" aria-controls=\"nav-retail\" aria-selected=\"true\">\n        <img src=\"../../../assets/img/scale.png\">\n        <h3>Retail</h3>\n      </a>\n      <a class=\"col-md-4 col-sm-4 col-xs-4 nav-item nav-link nav-health-tab\" id=\"nav-health-tab\" data-toggle=\"tab\" href=\"#nav-retail\" role=\"tab\" aria-controls=\"nav-retail\" aria-selected=\"false\">\n        <img src=\"../../../assets/img/heart.png\">\n        <h3>Health</h3>\n      </a>\n      <a class=\"col-md-4 col-sm-4 col-xs-4 nav-item nav-link nav-services-tab\" id=\"nav-services-tab\" data-toggle=\"tab\" href=\"#nav-retail\" role=\"tab\" aria-controls=\"nav-retail\" aria-selected=\"false\">\n        <img src=\"../../../assets/img/cog.png\">\n        <h3>Services</h3>\n      </a>\n    </div>\n  </nav>\n  <div class=\"tab-content\" id=\"nav-tabContent\">\n    <div class=\"tab-pane fade show active\" id=\"nav-retail\" role=\"tabpanel\" aria-labelledby=\"nav-retail-tab\">\n      <p class=\"font-size-lg \">\n          Online or instore, give your customers the power to pay \n          <br/>\n          their way and see your sales grow.\n      </p>\n      <div class=\"row top40\">\n        <div class=\"col-md-4\">\n          <h3>Get ready</h3>\n          <p>\n            Apply and you could be accepting Zip within 24 hours. Once you’re approved, we’ll integrate Zip’s free plugins to your website, you can also use your Zip dashboard for instore payments.\n          </p>\n        </div>\n        <div class=\"col-md-4\">\n          <h3>Get set</h3>\n          <p>\n              Your customer then chooses selects Zip at checkout, either online or instore. You capture and process the purchase as usual.\n          </p>\n        </div>\n        <div class=\"col-md-4\">\n          <h3>Get paid</h3>\n          <p>\n              We pay you directly into your bank account via EFT the next business day, minus the small merchant fee. The customer pays us back over time so we bear the risk.\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-12 text-center\">\n      <a class=\"btn secondary-btn round-btn apply-now\" href routerLink = \"\" >Apply now</a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/component/how-it-works/how-it-works.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/component/how-it-works/how-it-works.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html {\n  overflow-x: hidden; }\n\nbody {\n  overflow-x: hidden; }\n\n@media (max-width: 480px) {\n    body {\n      font-size: 15px; } }\n\ninput, select, textarea, button, a {\n  outline: 0; }\n\nh1 {\n  font-size: 60px; }\n\n@media (max-width: 480px) {\n    h1 {\n      font-size: 40px; } }\n\nh2 {\n  font-size: 48px; }\n\n@media (max-width: 480px) {\n    h2 {\n      font-size: 28px; } }\n\nh3 {\n  font-size: 24px; }\n\n@media (max-width: 480px) {\n    h3 {\n      font-size: 17px; } }\n\nh4 {\n  font-size: 20px; }\n\nh5 {\n  font-size: 60px; }\n\n.font-size-lg {\n  font-size: 22px; }\n\n.font-size-md {\n  font-size: 17px; }\n\n.font-size-sm {\n  font-size: 13px; }\n\n.top10 {\n  margin-top: 10px; }\n\n.top20 {\n  margin-top: 20px; }\n\n.top30 {\n  margin-top: 30px; }\n\n.top40 {\n  margin-top: 40px; }\n\n.top50 {\n  margin-top: 50px; }\n\n.top100 {\n  margin-top: 100px; }\n\n.bottom10 {\n  margin-bottom: 10px; }\n\n.bottom20 {\n  margin-bottom: 20px; }\n\n.bottom30 {\n  margin-bottom: 30px; }\n\n.bottom40 {\n  margin-bottom: 40px; }\n\n.bottom50 {\n  margin-bottom: 50px; }\n\n.padding20 {\n  padding: 20px; }\n\n.btn {\n  padding: 8px 50px !important; }\n\n.btn.round-btn {\n    border-radius: 100px;\n    -webkit-border-radius: 100px;\n    -moz-border-radius: 100px; }\n\n.btn.primary-btn {\n    background: #21285E !important;\n    color: #FFFFFF !important;\n    border: 1px solid #21285E !important; }\n\n.btn.secondary-btn {\n    background: #1C70F2 !important;\n    color: #FFFFFF !important;\n    border: 1px solid #1C70F2 !important; }\n\n.btn.bordered-btn {\n    background: #FFFFFF !important;\n    color: #1C70F2 !important;\n    border: 1px solid #1C70F2 !important; }\n\ninput, select, textarea, button {\n  outline: 0; }\n\ninput.strech, select.strech, textarea.strech, button.strech {\n    width: 100%; }\n\n.labeled-text {\n  padding: 8px 30px !important;\n  background: #EFEFF2;\n  color: #21285E !important;\n  border: 1px solid #EFEFF2 !important;\n  border-radius: 100px;\n  -webkit-border-radius: 100px;\n  -moz-border-radius: 100px; }\n\n@media (max-width: 480px) {\n  .hidden-xs {\n    display: none; } }\n\n.overflow-hidden {\n  overflow: hidden; }\n\n.overflow-x-hidden {\n  overflow-x: hidden; }\n\n.how-it-works {\n  float: left; }\n\n.how-it-works h2 {\n    margin: 30px !important; }\n\n.how-it-works .nav-tabs .nav-item {\n    padding: 30px;\n    background-color: #F5F4F4;\n    border-color: #EFEFF2;\n    border-radius: 7px 7px 0 0; }\n\n@media (max-width: 480px) {\n      .how-it-works .nav-tabs .nav-item {\n        padding: 20px; } }\n\n.how-it-works .nav-tabs .nav-item:hover {\n      border-color: #EFEFF2; }\n\n.how-it-works .nav-tabs .nav-item.active {\n      background-color: #FFFFFF;\n      border-bottom: 0; }\n\n.how-it-works .nav-tabs .nav-item h3 {\n      margin-top: 20px; }\n\n.how-it-works .nav-tabs .nav-item.nav-retail-tab {\n      color: #21285E; }\n\n.how-it-works .nav-tabs .nav-item.nav-health-tab {\n      color: #00AEB8; }\n\n.how-it-works .nav-tabs .nav-item.nav-services-tab {\n      color: #F15C3E; }\n\n.how-it-works .nav-tabs .nav-item.col-sm-4 {\n      width: calc(100% / 3); }\n\n.how-it-works .tab-content {\n    border: 1px solid #EFEFF2;\n    border-top: 0;\n    padding: 50px; }\n\n@media (max-width: 480px) {\n      .how-it-works .tab-content {\n        padding: 20px; } }\n\n.how-it-works .tab-content .row .col-md-4 {\n      padding-left: 30px;\n      padding-right: 30px; }\n\n.how-it-works .apply-now {\n    margin: 20px 0; }\n\n@media (max-width: 480px) {\n      .how-it-works .apply-now {\n        width: 100%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2hvdy1pdC13b3Jrcy9DOlxcTmlrdW5qXFxwcml5YS1wb2MtbWFzdGVyXFxwcml5YS1wb2MtbWFzdGVyL3NyY1xcc2Nzc1xcX2hlbHBlcnMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50L2hvdy1pdC13b3Jrcy9DOlxcTmlrdW5qXFxwcml5YS1wb2MtbWFzdGVyXFxwcml5YS1wb2MtbWFzdGVyL3NyY1xcc2Nzc1xcX21peGlucy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnQvaG93LWl0LXdvcmtzL0M6XFxOaWt1bmpcXHByaXlhLXBvYy1tYXN0ZXJcXHByaXlhLXBvYy1tYXN0ZXIvc3JjXFxzY3NzXFxfdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudC9ob3ctaXQtd29ya3MvQzpcXE5pa3VualxccHJpeWEtcG9jLW1hc3RlclxccHJpeWEtcG9jLW1hc3Rlci9zcmNcXGFwcFxcY29tcG9uZW50XFxob3ctaXQtd29ya3NcXGhvdy1pdC13b3Jrcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGtCQUFrQixFQUFBOztBQUVsQjtJQUhKO01BSVEsZUFBZSxFQUFBLEVBRXRCOztBQUVEO0VBQ0ksVUFBVSxFQUFBOztBQUdkO0VBQ0ksZUFBZSxFQUFBOztBQUNmO0lBRko7TUFHUSxlQUFlLEVBQUEsRUFFdEI7O0FBQ0Q7RUFDSSxlQUFlLEVBQUE7O0FBQ2Y7SUFGSjtNQUdRLGVBQWUsRUFBQSxFQUV0Qjs7QUFDRDtFQUNJLGVBQWUsRUFBQTs7QUFDZjtJQUZKO01BR1EsZUFBZSxFQUFBLEVBRXRCOztBQUNEO0VBQ0ksZUFBZSxFQUFBOztBQUVuQjtFQUNJLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxlQUFlLEVBQUE7O0FBRW5CO0VBQ0ksZUFBZSxFQUFBOztBQUVuQjtFQUNJLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxtQkFBbUIsRUFBQTs7QUFFdkI7RUFDSSxtQkFBbUIsRUFBQTs7QUFFdkI7RUFDSSxtQkFBbUIsRUFBQTs7QUFFdkI7RUFDSSxtQkFBbUIsRUFBQTs7QUFFdkI7RUFDSSxtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxhQUFhLEVBQUE7O0FBR2pCO0VBQ0ksNEJBQTRCLEVBQUE7O0FBRGhDO0lDeEZJLG9CQUFvQjtJQUNwQiw0QkFBNEI7SUFDNUIseUJBQXlCLEVBQUE7O0FEc0Y3QjtJQVFRLDhCQUFrQztJQUNsQyx5QkFBOEI7SUFDOUIsb0NBQXdDLEVBQUE7O0FBVmhEO0lBY1EsOEJBQXVDO0lBQ3ZDLHlCQUE4QjtJQUM5QixvQ0FBNkMsRUFBQTs7QUFoQnJEO0lBb0JRLDhCQUFtQztJQUNuQyx5QkFBa0M7SUFDbEMsb0NBQTZDLEVBQUE7O0FBSXJEO0VBQ0ksVUFBVSxFQUFBOztBQURkO0lBR1EsV0FBVyxFQUFBOztBQUluQjtFQUNJLDRCQUE0QjtFQUM1QixtQkUzSHlCO0VGNEh6Qix5QkFBNkI7RUFDN0Isb0NBQWlEO0VDN0hqRCxvQkFBb0I7RUFDcEIsNEJBQTRCO0VBQzVCLHlCQUF5QixFQUFBOztBRGdJekI7RUFESjtJQUVRLGFBQWEsRUFBQSxFQUVwQjs7QUFFRDtFQUNJLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGtCQUFrQixFQUFBOztBRzdJdEI7RUFDSSxXQUFXLEVBQUE7O0FBRGY7SUFJUSx1QkFBdUIsRUFBQTs7QUFKL0I7SUFTWSxhQUFhO0lBQ2IseUJESm1CO0lDS25CLHFCRFZpQjtJQ1dqQiwwQkFBMEIsRUFBQTs7QUFFMUI7TUFkWjtRQWVnQixhQUFhLEVBQUEsRUE2QnBCOztBQTVDVDtNQW1CZ0IscUJEbEJhLEVBQUE7O0FDRDdCO01BdUJnQix5QkR6Qks7TUMwQkwsZ0JBQWdCLEVBQUE7O0FBeEJoQztNQTRCZ0IsZ0JBQWdCLEVBQUE7O0FBNUJoQztNQWdDZ0IsY0RqQ0ksRUFBQTs7QUNDcEI7TUFtQ2dCLGNEdkNTLEVBQUE7O0FDSXpCO01Bc0NnQixjRGpDTSxFQUFBOztBQ0x0QjtNQTBDZ0IscUJBQXFCLEVBQUE7O0FBMUNyQztJQWdEUSx5QkQvQ3FCO0lDZ0RyQixhQUFhO0lBQ2IsYUFBYSxFQUFBOztBQUViO01BcERSO1FBcURZLGFBQWEsRUFBQSxFQVFwQjs7QUE3REw7TUF5RGdCLGtCQUFpQjtNQUNqQixtQkFBa0IsRUFBQTs7QUExRGxDO0lBZ0VRLGNBQWMsRUFBQTs7QUFDZDtNQWpFUjtRQW1FWSxXQUFXLEVBQUEsRUFFbEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvaG93LWl0LXdvcmtzL2hvdy1pdC13b3Jrcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJtaXhpbnNcIjtcbkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcblxuaHRtbCB7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG5ib2R5IHtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgIH1cbn1cblxuaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWEsIGJ1dHRvbiwgYSB7XG4gICAgb3V0bGluZTogMDtcbn1cblxuaDEge1xuICAgIGZvbnQtc2l6ZTogNjBweDtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgIH1cbn1cbmgyIHtcbiAgICBmb250LXNpemU6IDQ4cHg7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICB9XG59XG5oMyB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgfVxufVxuaDQge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cbmg1IHtcbiAgICBmb250LXNpemU6IDYwcHg7XG59XG5cbi5mb250LXNpemUtbGcge1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbn1cbi5mb250LXNpemUtbWQge1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbn1cbi5mb250LXNpemUtc20ge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLnRvcDEwIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLnRvcDIwIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLnRvcDMwIHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuLnRvcDQwIHtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuLnRvcDUwIHtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuLnRvcDEwMCB7XG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XG59XG5cbi5ib3R0b20xMCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5ib3R0b20yMCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5ib3R0b20zMCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbi5ib3R0b200MCB7XG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cbi5ib3R0b201MCB7XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cblxuLnBhZGRpbmcyMCB7XG4gICAgcGFkZGluZzogMjBweDtcbn1cblxuLmJ0biB7XG4gICAgcGFkZGluZzogOHB4IDUwcHggIWltcG9ydGFudDtcblxuICAgICYucm91bmQtYnRuIHtcbiAgICAgICAgQGluY2x1ZGUgYnRuLXJhZGl1cygpO1xuICAgIH1cblxuICAgICYucHJpbWFyeS1idG4ge1xuICAgICAgICBiYWNrZ3JvdW5kOiAkY29sb3ItYmx1ZSAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogJGNvbG9yLXdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvci1ibHVlICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgJi5zZWNvbmRhcnktYnRuIHtcbiAgICAgICAgYmFja2dyb3VuZDogJGNvbG9yLXJveWFsYmx1ZSAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogJGNvbG9yLXdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvci1yb3lhbGJsdWUgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAmLmJvcmRlcmVkLWJ0biB7XG4gICAgICAgIGJhY2tncm91bmQ6ICRjb2xvci13aGl0ZSAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogJGNvbG9yLXJveWFsYmx1ZSAhaW1wb3J0YW50O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3Itcm95YWxibHVlICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG5pbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYSwgYnV0dG9uIHtcbiAgICBvdXRsaW5lOiAwO1xuICAgICYuc3RyZWNoIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufVxuXG4ubGFiZWxlZC10ZXh0IHtcbiAgICBwYWRkaW5nOiA4cHggMzBweCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQ6ICRjb2xvci1kZWVwbGlnaHRibHVlO1xuICAgIGNvbG9yOiAkY29sb3ItYmx1ZSAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvci1kZWVwbGlnaHRibHVlICFpbXBvcnRhbnQ7XG4gICAgQGluY2x1ZGUgYnRuLXJhZGl1cygpO1xufVxuXG4uaGlkZGVuLXhzIHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG59XG5cbi5vdmVyZmxvdy1oaWRkZW4ge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5vdmVyZmxvdy14LWhpZGRlbiB7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xufSIsIkBtaXhpbiBiYWNrZ3JvdW5kLWxpbmVhci10dXJxdW9pc2UoKSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMzVDNUMzIDAlLCAjMjdCQUJFIDUyJSwgIzAxQUVCOSAxMDAlKTtcbn1cblxuQG1peGluIGJ0bi1yYWRpdXMoKSB7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDEwMHB4O1xufSIsIiRjb2xvci10dXJxdW9pc2U6ICMwMEFFQjggIWRlZmF1bHQ7XG4kY29sb3ItbGlnaHR0dXJxdW9pc2U6ICMzNUM1QzMgIWRlZmF1bHQ7XG4kY29sb3Itd2hpdGU6ICNGRkZGRkYgIWRlZmF1bHQ7XG4kY29sb3ItYmx1ZTogIzIxMjg1RSAhZGVmYXVsdDtcbiRjb2xvci1saWdodGJsdWU6ICM0MjQ4NzYgIWRlZmF1bHQ7XG4kY29sb3ItZGVlcGxpZ2h0Ymx1ZTogI0VGRUZGMiAhZGVmYXVsdDtcbiRjb2xvci1yb3lhbGJsdWU6ICMxQzcwRjIgIWRlZmF1bHQ7XG4kY29sb3ItZ3JleTogIzk1OThCMiAhZGVmYXVsdDtcbiRjb2xvci1saWdodGdyZXk6ICNEQ0RCREMgIWRlZmF1bHQ7XG4kY29sb3Itb3JhbmdlOiAjRjE1QzNFICFkZWZhdWx0O1xuJGNvbG9yLWRlZXBsaWdodG9yYW5nZTogI0Y1RjRGNCAhZGVmYXVsdDtcblxuXG4kaGVhZGVyLWJnOiB0cmFuc3BhcmVudCAhZGVmYXVsdDtcblxuJGJvZHktY29udGVudC1jb2xvcjogJGNvbG9yLWxpZ2h0Ymx1ZSAhZGVmYXVsdDsiLCJAaW1wb3J0IFwiLi4vLi4vLi4vc2Nzcy92YXJpYWJsZXNcIjtcbkBpbXBvcnQgXCIuLi8uLi8uLi9zY3NzL2hlbHBlcnNcIjtcbkBpbXBvcnQgXCIuLi8uLi8uLi9zY3NzL21peGluc1wiO1xuXG4uaG93LWl0LXdvcmtzIHtcbiAgICBmbG9hdDogbGVmdDtcblxuICAgIGgyIHtcbiAgICAgICAgbWFyZ2luOiAzMHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLm5hdi10YWJzIHtcbiAgICAgICAgLm5hdi1pdGVtIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItZGVlcGxpZ2h0b3JhbmdlO1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkY29sb3ItZGVlcGxpZ2h0Ymx1ZTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDdweCA3cHggMCAwO1xuXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICRjb2xvci1kZWVwbGlnaHRibHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlO1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLm5hdi1yZXRhaWwtdGFiIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogJGNvbG9yLWJsdWUgIDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICYubmF2LWhlYWx0aC10YWIge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAkY29sb3ItdHVycXVvaXNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJi5uYXYtc2VydmljZXMtdGFiIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogJGNvbG9yLW9yYW5nZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi5jb2wtc20tNCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAvIDMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnRhYi1jb250ZW50IHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yLWRlZXBsaWdodGJsdWU7XG4gICAgICAgIGJvcmRlci10b3A6IDA7XG4gICAgICAgIHBhZGRpbmc6IDUwcHg7XG5cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5yb3cge1xuICAgICAgICAgICAgLmNvbC1tZC00IHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6MzBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OjMwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuYXBwbHktbm93e1xuICAgICAgICBtYXJnaW46IDIwcHggMDtcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ== */"

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
        console.log('hi');
    };
    HowItWorksComponent.prototype.ngAfterViewChecked = function () {
        this.routerOutlet.nativeElement.scrollIntoView();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('routerOutlet'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], HowItWorksComponent.prototype, "routerOutlet", void 0);
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

module.exports = "<section class=\"landing-section\" #landingSection>\n  <div class=\"landing-section-top\">\n    <div class=\"container\">\n        \n      <div class=\"row\">\n        <div class=\"col-md-8\">\n            <nav class=\"navbar navbar-expand-lg navbar-light header\">\n                <a class=\"navbar-brand\" href routerLink = \"\"><img src=\"../../assets/img/logo_bubble.png\"></a>\n                <button class=\"navbar-toggler\" type=\"button\" (click)=\"openMenu()\" >\n                  <span class=\"navbar-toggler-icon\"></span>\n                </button>\n            \n                <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n                  <ul class=\"navbar-nav\">\n                    <li class=\"nav-item \">\n                      <a class=\"nav-link\" href routerLink = \"how-it-works\" routerLinkActive=\"active\">How it works </a>\n                    </li>\n                  </ul>\n                </div>\n              \n            </nav>\n\n            <div class=\"overlay\" #overlay>\n\n                <!-- Button to close the overlay navigation -->\n                <a class=\"logo\" href routerLink = \"\"><img src=\"../../assets/img/logo_bubble.png\"></a>\n                <a href=\"javascript:void(0)\" class=\"closebtn\" (click)=\"closeMenu()\">&times;</a>\n              \n                <!-- Overlay content -->\n                <div class=\"overlay-content\">\n                    <a class=\"font-size-lg\" href routerLink = \"how-it-works\" routerLinkActive=\"active\"  (click)=\"closeMenu()\">How it works </a>\n                </div>\n                \n                <button class=\"btn secondary-btn round-btn strech apply-now\">Apply now</button>\n              </div>\n\n            <div class=\"row welcomeSection\">\n              <div class=\"col-md-8\">\n                <h1>\n                  Welcome To Zip\n                </h1>\n                <p>\n                  Say hello to more sales more often, and over 1 million new opportunities. Zip offers a better way for customers to pay for your products or services over time, interest free, without any risk to you.\n                </p>\n                <button class=\"btn primary-btn round-btn\">Apply now</button>\n              </div>\n            </div>\n        </div>\n        <div class=\"col-md-4 bg-turquoise-45\">\n          <form class=\"eligibility-check-form\">\n            <h3>Find out if your business is eligible in three quick steps</h3>\n            <div class=\"input-fields\">\n              <input type=\"text\" name=\"businessName\" id=\"businessName\" placeholder=\"Business name\">\n              <input type=\"email\" name=\"email\" id=\"email\" placeholder=\"Email address\">\n              <input type=\"text\" name=\"firstName\" id=\"firstName\" placeholder=\"First name\">\n              <input type=\"text\" name=\"lastName\" id=\"lastName\" placeholder=\"Last name\">\n              <input type=\"text\" name=\"mobile\" id=\"mobile\" placeholder=\"Mobile number\">\n            </div>\n            <button class=\"btn bordered-btn round-btn strech top20\">Continue your 3 step check</button>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"landing-section-bottom\">\n    <div class=\"container\">\n      <div class=\"row text-center\">\n        <div class=\"col-md-4\">\n            <img src=\"../../../assets/img/magnifier.png\">\n            <h3>Increase your traffic</h3>\n            <p>\n                Our Store Directory gives you access to almost \u20281 million customers every month\n            </p>\n        </div>\n        <div class=\"col-md-4\">\n            <img src=\"../../../assets/img/mobile.png\">\n            <h3>Reach more customers</h3>\n            <p>\n                Every week, Zip marketing campaigns drive awareness and sales for our featured partners\n            </p>\n        </div>\n        <div class=\"col-md-4\">\n            <img src=\"../../../assets/img/megaphone.png\">\n            <h3>Measurable results</h3>\n            <p>\n                Access real-time sales performance and gain insights to support your business\n            </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/component/landing-section/landing-section.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/component/landing-section/landing-section.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html {\n  overflow-x: hidden; }\n\nbody {\n  overflow-x: hidden; }\n\n@media (max-width: 480px) {\n    body {\n      font-size: 15px; } }\n\ninput, select, textarea, button, a {\n  outline: 0; }\n\nh1 {\n  font-size: 60px; }\n\n@media (max-width: 480px) {\n    h1 {\n      font-size: 40px; } }\n\nh2 {\n  font-size: 48px; }\n\n@media (max-width: 480px) {\n    h2 {\n      font-size: 28px; } }\n\nh3 {\n  font-size: 24px; }\n\n@media (max-width: 480px) {\n    h3 {\n      font-size: 17px; } }\n\nh4 {\n  font-size: 20px; }\n\nh5 {\n  font-size: 60px; }\n\n.font-size-lg {\n  font-size: 22px; }\n\n.font-size-md {\n  font-size: 17px; }\n\n.font-size-sm {\n  font-size: 13px; }\n\n.top10 {\n  margin-top: 10px; }\n\n.top20 {\n  margin-top: 20px; }\n\n.top30 {\n  margin-top: 30px; }\n\n.top40 {\n  margin-top: 40px; }\n\n.top50 {\n  margin-top: 50px; }\n\n.top100 {\n  margin-top: 100px; }\n\n.bottom10 {\n  margin-bottom: 10px; }\n\n.bottom20 {\n  margin-bottom: 20px; }\n\n.bottom30 {\n  margin-bottom: 30px; }\n\n.bottom40 {\n  margin-bottom: 40px; }\n\n.bottom50 {\n  margin-bottom: 50px; }\n\n.padding20 {\n  padding: 20px; }\n\n.btn {\n  padding: 8px 50px !important; }\n\n.btn.round-btn {\n    border-radius: 100px;\n    -webkit-border-radius: 100px;\n    -moz-border-radius: 100px; }\n\n.btn.primary-btn {\n    background: #21285E !important;\n    color: #FFFFFF !important;\n    border: 1px solid #21285E !important; }\n\n.btn.secondary-btn {\n    background: #1C70F2 !important;\n    color: #FFFFFF !important;\n    border: 1px solid #1C70F2 !important; }\n\n.btn.bordered-btn {\n    background: #FFFFFF !important;\n    color: #1C70F2 !important;\n    border: 1px solid #1C70F2 !important; }\n\ninput, select, textarea, button {\n  outline: 0; }\n\ninput.strech, select.strech, textarea.strech, button.strech {\n    width: 100%; }\n\n.labeled-text {\n  padding: 8px 30px !important;\n  background: #EFEFF2;\n  color: #21285E !important;\n  border: 1px solid #EFEFF2 !important;\n  border-radius: 100px;\n  -webkit-border-radius: 100px;\n  -moz-border-radius: 100px; }\n\n@media (max-width: 480px) {\n  .hidden-xs {\n    display: none; } }\n\n.overflow-hidden {\n  overflow: hidden; }\n\n.overflow-x-hidden {\n  overflow-x: hidden; }\n\n.landing-section {\n  height: calc(100vh - 60px); }\n\n.landing-section .landing-section-top {\n    background-image: linear-gradient(45deg, #35C5C3 0%, #27BABE 52%, #01AEB9 100%);\n    padding: 50px 0 100px 0; }\n\n@media (max-width: 480px) {\n      .landing-section .landing-section-top {\n        padding: 0px 0 100px 0; } }\n\n.landing-section .landing-section-top .navbar {\n      padding-left: 0;\n      padding-right: 0;\n      color: #FFFFFF; }\n\n.landing-section .landing-section-top .navbar .nav-link {\n        color: inherit; }\n\n.landing-section .landing-section-top .navbar .nav-link.active {\n          color: inherit; }\n\n.landing-section .landing-section-top .navbar .navbar-toggler {\n        border: 0 !important;\n        padding: 0; }\n\n.landing-section .landing-section-top .navbar .navbar-toggler-icon {\n        background-image: url('hamburger.png') !important; }\n\n@media (max-width: 480px) {\n        .landing-section .landing-section-top .navbar .navbar-collapse {\n          position: absolute;\n          top: 54px;\n          left: 100%;\n          padding-left: 15px;\n          padding-right: 15px;\n          padding-bottom: 15px;\n          width: 100%;\n          -webkit-transition: all 0.4s ease;\n          transition: all 0.4s ease;\n          display: block; }\n        .landing-section .landing-section-top .navbar .navbar-collapse.collapsing {\n          height: auto !important;\n          margin-left: 50%;\n          left: 50%;\n          -webkit-transition: all 0.2s ease;\n          transition: all 0.2s ease; }\n        .landing-section .landing-section-top .navbar .navbar-collapse.show {\n          left: 0; } }\n\n.landing-section .landing-section-top .welcomeSection {\n      color: #FFFFFF;\n      margin-top: 80px; }\n\n@media (max-width: 480px) {\n        .landing-section .landing-section-top .welcomeSection {\n          margin-top: 30px; } }\n\n.landing-section .landing-section-top .welcomeSection button {\n        margin-top: 40px; }\n\n@media (max-width: 480px) {\n          .landing-section .landing-section-top .welcomeSection button {\n            margin-top: 20px; } }\n\n.landing-section .landing-section-top .bg-turquoise-45::before {\n      content: \"\";\n      -webkit-transform: rotate(-135deg);\n              transform: rotate(-135deg);\n      background: #00AEB8;\n      border-radius: 237px;\n      transform: rotate(-135deg);\n      display: block;\n      height: 850px;\n      width: 350px;\n      position: absolute;\n      top: -70%;\n      left: 42%; }\n\n@media (max-width: 480px) {\n        .landing-section .landing-section-top .bg-turquoise-45::before {\n          display: none; } }\n\n.landing-section .landing-section-top .bg-turquoise-45 .eligibility-check-form {\n      background-color: #FFFFFF;\n      padding: 20px;\n      height: 100%;\n      position: absolute; }\n\n.landing-section .landing-section-top .bg-turquoise-45 .eligibility-check-form .input-fields input {\n        height: 40px;\n        width: 100%;\n        border: 0;\n        border-bottom: 1px solid #DCDBDC;\n        margin-top: 10px; }\n\n@media (max-width: 480px) {\n        .landing-section .landing-section-top .bg-turquoise-45 .eligibility-check-form {\n          position: relative;\n          margin-top: 20px; } }\n\n.landing-section .landing-section-bottom {\n    background: #21285E;\n    color: #FFFFFF;\n    padding: 30px 0 30px 0; }\n\n@media (max-width: 480px) {\n      .landing-section .landing-section-bottom {\n        float: left; } }\n\n.landing-section .landing-section-bottom img {\n      margin: 20px; }\n\n.overlay {\n  height: 100vh;\n  width: 0;\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  background-color: #21285E;\n  overflow-x: hidden;\n  -webkit-transition: 0.5s;\n  transition: 0.5s; }\n\n.overlay a {\n    text-decoration: none;\n    color: #FFFFFF;\n    display: block;\n    -webkit-transition: 0.3s;\n    transition: 0.3s; }\n\n.overlay .overlay-content {\n    position: relative;\n    top: 5%;\n    width: 100%;\n    height: calc(100% - 170px);\n    margin-top: 30px; }\n\n.overlay .closebtn {\n    position: absolute;\n    top: 10px;\n    right: 10px;\n    font-size: 40px;\n    line-height: 30px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2xhbmRpbmctc2VjdGlvbi9DOlxcTmlrdW5qXFxwcml5YS1wb2MtbWFzdGVyXFxwcml5YS1wb2MtbWFzdGVyL3NyY1xcc2Nzc1xcX2hlbHBlcnMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50L2xhbmRpbmctc2VjdGlvbi9DOlxcTmlrdW5qXFxwcml5YS1wb2MtbWFzdGVyXFxwcml5YS1wb2MtbWFzdGVyL3NyY1xcc2Nzc1xcX21peGlucy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnQvbGFuZGluZy1zZWN0aW9uL0M6XFxOaWt1bmpcXHByaXlhLXBvYy1tYXN0ZXJcXHByaXlhLXBvYy1tYXN0ZXIvc3JjXFxzY3NzXFxfdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudC9sYW5kaW5nLXNlY3Rpb24vQzpcXE5pa3VualxccHJpeWEtcG9jLW1hc3RlclxccHJpeWEtcG9jLW1hc3Rlci9zcmNcXGFwcFxcY29tcG9uZW50XFxsYW5kaW5nLXNlY3Rpb25cXGxhbmRpbmctc2VjdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGtCQUFrQixFQUFBOztBQUVsQjtJQUhKO01BSVEsZUFBZSxFQUFBLEVBRXRCOztBQUVEO0VBQ0ksVUFBVSxFQUFBOztBQUdkO0VBQ0ksZUFBZSxFQUFBOztBQUNmO0lBRko7TUFHUSxlQUFlLEVBQUEsRUFFdEI7O0FBQ0Q7RUFDSSxlQUFlLEVBQUE7O0FBQ2Y7SUFGSjtNQUdRLGVBQWUsRUFBQSxFQUV0Qjs7QUFDRDtFQUNJLGVBQWUsRUFBQTs7QUFDZjtJQUZKO01BR1EsZUFBZSxFQUFBLEVBRXRCOztBQUNEO0VBQ0ksZUFBZSxFQUFBOztBQUVuQjtFQUNJLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxlQUFlLEVBQUE7O0FBRW5CO0VBQ0ksZUFBZSxFQUFBOztBQUVuQjtFQUNJLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxtQkFBbUIsRUFBQTs7QUFFdkI7RUFDSSxtQkFBbUIsRUFBQTs7QUFFdkI7RUFDSSxtQkFBbUIsRUFBQTs7QUFFdkI7RUFDSSxtQkFBbUIsRUFBQTs7QUFFdkI7RUFDSSxtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxhQUFhLEVBQUE7O0FBR2pCO0VBQ0ksNEJBQTRCLEVBQUE7O0FBRGhDO0lDeEZJLG9CQUFvQjtJQUNwQiw0QkFBNEI7SUFDNUIseUJBQXlCLEVBQUE7O0FEc0Y3QjtJQVFRLDhCQUFrQztJQUNsQyx5QkFBOEI7SUFDOUIsb0NBQXdDLEVBQUE7O0FBVmhEO0lBY1EsOEJBQXVDO0lBQ3ZDLHlCQUE4QjtJQUM5QixvQ0FBNkMsRUFBQTs7QUFoQnJEO0lBb0JRLDhCQUFtQztJQUNuQyx5QkFBa0M7SUFDbEMsb0NBQTZDLEVBQUE7O0FBSXJEO0VBQ0ksVUFBVSxFQUFBOztBQURkO0lBR1EsV0FBVyxFQUFBOztBQUluQjtFQUNJLDRCQUE0QjtFQUM1QixtQkUzSHlCO0VGNEh6Qix5QkFBNkI7RUFDN0Isb0NBQWlEO0VDN0hqRCxvQkFBb0I7RUFDcEIsNEJBQTRCO0VBQzVCLHlCQUF5QixFQUFBOztBRGdJekI7RUFESjtJQUVRLGFBQWEsRUFBQSxFQUVwQjs7QUFFRDtFQUNJLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGtCQUFrQixFQUFBOztBRzdJdEI7RUFDSSwwQkFBMEIsRUFBQTs7QUFEOUI7SUZISSwrRUFBK0U7SUVRM0UsdUJBQXVCLEVBQUE7O0FBRXZCO01BUFI7UUFRWSxzQkFBc0IsRUFBQSxFQTJHN0I7O0FBbkhMO01BWVksZUFBZTtNQUNmLGdCQUFnQjtNQUNoQixjRGhCUyxFQUFBOztBQ0VyQjtRQWlCZ0IsY0FBYyxFQUFBOztBQWpCOUI7VUFtQm9CLGNBQWMsRUFBQTs7QUFuQmxDO1FBd0JnQixvQkFBb0I7UUFDcEIsVUFBVSxFQUFBOztBQXpCMUI7UUE0QmdCLGlEQUFtRSxFQUFBOztBQUd2RTtRQS9CWjtVQWlDb0Isa0JBQWtCO1VBQ2xCLFNBQVM7VUFDVCxVQUFVO1VBQ1Ysa0JBQWtCO1VBQ2xCLG1CQUFtQjtVQUNuQixvQkFBb0I7VUFDcEIsV0FBVztVQUNYLGlDQUF5QjtVQUF6Qix5QkFBeUI7VUFDekIsY0FBYyxFQUFBO1FBekNsQztVQTRDb0IsdUJBQXVCO1VBQ3ZCLGdCQUFnQjtVQUNoQixTQUFTO1VBQ1QsaUNBQXlCO1VBQXpCLHlCQUF5QixFQUFBO1FBL0M3QztVQWtEb0IsT0FBTyxFQUFBLEVBQ1Y7O0FBbkRqQjtNQXdEWSxjRDFEUztNQzJEVCxnQkFBZ0IsRUFBQTs7QUFFaEI7UUEzRFo7VUE0RGdCLGdCQUFnQixFQUFBLEVBVXZCOztBQXRFVDtRQWdFZ0IsZ0JBQWUsRUFBQTs7QUFFZjtVQWxFaEI7WUFtRW9CLGdCQUFnQixFQUFBLEVBRXZCOztBQXJFYjtNQTJFZ0IsV0FBVztNQUNYLGtDQUEwQjtjQUExQiwwQkFBMEI7TUFDMUIsbUJEakZTO01Da0ZULG9CQUFvQjtNQUNwQiwwQkFBMEI7TUFDMUIsY0FBYztNQUNkLGFBQWE7TUFDYixZQUFZO01BQ1osa0JBQWtCO01BQ2xCLFNBQVM7TUFDVCxTQUFTLEVBQUE7O0FBRVQ7UUF2RmhCO1VBd0ZvQixhQUFhLEVBQUEsRUFFcEI7O0FBMUZiO01BOEZnQix5QkRoR0s7TUNpR0wsYUFBYTtNQUNiLFlBQVk7TUFDWixrQkFBa0IsRUFBQTs7QUFqR2xDO1FBcUd3QixZQUFZO1FBQ1osV0FBVztRQUNYLFNBQVM7UUFDVCxnQ0RwR0M7UUNxR0QsZ0JBQWdCLEVBQUE7O0FBSXhCO1FBN0doQjtVQThHb0Isa0JBQWtCO1VBQ2xCLGdCQUFnQixFQUFBLEVBRXZCOztBQWpIYjtJQXFIUSxtQkR0SFk7SUN1SFosY0R4SGE7SUN5SGIsc0JBQXNCLEVBQUE7O0FBRXRCO01BekhSO1FBMEhZLFdBQVcsRUFBQSxFQU1sQjs7QUFoSUw7TUE4SFksWUFBWSxFQUFBOztBQUt4QjtFQUNJLGFBQWE7RUFDYixRQUFRO0VBQ1IsZUFBZTtFQUNmLFVBQVU7RUFDVixPQUFPO0VBQ1AsTUFBTTtFQUNOLHlCRDNJZ0I7RUM0SWhCLGtCQUFrQjtFQUNsQix3QkFBZ0I7RUFBaEIsZ0JBQWdCLEVBQUE7O0FBVHBCO0lBWVEscUJBQXFCO0lBQ3JCLGNEbEphO0lDbUpiLGNBQWM7SUFDZCx3QkFBZ0I7SUFBaEIsZ0JBQWdCLEVBQUE7O0FBZnhCO0lBbUJRLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsV0FBVztJQUNYLDBCQUEwQjtJQUMxQixnQkFBZ0IsRUFBQTs7QUF2QnhCO0lBNkJRLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztJQUNYLGVBQWU7SUFDZixpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9sYW5kaW5nLXNlY3Rpb24vbGFuZGluZy1zZWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIm1peGluc1wiO1xuQGltcG9ydCBcInZhcmlhYmxlc1wiO1xuXG5odG1sIHtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5cbmJvZHkge1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgfVxufVxuXG5pbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYSwgYnV0dG9uLCBhIHtcbiAgICBvdXRsaW5lOiAwO1xufVxuXG5oMSB7XG4gICAgZm9udC1zaXplOiA2MHB4O1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgfVxufVxuaDIge1xuICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgIH1cbn1cbmgzIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICB9XG59XG5oNCB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuaDUge1xuICAgIGZvbnQtc2l6ZTogNjBweDtcbn1cblxuLmZvbnQtc2l6ZS1sZyB7XG4gICAgZm9udC1zaXplOiAyMnB4O1xufVxuLmZvbnQtc2l6ZS1tZCB7XG4gICAgZm9udC1zaXplOiAxN3B4O1xufVxuLmZvbnQtc2l6ZS1zbSB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4udG9wMTAge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG4udG9wMjAge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG4udG9wMzAge1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG59XG4udG9wNDAge1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG59XG4udG9wNTAge1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG59XG4udG9wMTAwIHtcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcbn1cblxuLmJvdHRvbTEwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLmJvdHRvbTIwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLmJvdHRvbTMwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuLmJvdHRvbTQwIHtcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuLmJvdHRvbTUwIHtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuXG4ucGFkZGluZzIwIHtcbiAgICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uYnRuIHtcbiAgICBwYWRkaW5nOiA4cHggNTBweCAhaW1wb3J0YW50O1xuXG4gICAgJi5yb3VuZC1idG4ge1xuICAgICAgICBAaW5jbHVkZSBidG4tcmFkaXVzKCk7XG4gICAgfVxuXG4gICAgJi5wcmltYXJ5LWJ0biB7XG4gICAgICAgIGJhY2tncm91bmQ6ICRjb2xvci1ibHVlICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiAkY29sb3Itd2hpdGUgIWltcG9ydGFudDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yLWJsdWUgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAmLnNlY29uZGFyeS1idG4ge1xuICAgICAgICBiYWNrZ3JvdW5kOiAkY29sb3Itcm95YWxibHVlICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiAkY29sb3Itd2hpdGUgIWltcG9ydGFudDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yLXJveWFsYmx1ZSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgICYuYm9yZGVyZWQtYnRuIHtcbiAgICAgICAgYmFja2dyb3VuZDogJGNvbG9yLXdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiAkY29sb3Itcm95YWxibHVlICFpbXBvcnRhbnQ7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvci1yb3lhbGJsdWUgIWltcG9ydGFudDtcbiAgICB9XG59XG5cbmlucHV0LCBzZWxlY3QsIHRleHRhcmVhLCBidXR0b24ge1xuICAgIG91dGxpbmU6IDA7XG4gICAgJi5zdHJlY2gge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG59XG5cbi5sYWJlbGVkLXRleHQge1xuICAgIHBhZGRpbmc6IDhweCAzMHB4ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogJGNvbG9yLWRlZXBsaWdodGJsdWU7XG4gICAgY29sb3I6ICRjb2xvci1ibHVlICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yLWRlZXBsaWdodGJsdWUgIWltcG9ydGFudDtcbiAgICBAaW5jbHVkZSBidG4tcmFkaXVzKCk7XG59XG5cbi5oaWRkZW4teHMge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn1cblxuLm92ZXJmbG93LWhpZGRlbiB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLm92ZXJmbG93LXgtaGlkZGVuIHtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG59IiwiQG1peGluIGJhY2tncm91bmQtbGluZWFyLXR1cnF1b2lzZSgpIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICMzNUM1QzMgMCUsICMyN0JBQkUgNTIlLCAjMDFBRUI5IDEwMCUpO1xufVxuXG5AbWl4aW4gYnRuLXJhZGl1cygpIHtcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgIC1tb3otYm9yZGVyLXJhZGl1czogMTAwcHg7XG59IiwiJGNvbG9yLXR1cnF1b2lzZTogIzAwQUVCOCAhZGVmYXVsdDtcbiRjb2xvci1saWdodHR1cnF1b2lzZTogIzM1QzVDMyAhZGVmYXVsdDtcbiRjb2xvci13aGl0ZTogI0ZGRkZGRiAhZGVmYXVsdDtcbiRjb2xvci1ibHVlOiAjMjEyODVFICFkZWZhdWx0O1xuJGNvbG9yLWxpZ2h0Ymx1ZTogIzQyNDg3NiAhZGVmYXVsdDtcbiRjb2xvci1kZWVwbGlnaHRibHVlOiAjRUZFRkYyICFkZWZhdWx0O1xuJGNvbG9yLXJveWFsYmx1ZTogIzFDNzBGMiAhZGVmYXVsdDtcbiRjb2xvci1ncmV5OiAjOTU5OEIyICFkZWZhdWx0O1xuJGNvbG9yLWxpZ2h0Z3JleTogI0RDREJEQyAhZGVmYXVsdDtcbiRjb2xvci1vcmFuZ2U6ICNGMTVDM0UgIWRlZmF1bHQ7XG4kY29sb3ItZGVlcGxpZ2h0b3JhbmdlOiAjRjVGNEY0ICFkZWZhdWx0O1xuXG5cbiRoZWFkZXItYmc6IHRyYW5zcGFyZW50ICFkZWZhdWx0O1xuXG4kYm9keS1jb250ZW50LWNvbG9yOiAkY29sb3ItbGlnaHRibHVlICFkZWZhdWx0OyIsIkBpbXBvcnQgXCIuLi8uLi8uLi9zY3NzL3ZhcmlhYmxlc1wiO1xuQGltcG9ydCBcIi4uLy4uLy4uL3Njc3MvaGVscGVyc1wiO1xuQGltcG9ydCBcIi4uLy4uLy4uL3Njc3MvbWl4aW5zXCI7XG5cbi5sYW5kaW5nLXNlY3Rpb24ge1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDYwcHgpO1xuXG4gICAgLmxhbmRpbmctc2VjdGlvbi10b3Age1xuICAgICAgICBAaW5jbHVkZSBiYWNrZ3JvdW5kLWxpbmVhci10dXJxdW9pc2UoKTtcbiAgICAgICAgcGFkZGluZzogNTBweCAwIDEwMHB4IDA7XG5cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwcHggMCAxMDBweCAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLm5hdmJhciB7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7IFxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMDsgXG4gICAgICAgICAgICBjb2xvcjogJGNvbG9yLXdoaXRlO1xuXG4gICAgICAgICAgICAubmF2LWxpbmsge1xuICAgICAgICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICAgICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubmF2YmFyLXRvZ2dsZXIge1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubmF2YmFyLXRvZ2dsZXItaWNvbiB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvaGFtYnVyZ2VyLnBuZykgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgICAgICAgICAgICAgLm5hdmJhci1jb2xsYXBzZSB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA1NHB4O1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5uYXZiYXItY29sbGFwc2UuY29sbGFwc2luZyB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNTAlO1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5uYXZiYXItY29sbGFwc2Uuc2hvdyB7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAud2VsY29tZVNlY3Rpb24ge1xuICAgICAgICAgICAgY29sb3I6ICRjb2xvci13aGl0ZTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDgwcHg7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDo0MHB4O1xuXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgXG4gICAgICAgIC5iZy10dXJxdW9pc2UtNDV7XG4gICAgICAgICAgICAmOjpiZWZvcmUge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTEzNWRlZyk7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGNvbG9yLXR1cnF1b2lzZTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMzdweDtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTM1ZGVnKTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDg1MHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAzNTBweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiAtNzAlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDQyJTtcblxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmVsaWdpYmlsaXR5LWNoZWNrLWZvcm17XG4gICAgICAgICAgICAgICAgLy8gdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGU7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gICAgICAgICAgICAgICAgLmlucHV0LWZpZWxkc3tcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGNvbG9yLWxpZ2h0Z3JleTsgXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmxhbmRpbmctc2VjdGlvbi1ib3R0b20ge1xuICAgICAgICBiYWNrZ3JvdW5kOiAkY29sb3ItYmx1ZTtcbiAgICAgICAgY29sb3I6ICRjb2xvci13aGl0ZTtcbiAgICAgICAgcGFkZGluZzogMzBweCAwIDMwcHggMDtcblxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICB9XG5cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIG1hcmdpbjogMjBweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLm92ZXJsYXkgeyBcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAwO1xuICAgIHBvc2l0aW9uOiBmaXhlZDsgXG4gICAgei1pbmRleDogMTsgXG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJsdWU7IFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjsgXG4gICAgdHJhbnNpdGlvbjogMC41cztcblxuICAgIGEge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGNvbG9yOiAkY29sb3Itd2hpdGU7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrOyBcbiAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcbiAgICB9XG5cbiAgICAub3ZlcmxheS1jb250ZW50IHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0b3A6IDUlOyBcbiAgICAgICAgd2lkdGg6IDEwMCU7IFxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDE3MHB4KTtcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDsgXG5cbiAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIC5jbG9zZWJ0biB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgICByaWdodDogMTBweDtcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICB9XG59Il19 */"

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
    LandingSectionComponent.prototype.openMenu = function () {
        this.overlay.nativeElement.style.width = "100%";
        this.overlay.nativeElement.classList.add("padding20");
        this.landingSection.nativeElement.classList.remove("overflow-x-hidden");
        this.landingSection.nativeElement.classList.add("overflow-hidden");
    };
    LandingSectionComponent.prototype.closeMenu = function () {
        this.overlay.nativeElement.style.width = "0";
        this.overlay.nativeElement.classList.remove("padding20");
        this.landingSection.nativeElement.classList.remove("overflow-hidden");
        this.landingSection.nativeElement.classList.add("overflow-x-hidden");
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('overlay'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], LandingSectionComponent.prototype, "overlay", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('landingSection'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], LandingSectionComponent.prototype, "landingSection", void 0);
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

/***/ "./src/app/directive/router-outlet.directive.ts":
/*!******************************************************!*\
  !*** ./src/app/directive/router-outlet.directive.ts ***!
  \******************************************************/
/*! exports provided: RouterOutletDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterOutletDirective", function() { return RouterOutletDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var RouterOutletDirective = /** @class */ (function () {
    // I initialize the router-outlet directive.
    function RouterOutletDirective(elementRef, router) {
        this.elementRef = elementRef;
        this.router = router;
        this.elementRef = elementRef;
        this.router = router;
        this.routerEventsSubscription = null;
    }
    RouterOutletDirective.prototype.ngOnDestroy = function () {
        if (this.routerEventsSubscription) {
            this.routerEventsSubscription.unsubscribe();
        }
        this.windowCoordinates = this.currentXY;
    };
    RouterOutletDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.currentXY = this.windowCoordinates;
        this.windowScroll = [0, 0]; // reset window scroll
        this.routerEventsSubscription = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(function (prev, next) { return next && next.url === prev.url; }))
            .subscribe(function (event) {
            var node = _this.elementRef.nativeElement.parentNode;
            node.scrollTop = 0;
        });
    };
    Object.defineProperty(RouterOutletDirective.prototype, "windowCoordinates", {
        get: function () {
            return [window.scrollX, window.scrollY];
        },
        set: function (xy) {
            window.scrollTo(xy[0] || 0, xy[1] || 0);
        },
        enumerable: true,
        configurable: true
    });
    RouterOutletDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: 'router-outlet'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RouterOutletDirective);
    return RouterOutletDirective;
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

module.exports = __webpack_require__(/*! C:\Nikunj\priya-poc-master\priya-poc-master\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map