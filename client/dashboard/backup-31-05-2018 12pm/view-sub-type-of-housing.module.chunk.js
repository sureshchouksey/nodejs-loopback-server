webpackJsonp(["view-sub-type-of-housing.module"],{

/***/ "./src/app/pages/sub-type-of-housing/view-sub-type-of-housing/view-sub-type-of-housing-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewSubTypeOfHousingRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view_sub_type_of_housing_component__ = __webpack_require__("./src/app/pages/sub-type-of-housing/view-sub-type-of-housing/view-sub-type-of-housing.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__view_sub_type_of_housing_component__["a" /* ViewSubTypeOfHousingComponent */],
        data: {
            title: 'View Sub Type of Housing'
        }
    }
];
var ViewSubTypeOfHousingRoutingModule = /** @class */ (function () {
    function ViewSubTypeOfHousingRoutingModule() {
    }
    ViewSubTypeOfHousingRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], ViewSubTypeOfHousingRoutingModule);
    return ViewSubTypeOfHousingRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/sub-type-of-housing/view-sub-type-of-housing/view-sub-type-of-housing.component.html":
/***/ (function(module, exports) {

module.exports = "<p-growl [(value)]=\"msgs\"></p-growl>\r\n<div class=\"confirmPopup\">\r\n    <p-confirmDialog></p-confirmDialog>\r\n</div>\r\n<div class=\"overlay\" *ngIf=\"loading\">\r\n    <i class=\"fa fa-spinner fa-pulse fa-3x fa-fw contCenter\"></i> <span class=\"sr-only\">Loading...</span>\r\n</div>\r\n<div class=\"animated fadeIn\">\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header topGroup\">\r\n                    <button type=\"button\" class=\"backBtn\" [routerLinkActive]=\"['active']\" [routerLink]=\"['/sub-type-of-housing']\">\r\n                        <i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i> Back</button>\r\n                    <!-- <div class=\"btnGroup\">\r\n                        <button type=\"button\" class=\"btn\" (click)=\"activeInactiveClick()\">\r\n                            <i class=\"fa fa-ban fa-lg mt-4\"></i> {{provinceData['status']=='Active'?\"Inactivate Province\":\"Activate Province\"}}</button>\r\n                    </div> -->\r\n                </div>\r\n                <div class=\"detailsContainer productContainer\">\r\n                    <div class=\"card-details\">\r\n                        <div class=\"card-block\">\r\n                            <div class=\"blockTop productBlock\">\r\n                                <div class=\"items\">\r\n                                    <div class=\"gutter-space\">\r\n                                        <div class=\"panelWrapper\">\r\n                                            <div class=\"panelHead\">\r\n                                                <h3>Sub Type of Housing Details</h3>\r\n                                            </div>\r\n                                            <div class=\"panelBody\">\r\n                                                <ul class=\"panelitem panelInfo\">\r\n                                                    <li>\r\n                                                        <p>Sub Type of Housing Name</p>\r\n                                                        <h4>{{subTypeOfHousngData.name || '0'}}</h4>\r\n                                                    </li>\r\n                                                    <li>\r\n                                                        <p>Type of Housing Name</p>\r\n                                                        <h4>{{subTypeOfHousngData.type_of_housing || '-'}}</h4>\r\n                                                    </li>\r\n                                                    <li>\r\n                                                        <p>Sub Type of Housing Status</p>\r\n                                                        <h4>{{subTypeOfHousngData.status || '-'}}</h4>\r\n                                                    </li>\r\n\r\n                                                </ul>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/sub-type-of-housing/view-sub-type-of-housing/view-sub-type-of-housing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewSubTypeOfHousingComponent; });
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







var ViewSubTypeOfHousingComponent = /** @class */ (function () {
    function ViewSubTypeOfHousingComponent(router, bookApi, _cookieService, _lightbox, confirmationService, appLoginApi, loopAuth, route, cityApi, subTypHousngApi) {
        this.router = router;
        this.bookApi = bookApi;
        this._cookieService = _cookieService;
        this._lightbox = _lightbox;
        this.confirmationService = confirmationService;
        this.appLoginApi = appLoginApi;
        this.loopAuth = loopAuth;
        this.route = route;
        this.cityApi = cityApi;
        this.subTypHousngApi = subTypHousngApi;
        this.submited = false;
        this.subTypeOfHousngData = [];
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
    ViewSubTypeOfHousingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        var dataObj = {};
        var uid = this.id;
        var dataArrObj = {
            "id": this.id
        };
        var loginFlagToken = this._cookieService.get(sdkPrefix + 'id');
        this.subTypHousngApi.getSubTypOfHousing(dataArrObj).subscribe(function (data) {
            _this.loading = false;
            if (data.result.length > 0) {
                if (data.result[0].status == 1) {
                    data.result[0].status = 'Active';
                }
                else {
                    data.result[0].status = 'Inactive';
                }
                _this.subTypeOfHousngData = data.result[0];
                _this.projectCount = data.result[0].usedCount;
            }
        }, function (err) {
            _this.loading = false;
        });
    };
    ViewSubTypeOfHousingComponent.prototype.activeInactiveClick = function () {
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
    ViewSubTypeOfHousingComponent.prototype.activeInactiveSubmit = function () {
        var _this = this;
        this.loading = true;
        var dataObj = {};
        if (this.subTypeOfHousngData['status'] == 'Active') {
            dataObj['status'] = 0;
        }
        else {
            dataObj['status'] = 1;
        }
        var provinceObj = {
            city_id: this.id,
            city_name: this.subTypeOfHousngData['city_name'],
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
    ViewSubTypeOfHousingComponent.prototype.open = function (data, index) {
        // override the default config
        this._lightbox.open(data, index, { wrapAround: true, showImageNumberLabel: true });
    };
    ViewSubTypeOfHousingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "viewBook",
            template: __webpack_require__("./src/app/pages/sub-type-of-housing/view-sub-type-of-housing/view-sub-type-of-housing.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["ConfirmationService"]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_2__shared_loopback_sdk__["d" /* BooksApi */], __WEBPACK_IMPORTED_MODULE_5_angular2_cookie_core__["CookieService"], __WEBPACK_IMPORTED_MODULE_4_angular2_lightbox__["Lightbox"], __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["ConfirmationService"], __WEBPACK_IMPORTED_MODULE_2__shared_loopback_sdk__["b" /* App_loginApi */], __WEBPACK_IMPORTED_MODULE_2__shared_loopback_sdk__["k" /* LoopBackAuth */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"], __WEBPACK_IMPORTED_MODULE_2__shared_loopback_sdk__["e" /* CityApi */], __WEBPACK_IMPORTED_MODULE_2__shared_loopback_sdk__["q" /* Sub_type_of_housing_masterApi */]])
    ], ViewSubTypeOfHousingComponent);
    return ViewSubTypeOfHousingComponent;
}());



/***/ }),

/***/ "./src/app/pages/sub-type-of-housing/view-sub-type-of-housing/view-sub-type-of-housing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewSubTypeOfHousingModule", function() { return ViewSubTypeOfHousingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__view_sub_type_of_housing_component__ = __webpack_require__("./src/app/pages/sub-type-of-housing/view-sub-type-of-housing/view-sub-type-of-housing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__view_sub_type_of_housing_routing_module__ = __webpack_require__("./src/app/pages/sub-type-of-housing/view-sub-type-of-housing/view-sub-type-of-housing-routing.module.ts");
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























var ViewSubTypeOfHousingModule = /** @class */ (function () {
    function ViewSubTypeOfHousingModule() {
    }
    ViewSubTypeOfHousingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__view_sub_type_of_housing_routing_module__["a" /* ViewSubTypeOfHousingRoutingModule */],
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
                __WEBPACK_IMPORTED_MODULE_4__view_sub_type_of_housing_component__["a" /* ViewSubTypeOfHousingComponent */]
            ]
        })
    ], ViewSubTypeOfHousingModule);
    return ViewSubTypeOfHousingModule;
}());



/***/ })

});
//# sourceMappingURL=view-sub-type-of-housing.module.chunk.js.map