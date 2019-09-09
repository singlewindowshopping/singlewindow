webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "\t<!--style=\"background-image: url('assets/bg-registration-form-2.jpg');\"-->\n  \n    <div class=\"row justify-content-lg-center\">\n                <div class=\"col-lg-8 col-md-8 col-sm-12 col-xs-12 col-12\">\n     <div class=\"card\">\n      <div class=\"card-header\">\n        <h1  class=\"text-center\">ABOUT</h1>\n      </div>\n      <div class=\"card-body\">\n        <p>The best clothing brands ever for men come in a range of price points and styles, voted on by thousands of stylish, dapper, well-dressed men. Men don't often shop, so when they do it's important to have a game plan and an understanding of which men's clothing designers make clothes that will look good on you. From high-end clothing manufacturers like Gucci and Armani to more mainstream brands like Nike and Diesel, there are many choices when shopping for men's clothing. Browse the list below and vote up the best brands to help decide the top 10 and beyond of men's wear. Vote for the trendiest brands here. Don't forget to dress your feet with these monthly socks subscription boxes.\n        When it comes to men's clothing, there are lots of great fashion lines, making excellent looks for guys everywhere. Men's clothing stores produce a wide range of classy, stylish shirts, pants, suits, and accessories for fashion forward men. Trending fashion lines are truly tuned in to what is and is not popular in terms of style, and big clothing line names are often renown for good reason. These popular men's clothing brands offer a range of styles, from dapper to casual, and their designs are sure to make any dude look awesome. \n        What are the best clothing brands for men in the world? What cool clothing brands for guys make you want to go out on a shopping spree? What top men's clothing brands make the best looking clothes? This list of popular clothing brands for men will introduce you to new men's clothing labels for men and the most popular designers for men.  Help decide on the hottest men's clothing brands below. Vote on your favorite men's fashion brands below and add any good mens clothing brands that might have been left off. </p>\n      </div>\n</div>\n </div>\n </div>"

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-about',
            template: __webpack_require__("../../../../../src/app/about/about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.example {\r\n    text-align:center;\r\n    color: white;\r\n    z-index: 10;\r\n  \r\n}\r\n@media screen and (min-width: 601px) {\r\n  div.example {\r\n   font-size: 54px;\r\n  }\r\n}\r\n@media screen and (max-width: 600px) {\r\n  div.example {\r\n    font-size: 24px;\r\n  }\r\n}\r\n.jumbotron {\r\n       background-color: #000000;\r\n       padding: 0rem 0rem 3rem !important;\r\n}\r\nimg{\r\nmax-width:100%;\r\nmax-height:100%;\r\n\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!--<div class=\"container-fluid\">\n       <app-navbar></app-navbar> \n       <div class=\"header\">\n       <div class=\"header-row-2\">\n         <div class=\"logo\">\n            <h1 class=\"header-logo-text\">Single Window Shopping</h1>\n         </div>\n         <br>\n            <div>\n              <div class=\"row justify-content-md-center\">\n                  <div class=\"col-1\" *ngFor=\"let country of countries\">\n                       <a routerLink=\"{{country.routerLink}}\" class=\"nav-link\" routerLinkActive=\"active\">\n                        <div class=\"card\" style=\"background: black;\">\n                             <img src=\"assets/{{country.image}}\" />\n                         </div>\n                      </a>\n                      <br> \n                  </div>\n            </div>\n            </div>\n      </div>\n   </div>\n   <flash-messages></flash-messages>\n   <router-outlet></router-outlet>\n</div>-->\n<!--\nhttps://picresize.com/api?fetch=https://www.picresize.com/images-->\n\n<div class=\"container-fluid\">\n         <app-navbar></app-navbar> \n         <div class=\"jumbotron jumbotron-fluid\">\n                 <div class=\"example\">SINGLE WINDOW SHOPPING</div>\n         <div class=\"row justify-content-lg-center\">\n                <div class=\"col-lg-1 col-md-1 col-sm-3 col-xs-3 col-3\" *ngFor=\"let country of countries\">\n                       <a routerLink=\"{{country.routerLink}}\" class=\"nav-link\" routerLinkActive=\"active\">\n                        <div class=\"card\" style=\"background: black;\">\n                             <img src=\"assets/{{country.image}}\" />\n                         </div>\n                      </a>\n                   </div>\n         </div>    \n        </div>\n         <flash-messages></flash-messages>\n         <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.countries = [
            {
                countryname: "USA",
                image: "usa.jpg",
                target: "_self",
                routerLink: "USA"
            },
            {
                countryname: "India",
                image: "india.jpg",
                target: "_self",
                routerLink: "India"
            },
            {
                countryname: "china",
                image: "china.jpg",
                target: "_self",
                routerLink: "China"
            },
            {
                countryname: "UK",
                image: "uk.jpg",
                target: "_self",
                routerLink: "Uk"
            }
        ];
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__usa_usa_component__ = __webpack_require__("../../../../../src/app/usa/usa.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__india_india_component__ = __webpack_require__("../../../../../src/app/india/india.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__china_china_component__ = __webpack_require__("../../../../../src/app/china/china.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__uk_uk_component__ = __webpack_require__("../../../../../src/app/uk/uk.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_5__usa_usa_component__["a" /* UsaComponent */] },
    {
        path: 'USA',
        component: __WEBPACK_IMPORTED_MODULE_5__usa_usa_component__["a" /* UsaComponent */]
    },
    {
        path: 'India',
        component: __WEBPACK_IMPORTED_MODULE_6__india_india_component__["a" /* IndiaComponent */]
    },
    {
        path: 'China',
        component: __WEBPACK_IMPORTED_MODULE_7__china_china_component__["a" /* ChinaComponent */]
    },
    {
        path: 'Uk',
        component: __WEBPACK_IMPORTED_MODULE_8__uk_uk_component__["a" /* UkComponent */]
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_12__login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'register',
        component: __WEBPACK_IMPORTED_MODULE_11__register_register_component__["a" /* RegisterComponent */]
    },
    {
        path: 'profile',
        component: __WEBPACK_IMPORTED_MODULE_13__profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_18__guards_auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'dashboard',
        component: __WEBPACK_IMPORTED_MODULE_10__dashboard_dashboard_component__["a" /* DashboardComponent */]
    },
    {
        path: 'about',
        component: __WEBPACK_IMPORTED_MODULE_19__about_about_component__["a" /* AboutComponent */]
    },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_5__usa_usa_component__["a" /* UsaComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__usa_usa_component__["a" /* UsaComponent */],
                __WEBPACK_IMPORTED_MODULE_6__india_india_component__["a" /* IndiaComponent */],
                __WEBPACK_IMPORTED_MODULE_7__china_china_component__["a" /* ChinaComponent */],
                __WEBPACK_IMPORTED_MODULE_8__uk_uk_component__["a" /* UkComponent */],
                __WEBPACK_IMPORTED_MODULE_9__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_10__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_11__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_12__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_13__profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_19__about_about_component__["a" /* AboutComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(routes)],
                __WEBPACK_IMPORTED_MODULE_15_angular2_flash_messages__["FlashMessagesModule"].forRoot()
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_16__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_17__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_18__guards_auth_guard__["a" /* AuthGuard */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/china/china.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/china/china.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n   <div class=\"countrydes\">\n           <p class=\"text-center\">CHINA TOP COMPINES<p></div>\n      <div class=\"Top\">\n            <h1 class=\"Title\">TOP 10:</h1>\n      </div>\n      <div class=\"row\">\n       <div class=\"col-3\" *ngFor=\"let ladies of ladiesClothes\" >\n            <div class=\"card\">\n               <div class=\"card-body\">\n                       <a href=\"{{ladies.routerLink}}\" target=\"_blank\"><img src=\"assets/{{ladies.image}}\" /></a>\n               </div>\n            </div>\n            <br> \n         </div>\n      </div>\n   </div>"

/***/ }),

/***/ "../../../../../src/app/china/china.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChinaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChinaComponent = /** @class */ (function () {
    function ChinaComponent() {
        this.ladiesClothes = [
            {
                image: "rsz_emblem-ralph-lauren.jpg",
                target: "_self",
                routerLink: "https://www.w3schools.com"
            },
            {
                image: "nike.jpg",
                target: "_self",
                routerLink: "https://www.nike.com/"
            },
            {
                image: "rsz_tommy.jpg",
                target: "_self"
            },
            {
                image: "rsz_lacoste.jpg",
                target: "_self"
            },
            {
                image: "rsz_boos.jpg",
                target: "_self"
            },
            {
                image: "rsz_levis-strauss-logo.jpg",
                target: "_self"
            },
            {
                image: "A kid threw a lump of cheddar at me",
                target: "_self"
            },
            {
                image: "A kid threw a lump of cheddar at me",
                target: "_self"
            },
            {
                image: "A kid threw a lump of cheddar at me",
                target: "_self"
            },
            {
                image: "A kid threw a lump of cheddar at me",
                target: "_self"
            }
        ];
    }
    ChinaComponent.prototype.ngOnInit = function () {
    };
    ChinaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-china',
            template: __webpack_require__("../../../../../src/app/china/china.component.html"),
            styles: [__webpack_require__("../../../../../src/app/china/china.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ChinaComponent);
    return ChinaComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row justify-content-md-center\">\n<div class=\"table-responsive\">\n<table class=\"table table-bordered\"  style=\"background-color: white;\">\n  <thead class=\"thead-dark\">\n    <tr>\n        <th>Company Name</th>\n        <th>Promo Code</th>\n        \n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let promo of promocodes\">\n       <td>{{promo.companyName}}</td>\n       <td>{{promo.promoCode}}</td>\n      </tr>\n  </tbody>\n</table>\n</div>\n</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(dom) {
        this.promocodes = [
            {
                companyName: "abc",
                promoCode: "test"
            },
            {
                companyName: "abc1",
                promoCode: "vcbcbb"
            }
        ];
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DOCUMENT */])),
        __metadata("design:paramtypes", [Document])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/india/india.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/india/india.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n   <div class=\"countrydes\">\n           <p class=\"text-center\">INDIA TOP COMPINES<p></div>\n      <div class=\"Top\">\n            <h1 class=\"Title\">TOP 10:</h1>\n      </div>\n      <div class=\"row\">\n       <div class=\"col-3\" *ngFor=\"let ladies of ladiesClothes\" >\n            <div class=\"card\">\n               <div class=\"card-body\">\n                       <a href=\"{{ladies.routerLink}}\" target=\"_blank\"><img src=\"assets/{{ladies.image}}\" /></a>\n               </div>\n            </div>\n            <br> \n         </div>\n      </div>\n   </div>"

/***/ }),

/***/ "../../../../../src/app/india/india.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndiaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IndiaComponent = /** @class */ (function () {
    function IndiaComponent() {
        this.ladiesClothes = [
            {
                image: "rsz_emblem-ralph-lauren.jpg",
                target: "_self",
                routerLink: "https://www.w3schools.com"
            },
            {
                image: "nike.jpg",
                target: "_self",
                routerLink: "https://www.nike.com/"
            },
            {
                image: "rsz_tommy.jpg",
                target: "_self"
            },
            {
                image: "rsz_lacoste.jpg",
                target: "_self"
            },
            {
                image: "rsz_boos.jpg",
                target: "_self"
            },
            {
                image: "rsz_levis-strauss-logo.jpg",
                target: "_self"
            },
            {
                image: "A kid threw a lump of cheddar at me",
                target: "_self"
            },
            {
                image: "A kid threw a lump of cheddar at me",
                target: "_self"
            },
            {
                image: "A kid threw a lump of cheddar at me",
                target: "_self"
            },
            {
                image: "A kid threw a lump of cheddar at me",
                target: "_self"
            }
        ];
    }
    IndiaComponent.prototype.ngOnInit = function () {
    };
    IndiaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-india',
            template: __webpack_require__("../../../../../src/app/india/india.component.html"),
            styles: [__webpack_require__("../../../../../src/app/india/india.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], IndiaComponent);
    return IndiaComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input, textarea, select, button {\n    font-family: \"Muli-Regular\";\n    color: #333;\n    font-size: 13px; }\n  \n  p, h1, h2, h3, h4, h5, h6, ul {\n    margin: 0; }\n  \n  img {\n    max-width: 100%; }\n  \n  ul {\n    padding-left: 0;\n    margin-bottom: 0; }\n  \n  a:hover {\n    text-decoration: none; }\n  \n  :focus {\n    outline: none; }\n  \n  .wrapper {\n    /*min-height: 100vh;*/\n    background-size: cover;\n    background-repeat: no-repeat;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n  \n  .inner {\n    min-width: 850px;\n    margin: auto;\n    padding-top: 34px;\n    padding-bottom: 48px;\n    background: url(\"/assets/registration-form-2.jpg\"); \n    background-repeat: no-repeat;\n  \n    \n    }\n  \n  .inner h3 {\n      text-transform: uppercase;\n      font-size: 22px;\n      font-family: \"Muli-Bold\";\n      text-align: center;\n      margin-bottom: 32px;\n      color: #333;\n      letter-spacing: 2px; }\n  \n  form {\n    width: 50%;\n    padding-left: 45px; }\n  \n  .form-group {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n  \n  .form-group .form-wrapper {\n      width: 50%; }\n  \n  .form-group .form-wrapper:first-child {\n        margin-right: 20px; }\n  \n  .form-wrapper {\n    margin-bottom: 17px; }\n  \n  .form-wrapper label {\n      margin-bottom: 9px;\n      display: block; }\n  \n  .form-control {\n    border: 1px solid #ccc;\n    display: block;\n    width: 100%;\n    height: 40px;\n    padding: 0 20px;\n    border-radius: 20px;\n    font-family: \"Muli-Bold\";\n    background: none; }\n  \n  .form-control:focus {\n      border: 1px solid #ae3c33; }\n  \n  select {\n    -moz-appearance: none;\n    -webkit-appearance: none;\n    cursor: pointer;\n    padding-left: 20px; }\n  \n  select option[value=\"\"][disabled] {\n      display: none; }\n  \n  button {\n    border: none;\n    width: 152px;\n    height: 40px;\n    margin: auto;\n    margin-top: 29px;\n    cursor: pointer;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    padding: 0;\n    background: #ae3c33;\n    font-size: 13px;\n    color: #fff;\n    text-transform: uppercase;\n    font-family: \"Muli-SemiBold\";\n    border-radius: 20px;\n    overflow: hidden;\n    -webkit-transform: perspective(1px) translateZ(0);\n    transform: perspective(1px) translateZ(0);\n    -webkit-box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n            box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n    position: relative;\n    -webkit-transition-property: color;\n    transition-property: color;\n    -webkit-transition-duration: 0.5s;\n    transition-duration: 0.5s; }\n  \n  button:before {\n      content: \"\";\n      position: absolute;\n      z-index: -1;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      background: #f11a09;\n      -webkit-transform: scaleX(0);\n      transform: scaleX(0);\n      -webkit-transform-origin: 0 50%;\n      transform-origin: 0 50%;\n      -webkit-transition-property: transform;\n      -webkit-transition-property: -webkit-transform;\n      transition-property: -webkit-transform;\n      transition-property: transform;\n      transition-property: transform, -webkit-transform;\n      -webkit-transition-duration: 0.5s;\n      transition-duration: 0.5s;\n      -webkit-transition-timing-function: ease-out;\n      transition-timing-function: ease-out; }\n  \n  button:hover:before {\n      -webkit-transform: scaleX(1);\n      transform: scaleX(1);\n      -webkit-transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);\n      transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66); }\n  \n  .checkbox {\n    position: relative; }\n  \n  .checkbox label {\n      padding-left: 22px;\n      cursor: pointer; }\n  \n  .checkbox input {\n      position: absolute;\n      opacity: 0;\n      cursor: pointer; }\n  \n  .checkbox input:checked ~ .checkmark:after {\n      display: block; }\n  \n  .checkmark {\n    position: absolute;\n    top: 50%;\n    left: 0;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    height: 12px;\n    width: 13px;\n    border-radius: 2px;\n    background-color: #ebebeb;\n    border: 1px solid #ccc;\n    font-family: Material-Design-Iconic-Font;\n    color: #000;\n    font-size: 10px;\n    font-weight: bolder; }\n  \n  .checkmark:after {\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      -webkit-transform: translate(-50%, -50%);\n              transform: translate(-50%, -50%);\n      display: none;\n      content: '\\F26B'; }\n  \n  @media (max-width: 991px) {\n    .inner {\n      min-width: 768px; } }\n  \n  @media (max-width: 767px) {\n    .inner {\n      min-width: auto;\n      /*background: none;*/\n      padding-top: 0;\n      padding-bottom: 0; }\n  \n    form {\n      width: 100%;\n      padding-right: 15px;\n      padding-left: 15px; } }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "\t<!--style=\"background-image: url('assets/bg-registration-form-2.jpg');\"-->\n  <div class=\"wrapper\" >\n\t\t\t<div class=\"inner\">\n\t\t\t\t<form (submit)=\"onLoginSubmit()\">\n\t\t\t\t\t<h3>Login Form</h3>\n\t\t\t\t\t\t <div class=\"form-wrapper\">\n                <label for=\"name\">Name</label>\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Enter Username\" [(ngModel)]=\"username\" name=\"username\">\n              </div>\n\t\t\t\t\t\t<div class=\"form-wrapper\">\n\t\t\t\t\t\t\t<label for=\"username\">Username</label>\n\t\t\t                <input type=\"password\" class=\"form-control\" placeholder=\" Enter Password\" [(ngModel)]=\"password\" name=\"password\">\n\t\t\t\t\t\t</div>\n            <div class=\"checkbox\">\n             <label>\n               <input type=\"checkbox\" value=\"remember-me\"> Remember me\n             </label>\n           </div>\n\t\t\t\t    <button type=\"submit\">Login</button>\n\t\t\t\t</form>\n      </div>\n      </div>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.show('You are now logged in', { cssClass: 'alert-success', timeout: 5000 });
                _this.router.navigate(['dashboard']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
                _this.router.navigate(['login']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bg-dark {\r\n    background-color: #000000!important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark\">\n      <a class=\"navbar-brand\" [routerLink]=\"['/USA']\"><img src=\"assets/1567611853170153.png\" style=\"height: 53px;\" /></a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n\n      <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\n      <ul class=\"navbar-nav mr-auto\">\n          <!-- <li class=\"nav-item\"  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n            <a class=\"nav-link\" [routerLink]=\"['/about']\">About</a>\n          </li> -->\n          <li class=\"nav-item\"  *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n            <a class=\"nav-link\" [routerLink]=\"['/dashboard']\">PromoCode</a>\n          </li>\n\n        </ul>\n        <ul class=\"navbar-nav ml-auto\">\n          <li class=\"nav-item\"  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n            <a class=\"nav-link\" [routerLink]=\"['/about']\">About</a>\n          </li>\n         \n          <li class=\"nav-item\" *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n            <a class=\"nav-link\" [routerLink]=\"['/profile']\">Profile</a>\n          </li>\n          <li class=\"nav-item\" *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n            <a class=\"nav-link\" [routerLink]=\"['/login']\">Login</a>\n          </li>\n          <li class=\"nav-item\" *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n            <a class=\"nav-link\" [routerLink]=\"['/register']\">Register</a>\n          </li>\n          <li class=\"nav-item\" *ngIf=\"authService.loggedIn()\"><a class=\"nav-link\" (click)=\"onLogoutClick()\" href=\"#\">Logout</a>\n          </li>\n        </ul>\n      </div>\n    </nav>\n"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('You are logged out', {
            cssClass: 'alert-success', timeout: 3000
        });
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input, textarea, select, button {\n    font-family: \"Muli-Regular\";\n    color: #333;\n    font-size: 13px; }\n  \n  p, h1, h2, h3, h4, h5, h6, ul {\n    margin: 0; }\n  \n  img {\n    max-width: 100%; }\n  \n  ul {\n    padding-left: 0;\n    margin-bottom: 0; }\n  \n  a:hover {\n    text-decoration: none; }\n  \n  :focus {\n    outline: none; }\n  \n  .wrapper {\n    /*min-height: 100vh;*/\n    background-size: cover;\n    background-repeat: no-repeat;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n  \n  .inner {\n    min-width: 850px;\n    margin: auto;\n    padding-top: 34px;\n    padding-bottom: 48px;\n    background: url(\"/assets/registration-form-2.jpg\"); \n    background-repeat: no-repeat;\n  \n    \n    }\n  \n  .inner h3 {\n      text-transform: uppercase;\n      font-size: 22px;\n      font-family: \"Muli-Bold\";\n      text-align: center;\n      margin-bottom: 32px;\n      color: #333;\n      letter-spacing: 2px; }\n  \n  form {\n    width: 50%;\n    padding-left: 45px; }\n  \n  .form-group {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n  \n  .form-group .form-wrapper {\n      width: 50%; }\n  \n  .form-group .form-wrapper:first-child {\n        margin-right: 20px; }\n  \n  .form-wrapper {\n    margin-bottom: 17px; }\n  \n  .form-wrapper label {\n      margin-bottom: 9px;\n      display: block; }\n  \n  .form-control {\n    border: 1px solid #ccc;\n    display: block;\n    width: 100%;\n    height: 40px;\n    padding: 0 20px;\n    border-radius: 20px;\n    font-family: \"Muli-Bold\";\n    background: none; }\n  \n  .form-control:focus {\n      border: 1px solid #ae3c33; }\n  \n  select {\n    -moz-appearance: none;\n    -webkit-appearance: none;\n    cursor: pointer;\n    padding-left: 20px; }\n  \n  select option[value=\"\"][disabled] {\n      display: none; }\n  \n  button {\n    border: none;\n    width: 152px;\n    height: 40px;\n    margin: auto;\n    margin-top: 29px;\n    cursor: pointer;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    padding: 0;\n    background: #ae3c33;\n    font-size: 13px;\n    color: #fff;\n    text-transform: uppercase;\n    font-family: \"Muli-SemiBold\";\n    border-radius: 20px;\n    overflow: hidden;\n    -webkit-transform: perspective(1px) translateZ(0);\n    transform: perspective(1px) translateZ(0);\n    -webkit-box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n            box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n    position: relative;\n    -webkit-transition-property: color;\n    transition-property: color;\n    -webkit-transition-duration: 0.5s;\n    transition-duration: 0.5s; }\n  \n  button:before {\n      content: \"\";\n      position: absolute;\n      z-index: -1;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      background: #f11a09;\n      -webkit-transform: scaleX(0);\n      transform: scaleX(0);\n      -webkit-transform-origin: 0 50%;\n      transform-origin: 0 50%;\n      -webkit-transition-property: transform;\n      -webkit-transition-property: -webkit-transform;\n      transition-property: -webkit-transform;\n      transition-property: transform;\n      transition-property: transform, -webkit-transform;\n      -webkit-transition-duration: 0.5s;\n      transition-duration: 0.5s;\n      -webkit-transition-timing-function: ease-out;\n      transition-timing-function: ease-out; }\n  \n  button:hover:before {\n      -webkit-transform: scaleX(1);\n      transform: scaleX(1);\n      -webkit-transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);\n      transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66); }\n  \n  .checkbox {\n    position: relative; }\n  \n  .checkbox label {\n      padding-left: 22px;\n      cursor: pointer; }\n  \n  .checkbox input {\n      position: absolute;\n      opacity: 0;\n      cursor: pointer; }\n  \n  .checkbox input:checked ~ .checkmark:after {\n      display: block; }\n  \n  .checkmark {\n    position: absolute;\n    top: 50%;\n    left: 0;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    height: 12px;\n    width: 13px;\n    border-radius: 2px;\n    background-color: #ebebeb;\n    border: 1px solid #ccc;\n    font-family: Material-Design-Iconic-Font;\n    color: #000;\n    font-size: 10px;\n    font-weight: bolder; }\n  \n  .checkmark:after {\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      -webkit-transform: translate(-50%, -50%);\n              transform: translate(-50%, -50%);\n      display: none;\n      content: '\\F26B'; }\n  \n  @media (max-width: 991px) {\n    .inner {\n      min-width: 768px; } }\n  \n  @media (max-width: 767px) {\n    .inner {\n      min-width: auto;\n      /*background: none;*/\n      padding-top: 0;\n      padding-bottom: 0; }\n  \n    form {\n      width: 100%;\n      padding-right: 15px;\n      padding-left: 15px; } }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "\t<!--style=\"background-image: url('assets/bg-registration-form-2.jpg');\"-->\n  <div class=\"wrapper\" >\n\t\t\t<div class=\"inner\">\n\t\t\t\t<div>\n\t\t\t\t\t<h3>Profile</h3>\n\t\t\t\t\t\t <div class=\"form-wrapper\">\n                <label for=\"name\">Name :{{user.name}}</label>\n              </div>\n              <div class=\"form-wrapper\">\n                <label for=\"username\">Username : {{user.username}}</label>\n              </div>\n            \t<div class=\"form-wrapper\">\n\t\t\t\t\t\t\t<label for=\"username\">Email : {{user.email}}</label>\n\t\t\t       </div>\n           \t</div>\n      </div>\n      </div>"

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input, textarea, select, button {\n    font-family: \"Muli-Regular\";\n    color: #333;\n    font-size: 13px; }\n  \n  p, h1, h2, h3, h4, h5, h6, ul {\n    margin: 0; }\n  \n  img {\n    max-width: 100%; }\n  \n  ul {\n    padding-left: 0;\n    margin-bottom: 0; }\n  \n  a:hover {\n    text-decoration: none; }\n  \n  :focus {\n    outline: none; }\n  \n  .wrapper {\n    /*min-height: 100vh;*/\n    background-size: cover;\n    background-repeat: no-repeat;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n  \n  .inner {\n    min-width: 850px;\n    margin: auto;\n    padding-top: 34px;\n    padding-bottom: 48px;\n    background: url(\"/assets/registration-form-2.jpg\"); \n    background-repeat: no-repeat;\n  \n    \n    }\n  \n  .inner h3 {\n      text-transform: uppercase;\n      font-size: 22px;\n      font-family: \"Muli-Bold\";\n      text-align: center;\n      margin-bottom: 32px;\n      color: #333;\n      letter-spacing: 2px; }\n  \n  form {\n    width: 50%;\n    padding-left: 45px; }\n  \n  .form-group {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n  \n  .form-group .form-wrapper {\n      width: 50%; }\n  \n  .form-group .form-wrapper:first-child {\n        margin-right: 20px; }\n  \n  .form-wrapper {\n    margin-bottom: 17px; }\n  \n  .form-wrapper label {\n      margin-bottom: 9px;\n      display: block; }\n  \n  .form-control {\n    border: 1px solid #ccc;\n    display: block;\n    width: 100%;\n    height: 40px;\n    padding: 0 20px;\n    border-radius: 20px;\n    font-family: \"Muli-Bold\";\n    background: none; }\n  \n  .form-control:focus {\n      border: 1px solid #ae3c33; }\n  \n  select {\n    -moz-appearance: none;\n    -webkit-appearance: none;\n    cursor: pointer;\n    padding-left: 20px; }\n  \n  select option[value=\"\"][disabled] {\n      display: none; }\n  \n  button {\n    border: none;\n    width: 152px;\n    height: 40px;\n    margin: auto;\n    margin-top: 29px;\n    cursor: pointer;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    padding: 0;\n    background: #ae3c33;\n    font-size: 13px;\n    color: #fff;\n    text-transform: uppercase;\n    font-family: \"Muli-SemiBold\";\n    border-radius: 20px;\n    overflow: hidden;\n    -webkit-transform: perspective(1px) translateZ(0);\n    transform: perspective(1px) translateZ(0);\n    -webkit-box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n            box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n    position: relative;\n    -webkit-transition-property: color;\n    transition-property: color;\n    -webkit-transition-duration: 0.5s;\n    transition-duration: 0.5s; }\n  \n  button:before {\n      content: \"\";\n      position: absolute;\n      z-index: -1;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      background: #f11a09;\n      -webkit-transform: scaleX(0);\n      transform: scaleX(0);\n      -webkit-transform-origin: 0 50%;\n      transform-origin: 0 50%;\n      -webkit-transition-property: transform;\n      -webkit-transition-property: -webkit-transform;\n      transition-property: -webkit-transform;\n      transition-property: transform;\n      transition-property: transform, -webkit-transform;\n      -webkit-transition-duration: 0.5s;\n      transition-duration: 0.5s;\n      -webkit-transition-timing-function: ease-out;\n      transition-timing-function: ease-out; }\n  \n  button:hover:before {\n      -webkit-transform: scaleX(1);\n      transform: scaleX(1);\n      -webkit-transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);\n      transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66); }\n  \n  .checkbox {\n    position: relative; }\n  \n  .checkbox label {\n      padding-left: 22px;\n      cursor: pointer; }\n  \n  .checkbox input {\n      position: absolute;\n      opacity: 0;\n      cursor: pointer; }\n  \n  .checkbox input:checked ~ .checkmark:after {\n      display: block; }\n  \n  .checkmark {\n    position: absolute;\n    top: 50%;\n    left: 0;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    height: 12px;\n    width: 13px;\n    border-radius: 2px;\n    background-color: #ebebeb;\n    border: 1px solid #ccc;\n    font-family: Material-Design-Iconic-Font;\n    color: #000;\n    font-size: 10px;\n    font-weight: bolder; }\n  \n  .checkmark:after {\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      -webkit-transform: translate(-50%, -50%);\n              transform: translate(-50%, -50%);\n      display: none;\n      content: '\\F26B'; }\n  \n  @media (max-width: 991px) {\n    .inner {\n      min-width: 768px; } }\n  \n  @media (max-width: 767px) {\n    .inner {\n      min-width: auto;\n      /*background: none;*/\n      padding-top: 0;\n      padding-bottom: 0; }\n  \n    form {\n      width: 100%;\n      padding-right: 15px;\n      padding-left: 15px; } }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "\t<!--style=\"background-image: url('assets/bg-registration-form-2.jpg');\"-->\n  <div class=\"wrapper\" >\n\t\t\t<div class=\"inner\">\n\t\t\t\t<form (submit)=\"onRegisterSubmit()\">\n\t\t\t\t\t<h3>Registration Form</h3>\n\t\t\t\t\t\t <div class=\"form-wrapper\">\n                <label for=\"name\">Name</label>\n                <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\" id=\"name\" placeholder=\"Enter Name\">\n              </div>\n\t\t\t\t\t\t<div class=\"form-wrapper\">\n\t\t\t\t\t\t\t<label for=\"username\">Username</label>\n\t\t\t\t\t     <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\" id=\"username\" placeholder=\"Enter Username\">\n\t\t\t\t\t\t</div>\n            <div class=\"form-wrapper\">\n              <label for=\"email\">Email</label>\n            <input type=\"email\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" id=\"email\" aria-describedby=\"emailHelp\" placeholder=\"Enter Email\">\n              <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n            </div>\n            <div class=\"form-wrapper\">\n              <label for=\"password\">Password</label>\n              <input type=\"password\"  [(ngModel)]=\"password\" name=\"password\"  class=\"form-control\" id=\"password\" placeholder=\"Enter Password\">\n            </div>\n            <div class=\"checkbox\">\n              <label>\n                <input type=\"checkbox\"> I caccept the Terms of Use & Privacy Policy.\n                <span class=\"checkmark\"></span>\n              </label>\n            </div>\n\t\t\t\t    <button type=\"submit\">Register Now</button>\n\t\t\t\t</form>\n      </div>\n      </div>"

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(validateService, authService, router, flashMessage) {
        this.validateService = validateService;
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password
        };
        // Required Fields
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Validate Email
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show('Please use a valid email', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Register user
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('You are now registered and can now login', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    //devDBServer:'http://localhost:3000'
    function AuthService(http) {
        this.http = http;
        // this.isDev = true;  // Change to false before deployment
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('users/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "../../../../../src/app/uk/uk.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/uk/uk.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n   <div class=\"countrydes\">\n           <p class=\"text-center\">UK TOP COMPINES<p></div>\n      <div class=\"Top\">\n            <h1 class=\"Title\">TOP 10:</h1>\n      </div>\n      <div class=\"row\">\n       <div class=\"col-3\" *ngFor=\"let ladies of ladiesClothes\" >\n            <div class=\"card\">\n               <div class=\"card-body\">\n                       <a href=\"{{ladies.routerLink}}\" target=\"_blank\"><img src=\"assets/{{ladies.image}}\" /></a>\n               </div>\n            </div>\n            <br> \n         </div>\n      </div>\n   </div>"

/***/ }),

/***/ "../../../../../src/app/uk/uk.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UkComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UkComponent = /** @class */ (function () {
    function UkComponent() {
        this.ladiesClothes = [
            {
                image: "rsz_emblem-ralph-lauren.jpg",
                target: "_self",
                routerLink: "https://www.w3schools.com"
            },
            {
                image: "nike.jpg",
                target: "_self",
                routerLink: "https://www.nike.com/"
            },
            {
                image: "rsz_tommy.jpg",
                target: "_self"
            },
            {
                image: "rsz_lacoste.jpg",
                target: "_self"
            },
            {
                image: "rsz_boos.jpg",
                target: "_self"
            },
            {
                image: "rsz_levis-strauss-logo.jpg",
                target: "_self"
            },
            {
                image: "A kid threw a lump of cheddar at me",
                target: "_self"
            },
            {
                image: "A kid threw a lump of cheddar at me",
                target: "_self"
            },
            {
                image: "A kid threw a lump of cheddar at me",
                target: "_self"
            },
            {
                image: "A kid threw a lump of cheddar at me",
                target: "_self"
            }
        ];
    }
    UkComponent.prototype.ngOnInit = function () {
    };
    UkComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-uk',
            template: __webpack_require__("../../../../../src/app/uk/uk.component.html"),
            styles: [__webpack_require__("../../../../../src/app/uk/uk.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UkComponent);
    return UkComponent;
}());



/***/ }),

/***/ "../../../../../src/app/usa/usa.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/usa/usa.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n   <div class=\"countrydes\">\n           <p class=\"text-center\">USA TOP COMPINES<p></div>\n      <div class=\"Top\">\n            <h1 class=\"Title\">TOP 10:</h1>\n      </div>\n      <div class=\"row\">\n       <div class=\"col-3\" *ngFor=\"let ladies of ladiesClothes\" >\n            <div class=\"card\">\n               <div class=\"card-body\">\n                       <a href=\"{{ladies.routerLink}}\" target=\"_blank\"><img src=\"assets/{{ladies.image}}\" /></a>\n               </div>\n            </div>\n            <br> \n         </div>\n      </div>\n   </div>"

/***/ }),

/***/ "../../../../../src/app/usa/usa.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UsaComponent = /** @class */ (function () {
    function UsaComponent() {
        this.ladiesClothes = [
            {
                image: "rsz_emblem-ralph-lauren.jpg",
                target: "_self",
                routerLink: "https://www.w3schools.com"
            },
            {
                image: "nike.jpg",
                target: "_self",
                routerLink: "https://www.nike.com/"
            },
            {
                image: "rsz_tommy.jpg",
                target: "_self"
            },
            {
                image: "rsz_lacoste.jpg",
                target: "_self"
            },
            {
                image: "rsz_boos.jpg",
                target: "_self"
            },
            {
                image: "rsz_levis-strauss-logo.jpg",
                target: "_self"
            },
            {
                image: "A kid threw a lump of cheddar at me",
                target: "_self"
            },
            {
                image: "A kid threw a lump of cheddar at me",
                target: "_self"
            },
            {
                image: "A kid threw a lump of cheddar at me",
                target: "_self"
            },
            {
                image: "A kid threw a lump of cheddar at me",
                target: "_self"
            }
        ];
    }
    UsaComponent.prototype.ngOnInit = function () {
    };
    UsaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-usa',
            template: __webpack_require__("../../../../../src/app/usa/usa.component.html"),
            styles: [__webpack_require__("../../../../../src/app/usa/usa.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UsaComponent);
    return UsaComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map