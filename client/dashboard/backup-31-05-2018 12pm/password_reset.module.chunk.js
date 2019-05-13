webpackJsonp(["password_reset.module"],{

/***/ "./src/app/pages/password-reset/password_reset-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordResetRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__password_reset_component__ = __webpack_require__("./src/app/pages/password-reset/password_reset.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__password_reset_component__["a" /* PasswordResetComponent */],
        data: {
            title: 'Password Reset'
        }
    }
];
var PasswordResetRoutingModule = /** @class */ (function () {
    function PasswordResetRoutingModule() {
    }
    PasswordResetRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], PasswordResetRoutingModule);
    return PasswordResetRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/password-reset/password_reset.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app logincontainer flex-row align-items-center\">\r\n  <div class=\"container\">\r\n    <div class=\"row justify-content-center\">\r\n      <div class=\"col-md-5\">\r\n        <div class=\"card-group mb-0\">\r\n          <div class=\"card p-4\">\r\n            <div class=\"card-block\" [ngBusy]=\"{busy: busy, message: 'Logging...', backdrop: true, minDuration: 600}\" *ngIf=\"ifValid\">\r\n\t\t\t        <img src=\"assets/img/logo-login.png\">\r\n              <p class=\"text-muted\">Reset Password</p>\r\n              <!-- <p-messages [value]=\"msgs\"></p-messages> -->\r\n              <div class=\"input-group mb-2\">\r\n                <span class=\"input-group-addon\"><i class=\"icon-lock\"></i></span>\r\n                <input type=\"password\" [(ngModel)]=\"passwordNew\" #password=\"ngModel\" class=\"form-control\" minlength=\"6\" required placeholder=\"Enter Password\">\r\n              </div>\r\n              <div class=\"input-group mb-4\">\r\n                <span class=\"input-group-addon\"><i class=\"icon-lock\"></i></span>\r\n                <input type=\"password\" [(ngModel)]=\"cpasswordNew\" #cpassword=\"ngModel\" class=\"form-control\" minlength=\"6\" required placeholder=\"Confirm Password\">\r\n              </div>\r\n              <br />\r\n              <div class=\"row\">\r\n                <div class=\"col-12 login\">\r\n                  <button type=\"button\" (click)=\"setPassword()\" class=\"btn btn-primary px-4\">Set Password</button>\r\n                </div>\r\n                <div class=\"col-12 mt-2\">\r\n                  <button type=\"button\"  [routerLink]=\"['/login']\" class=\"btn btn-link px-0\"><a href=\"javascript:void(0)\">Sign In</a></button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"card-block\" [ngBusy]=\"{busy: busy, message: 'Logging...', backdrop: true, minDuration: 600}\" *ngIf=\"!ifValid\">\r\n              <p class=\"text-muted\">{{errorMsg}}</p>\r\n            </div>\r\n\t\t      </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"passPopUp\">\r\n  <div class=\"dargPop\">\r\n    <p-dialog [modal]=\"true\" (onHide)=\"redirectLogin()\" [(visible)]=\"display\" *ngIf=\"result == 'success'\">\r\n      <h6>Password updated successfully!</h6>\r\n    </p-dialog>\r\n    <p-dialog header=\"Error\" [modal]=\"true\" [(visible)]=\"display\" *ngIf=\"result != 'success'\">\r\n      <p>{{result}}</p>\r\n    </p-dialog>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/password-reset/password_reset.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordResetComponent; });
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




var PasswordResetComponent = /** @class */ (function () {
    function PasswordResetComponent(route, router, appLoginApi, userApi, _cookieService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.appLoginApi = appLoginApi;
        this.userApi = userApi;
        this._cookieService = _cookieService;
        this.display = false;
        this.msgs = [];
        this.errorMsg = "Loading....";
        var loginFlagToken = this._cookieService.get('$LoopBackSDK$id');
        this.token = this.route.snapshot.params["token"];
        if (loginFlagToken) {
            this.router.navigate(["/dashboard"]);
        }
        // check if the token is valid
        var obj = {
            "token": this.token
        };
        this.appLoginApi.userResetOrForgotPassVerify(obj).subscribe(function (data) {
            if (data && data.length > 0) {
                _this.ifValid = true;
                _this.uid = data[0]['uId'];
            }
            else {
                _this.ifValid = false;
                _this.errorMsg = "This url has expired, please try resetting your password again!";
            }
        }, function (err) {
        }, function () {
        });
    }
    PasswordResetComponent.prototype.ngOnInit = function () {
        console.log('ngOnInit');
        var loginFlagToken = this._cookieService.get('$LoopBackSDK$id');
        if (loginFlagToken) {
            this.router.navigate(["/dashboard"]);
        }
    };
    PasswordResetComponent.prototype.setPassword = function () {
        var _this = this;
        if (this.passwordNew && this.password.valid) {
            if (this.passwordNew == this.cpasswordNew && this.passwordNew != "") {
                var obj = {
                    "password": this.passwordNew,
                    "id": this.uid,
                    "token": this.token
                };
                this.appLoginApi.userResetOrForgotPassChange(obj).subscribe(function (data) {
                    if (data && data.length > 0) {
                        // $.alert({
                        // 	title: 'Status!',
                        // 	content: 'Password updated successfully!',
                        // });
                        _this.display = true;
                        _this.result = "success";
                    }
                    else {
                        // $.alert({
                        // 	title: 'Error!',
                        // 	content: 'Something went wrong!',
                        // });
                        _this.display = true;
                        _this.result = "Something went wrong";
                    }
                }, function (err) {
                }, function () {
                });
            }
            else {
                // $.alert({
                // 	title: 'Error!',
                // 	content: 'Password and confirm password does not match!',
                // });
                this.display = true;
                this.result = "Password and confirm password does not match";
            }
        }
        else {
            // $.alert({
            // 	title: 'Error!',
            // 	content: 'Please Enter Minimum 6 Character Password!',
            // });
            this.display = true;
            this.result = "Please enter minimum 6 character password";
        }
    };
    PasswordResetComponent.prototype.redirectLogin = function () {
        this.router.navigate(["/login"]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('password'),
        __metadata("design:type", Object)
    ], PasswordResetComponent.prototype, "password", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('cpassword'),
        __metadata("design:type", Object)
    ], PasswordResetComponent.prototype, "cpassword", void 0);
    PasswordResetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("./src/app/pages/password-reset/password_reset.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"], __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_2__shared_loopback_sdk__["b" /* App_loginApi */], __WEBPACK_IMPORTED_MODULE_2__shared_loopback_sdk__["c" /* App_usersApi */], __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_core__["CookieService"]])
    ], PasswordResetComponent);
    return PasswordResetComponent;
}());



/***/ }),

/***/ "./src/app/pages/password-reset/password_reset.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordResetModule", function() { return PasswordResetModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__password_reset_component__ = __webpack_require__("./src/app/pages/password-reset/password_reset.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__password_reset_routing_module__ = __webpack_require__("./src/app/pages/password-reset/password_reset-routing.module.ts");
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









var PasswordResetModule = /** @class */ (function () {
    function PasswordResetModule() {
    }
    PasswordResetModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["MessagesModule"],
                __WEBPACK_IMPORTED_MODULE_5__password_reset_routing_module__["a" /* PasswordResetRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_7_angular2_busy__["BusyModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["DialogModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__password_reset_component__["a" /* PasswordResetComponent */]
            ]
        })
    ], PasswordResetModule);
    return PasswordResetModule;
}());



/***/ })

});
//# sourceMappingURL=password_reset.module.chunk.js.map