webpackJsonp(["view-province.module"],{

/***/ "./src/app/pages/province/view-province/view-province-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewProvinceRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view_province_component__ = __webpack_require__("./src/app/pages/province/view-province/view-province.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__view_province_component__["a" /* ViewProvinceComponent */],
        data: {
            title: 'View Book'
        }
    }
];
var ViewProvinceRoutingModule = /** @class */ (function () {
    function ViewProvinceRoutingModule() {
    }
    ViewProvinceRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], ViewProvinceRoutingModule);
    return ViewProvinceRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/province/view-province/view-province.component.html":
/***/ (function(module, exports) {

module.exports = "<p-growl [(value)]=\"msgs\"></p-growl>\r\n<div class=\"confirmPopup\">\r\n    <p-confirmDialog></p-confirmDialog>\r\n</div>\r\n<div class=\"overlay\" *ngIf=\"loading\">\r\n    <i class=\"fa fa-spinner fa-pulse fa-3x fa-fw contCenter\"></i> <span class=\"sr-only\">Loading...</span>\r\n</div>\r\n<div class=\"animated fadeIn\">\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header topGroup\">\r\n                    <button type=\"button\" class=\"backBtn\" [routerLinkActive]=\"['active']\" [routerLink]=\"['/province']\">\r\n                        <i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i> Back</button>\r\n                    <!-- <div class=\"btnGroup\">\r\n                        <button type=\"button\" class=\"btn\" (click)=\"activeInactiveClick()\">\r\n                            <i class=\"fa fa-ban fa-lg mt-4\"></i> {{provinceData['status']=='Active'?\"Inactivate Province\":\"Activate Province\"}}</button>\r\n                    </div> -->\r\n                </div>\r\n                <div class=\"detailsContainer productContainer\">\r\n                    <div class=\"card-details\">\r\n                        <div class=\"card-block\">\r\n                            <div class=\"blockTop productBlock\">\r\n                                <div class=\"items\">\r\n                                    <div class=\"gutter-space\">\r\n                                        <div class=\"panelWrapper\">\r\n                                            <div class=\"panelHead\">\r\n                                                <h3>Province Details</h3>\r\n                                            </div>\r\n                                            <div class=\"panelBody\">\r\n                                                <ul class=\"panelitem panelInfo\">\r\n                                                    <li>\r\n                                                        <p>Province Name</p>\r\n                                                        <h4>{{provinceData.city_name || '0'}}</h4>\r\n                                                    </li>\r\n                                                    <li>\r\n                                                        <p>Province Status</p>\r\n                                                        <h4>{{provinceData.status || '-'}}</h4>\r\n                                                    </li>\r\n\r\n                                                </ul>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/province/view-province/view-province.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewProvinceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_loopback_sdk__ = __webpack_require__("./src/shared/loopback-sdk/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__ = __webpack_require__("./node_modules/primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_lightbox__ = __webpack_require__("./node_modules/angular2-lightbox/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_lightbox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_lightbox__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_cookie_core__ = __webpack_require__("./node_modules/angular2-cookie/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_cookie_core__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ViewProvinceComponent = /** @class */ (function () {
    function ViewProvinceComponent(router, bookApi, _cookieService, _lightbox, confirmationService, appLoginApi, loopAuth, route, cityApi) {
        this.router = router;
        this.bookApi = bookApi;
        this._cookieService = _cookieService;
        this._lightbox = _lightbox;
        this.confirmationService = confirmationService;
        this.appLoginApi = appLoginApi;
        this.loopAuth = loopAuth;
        this.route = route;
        this.cityApi = cityApi;
        this.submited = false;
        this.provinceData = [];
        this.backLink = "";
        this.emptyMessage = "No Result Found";
        this.displayConfirm = false;
        this.msgs = [];
        this.loading = true;
        this.chapterStatus = "";
        this.chapterStatusSearch = "";
        this.paginationVal = false;
        this.perPageLimit = 10;
        this.offset = 0;
        this._albums = [];
        this.chapterData = [];
        this.ifEmpty = false;
        this.projectCount = 0;
        this.id = this.route.snapshot.params['id'];
        this.maxDate = new Date();
    }
    ViewProvinceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        var dataObj = {};
        var uid = this.id;
        var dataArrObj = {
            "city_id": this.id
        };
        var loginFlagToken = this._cookieService.get(sdkPrefix + 'id');
        this.cityApi.getProvince(dataArrObj).subscribe(function (data) {
            _this.loading = false;
            if (data.result.length > 0) {
                if (data.result[0].status == 1) {
                    data.result[0].status = 'Active';
                }
                else {
                    data.result[0].status = 'Inactive';
                }
                _this.provinceData = data.result[0];
                _this.projectCount = data.result[0].usedCount;
            }
        }, function (err) {
            _this.loading = false;
        });
    };
    ViewProvinceComponent.prototype.activeInactiveClick = function () {
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
    ViewProvinceComponent.prototype.activeInactiveSubmit = function () {
        var _this = this;
        this.loading = true;
        var dataObj = {};
        if (this.provinceData['status'] == 'Active') {
            dataObj['status'] = 0;
        }
        else {
            dataObj['status'] = 1;
        }
        var provinceObj = {
            city_id: this.id,
            city_name: this.provinceData['city_name'],
            status: dataObj['status']
        };
        this.msgs.length = 0;
        this.cityApi.getMunicipalityCount({ "city_id": this.id }).subscribe(function (data) {
            console.log("total :", data.result[0].total);
            var totalMunicipality = data.result[0].total;
            if (totalMunicipality > 0 && provinceObj.status) {
                _this.cityApi.upsert(provinceObj).subscribe(function (data) {
                    _this.loading = false;
                    _this.msgs.push({ severity: 'success', summary: 'Success Message', detail: 'Book Status Has Been Changed Successfully.' });
                    setTimeout(function () {
                        window.location.reload();
                    }, 3000);
                }, function (err) {
                    _this.msgs.push({ severity: 'warn', summary: 'Error Message', detail: 'Somthing Went Wrong. Please try again later.' });
                });
            }
            else if (totalMunicipality == 0) {
                _this.loading = false;
                _this.msgs.push({ severity: 'warn', summary: 'Error Message', detail: 'Please assign municipality first to activate.' });
            }
            else if (!provinceObj.status && _this.projectCount > 0) {
                _this.loading = false;
                _this.msgs.push({ severity: 'warn', summary: 'Error Message', detail: 'Projects are already assigned to this province , cannot inactive this province' });
            }
        }, function (err) {
            _this.loading = false;
        });
        // this.bookApi.addEditBooks(dataObj,bookId).subscribe((respData:any)=>{
        // 	this.loading = false;
        // 	this.msgs.push({severity:'success', summary:'Success Message', detail:'Book Status Has Been Changed Successfully.'});
        // 	setTimeout(()=>{
        // 		window.location.reload();
        // 	},3000);
        // },(error)=>{
        // 	//console.log('respData error',error);
        // 	this.msgs.push({severity:'warn', summary:'Error Message', detail:'Somthing Went Wrong. Please try again later.'});
        // });
    };
    ViewProvinceComponent.prototype.open = function (data, index) {
        // override the default config
        this._lightbox.open(data, index, { wrapAround: true, showImageNumberLabel: true });
    };
    ViewProvinceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "viewBook",
            template: __webpack_require__("./src/app/pages/province/view-province/view-province.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["ConfirmationService"]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_2__shared_loopback_sdk__["d" /* BooksApi */], __WEBPACK_IMPORTED_MODULE_5_angular2_cookie_core__["CookieService"], __WEBPACK_IMPORTED_MODULE_4_angular2_lightbox__["Lightbox"], __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["ConfirmationService"], __WEBPACK_IMPORTED_MODULE_2__shared_loopback_sdk__["b" /* App_loginApi */], __WEBPACK_IMPORTED_MODULE_2__shared_loopback_sdk__["k" /* LoopBackAuth */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"], __WEBPACK_IMPORTED_MODULE_2__shared_loopback_sdk__["e" /* CityApi */]])
    ], ViewProvinceComponent);
    return ViewProvinceComponent;
}());



/***/ }),

/***/ "./src/app/pages/province/view-province/view-province.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewProvinceModule", function() { return ViewProvinceModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__view_province_component__ = __webpack_require__("./src/app/pages/province/view-province/view-province.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__view_province_routing_module__ = __webpack_require__("./src/app/pages/province/view-province/view-province-routing.module.ts");
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























var ViewProvinceModule = /** @class */ (function () {
    function ViewProvinceModule() {
    }
    ViewProvinceModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__view_province_routing_module__["a" /* ViewProvinceRoutingModule */],
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
                __WEBPACK_IMPORTED_MODULE_4__view_province_component__["a" /* ViewProvinceComponent */]
            ]
        })
    ], ViewProvinceModule);
    return ViewProvinceModule;
}());



/***/ })

});
//# sourceMappingURL=view-province.module.chunk.js.map