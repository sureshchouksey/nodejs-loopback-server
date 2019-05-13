webpackJsonp(["view-page.module"],{

/***/ "./src/app/pages/pages/view-page/view-Page.component.html":
/***/ (function(module, exports) {

module.exports = "<p-growl [(value)]=\"msgs\"></p-growl>\r\n<div class=\"confirmPopup\">\r\n    <p-confirmDialog></p-confirmDialog>\r\n</div>\r\n<div class=\"overlay\" *ngIf=\"loading\">\r\n    <i class=\"fa fa-spinner fa-pulse fa-3x fa-fw contCenter\"></i> <span class=\"sr-only\">Loading...</span>\r\n</div>\r\n<div class=\"animated fadeIn\">\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header topGroup\">\r\n                    <button type=\"button\" class=\"backBtn\" [routerLinkActive]=\"['active']\" [routerLink]=\"['/books/view-chapter/', pageData.chapter_id]\">\r\n                        <i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i> Back</button>\r\n                    <div class=\"btnGroup\">\r\n                        <button type=\"button\" class=\"btn\" (click)=\"activeInactiveClick()\">\r\n                            <i class=\"fa fa-ban fa-lg mt-4\"></i> {{pageData['status']=='Active'?\"Inactivate Page\":\"Activate Page\"}}</button>\r\n                    </div>\r\n                </div>\r\n                <div class=\"detailsContainer productContainer\">\r\n                    <div class=\"card-details\">\r\n                        <div class=\"card-block\">\r\n                            <div class=\"blockTop productBlock\">\r\n                                <div class=\"items\">\r\n                                    <div class=\"gutter-space\">\r\n                                        <div class=\"panelWrapper\">\r\n                                            <div class=\"panelHead\">\r\n                                                <h3>Page Details</h3>\r\n                                            </div>\r\n                                            <div class=\"panelBody\">\r\n                                                <ul class=\"panelitem panelInfo\">\r\n                                                    <li>\r\n                                                        <p>Page Heading</p>\r\n                                                        <h4>{{pageData.page_heading || '0'}}</h4>\r\n                                                    </li>\r\n                                                    <li>\r\n                                                        <p>Page Status</p>\r\n                                                        <h4>{{pageData.status || '-'}}</h4>\r\n                                                    </li>\r\n                                                    <li>\r\n                                                        <p>Created Date</p>\r\n                                                        <h4>{{pageData.created_at || '-'}}</h4>\r\n                                                    </li>\r\n                                                    <li>\r\n                                                        <p>Priority</p>\r\n                                                        <h4>{{pageData.priority || '-'}}</h4>\r\n                                                    </li>\r\n                                                    <li>\r\n                                                        <p>Description</p>\r\n                                                        <h4 [innerHTML]=\"pageData.content\"></h4>\r\n                                                    </li>\r\n                                                </ul>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/pages/view-page/view-page-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewPageRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view_page_component__ = __webpack_require__("./src/app/pages/pages/view-page/view-page.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__view_page_component__["a" /* ViewPageComponent */],
        data: {
            title: 'View Book'
        }
    }
];
var ViewPageRoutingModule = /** @class */ (function () {
    function ViewPageRoutingModule() {
    }
    ViewPageRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], ViewPageRoutingModule);
    return ViewPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/pages/view-page/view-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_loopback_sdk__ = __webpack_require__("./src/shared/loopback-sdk/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__("./node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__ = __webpack_require__("./node_modules/primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_lightbox__ = __webpack_require__("./node_modules/angular2-lightbox/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_lightbox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_lightbox__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_cookie_core__ = __webpack_require__("./node_modules/angular2-cookie/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_cookie_core__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




 //for date manupalation



var ViewPageComponent = /** @class */ (function () {
    function ViewPageComponent(router, pageApi, _cookieService, _lightbox, confirmationService, appLoginApi, loopAuth, route) {
        this.router = router;
        this.pageApi = pageApi;
        this._cookieService = _cookieService;
        this._lightbox = _lightbox;
        this.confirmationService = confirmationService;
        this.appLoginApi = appLoginApi;
        this.loopAuth = loopAuth;
        this.route = route;
        this.submited = false;
        this.pageData = [];
        this.backLink = "";
        this.emptyMessage = "No Result Found";
        this.displayConfirm = false;
        this.msgs = [];
        this.pageStatus = "";
        this.loading = true;
        this.chapterStatus = "";
        this.chapterStatusSearch = "";
        this.paginationVal = false;
        this.perPageLimit = 10;
        this.offset = 0;
        this._albums = [];
        this.chapterData = [];
        this.ifEmpty = false;
        this.id = this.route.snapshot.params['id'];
    }
    ViewPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        var dataObj = {};
        var uid = this.id;
        var dataArrObj = {
            "id": this.id
        };
        var loginFlagToken = this._cookieService.get(sdkPrefix + 'id');
        this.pageApi.getPages(dataArrObj).subscribe(function (data) {
            _this.loading = false;
            if (data.result.length > 0) {
                var result_1 = data.result[0];
                var dataDesc = result_1.content;
                _this.replaceImageUrl(dataDesc).then(function (resultData) {
                    if (result_1.status == 1) {
                        result_1.status = 'Active';
                    }
                    else {
                        result_1.status = 'Inactive';
                    }
                    if (result_1.content) {
                        result_1.content = resultData;
                    }
                    if (result_1.created_at) {
                        result_1.created_at = __WEBPACK_IMPORTED_MODULE_3_moment__(result_1.created_at).format("DD - MMM - YYYY");
                    }
                    _this.pageData = result_1;
                });
            }
        }, function (err) {
            _this.loading = false;
        }, function () {
        });
    };
    ViewPageComponent.prototype.activeInactiveClick = function () {
        var _this = this;
        this.confirmationService.confirm({
            message: 'Are you sure that you want to proceed?',
            header: 'Confirmation',
            icon: 'fa fa-question-circle',
            accept: function () {
                // this.msgs = [{severity:'info', summary:'Confirmed', detail:'You have accepted'}];
                _this.activeInactiveSubmit();
            },
            reject: function () {
                // this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
            }
        });
    };
    ViewPageComponent.prototype.activeInactiveSubmit = function () {
        var _this = this;
        var dataObj = {};
        this.loading = true;
        if (this.pageData['status'] == 'Active') {
            dataObj['status'] = 0;
        }
        else {
            dataObj['status'] = 1;
        }
        var pageId = this.id;
        this.msgs.length = 0;
        this.pageApi.addEditPages(dataObj, pageId).subscribe(function (respData) {
            _this.loading = false;
            _this.msgs.push({ severity: 'success', summary: 'Success Message', detail: 'Book Status Has Been Changed Successfully.' });
            setTimeout(function () {
                window.location.reload();
            }, 3000);
        }, function (error) {
            //console.log('respData error',error);
            _this.msgs.push({ severity: 'warn', summary: 'Error Message', detail: 'Somthing Went Wrong. Please try again later.' });
        });
    };
    ViewPageComponent.prototype.replaceImageUrl = function (content) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var parser = new DOMParser();
            var loginFlagToken = _this._cookieService.get(sdkPrefix + 'id');
            var content1 = parser.parseFromString(content, "text/html");
            if (content1.images.length > 0) {
                for (var i = 0; i < content1.images.length; i++) {
                    var tempImageSrc = "";
                    var imageSrc = "";
                    tempImageSrc = content1.images[i].src;
                    imageSrc = content1.images[i].src + '?access_token=' + loginFlagToken;
                    content = content.replace(tempImageSrc, imageSrc);
                }
                resolve(content);
            }
            else {
                resolve(content);
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fullName'),
        __metadata("design:type", Object)
    ], ViewPageComponent.prototype, "fullName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('userNameMobile'),
        __metadata("design:type", Object)
    ], ViewPageComponent.prototype, "userNameMobile", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('eMail'),
        __metadata("design:type", Object)
    ], ViewPageComponent.prototype, "eMail", void 0);
    ViewPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "View Page",
            template: __webpack_require__("./src/app/pages/pages/view-page/view-Page.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["ConfirmationService"]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_2__shared_loopback_sdk__["d" /* BooksApi */], __WEBPACK_IMPORTED_MODULE_6_angular2_cookie_core__["CookieService"], __WEBPACK_IMPORTED_MODULE_5_angular2_lightbox__["Lightbox"], __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["ConfirmationService"], __WEBPACK_IMPORTED_MODULE_2__shared_loopback_sdk__["b" /* App_loginApi */], __WEBPACK_IMPORTED_MODULE_2__shared_loopback_sdk__["g" /* LoopBackAuth */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]])
    ], ViewPageComponent);
    return ViewPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/pages/view-page/view-page.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewPageModule", function() { return ViewPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__view_page_component__ = __webpack_require__("./src/app/pages/pages/view-page/view-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__view_page_routing_module__ = __webpack_require__("./src/app/pages/pages/view-page/view-page-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__ = __webpack_require__("./node_modules/primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_busy__ = __webpack_require__("./node_modules/angular2-busy/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_busy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_busy__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_lightbox__ = __webpack_require__("./node_modules/angular2-lightbox/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_lightbox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angular2_lightbox__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var ViewPageModule = /** @class */ (function () {
    function ViewPageModule() {
    }
    ViewPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__view_page_routing_module__["a" /* ViewPageRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["DialogModule"],
                __WEBPACK_IMPORTED_MODULE_7_angular2_busy__["BusyModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["FieldsetModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["ButtonModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["DropdownModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["AutoCompleteModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["InputTextModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["DataListModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["ConfirmDialogModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["GrowlModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["MessagesModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["SplitButtonModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["TabViewModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["SelectButtonModule"],
                __WEBPACK_IMPORTED_MODULE_8_angular2_lightbox__["LightboxModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["CalendarModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["PaginatorModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__view_page_component__["a" /* ViewPageComponent */]
            ]
        })
    ], ViewPageModule);
    return ViewPageModule;
}());



/***/ })

});
//# sourceMappingURL=view-page.module.chunk.js.map