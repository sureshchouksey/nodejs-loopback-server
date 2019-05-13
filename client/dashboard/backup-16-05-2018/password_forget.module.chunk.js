webpackJsonp(["password_forget.module"],{

/***/ "./src/app/pages/password-forget/password_forget-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordForgetRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__password_forget_component__ = __webpack_require__("./src/app/pages/password-forget/password_forget.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__password_forget_component__["a" /* PasswordForgetComponent */],
        data: {
            title: 'Password Forget?'
        }
    }
];
var PasswordForgetRoutingModule = /** @class */ (function () {
    function PasswordForgetRoutingModule() {
    }
    PasswordForgetRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], PasswordForgetRoutingModule);
    return PasswordForgetRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/password-forget/password_forget.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app logincontainer flex-row align-items-center\">\r\n  <div class=\"container\">\r\n    <div class=\"row justify-content-center\">\r\n      <div class=\"col-md-5\">\r\n        <div class=\"card-group mb-0\">\r\n          <div class=\"card p-4\">\r\n            <div class=\"card-block\" [ngBusy]=\"{busy: busy, message: 'Logging...', backdrop: true, minDuration: 600}\">\r\n              <img src=\"assets/img/logo-login.png\">\r\n              <p class=\"text-muted\">Reset Password By Email Id</p>\r\n              <p-messages [value]=\"msgs\"></p-messages>\r\n              <div class=\"input-group mb-3\">\r\n                <span class=\"input-group-addon\"><i class=\"icon-user\"></i></span>\r\n                <input type=\"text\" [(ngModel)]=\"username\" #uname=\"ngModel\" class=\"form-control\" required minlength=\"10\" placeholder=\"Enter Email Id\">\r\n                <!-- <div class=\"error-place\">\r\n                  <div *ngIf=\"uname.errors && (uname.dirty || uname.touched || submitted)\" class=\"error\">\r\n                      <span *ngIf=\"uname.errors.required\">required</span>\r\n                  </div>\r\n                </div> -->\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-12 login\">\r\n                  <button type=\"button\" (click)=\"resetClick()\" class=\"btn btn-primary px-4\">Submit</button>\r\n                </div>\r\n                <div class=\"col-12 mt-2\">\r\n                  <button type=\"button\"  [routerLink]=\"['/login']\" class=\"btn btn-link px-0\"><a href=\"javascript:void(0)\">Sign In</a></button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"passPopUp\">\r\n  <div class=\"dargPop\">\r\n    <p-dialog [modal]=\"true\" (onHide)=\"redirectLogin()\" [(visible)]=\"display\" *ngIf=\"success\">\r\n      <p>{{result}}</p>\r\n    </p-dialog>\r\n    <p-dialog header=\"Error\" [modal]=\"true\" [(visible)]=\"display\" *ngIf=\"!success\">\r\n      <p>{{result}}</p>\r\n    </p-dialog>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/password-forget/password_forget.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordForgetComponent; });
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




var PasswordForgetComponent = /** @class */ (function () {
    //myTestVar:any="Deep";
    function PasswordForgetComponent(router, appLoginApi, userApi, _cookieService) {
        this.router = router;
        this.appLoginApi = appLoginApi;
        this.userApi = userApi;
        this._cookieService = _cookieService;
        this.msgs = [];
        this.display = false;
        var loginFlagToken = this._cookieService.get('$LoopBackSDK$id');
        console.log('loginFlagToken', loginFlagToken);
        if (loginFlagToken) {
            this.router.navigate(["/dashboard"]);
        }
    }
    PasswordForgetComponent.prototype.ngOnInit = function () {
        console.log('ngOnInit');
        var loginFlagToken = this._cookieService.get('$LoopBackSDK$id');
        if (loginFlagToken) {
            this.router.navigate(["/dashboard"]);
        }
    };
    PasswordForgetComponent.prototype.resetClick = function () {
        var _this = this;
        var self = this;
        var validFlag = true;
        //console.log(this.userEmMoN);
        if (this.userEmMoN.valid && self.username.trim() != '') {
            var regX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!regX.test(self.username)) {
                validFlag = false;
            }
            var credsObj = { email: self.username, role: "Admin" };
            this.busy = this.appLoginApi.userResetOrForgotPassActionCheckReq(credsObj).subscribe(function (resSD) {
                if (resSD['status']) {
                    // $.alert({
                    //   title: 'Success!',
                    //   content: resSD['message'],
                    // });
                    _this.display = true;
                    _this.success = true;
                    _this.result = resSD['message'];
                }
                else {
                    // $.alert({
                    //   title: 'Error!',
                    //   content: resSD['message'],
                    // });
                    _this.display = true;
                    _this.success = false;
                    _this.result = resSD['message'];
                }
            }, function (error) {
                console.log('resSD error', error);
                // $.alert({
                //   title: 'Error!',
                //   content: 'Something Went Wrong. Please try again Later.',
                // });
                _this.display = true;
                _this.success = false;
                _this.result = 'Something went wrong. Please try again later.';
            });
        }
        else {
            // $.alert({
            //   title: 'Error!',
            //   content: 'Plase Enter Valid Email / Mobile',
            // });
            this.display = true;
            this.success = false;
            this.result = 'Please enter valid email/mobile.';
        }
    };
    PasswordForgetComponent.prototype.redirectLogin = function () {
        this.router.navigate(["/login"]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('uname'),
        __metadata("design:type", Object)
    ], PasswordForgetComponent.prototype, "userEmMoN", void 0);
    PasswordForgetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("./src/app/pages/password-forget/password_forget.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_2__shared_loopback_sdk__["a" /* App_loginApi */], __WEBPACK_IMPORTED_MODULE_2__shared_loopback_sdk__["j" /* UserApi */], __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_core__["CookieService"]])
    ], PasswordForgetComponent);
    return PasswordForgetComponent;
}());



/***/ }),

/***/ "./src/app/pages/password-forget/password_forget.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordForgetModule", function() { return PasswordForgetModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__password_forget_component__ = __webpack_require__("./src/app/pages/password-forget/password_forget.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__password_forget_routing_module__ = __webpack_require__("./src/app/pages/password-forget/password_forget-routing.module.ts");
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









var PasswordForgetModule = /** @class */ (function () {
    function PasswordForgetModule() {
    }
    PasswordForgetModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["MessagesModule"],
                __WEBPACK_IMPORTED_MODULE_5__password_forget_routing_module__["a" /* PasswordForgetRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_7_angular2_busy__["BusyModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["DialogModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__password_forget_component__["a" /* PasswordForgetComponent */]
            ]
        })
    ], PasswordForgetModule);
    return PasswordForgetModule;
}());



/***/ })

});
//# sourceMappingURL=password_forget.module.chunk.js.map