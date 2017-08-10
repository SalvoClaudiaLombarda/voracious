webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "nav ul a {\n  font-size: 1.3rem;\n}\n\nfooter {\n  text-align: center;\n}\n\n.page-footer {\n  background-color: #3949ab;\n  padding-top: 0;\n}\n\nbody {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  min-height: 100vh;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\nmain {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 auto;\n          flex: 1 0 auto;\n}\n\n.avatar {\n  margin-top: 15px;\nmargin-right: 7px;\nborder: 2px solid #CCC;\n}\n.title-header{\n  font-family: 'Slackey', cursive;\n  font-size: 30px;\n  margin-left: 13%;\n}\nbody  {\ndisplay: -webkit-box;\ndisplay: -ms-flexbox;\ndisplay: flex;\nmin-height: 100vh;\n-webkit-box-orient: vertical;\n-webkit-box-direction: normal;\n    -ms-flex-direction: column;\n        flex-direction: column;\n}\nmain  {\n-webkit-box-flex: 1;\n    -ms-flex: 1 0 auto;\n        flex: 1 0 auto;\n      }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<ul id=\"foodcategories\" class=\"dropdown-content\">\n<li><a [routerLink]=\"['/api/foods/category/española']\">Española</a></li>\n<li><a [routerLink]=\"['/api/foods/category/italiana']\">Italiana</a></li>\n<li><a [routerLink]=\"['/api/foods/category/mexicana']\">Mexicana</a>\n  <li><a [routerLink]=\"['/api/foods/category/fast-food']\">Fast Food</a></li>\n  <li><a [routerLink]=\"['/api/foods/category/japonesa']\">Japonesa</a></li>\n  <li><a [routerLink]=\"['/api/foods/category/boliviana']\">Boliviana</a></li>\n  </ul>\n  <nav>\n    <div class=\"nav-wrapper indigo darken-1\">\n      <a [routerLink]=\"['']\" class=\"title-header center\">Voracious</a>\n      <a *ngIf=\"user\"> Hola {{ User.username }} </a>\n      <a href=\"#\" data-activates=\"mobile-demo\" class=\"button-collapse\"><i class=\"material-icons\">menu</i></a>\n      <ul class=\"right hide-on-med-and-down\">\n          <li *ngIf=\"session.user && session.startLoginCompleted\"><img class=\"circle responsive-img avatar\" width=\"50px\" [src]='\"http://localhost:3000/\"+session.user.avatarImage' /></li>\n        <li *ngIf=\"session.user && session.startLoginCompleted\"><strong [routerLink]=\"['profile']\"> Hello {{session.user.username}}</strong></li>\n        <li *ngIf=\"!session.user && session.startLoginCompleted\"><a [routerLink]=\"['signup']\">\n          <i class=\"material-icons left\">border_color</i>Signup</a></li>\n        <li *ngIf=\"!session.user && session.startLoginCompleted\"><a [routerLink]=\"['login']\">\n          <i class=\"material-icons left\">input</i>Login</a></li>\n\n        <li *ngIf=\"session.user && session.startLoginCompleted\"><a (click)=\"logout()\" [routerLink]=\"['login']\">\n          <i class=\"material-icons left\">exit_to_app</i>Logout</a></li>\n      </ul>\n\n      <ul class=\"left hide-on-med-and-down\">\n                <li><a [routerLink]=\"['']\">Home</a></li>\n        <li><a [routerLink]=\"['foods']\">Foods</a></li>\n        <li><a class=\"dropdown-button\" href=\"#!\" data-activates=\"foodcategories\">Tipo de Cocina<i class=\"material-icons right\">arrow_drop_down</i></a></li>\n      </ul>\n\n      <ul class=\"side-nav\" id=\"mobile-demo\">\n        <li *ngIf=\"session.user && session.startLoginCompleted\"><strong class=\"red\"> Welcome {{session.user.username}}</strong></li>\n        <li *ngIf=\"!session.user && session.startLoginCompleted\"><a [routerLink]=\"['signup']\">Signup</a></li>\n        <li *ngIf=\"!session.user && session.startLoginCompleted\"><a [routerLink]=\"['login']\">Login</a></li>\n        <li *ngIf=\"session.user && session.startLoginCompleted\"><a [routerLink]=\"['profile']\">Your Profile</a> </li>\n        <li><a [routerLink]=\"['foods']\">Foods</a></li>\n        <li class=\"divider\">\n        <li><a [routerLink]=\"['/api/foods/category/española']\">Española</a></li>\n        <li><a [routerLink]=\"['/api/foods/category/italiana']\">Italiana</a></li>\n        <li><a [routerLink]=\"['/api/foods/category/mexicana']\">Mexicana</a>\n          <li><a [routerLink]=\"['/api/foods/category/fast-food']\">Fast Food</a></li>\n          <li><a [routerLink]=\"['/api/foods/category/japonesa']\">Japonesa</a></li>\n          <li><a [routerLink]=\"['/api/foods/category/boliviana']\">Boliviana</a></li>\n      </ul>\n    </div>\n  </nav>\n\n\n\n  <router-outlet></router-outlet>\n\n\n  <footer class=\"page-footer\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col l12 s12\">\n        </div>\n      </div>\n    </div>\n    <div class=\"footer-copyright\">\n      <div class=\"container\">\n        Copyright © 2017 Claudia Duarte & Salvatore Costanzo Searchbar by: Miguel\n      </div>\n    </div>\n  </footer>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_session_service__ = __webpack_require__("../../../../../src/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__js_init_js__ = __webpack_require__("../../../../../src/app/js/init.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__js_init_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__js_init_js__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(session) {
        this.session = session;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnVIWInit = function () { };
    AppComponent.prototype.logout = function () {
        this.session.logout().subscribe();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_session_service__["a" /* SessionService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_materialize_css__ = __webpack_require__("../../../../materialize-css/dist/js/materialize.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_materialize_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_materialize_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_materialize__ = __webpack_require__("../../../../angular2-materialize/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes__ = __webpack_require__("../../../../../src/app/routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_session_service__ = __webpack_require__("../../../../../src/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_food_service__ = __webpack_require__("../../../../../src/services/food.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__signup_signup_component__ = __webpack_require__("../../../../../src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__homepage_homepage_component__ = __webpack_require__("../../../../../src/app/homepage/homepage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__food_list_food_list_component__ = __webpack_require__("../../../../../src/app/food-list/food-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__new_food_new_food_component__ = __webpack_require__("../../../../../src/app/new-food/new-food.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__food_details_food_details_component__ = __webpack_require__("../../../../../src/app/food-details/food-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_food_activation_service__ = __webpack_require__("../../../../../src/services/food-activation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__userprofile_userprofile_component__ = __webpack_require__("../../../../../src/app/userprofile/userprofile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ng2_auto_complete__ = __webpack_require__("../../../../ng2-auto-complete/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ng2_auto_complete___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_ng2_auto_complete__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__food_category_food_category_component__ = __webpack_require__("../../../../../src/app/food-category/food-category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__food_edit_food_edit_component__ = __webpack_require__("../../../../../src/app/food-edit/food-edit.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_11__signup_signup_component__["a" /* SignupComponent */],
            __WEBPACK_IMPORTED_MODULE_12__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_13__homepage_homepage_component__["a" /* HomepageComponent */],
            __WEBPACK_IMPORTED_MODULE_14__food_list_food_list_component__["a" /* FoodListComponent */],
            __WEBPACK_IMPORTED_MODULE_15__new_food_new_food_component__["a" /* NewFoodComponent */],
            __WEBPACK_IMPORTED_MODULE_16__food_details_food_details_component__["a" /* FoodDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_19__userprofile_userprofile_component__["a" /* UserprofileComponent */],
            __WEBPACK_IMPORTED_MODULE_21__food_category_food_category_component__["a" /* FoodCategoryComponent */],
            __WEBPACK_IMPORTED_MODULE_22__food_edit_food_edit_component__["a" /* FoodEditComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_17_ng2_file_upload__["FileUploadModule"],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_1_angular2_materialize__["a" /* MaterializeModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__routes__["a" /* routes */]),
            __WEBPACK_IMPORTED_MODULE_20_ng2_auto_complete__["Ng2AutoCompleteModule"]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_8__services_session_service__["a" /* SessionService */], __WEBPACK_IMPORTED_MODULE_9__services_food_service__["a" /* FoodService */], __WEBPACK_IMPORTED_MODULE_18__services_food_activation_service__["a" /* FoodActivationService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/food-category/food-category.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  min-height: 100vh;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\nmain {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 auto;\n          flex: 1 0 auto;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/food-category/food-category.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n<div *ngFor=\"let food of foods\"  class=\"col s4\">\n\n          <div class=\"card\">\n            <div class=\"card-image\">\n\n              <img class=\"foodpic img-responsive\" [src]='BASE_URL + food.imgAvatar'/>\n              <span class=\"card-title\">  <h5> {{ food.foodName }} </h5></span>\n            </div>\n            <div class=\"card-content\">\n              <p>{{food.review}}</p>\n              <br>\n              <span><strong>Restaurant:</strong>{{ food.restaurantName }}</span>\n              <span> <strong>Rate:</strong>{{ food.rate }}/5</span>\n            </div>\n            <div class=\"card-action\">\n              <a class=\"btn\" [routerLink]=\"['/foods', food._id]\">Food Details</a>\n\n            </div>\n          </div>\n\n</div>\n<span><a [routerLink]=\"['/foods']\"> Back to list </a></span>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/food-category/food-category.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_food_service__ = __webpack_require__("../../../../../src/services/food.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoodCategoryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FoodCategoryComponent = (function () {
    function FoodCategoryComponent(route, router, foodService) {
        this.route = route;
        this.router = router;
        this.foodService = foodService;
        this.BASE_URL = "" + __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].BASE_URL;
    }
    FoodCategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.getFoodCategory(params['foodCategory']);
            console.log(params);
        });
    };
    FoodCategoryComponent.prototype.getFoodCategory = function (foodCategory) {
        var _this = this;
        console.log("COMPONENT", foodCategory);
        this.foodService.getFoodCategory(foodCategory)
            .subscribe(function (foods) {
            console.log(foods);
            _this.foods = foods;
        });
    };
    return FoodCategoryComponent;
}());
FoodCategoryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-food-category',
        template: __webpack_require__("../../../../../src/app/food-category/food-category.component.html"),
        styles: [__webpack_require__("../../../../../src/app/food-category/food-category.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_food_service__["a" /* FoodService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_food_service__["a" /* FoodService */]) === "function" && _c || Object])
], FoodCategoryComponent);

var _a, _b, _c;
//# sourceMappingURL=food-category.component.js.map

/***/ }),

/***/ "../../../../../src/app/food-details/food-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "p{\n  color:black;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/food-details/food-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"food\" class=\"container\">\n  <div class=\"row \">\n    <div class=\"col s4 l3 foodpic \">\n      <div class=\"card\">\n            <div class=\"card-image\">\n                <img class=\"foodpic img-responsive\" [src]='BASE_URL + food.imgAvatar' />\n\n              </div>\n                          <div class=\"card-content\">\n                            <p></p>\n                          </div>\n\n                        </div>\n                        <a [routerLink]=\"['/foods/', food._id, 'edit']\" class=\"waves-effect waves-light btn orange\">Edit </a>\n                        <a (click)=\"deleteFood()\" class=\"waves-effect waves-light btn red\"> Delete </a>\n\n                </div>\n                <h2> {{ food.foodName}} </h2>\n\n<div class=\"col s4 l6\">\n  <hr>\n   <span class=\"tabul1\"><strong> Food Name: </strong></span><span class=\"tabul2\">{{food.foodName }}</span>\n   <p>\n   <span class=\"tabul1\"><strong> Restaurant: </strong></span><span class=\"tabul2\">{{food.restaurantName }}</span>\n   <p>\n    <span class=\"tabul1\"><strong>Restaurant Address: </strong></span><span class=\"tabul2\">{{food.restaurantAddress }}</span>\n     <p>\n      <span class=\"tabul1\"><strong>Name in menu: </strong></span><span class=\"tabul2\">{{food.restaurantFoodName }}</span>\n       <p>\n   <span class=\"tabul1\"><strong> Category: </strong></span><span class=\"tabul2\">{{food.foodCategory }}</span>\n   <p>\n  <span class=\"tabul1\"><strong>SubCategory: </strong></span><span class=\"tabul2\">{{food.foodSubCategory }}</span>\n  <p>\n    <span class=\"tabul1\"><strong>Price: </strong></span><span class=\"tabul2\">{{food.price }}</span>\n    <p>\n      <span class=\"tabul1\"><strong>Rate: </strong></span><span class=\"tabul2\">{{food.rate }}</span>\n      <p>\n        <span class=\"tabul1\"><strong>Review: </strong></span><span class=\"tabul2\">{{food.review }}</span>\n        <p>\n<a [routerLink]=\"['/foods']\"> Back to list </a>\n\n\n       </div>\n       </div>\n\n\n\n       </div>\n"

/***/ }),

/***/ "../../../../../src/app/food-details/food-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_food_service__ = __webpack_require__("../../../../../src/services/food.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoodDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FoodDetailsComponent = (function () {
    function FoodDetailsComponent(route, router, foodService) {
        this.route = route;
        this.router = router;
        this.foodService = foodService;
        this.BASE_URL = "" + __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].BASE_URL;
    }
    FoodDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.getFoodDetails(params['id']);
        });
    };
    FoodDetailsComponent.prototype.getFoodDetails = function (id) {
        var _this = this;
        this.foodService.get(id)
            .subscribe(function (food) {
            console.log(food);
            _this.food = food;
        });
    };
    FoodDetailsComponent.prototype.deleteFood = function () {
        var _this = this;
        if (window.confirm('Are you sure?')) {
            this.foodService.remove(this.food._id)
                .subscribe(function () {
                _this.router.navigate(['']);
            });
        }
    };
    return FoodDetailsComponent;
}());
FoodDetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-food-details',
        template: __webpack_require__("../../../../../src/app/food-details/food-details.component.html"),
        styles: [__webpack_require__("../../../../../src/app/food-details/food-details.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_food_service__["a" /* FoodService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_food_service__["a" /* FoodService */]) === "function" && _c || Object])
], FoodDetailsComponent);

var _a, _b, _c;
//# sourceMappingURL=food-details.component.js.map

/***/ }),

/***/ "../../../../../src/app/food-edit/food-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/food-edit/food-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1> Edit Food</h1>\n\n  <div *ngIf=\"food\" class=\"card-panel grey lighten-4\">\n\n    <form class=\"col s12\" (ngSubmit)=\"createFood(myForm)\" #myForm=\"ngForm\" novalidate>\n\n      <div class=\"row\">\n        <div class=\"input-field col s12\">\n             <i class=\"material-icons prefix\">local_dining</i>\n             <input id=\"icon_prefix\" type=\"text\" autofocus ngMod value=\"{{ food.foodName }}\"\n             name=\"foodName\" class=\"validate\" minlength=\"3\" required>\n          </div>\n       </div>\n\n             <div class=\"row\">\n              <div class=\"input-field col s12\">\n                <i class=\"material-icons prefix\">filter_list</i>\n                <input id=\"subC\" type=\"text\" value=\"{{food.foodSubCategory}}\" name=\"foodSubCategory\" class=\"validate\">\n\n              </div>\n            </div>\n\n       <div class=\"row\">\n             <div class=\"input-field col s5\">\n               <i class=\"material-icons prefix\">attach_money</i>\n               <input id=\"foodP\" type=\"number\" autofocus value=\"{{food.price}}\" required name=\"price\" class=\"validate\">\n             </div>\n\n\n\n                   <div class=\"input-field col s5\">\n                     <i class=\"material-icons prefix\">star_border</i>\n                     <input id=\"foodR\" type=\"number\" autofocus value=\"{{food.rate}}\"\n                     name=\"rate\"required class=\"validate\">\n                   </div>\n       </div>\n\n\n             <div class=\"row\">\n               <div class=\"input-field col s12\">\n                 <i class=\"material-icons prefix\">restaurant</i>\n                 <input id=\"city\" type=\"text\" autofocus value=\"{{food.restaurantName}}\"\n                  name=\"restaurantName\" required class=\"validate\">\n               </div>\n\n             </div>\n\n             <div class=\"row\">\n               <div class=\"input-field col s12\">\n                 <i class=\"material-icons prefix\"> location_on</i>\n                 <input id=\"city\" type=\"text\"value=\"{{food.restaurantAddress}}\"\n                  name=\"restaurantAddress\" autofocus required class=\"validate\">\n               </div>\n           </div>\n\n\n             <div class=\"row\">\n               <div class=\"input-field col s12\">\n                 <i class=\"material-icons prefix\"> room_service</i>\n                 <input id=\"city\" type=\"text\" autofocus value=\"{{food.restaurantFoodName}}\"\n                  name=\"restaurantFoodName\" required class=\"validate\">\n               </div>\n           </div>\n\n           <div class=\"file-field input-field\">\n          <div class=\"btn\">\n            <span>Food Image</span>\n            <input type=\"file\" name=\"imgAvatar\" ng2FileSelect [uploader]=\"uploader\">\n          </div>\n          <div class=\"file-path-wrapper\">\n            <input name=\"imgAvatar\" autofocus class=\"file-path validate\" type=\"text\">\n          </div>\n        </div>\n\n             <div class=\"row\">\n               <div class=\"input-field col s12\">\n                     <i class=\"material-icons prefix\">rate_review</i>\n                   <textarea id=\"textarea1\" autofocus value=\"{{food.review}}\"\n                   name=\"review\" class=\"materialize-textarea\"></textarea>\n                 </div>\n                   <button type=\"button\"(click)=\"editFood(food)\" name='btn_edit' class='col s4 offset-s2 btn btn-large waves-effect orange'>Save Changes</button>\n                   <button type=\"reset\" name='btn_cancel' class='col s4 offset-s1 btn btn-large waves-effect red'>Reset Changes</button>\n             </div>\n\n\n\n\n    </form>\n  </div>\n  </div>\n\n  <p class=\"error\"> {{ error }} </p>\n"

/***/ }),

/***/ "../../../../../src/app/food-edit/food-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_food_service__ = __webpack_require__("../../../../../src/services/food.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoodEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FoodEditComponent = (function () {
    function FoodEditComponent(foodService, router, route) {
        this.foodService = foodService;
        this.router = router;
        this.route = route;
        this.Food = {
            foodName: '',
            foodCategory: '',
            foodSubCategory: '',
            foodCreator: '',
            price: '',
            rate: '',
            imgAvatar: '',
            restaurantName: '',
            restaurantAddress: '',
            restaurantFoodName: '',
            review: '',
        };
    }
    FoodEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.editFood(params['id']);
        });
        __WEBPACK_IMPORTED_MODULE_4_jquery___default()('select').material_select();
        __WEBPACK_IMPORTED_MODULE_4_jquery___default()('select').change(function (e) {
            _this.food[e.currentTarget.name] = e.currentTarget.value;
        });
    };
    FoodEditComponent.prototype.editFood = function (id) {
        var _this = this;
        this.foodService.get(id)
            .subscribe(function (food) {
            _this.food = food;
        });
    };
    return FoodEditComponent;
}());
FoodEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-food-edit',
        template: __webpack_require__("../../../../../src/app/food-edit/food-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/food-edit/food-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_food_service__["a" /* FoodService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_food_service__["a" /* FoodService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], FoodEditComponent);

var _a, _b, _c;
//# sourceMappingURL=food-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/food-list/food-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*.card {\n  height: 100px;\n  background: yellow;\n  border:1px solid black;\n  border-radius: 20px;\n}*/\n\n.subtitle .card-panel{\n  padding:5px;\n}\n\n.addbutton {\n  margin-bottom:10px;\n}\n\n\n/*lombardis hack*/\n.card .card-image img{\n  height: 100%;\n}\n.card-image{\n  height:250px;\n}\n\n.card .card-content p {\n    height: 70px;\n}\n/*end modify*/\n\n\nh1 {\n  color: #FFF;\n}\n\nh5 {\n  background: #bf2c2c;\n\n}\n\n.card-content span {\n  margin-right:20px;\n}\n\n.foodlistheader{\nmargin-top: 30px;\nheight:150px;\nbackground-image: linear-gradient(\n    rgba(0, 0, 0, 0.4),\n    rgba(0, 0, 0, 0.4)\n  ), url(" + __webpack_require__("../../../../../src/assets/foodlist.jpg") + ");\nbackground-size:cover;\nbackground-position: center center;\nbackground-repeat: no-repeat;\nborder-radius: 10px;\nborder-left: 10px solid #c52525;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/food-list/food-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"row\">\n    <div class=\"col s10 offset-s1 foodlistheader z-depth-5\">\n      <h1 class=\"center-align\"> Food List </h1>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"subtitle\">\n        <div class=\"col s10 offset-s1\">\n          <div class=\"card-panel green lighten-1\">\n            <h4 class=\"white-text center-align\">Descubre y agrega las comidas más ricas del momento!</h4>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col s10 offset-s1\">\n        <a class=\"btn btn-large col s5 offset-s3 addbutton\" [routerLink]=\"['add']\">Add Food <i class=\"material-icons right\">add</i></a>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div *ngFor=\"let food of foods\" class=\"col s4\">\n\n        <div class=\"card\">\n          <div class=\"card-image\">\n\n            <img class=\"foodpic img-responsive\" [src]='BASE_URL + food.imgAvatar' />\n            <span class=\"card-title\">  <h5> {{ food.foodName }} </h5></span>\n          </div>\n          <div class=\"card-content\">\n            <p>{{food.review}}</p>\n            <br>\n            <span><strong>Restaurant:</strong>{{ food.restaurantName }}</span>\n            <span> <strong>Rate:</strong>{{ food.rate }}/5</span>\n              <span> <strong>Rate:</strong>{{ food.foodCreator.username }}</span>\n          </div>\n          <div class=\"card-action\">\n            <a class=\"btn\" [routerLink]=\"[food._id]\">Food Details</a>\n\n          </div>\n        </div>\n\n      </div>\n    </div>\n\n\n  </div>\n\n\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/food-list/food-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_food_service__ = __webpack_require__("../../../../../src/services/food.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoodListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FoodListComponent = (function () {
    function FoodListComponent(foodService) {
        this.foodService = foodService;
        this.BASE_URL = "" + __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].BASE_URL;
    }
    FoodListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.foodService.getList()
            .subscribe(function (foods) {
            _this.foods = foods;
        });
    };
    return FoodListComponent;
}());
FoodListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-food-list',
        template: __webpack_require__("../../../../../src/app/food-list/food-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/food-list/food-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_food_service__["a" /* FoodService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_food_service__["a" /* FoodService */]) === "function" && _a || Object])
], FoodListComponent);

var _a;
//# sourceMappingURL=food-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/homepage/homepage.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".title-header{\n  font-family: 'Slackey', cursive;\n}\n\n.searchbox {\n  margin-top: 20px;\n  background-image: url(" + __webpack_require__("../../../../../src/assets/cover2.jpg") + ");\n  background-size:cover;\n  background-repeat: no-repeat;\n  border: 2px #CCC;\n}\n\n.boximage {\n  margin-top:20px;\n}\n\n.header {\n  color: red;\n}\n.foodtitle h1, h5{\n  text-align: center;\n  color: white;\n  margin-bottom: 0;\n  margin-top: 0;\n}\n\nh2 {\n  text-align: center;\n}\n\n.searcher {\n  margin-bottom: 0px;\n}\n\n.buttonsearch {\n  margin-bottom: 20px;\n  text-align: center;\n}\n\n.foodtiles {\n  text-align: center;\n}\n\n.foodtile {\n  height:150px;\n  border: 2px solid #CCC;\n  padding:0;\n}\n\n.foodtile a {\n   display:block;\n    width:100%;\n    height:100%;\n}\n\n.foodtile a:active, a:visited {\n  color:white;\n}\n\n.foodtile a:hover {\n  color:#26a69a;\n}\n\n.foodtile h5 {\n  line-height: 6;\n}\n\n\n\n.foodcategory {\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  margin-left:2px;\n}\n\n\n.pizza {\n\n    background-image: linear-gradient(\n        rgba(0, 0, 0, 0.4),\n        rgba(0, 0, 0, 0.4)\n      ), url(" + __webpack_require__("../../../../../src/assets/pizza.jpg") + ");\n}\n\n.burger {\n    background-image: linear-gradient(\n        rgba(0, 0, 0, 0.4),\n        rgba(0, 0, 0, 0.4)\n      ), url(" + __webpack_require__("../../../../../src/assets/Piquemacho.png") + ");\n}\n\n.croquetas {\n    background-image:\n    linear-gradient(\n        rgba(0, 0, 0, 0.4),\n        rgba(0, 0, 0, 0.4)\n      ), url(" + __webpack_require__("../../../../../src/assets/croquetas.jpg") + ");\n}\n\n.paella {\n    background-image: linear-gradient(\n        rgba(0, 0, 0, 0.4),\n        rgba(0, 0, 0, 0.4)\n      ),url(" + __webpack_require__("../../../../../src/assets/paella.jpg") + ");\n}\n\n.sushi {\n    background-image: url(" + __webpack_require__("../../../../../src/assets/sushi.jpg") + ");\n}\n\n.pique {\n    background-image: linear-gradient(\n        rgba(0, 0, 0, 0.4),\n        rgba(0, 0, 0, 0.4)\n      ),url(" + __webpack_require__("../../../../../src/assets/sushi.jpg") + ");\n}\n\n\n.subtitle .card-panel{\n  padding:5px;\n}\n\n.card{\n  width: 50%;\n  margin-left: 25%;\n}\n\n/*lombardis hack*/\n.card .card-image img{\n  height: 100%;\n}\n.card-image{\n  height:250px;\n}\n\n.card .card-content p {\n    height: 70px;\n}\n/*end modify*/\n\n.card-title h5 {\n  background: #bf2c2c;\n}\n\n.card-content span {\n  margin-right:20px;\n}\n\n.card.horizontal .card-image {\n    max-width: 60%;\n}\n\ndiv.card.small.horizontal {\nwidth: 80%;\nmargin-left: 5%;\n}\n\n/*.truncate {\n  white-space: nowrap;\n\n}\n\n.truncate2{\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n}*/\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/homepage/homepage.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"searchbox\">\n    <div class=\"row\">\n      <div class=\"col offset-s4\">\n      </div>\n      <div class=\"col s3 boximage\">\n        <img class=\" circle responsive-img\" src=\"./assets/avatarImageExample.jpg\">\n      </div>\n    </div>\n\n    <div class=\"row foodtitle\">\n      <div class=\"col s12\">\n        <h1 class=\"title-header\">Voracious</h1>\n        <h5>Busca lo que quieres comer, no donde quieres comer</h5>\n      </div>\n    </div>\n\n\n\n\n    <div class=\"row\">\n      <div class=\"col s10 offset-s1  searcher container\">\n        <nav>\n          <div class=\"nav-wrapper\">\n            <form>\n              <div class=\"input-field\">\n                <input #searchTerm id=\"search\" autocomplete=\"off\" materialize=\"autocomplete\" [materializeParams]=\"[{'data': locations}]\" type=\"search\" placeholder=\"Busca croquetas, pique macho...\" required>\n                <label class=\"label-icon\" for=\"search\"><i class=\"material-icons\">search</i></label>\n                <i class=\"material-icons\">close</i>\n              </div>\n            </form>\n          </div>\n        </nav>\n\n      </div>\n\n    </div>\n\n\n\n    <div class=\"row\">\n      <div class=\"col s12 buttonsearch\">\n        <button (click)=\"performSearch(searchTerm)\" class=\"btn btn-large\">Search <i class=\"material-icons right\">local_dining</i></button>\n      </div>\n    </div>\n\n  </div>\n<!-- <div *ngFor=\"let product of products | async\">\n  <div class=\"card\">\n    <div class=\"card-image\">\n\n      <img class=\"foodpic img-responsive\" [src]='\"http://localhost:3000/\"+product.imgAvatar' />\n      <span class=\"card-title\">  <h5> {{ product.foodName }} </h5></span>\n    </div>\n    <div class=\"card-content\">\n      <p>{{product.review}}</p>\n      <br>\n      <span><strong>Restaurant:</strong>{{ product.restaurantName }}</span>\n      <span> <strong>Rate:</strong>{{ product.rate }}/5</span>\n\n    <div class=\"card-action\">\n      <a class=\"btn\" [routerLink]=\"['/foods/', product._id]\">Food Details</a>\n\n    </div>\n</div>\n  </div>\n\n</div> -->\n\n\n<div class=\"row\">\n<div class=\"col s6\" *ngFor=\"let product of products | async\">\n  <div class=\"card small horizontal\">\n\n    <div class=\"card-image\">\n<img class=\"foodpic img-responsive\" [src]='BASE_URL + product.imgAvatar'/>\n<span class=\"card-title center\"><h5 class=\"\">{{product.foodName}}</h5></span>\n    </div>\n    <div class=\"card-stacked\">\n      <div class=\"card-content\">\n        <span><strong>Category:</strong></span>\n        <span>{{product.foodCategory}}</span>\n        <br>\n        <br>\n        <span><strong>Rate:</strong></span>\n        <br>\n        <span>{{product.rate}}/5</span>\n        <br>\n        <br>\n        <span><strong>Price:</strong></span>\n        <br>\n        <span>€{{product.price}}</span>\n        <br>\n      </div>\n      <div class=\"card-action\">\n        <a class=\"btn\" [routerLink]=\"['/foods/', product._id]\">Details</a>\n      </div>\n    </div>\n  </div>\n</div>\n\n</div>\n\n    <!-- <div class=\"row\">\n      <div class=\"col s12 m5\">\n        <div class=\"card-panel teal\">\n          <span class=\"white-text\">{{product.review}}</span>\n        </div>\n      </div>\n    </div> -->\n\n  <div class=\"row foodtitle\">\n    <div class=\"col s12\">\n      <hr>\n      <h3 class=\"title-header center\">¡Encuentra tu mejor comida!</h3>\n      <hr>\n    </div>\n  </div>\n\n  <div class=\"row foodtiles\">\n\n\n    <div class=\"col s4 foodtile foodcategory pizza hoverable\">\n      <a [routerLink]=\"['/api/foods/category/italiana']\"><h5>Comida Italiana</h5></a>\n    </div>\n\n    <div class=\"col s4 foodtile foodcategory burger hoverable\">\n      <a [routerLink]=\"['/api/foods/category/boliviana']\"><h5>Comida Boliviana</h5></a>\n    </div>\n\n    <div class=\"col s4 foodtile foodcategory paella hoverable\">\n      <a [routerLink]=\"['/api/foods/category/española']\"><h5>Comida Española</h5></a>\n    </div>\n\n  </div>\n\n  <div class=\"row foodtiles\">\n    <div class=\"col s4 foodtile foodcategory croquetas hoverable\">\n      <a [routerLink]=\"['/api/foods/category/mexicana']\"><h5>Comida Mexicana</h5></a>\n    </div>\n\n    <div class=\"col s4 foodtile foodcategory pique hoverable\">\n      <a [routerLink]=\"['/api/foods/category/japonesa']\"><h5>Comida Japonesa</h5></a>\n    </div>\n\n    <div class=\"col s4 foodtile sushi hoverable\">\n      <a [routerLink]=\"['/api/foods/category/fast-food']\"><h5>Fast Food</h5></a>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/homepage/homepage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_food_service__ = __webpack_require__("../../../../../src/services/food.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomepageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomepageComponent = (function () {
    function HomepageComponent(foodService) {
        this.foodService = foodService;
        this.BASE_URL = "" + __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].BASE_URL;
        this.locations = {};
    }
    HomepageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.foodService.getSearch().subscribe(function (searchList) {
            searchList.map(function (e) {
                _this.locations[e.foodName] = null;
            });
            console.log(_this.locations);
        });
        this.locations = { 'apple': null, 'google': null };
    };
    HomepageComponent.prototype.performSearch = function (searchTerm) {
        this.products = this.foodService.getFoodName(searchTerm.value);
    };
    return HomepageComponent;
}());
HomepageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-homepage',
        template: __webpack_require__("../../../../../src/app/homepage/homepage.component.html"),
        styles: [__webpack_require__("../../../../../src/app/homepage/homepage.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_food_service__["a" /* FoodService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_food_service__["a" /* FoodService */]) === "function" && _a || Object])
], HomepageComponent);

var _a;
//# sourceMappingURL=homepage.component.js.map

/***/ }),

/***/ "../../../../../src/app/js/init.js":
/***/ (function(module, exports) {

(function($){
  $(function(){

    $('.button-collapse').sideNav();
           $(".dropdown-button").dropdown();
    $('.parallax').parallax();
    $('.datepicker').pickadate();
     $('.dropdown-button').dropdown('open');
       $('.dropdown-button').dropdown('close');
       $('.dropdown-button').dropdown({
    inDuration: 300,
    outDuration: 225,
    constrainWidth: false, // Does not change width of dropdown to that of the activator
    hover: true, // Activate on hover
    gutter: 0, // Spacing from edge
    belowOrigin: false, // Displays dropdown below the button
    alignment: 'left', // Displays dropdown with edge aligned to the left of button
    stopPropagation: false // Stops event propagation
  }
);


  });
})(jQuery);


/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".input-field input[type=date]:focus+label,\n.input-field input[type=text]:focus+label,\n.input-field input[type=email]:focus+label,\n.input-field input[type=password]:focus+label {\n  color: #e91e63;\n}\n\n.input-field input[type=date]:focus,\n.input-field input[type=text]:focus,\n.input-field input[type=email]:focus,\n.input-field input[type=password]:focus {\n  border-bottom: 2px solid #e91e63;\n  box-shadow: none;\n}\n.indigo-text{\n  text-align: center;\n}\n.container{\n  text-align: center;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <h5 class=\"indigo-text\">Please, login into your account</h5>\n  <div class=\"container\">\n    <div class=\"z-depth-1 grey lighten-4 row\" style=\"display: inline-block; padding: 32px 48px 0px 48px; border: 1px solid #EEE;\">\n      <div class='row'>\n        <div class='input-field col s12'>\n          <i class=\"material-icons prefix\">account_circle</i>\n          <input class='validate' type='text' [(ngModel)]='username' name='username' id='email' />\n          <label for='username'>Username</label>\n        </div>\n        <div class='input-field col s12'>\n          <i class=\"material-icons prefix\">lock</i>\n          <input class='validate' type='password' [(ngModel)]='password' name='password' id='password' />\n          <label for='password'>Enter your password</label>\n        </div>\n<p class=\"error\"> {{ error }} </p>\n        <div class='row'>\n          <button (click)='login()' type='submit' name='btn_login' class='col s12 btn btn-large waves-effect indigo'>Login</button>\n        </div>\n        <a [routerLink]=\"['../signup']\">Create account</a>\n\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_session_service__ = __webpack_require__("../../../../../src/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(session, router) {
        this.session = session;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.session.login(this.username, this.password)
            .subscribe(
        // console.log(`${this.username} is logged`);
        function (user) { return _this.router.navigate(['/home']); }, function (err) { return _this.error = err; }
        // console.log(`${this.username} incorrect user`);;
        );
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_session_service__["a" /* SessionService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/new-food/new-food.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ng-stouched.ng-invalid {\n  border-color: red;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/new-food/new-food.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1> Create New Food</h1>\n\n  <div class=\"card-panel grey lighten-4\">\n\n    <form class=\"col s12\" (ngSubmit)=\"createFood(myForm)\" #myForm=\"ngForm\" novalidate>\n      <div class=\"row\">\n        <div class=\"input-field col s12\">\n          <i class=\"material-icons prefix\">local_dining</i>\n          <input id=\"icon_prefix\" type=\"text\" [(ngModel)]=\"newFood.foodName\" name=\"foodName\" #myFoodName=\"ngModel\" class=\"validate\" minlength=\"3\" required>\n          <label for=\"foodName\">Food Name</label>\n        </div>\n        <div *ngIf=\"myFoodName.errors && (myFoodName.dirty || myFoodName.touched)\">\n          <p class=\"error\" [hidden]=\"!myFoodName.errors.required\">\n            Please enter a Food Name\n          </p>\n        </div>\n      </div>\n\n      <!-- <div class=\"row\">\n        <div class=\"input-field col s12\">\n          <i class=\"material-icons prefix\">featured_play_list</i>\n          <inpuACt id=\"category\" type=\"text\" [(ngModel)]=\"newFood.foodCategory\"\n          name=\"foodCategory\" #myFoodCategory=\"ngModel\" class=\"validate\" required>\n\n      </div>\n      <div *ngIf=\"myFoodCategory.errors && (myFoodCategory.dirty || myFoodCategory.touched)\">\n        <p class=\"error\" [hidden]=\"!myFoodCategory.errors.required\">\n       Please enter a Food Category\n     </p>\n      </div>\n    </div> -->\n\n      <div class=\"row\">\n        <div class=\"input-field col s12\">\n          <i class=\"material-icons prefix\">featured_play_list</i>\n          <select id=\"category\" type=\"text\" [(ngModel)]=\"newFood.foodCategory\" name=\"foodCategory\" #myFoodCategory=\"ngModel\" class=\"validate\" required>\n          <option value=\"\" disabled selected>Choose your Food Category</option>\n          <option value=\"italiana\">cocina italiana</option>\n          <option value=\"española\">cocina española</option>\n          <option value=\"mexicana\">cocina mexicana</option>\n          <option value=\"boliviana\">cocina boliviana</option>\n          <option value=\"fast-food\">cocina fast-food</option>\n          <option value=\"japonesa\">cocina japonesa</option>\n        </select>\n          <label>Materialize Select</label>\n        </div>\n        <div *ngIf=\"myFoodCategory.errors && (myFoodCategory.dirty || myFoodCategory.touched)\">\n          <p class=\"error\" [hidden]=\"!myFoodCategory.errors.required\">\n            Please enter a Food Category\n          </p>\n        </div>\n      </div>\n\n\n\n      <div class=\"row\">\n        <div class=\"input-field col s12\">\n          <i class=\"material-icons prefix\">filter_list</i>\n          <input id=\"subC\" type=\"text\" [(ngModel)]=\"newFood.foodSubCategory\" name=\"foodSubCategory\" class=\"validate\">\n          <label for=\"foodSubCategory\">Food SubCategory</label>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"input-field col s5\">\n          <i class=\"material-icons prefix\">attach_money</i>\n          <input id=\"foodP\" type=\"number\" [(ngModel)]=\"newFood.price\" #myPrice=\"ngModel\" required name=\"price\" class=\"validate\">\n          <label for=\"price\">Food Price</label>\n        </div>\n\n\n\n        <div class=\"input-field col s5\">\n          <i class=\"material-icons prefix\">star_border</i>\n          <input id=\"foodR\" type=\"number\" [(ngModel)]=\"newFood.rate\" name=\"rate\" #myRate=\"ngModel\" required class=\"validate\">\n          <label for=\"rate\">Rate your food</label>\n        </div>\n        <div *ngIf=\"myRate.errors && (myRate.dirty || myRate.touched)\">\n          <p class=\"error\" [hidden]=\"!myRate.errors.required\">\n            Please enter a Rate\n          </p>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col s6\" *ngIf=\"myPrice.errors && (myPrice.dirty || myPrice.touched)\">\n          <p class=\"error\" [hidden]=\"!myPrice.errors.required\">\n            Please enter a Price\n          </p>\n        </div>\n      </div>\n\n\n      <div class=\"row\">\n        <div class=\"input-field col s12\">\n          <i class=\"material-icons prefix\">restaurant</i>\n          <input id=\"city\" type=\"text\" [(ngModel)]=\"newFood.restaurantName\" name=\"restaurantName\" #myRestaurant=\"ngModel\" required class=\"validate\">\n          <label for=\"restaurantName\">Restaurant Name</label>\n        </div>\n        <div *ngIf=\"myRestaurant.errors && (myRestaurant.dirty || myRestaurant.touched)\">\n          <p class=\"error\" [hidden]=\"!myRestaurant.errors.required\">\n            Please enter the name of the Restaurant\n          </p>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"input-field col s12\">\n          <i class=\"material-icons prefix\"> location_on</i>\n          <input id=\"city\" type=\"text\" [(ngModel)]=\"newFood.restaurantAddress\" name=\"restaurantAddress\" #myRestaurantAddress=\"ngModel\" required class=\"validate\">\n          <label for=\"restaurantAddress\">Restaurant Address</label>\n        </div>\n\n        <div *ngIf=\"myRestaurantAddress.errors && (myRestaurantAddress.dirty || myRestaurantAddress.touched)\">\n          <p class=\"error\" [hidden]=\"!myRestaurantAddress.errors.required\">\n            Please enter the Restaurant Address\n          </p>\n        </div>\n      </div>\n\n\n      <div class=\"row\">\n        <div class=\"input-field col s12\">\n          <i class=\"material-icons prefix\"> room_service</i>\n          <input id=\"city\" type=\"text\" [(ngModel)]=\"newFood.restaurantFoodName\" name=\"restaurantFoodName\" #myRestaurantFoodName=\"ngModel\" required class=\"validate\">\n          <label for=\"restaurantFoodName\">Restaurant Food Name</label>\n        </div>\n        <div *ngIf=\"myRestaurantFoodName.errors && (myRestaurantFoodName.dirty || myRestaurantFoodName.touched)\">\n          <p class=\"error\" [hidden]=\"!myRestaurantFoodName.errors.required\">\n            Please enter the Restaurant Food Name\n          </p>\n        </div>\n      </div>\n\n\n      <div class=\"file-field input-field\">\n        <div class=\"btn\">\n          <span>Food Image</span>\n          <input type=\"file\" name=\"imgAvatar\" ng2FileSelect [uploader]=\"uploader\">\n        </div>\n        <div class=\"file-path-wrapper\">\n          <input name=\"imgAvatar\" class=\"file-path validate\" type=\"text\">\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"input-field col s12\">\n          <i class=\"material-icons prefix\">rate_review</i>\n          <textarea id=\"textarea1\" [(ngModel)]=\"newFood.review\" name=\"review\" class=\"materialize-textarea\"></textarea>\n          <label for=\"review\">Review</label>\n        </div>\n        <button type=\"button\" (click)=\"createFood(food)\" name='btn_submit' class='col s12 btn btn-large waves-effect indigo'>Submit</button>\n      </div>\n\n    </form>\n  </div>\n</div>\n\n<p class=\"error\"> {{ error }} </p>\n"

/***/ }),

/***/ "../../../../../src/app/new-food/new-food.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_food_service__ = __webpack_require__("../../../../../src/services/food.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jquery__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewFoodComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NewFoodComponent = (function () {
    function NewFoodComponent(foodService, router) {
        this.foodService = foodService;
        this.router = router;
        this.BASE_URL = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].BASE_URL + "/api/foods";
        this.uploader = new __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__["FileUploader"]({
            url: "" + this.BASE_URL
        });
        this.newFood = {
            foodName: '',
            foodCategory: '',
            foodSubCategory: '',
            price: '',
            rate: '',
            imgAvatar: '',
            restaurantName: '',
            restaurantAddress: '',
            restaurantFoodName: '',
            review: '',
        };
    }
    NewFoodComponent.prototype.ngOnInit = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_5_jquery___default()('select').material_select();
        __WEBPACK_IMPORTED_MODULE_5_jquery___default()('select').change(function (e) {
            _this.newFood[e.currentTarget.name] = e.currentTarget.value;
        });
    };
    NewFoodComponent.prototype.createFood = function (food) {
        var _this = this;
        console.log(this.newFood);
        this.uploader.onBuildItemForm = function (item, form) {
            form.append('foodName', _this.newFood.foodName);
            form.append('foodCategory', _this.newFood.foodCategory);
            form.append('foodSubCategory', _this.newFood.foodSubCategory);
            // form.append('user id', this.newFood.foodCreator);
            form.append('price', _this.newFood.price);
            form.append('rate', _this.newFood.rate);
            form.append('imgAvatar', _this.newFood.imgAvatar);
            form.append('restaurantName', _this.newFood.restaurantName);
            form.append('restaurantAddress', _this.newFood.restaurantAddress);
            form.append('restaurantFoodName', _this.newFood.restaurantFoodName);
            form.append('review', _this.newFood.review);
        };
        this.uploader.uploadAll();
        this.router.navigate(['/foods']);
    };
    return NewFoodComponent;
}());
NewFoodComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-new-food',
        template: __webpack_require__("../../../../../src/app/new-food/new-food.component.html"),
        styles: [__webpack_require__("../../../../../src/app/new-food/new-food.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_food_service__["a" /* FoodService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_food_service__["a" /* FoodService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object])
], NewFoodComponent);

var _a, _b;
//# sourceMappingURL=new-food.component.js.map

/***/ }),

/***/ "../../../../../src/app/routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__signup_signup_component__ = __webpack_require__("../../../../../src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__homepage_homepage_component__ = __webpack_require__("../../../../../src/app/homepage/homepage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__food_list_food_list_component__ = __webpack_require__("../../../../../src/app/food-list/food-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__userprofile_userprofile_component__ = __webpack_require__("../../../../../src/app/userprofile/userprofile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__new_food_new_food_component__ = __webpack_require__("../../../../../src/app/new-food/new-food.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__food_details_food_details_component__ = __webpack_require__("../../../../../src/app/food-details/food-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_food_activation_service__ = __webpack_require__("../../../../../src/services/food-activation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__food_category_food_category_component__ = __webpack_require__("../../../../../src/app/food-category/food-category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__food_edit_food_edit_component__ = __webpack_require__("../../../../../src/app/food-edit/food-edit.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });










var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__homepage_homepage_component__["a" /* HomepageComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_0__login_login_component__["a" /* LoginComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_1__signup_signup_component__["a" /* SignupComponent */] },
    { path: 'api/foods/category/:foodCategory', component: __WEBPACK_IMPORTED_MODULE_8__food_category_food_category_component__["a" /* FoodCategoryComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_4__userprofile_userprofile_component__["a" /* UserprofileComponent */] },
    { path: 'foods', component: __WEBPACK_IMPORTED_MODULE_3__food_list_food_list_component__["a" /* FoodListComponent */] },
    { path: 'foods/add', component: __WEBPACK_IMPORTED_MODULE_5__new_food_new_food_component__["a" /* NewFoodComponent */] },
    { path: 'foods/:id', component: __WEBPACK_IMPORTED_MODULE_6__food_details_food_details_component__["a" /* FoodDetailsComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_7__services_food_activation_service__["a" /* FoodActivationService */]], },
    { path: 'foods/:id/edit', component: __WEBPACK_IMPORTED_MODULE_9__food_edit_food_edit_component__["a" /* FoodEditComponent */] },
    { path: '**', redirectTo: '' },
    { path: 'foods/searchname', component: __WEBPACK_IMPORTED_MODULE_2__homepage_homepage_component__["a" /* HomepageComponent */] },
];
//# sourceMappingURL=routes.js.map

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cardsignup {\n  background: #e91e63;\n}\n\n.ng-stouched.ng-invalid {\n  border-color: red;\n}\n\n\n\n/* label color */\n /*.input-field label {\n   color: #000;\n }*/\n\n /* label focus color */\n /*.input-field input[type=text]:focus + label {\n   color: #000;\n }*/\n\n\n /* label underline focus color */\n /*.input-field input[type=text]:focus {\n   border-bottom: 1px solid #000;\n   box-shadow: 0 1px 0 0 #000;\n }*/\n\n /* valid color */\n /*.input-field input[type=text].valid {\n   border-bottom: 1px solid #000;\n   box-shadow: 0 1px 0 0 #000;\n }*/\n\n /* invalid color */\n /*.input-field input[type=text].invalid {\n   border-bottom: 1px solid red;\n   box-shadow: 0 1px 0 0 #000;\n }*/\n\n /* icon prefix focus color */\n /*.input-field .prefix.active {\n   color: #000;\n }*/\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <h1> Create Your Profile</h1>\n\n  <div class=\"card-panel  grey lighten-4\">\n    <form class=\"col s12\" (ngSubmit)=\"signup(myForm)\" #myForm=\"ngForm\" novalidate>\n\n      <div class=\"row\">\n        <div class=\"input-field col s12\">\n          <i class=\"material-icons prefix\">account_circle</i>\n          <input id=\"username\" type=\"text\" [(ngModel)]=\"newUser.username\"\n          name=\"username\" #myUsername=\"ngModel\" class=\"validate\" minlength=\"6\" required>\n          <label for=\"username\"> Username</label>\n        </div>\n        <div *ngIf=\"myUsername.errors && (myUsername.dirty || myUsername.touched)\">\n\n          <p class=\"error\" [hidden]=\"!myUsername.errors.required\">\n         Please enter a Name\n       </p>\n          <p class=\"error\" [hidden]=\"!myUsername.errors.minlength\">\n            Name must be at least 6 characters long\n          </p>\n</div>\n\n      </div>\n\n\n\n      <div class=\"row\">\n        <div class=\"input-field col s12\">\n          <i class=\"material-icons prefix\">lock</i>\n          <input id=\"password\" type=\"password\" [(ngModel)]=\"newUser.password\"\n          #myPassword=\"ngModel\" minlength=\"8\" name=\"password\" class=\"validate\" required>\n          <label for=\"password\">Password</label>\n        </div>\n\n        <div *ngIf=\"myPassword.errors && (myPassword.dirty || myPassword.touched)\">\n          <p class=\"error\" [hidden]=\"!myPassword.errors.required\">\n         Please enter a Password\n         <p>\n          <p class=\"error\" [hidden]=\"!myPassword.errors.minlength\">\n            Password must be at least 8 characters long\n          </p>\n</div>\n\n      </div>\n\n\n\n      <div class=\"row\">\n\n\n        <div class=\"input-field col s6\">\n             <i class=\"material-icons prefix\">person</i>\n             <input id=\"icon_prefix\" type=\"text\" [(ngModel)]=\"newUser.name\"\n             #myFirst=\"ngModel\" name=\"name\" class=\"validate\" required>\n             <label for=\"icon_prefix\">First Name</label>\n           </div>\n\n        <div class=\"input-field col s6\">\n          <i class=\"material-icons prefix\">people</i>\n          <input id=\"lastname\" type=\"text\" [(ngModel)]=\"newUser.lastname\"\n          #myLast=\"ngModel\" name=\"lastname\" class=\"validate\" required>\n          <label for=\"lastname\">Last Name</label>\n        </div>\n      </div>\n\n      <div *ngIf=\"myFirst.errors && (myFirst.dirty || myFirst.touched)\">\n        <p class=\"error\" [hidden]=\"!myFirst.errors.required\">\n       Please enter your First Name\n       <p>\n</div>\n\n<div *ngIf=\"myLast.errors && (myLast.dirty || myLast.touched)\">\n  <p class=\"error\" [hidden]=\"!myLast.errors.required\">\n Please enter your Last Name\n <p>\n</div>\n\n\n      <div class=\"row\">\n        <div class=\"input-field col s12\">\n          <i class=\"material-icons prefix\">email</i>\n          <input id=\"email\" type=\"email\" [(ngModel)]=\"newUser.email\"\n          name=\"email\" #myEmail=\"ngModel\" class=\"validate\" required pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\">\n          <label for=\"email\">Email</label>\n        </div>\n      </div>\n\n      <div *ngIf=\"myEmail.errors && (myEmail.dirty || myEmail.touched)\">\n        <p class=\"error\" [hidden]=\"!myEmail.errors.required\">\n       Please enter your E-mail\n       <p>\n        <p class=\"error\" [hidden]=\"!myEmail.errors.pattern\">\n          Email is invalid\n        </p>\n</div>\n\n      <div class=\"row\">\n        <div class=\"input-field col s6\">\n          <i class=\"material-icons prefix\">location_city</i>\n          <input id=\"city\" type=\"text\"[(ngModel)]=\"newUser.city\" name=\"city\" class=\"validate\">\n          <label for=\"city\">City</label>\n        </div>\n\n        <div class=\"input-field col s6\">\n          <i class=\"material-icons prefix\">date_range</i>\n          <input type=\"text\" materialize=\"pickadate\" [(ngModel)]=\"newUser.birthdate\" #stBirthdate=\"ngModel\" name=\"birthdate\" class=\"datepicker\">\n          <label for=\"city\">Birthdate</label>\n        </div>\n      </div>\n\n\n      <!-- <div class=\"row\">\n        <div class=\"input-field col s12\">\n          <i class=\"material-icons prefix\">image</i>\n          <input id=\"avatarImage\" type=\"text\" [(ngModel)]=\"avatarImage\" name=\"avatarImage\" class=\"validate\">\n          <label for=\"avatarImage\">Avatar Image</label>\n        </div>\n      </div> -->\n\n\n      <div class=\"file-field input-field\">\n     <div class=\"btn\">\n       <span>User Image</span>\n       <input type=\"file\" name=\"avatarImage\" ng2FileSelect [uploader]=\"uploader\">\n     </div>\n     <div class=\"file-path-wrapper\">\n       <input name=\"avatarImage\" class=\"file-path validate\" type=\"text\">\n     </div>\n   </div>\n\n      <div class=\"row\">\n        <div class=\"input-field col s12\">\n              <i class=\"material-icons prefix\">description</i>\n            <textarea id=\"textarea1\" [(ngModel)]=\"newUser.description\"\n            #myText=\"ngModel\" name=\"description\" class=\"materialize-textarea\"></textarea>\n            <label for=\"textarea1\">Textarea</label>\n          </div>\n\n            <button type='submit' name='btn_login' class='col s12 btn btn-large waves-effect indigo'>Sign Up</button>\n\n      </div>\n\n\n<p class=\"error center-align\"> {{ error }} </p>\n\n    </form>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_session_service__ = __webpack_require__("../../../../../src/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupComponent = (function () {
    function SignupComponent(session, router) {
        this.session = session;
        this.router = router;
        this.BASE_URL = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].BASE_URL + "/api/auth";
        this.uploader = new __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload__["FileUploader"]({
            url: this.BASE_URL + "/signup"
        });
        this.newUser = {
            username: '',
            password: '',
            name: '',
            avatarImage: '',
            lastname: '',
            email: '',
            city: '',
            description: '',
            birthdate: new Date()
        };
        this.start = '';
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.signup = function () {
        var _this = this;
        console.log(this.newUser);
        this.uploader.onBuildItemForm = function (item, form) {
            form.append('username', _this.newUser.username);
            form.append('password', _this.newUser.password);
            form.append('name', _this.newUser.name);
            form.append('avatarImage', _this.newUser.avatarImage);
            form.append('lastname', _this.newUser.lastname);
            form.append('email', _this.newUser.email);
            form.append('city', _this.newUser.city);
            form.append('description', _this.newUser.description);
            form.append('birthdate', _this.newUser.birthdate);
        };
        this.uploader.uploadAll();
        this.router.navigate(["/home"]);
    };
    SignupComponent.prototype.logout = function () {
        var _this = this;
        this.session.logout()
            .subscribe(function (user) { return console.log(user + " has logged out"); }, function (err) { return _this.error = err; });
    };
    return SignupComponent;
}());
SignupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-signup',
        template: __webpack_require__("../../../../../src/app/signup/signup.component.html"),
        styles: [__webpack_require__("../../../../../src/app/signup/signup.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_session_service__["a" /* SessionService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], SignupComponent);

var _a, _b;
//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ "../../../../../src/app/userprofile/userprofile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.information {\n  margin-left: 50px;\n}\n\nspan.tabul2 { width: 200px; display: inline-block }\n\nspan.tabul1 {width: 100px;float: left;}\n\n.profilepic {\n  margin-top:60px;\n}\n\nh1 {\n  color: red;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/userprofile/userprofile.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\" class=\"container \">\n\n  <div class=\"row \">\n    <div class=\"col s4 l3 profilepic \">\n\n\n          <div class=\"card\">\n            <div class=\"card-image\">\n              <img class=\"img-responsive\" [src]='BASE_URL + user.avatarImage' />\n            </div>\n            <div class=\"card-content\">\n              <p></p>\n            </div>\n\n          </div>\n          <a class=\"waves-effect waves-light btn orange\">Edit</a>\n          <a (click)=\"deleteUser()\"class=\"waves-effect waves-light btn red\">Delete</a>\n  </div>\n  <div class=\"col s4 l6\">\n<h1>{{user.username}}</h1>\n    <hr>\n    <span class=\"tabul1\"><strong>Name:</strong></span><span class=\"tabul2\">{{user.name }}</span>\n    <p>\n    <span class=\"tabul1\"><strong>Last Name:</strong></span><span class=\"tabul2\">{{user.lastname }}</span>\n  </p>\n  <span class=\"tabul1\"><strong>E-mail:</strong></span><span class=\"tabul2\"><a href=\"mailto:{{user.email}}\">{{user.email }}</a></span>\n  <p>\n  <span class=\"tabul1\"><strong>City:</strong></span><span class=\"tabul2\">{{user.city }}</span>\n</p>\n<p>\n  <span class=\"tabul1\"><strong>Birthdate:</strong></span><span class=\"tabul2\">{{user.birthdate }}</span>\n</p>\n<p>\n  <strong>Description:</strong>\n</p>\n<p>\n  {{user.description }}\n</p>\n\n  <form action=\"#\">\n    <div class=\"file-field input-field\">\n      <div class=\"btn\">\n        <span>File</span>\n        <input type=\"file\">\n      </div>\n      <div class=\"file-path-wrapper\">\n        <input class=\"file-path validate\" type=\"text\">\n      </div>\n    </div>\n  </form>\n\n\n</div>\n</div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/userprofile/userprofile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_session_service__ = __webpack_require__("../../../../../src/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserprofileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserprofileComponent = (function () {
    function UserprofileComponent(router, sessionService) {
        this.router = router;
        this.sessionService = sessionService;
        this.BASE_URL = "" + __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].BASE_URL;
    }
    UserprofileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sessionService.isLoggedIn().subscribe(function (user) {
            console.log("Welcome again user " + user.username);
            _this.user = user;
            console.log(_this.user.username);
        });
        // this.user.getPrivateData().subscribe(res => console.log(res));
    };
    UserprofileComponent.prototype.deleteUser = function () {
        var _this = this;
        if (window.confirm('Are you sure?')) {
            this.sessionService.remove(this.user._id)
                .subscribe(function () {
                _this.router.navigate(['']);
            });
        }
    };
    return UserprofileComponent;
}());
UserprofileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-userprofile',
        template: __webpack_require__("../../../../../src/app/userprofile/userprofile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/userprofile/userprofile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_session_service__["a" /* SessionService */]) === "function" && _b || Object])
], UserprofileComponent);

var _a, _b;
//# sourceMappingURL=userprofile.component.js.map

/***/ }),

/***/ "../../../../../src/assets/Piquemacho.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Piquemacho.cf439be006cc8c983356.png";

/***/ }),

/***/ "../../../../../src/assets/cover2.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "cover2.94bd4354787dd2e2ad32.jpg";

/***/ }),

/***/ "../../../../../src/assets/croquetas.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "croquetas.2e645a66c5cd917a6d95.jpg";

/***/ }),

/***/ "../../../../../src/assets/foodlist.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "foodlist.5d99cb98a46bd2bfc065.jpg";

/***/ }),

/***/ "../../../../../src/assets/paella.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "paella.416fab2220e6165f11f4.jpg";

/***/ }),

/***/ "../../../../../src/assets/pizza.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pizza.68ba9d921489b7c7642e.jpg";

/***/ }),

/***/ "../../../../../src/assets/sushi.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "sushi.a07cb9b11563e8c30d1e.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    BASE_URL: "http://localhost:3000",
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../../src/services/food-activation.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__session_service__ = __webpack_require__("../../../../../src/services/session.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoodActivationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FoodActivationService = (function () {
    function FoodActivationService(sessionService) {
        this.sessionService = sessionService;
    }
    FoodActivationService.prototype.canActivate = function (route, state) {
        var acceso = this.sessionService.user ? true : false;
        console.log("Hola soy el activated route y me he pasado por aquí");
        return acceso;
    };
    return FoodActivationService;
}());
FoodActivationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__session_service__["a" /* SessionService */]) === "function" && _a || Object])
], FoodActivationService);

var _a;
//# sourceMappingURL=food-activation.service.js.map

/***/ }),

/***/ "../../../../../src/services/food.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoodService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FoodService = (function () {
    function FoodService(http) {
        this.http = http;
        this.BASE_URL = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].BASE_URL + "/api/foods";
        this.options = { withCredentials: true };
    }
    FoodService.prototype.handleError = function (e) {
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["Observable"].throw(e.json().message);
    };
    FoodService.prototype.getList = function () {
        return this.http.get("" + this.BASE_URL)
            .map(function (res) { return res.json(); });
    };
    FoodService.prototype.getSearch = function () {
        return this.http.get(this.BASE_URL + "/search")
            .map(function (res) { return res.json(); });
    };
    FoodService.prototype.createFood = function (food) {
        return this.http.post("" + this.BASE_URL, food, this.options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    FoodService.prototype.getFoodCategory = function (foodCategory) {
        console.log("FOOD SERVICE", foodCategory);
        return this.http.get(this.BASE_URL + "/category/" + foodCategory)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    FoodService.prototype.getFoodName = function (foodName) {
        return this.http.get(this.BASE_URL + "/searchname/" + foodName)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    FoodService.prototype.get = function (id) {
        return this.http.get(this.BASE_URL + "/" + id)
            .map(function (res) { return res.json(); });
    };
    FoodService.prototype.edit = function (food) {
        return this.http.put(this.BASE_URL + "/" + food.id, food)
            .map(function (res) { return res.json(); });
    };
    FoodService.prototype.remove = function (id) {
        return this.http.delete(this.BASE_URL + "/" + id)
            .map(function (res) { return res.json(); });
    };
    return FoodService;
}());
FoodService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], FoodService);

var _a;
//# sourceMappingURL=food.service.js.map

/***/ }),

/***/ "../../../../../src/services/session.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SessionService = (function () {
    function SessionService(http) {
        var _this = this;
        this.http = http;
        this.startLoginCompleted = false;
        this.BASE_URL = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].BASE_URL + "/api/auth";
        this.options = { withCredentials: true };
        this.isLoggedIn().subscribe(function (user) {
            console.log("Welcome again user " + user.username);
            _this.user = user;
            _this.startLoginCompleted = true;
        }, function (e) { return _this.startLoginCompleted = true; });
    }
    SessionService.prototype.handleError = function (e) {
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["Observable"].throw(e.json().message);
    };
    SessionService.prototype.signup = function (user) {
        return this.http.post(this.BASE_URL + "/signup", user, this.options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    SessionService.prototype.login = function (username, password) {
        var _this = this;
        return this.http.post(this.BASE_URL + "/login", { username: username, password: password }, this.options)
            .map(function (res) {
            _this.user = res.json();
            console.log(_this.user);
            return _this.user;
        })
            .catch(this.handleError);
    };
    SessionService.prototype.logout = function () {
        var _this = this;
        return this.http.get(this.BASE_URL + "/logout", this.options)
            .map(function (res) {
            res.json();
            _this.user = undefined;
        })
            .catch(this.handleError);
    };
    SessionService.prototype.isLoggedIn = function () {
        var _this = this;
        return this.http.get(this.BASE_URL + "/loggedin", this.options)
            .map(function (res) {
            _this.user = res.json();
            return _this.user;
        })
            .catch(this.handleError);
    };
    SessionService.prototype.getPrivateData = function () {
        return this.http.get(this.BASE_URL + "/private", this.options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    SessionService.prototype.remove = function (id) {
        return this.http.delete(this.BASE_URL + "/" + id)
            .map(function (res) { return res.json(); });
    };
    return SessionService;
}());
SessionService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], SessionService);

var _a;
//# sourceMappingURL=session.service.js.map

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map