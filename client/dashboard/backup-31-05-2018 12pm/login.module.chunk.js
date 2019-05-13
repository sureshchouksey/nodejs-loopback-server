webpackJsonp(["login.module"],{

/***/ "./src/app/pages/login/login-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_component__ = __webpack_require__("./src/app/pages/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__login_component__["a" /* LoginComponent */],
        data: {
            title: 'Login'
        }
    }
];
var LoginRoutingModule = /** @class */ (function () {
    function LoginRoutingModule() {
    }
    LoginRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], LoginRoutingModule);
    return LoginRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app logincontainer flex-row align-items-center\">\r\n  <div class=\"container\">\r\n    <div class=\"row justify-content-center\">\r\n      <div class=\"col-md-5\">\r\n        <div class=\"card-group mb-0\">\r\n          <div class=\"card p-4\">\r\n            <div class=\"card-block\" [ngBusy]=\"{busy: busy, message: 'Logging...', backdrop: true, minDuration: 600}\">\r\n             <img src=\"assets/img/logo-login.png\">\r\n              <p class=\"text-muted\">Sign In to your account</p>\r\n              <!-- <p-messages [value]=\"msgs\"></p-messages> -->\r\n              <div class=\"input-group mb-2\">\r\n                <span class=\"input-group-addon\"><i class=\"icon-user\"></i></span>\r\n                <input type=\"text\" [(ngModel)]=\"username\" #uname=\"ngModel\"  class=\"form-control\" placeholder=\"Username\">\r\n              </div>\r\n              <div class=\"input-group mb-4\">\r\n                <span class=\"input-group-addon\"><i class=\"icon-lock\"></i></span>\r\n                <input type=\"password\" (keydown)=\"handleEnter($event)\" [(ngModel)]=\"password\" #pass=\"ngModel\"  class=\"form-control\" placeholder=\"Password\">\r\n              </div>\r\n              <br />\r\n              <div class=\"row\">\r\n                <div class=\"col-12 login\">\r\n                  <button type=\"button\" (click)=\"loginClick()\" class=\"btn btn-primary px-4\">Log in</button>\r\n                </div>\r\n                <div class=\"col-12 mt-2\">\r\n                    <button [hidden]=\"false\" type=\"button\" [routerLink]=\"['/password-forget']\" class=\"btn btn-link px-0  text-left\"><a href=\"javascript:void(0)\">Forgot password?</a></button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!--<div class=\"card card-inverse card-primary py-5 d-md-down-none\" style=\"width:44%\">\r\n            <div class=\"card-block text-center\">\r\n              <div>\r\n                <h2>Sign up</h2>\r\n                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>\r\n                <button type=\"button\" class=\"btn btn-primary active mt-3\">Register Now!</button>\r\n              </div>\r\n            </div>\r\n          </div>-->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"passPopUp\">\r\n  <div class=\"dargPop\">\r\n    <p-dialog header=\"Error\" [modal]=\"true\" [(visible)]=\"display\" *ngIf=\"msgs != 'success'\">\r\n      <p>{{msgs}}</p>\r\n    </p-dialog>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_loopback_sdk__ = __webpack_require__("./src/shared/loopback-sdk/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_core__ = __webpack_require__("./node_modules/angular2-cookie/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_cookie_core__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




"";
var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, userApi, _cookieService, login, loopAuth) {
        this.router = router;
        this.userApi = userApi;
        this._cookieService = _cookieService;
        this.login = login;
        this.loopAuth = loopAuth;
        this.userDetails = {};
        var loginFlagToken = this._cookieService.get(sdkPrefix + 'id');
        console.log('loginFlagToken', loginFlagToken);
        if (loginFlagToken) {
            this.router.navigate(["/dashboard"]);
        }
    }
    LoginComponent.prototype.ngOnInit = function () {
        console.log('ngOnInit');
        var loginFlagToken = this._cookieService.get(sdkPrefix + 'id');
        if (loginFlagToken) {
            this.router.navigate(["/dashboard"]);
        }
    };
    LoginComponent.prototype.handleEnter = function (event) {
        if (event.keyCode == 13) {
            this.loginClick();
        }
    };
    LoginComponent.prototype.loginClick = function () {
        var _this = this;
        this.router.navigate(['/dashboard', {}]);
        this.hide();
        var creds = {};
        if (this.validateEmail(this.username)) {
            creds = { email: this.username, password: this.password };
        }
        else {
            creds = { username: this.username, password: this.password };
        }
        this.busy = this.userApi.login(creds).subscribe(function (userRes) {
            if (userRes) {
                _this.login.getUserDetails(creds).subscribe(function (userRes2) {
                    _this.userDetails = _this.loopAuth.getCurrentUserData();
                    _this.userDetails.userDet = userRes2.user;
                    _this.loopAuth.setUser(_this.userDetails);
                    _this.router.navigate(['/dashboard', {}]);
                }, function (userErr) {
                    console.log('UserError', userErr);
                    _this.password = null;
                    _this.display = true;
                    _this.msgs = 'Invalid Login.';
                });
            }
        }, function (userErr) {
            console.log('UserError', userErr);
            _this.password = null;
            _this.display = true;
            _this.msgs = 'Invalid Login.';
        });
    };
    // show() {
    // 	this.msgs.push({severity:'info', summary:'Invalid Login.', detail:''});
    // }
    LoginComponent.prototype.hide = function () {
        this.msgs = [];
    };
    LoginComponent.prototype.validateEmail = function (email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("./src/app/pages/login/login.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_2__shared_loopback_sdk__["s" /* UserApi */], __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_core__["CookieService"], __WEBPACK_IMPORTED_MODULE_2__shared_loopback_sdk__["b" /* App_loginApi */], __WEBPACK_IMPORTED_MODULE_2__shared_loopback_sdk__["k" /* LoopBackAuth */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/login.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_component__ = __webpack_require__("./src/app/pages/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_routing_module__ = __webpack_require__("./src/app/pages/login/login-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__ = __webpack_require__("./node_modules/primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_busy__ = __webpack_require__("./node_modules/angular2-busy/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_busy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_busy__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["MessagesModule"],
                __WEBPACK_IMPORTED_MODULE_5__login_routing_module__["a" /* LoginRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_7_angular2_busy__["BusyModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["DialogModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__login_component__["a" /* LoginComponent */]
            ]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ })

});
//# sourceMappingURL=login.module.chunk.js.map