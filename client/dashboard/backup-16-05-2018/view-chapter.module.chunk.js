webpackJsonp(["view-chapter.module"],{

/***/ "./src/app/pages/chapters/view-chapter/view-chapter-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewBookRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view_chapter_component__ = __webpack_require__("./src/app/pages/chapters/view-chapter/view-chapter.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__view_chapter_component__["a" /* ViewChapterComponent */],
        data: {
            title: 'View Chapter'
        }
    }
];
var ViewBookRoutingModule = /** @class */ (function () {
    function ViewBookRoutingModule() {
    }
    ViewBookRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], ViewBookRoutingModule);
    return ViewBookRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/chapters/view-chapter/view-chapter.component.html":
/***/ (function(module, exports) {

module.exports = "<p-growl [(value)]=\"msgs\"></p-growl>\r\n<div class=\"confirmPopup\">\r\n    <p-confirmDialog></p-confirmDialog>\r\n</div>\r\n<div class=\"animated fadeIn\" [ngBusy]=\"{busy: busy,backdrop: true, minDuration: 600}\">\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header topGroup\">\r\n                    <button type=\"button\" class=\"backBtn\" [routerLink]=\"['/books/view-book',chapterData.book_id]\">\r\n                        <i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i> Back</button>\r\n                    <div class=\"btnGroup\">\r\n                        <button type=\"button\" class=\"btn\" (click)=\"activeInactiveClick()\">\r\n                            <i class=\"fa fa-ban fa-lg mt-4\"></i> {{chapterData['status']=='Active'?\"Inactivate Chapter\":\"Activate Chapter\"}}</button>\r\n                    </div>\r\n                </div>\r\n                <div class=\"detailsContainer productContainer\">\r\n                    <div class=\"card-details\">\r\n                        <div class=\"card-block\">\r\n                            <div class=\"blockTop productBlock\">\r\n                                <div class=\"items\">\r\n                                    <div class=\"gutter-space\">\r\n                                        <div class=\"panelWrapper\">\r\n                                            <div class=\"panelHead\">\r\n                                                <h3>Chapter Details</h3>\r\n                                            </div>\r\n                                            <div class=\"panelBody\">\r\n                                                <ul class=\"panelitem panelInfo\">\r\n                                                    <li>\r\n                                                        <p>Chapter Name</p>\r\n                                                        <h4>{{chapterData.name || '0'}}</h4>\r\n                                                    </li>\r\n                                                    <li>\r\n                                                        <p>Chapter Status</p>\r\n                                                        <h4>{{chapterData.status || '-'}}</h4>\r\n                                                    </li>\r\n                                                    <li>\r\n                                                        <p>Created Date</p>\r\n                                                        <h4>{{chapterData.created_at || '-'}}</h4>\r\n                                                    </li>\r\n                                                    <li>\r\n                                                        <p>Priority</p>\r\n                                                        <h4>{{chapterData.priority || '-'}}</h4>\r\n                                                    </li>\r\n                                                </ul>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"animated fadeIn\" [ngBusy]=\"{busy: busy,backdrop: true, minDuration: 600}\">\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n            <div class=\"card\">\r\n                <div class=\"addUser\">\r\n                    <button type=\"button\" [routerLink]=\"['/books/add-page', id]\" class=\"btn btnUser\">Add Page</button>\r\n                </div>\r\n                <div class=\"card-header\">\r\n                    Search Pages\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                        <div class=\"card-Wrapper\">\r\n                            <div class=\"card-block\">\r\n                                <div class=\"primaryDetails\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-4\">\r\n                                            <div class=\"form-group\">\r\n                                                <label>Page Heading</label>\r\n                                                <input class=\"form-control\" [(ngModel)]=\"pageHeading\" />\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-4\">\r\n                                            <div class=\"form-group\">\r\n                                                <label>Status</label>\r\n                                                <select name=\"chapterStatus\" class=\"form-control\" [(ngModel)]=\"pageStatus\">\r\n                                                    <option value=\"\">All</option>\r\n                                                    <option value=\"1\">Active</option>\r\n                                                    <option value=\"0\">Inactive</option>\r\n                                                </select>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-4\">\r\n                                            <div class=\"form-group\">\r\n                                                <label>Created From</label>\r\n                                                <p-calendar name=\"createdAt\" [maxDate]=\"maxDate\" dateFormat=\"dd M yy\" [(ngModel)]=\"createdAt\"></p-calendar>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-12\">\r\n                        <div class=\"buttonContainer\">\r\n                            <div class=\"form-group\">\r\n                                <!-- <label style=\"visibility:hidden;\">Search</label> -->\r\n                                <a href=\"javascript:;\" (click)=\"searchData()\" class=\"btn darkBtn\">Apply</a>\r\n                                <a href=\"javascript:;\" (click)=\"resetPage()\" class=\"btn darkBtn\">Reset</a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"card\">\r\n                <div class=\"ui-g-12 ui-md-4\">\r\n                    Displaying\r\n                    <span>{{(offset==0)?1:(perPageLimit*(offset+1))-perPageLimit+1}} - {{(offset==0)?perPageLimit-(perPageLimit-pageData?.length):perPageLimit*(offset+1)-(perPageLimit-pageData?.length)}}\r\n                        of {{total}}</span>\r\n                </div>\r\n                <div class=\"card-Wrapper\">\r\n                    <div class=\"card-block\">\r\n                        <table class=\"table table-bordered productRequestTable\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>Sr No.</th>\r\n                                    <th>Page Heading</th>\r\n                                    <th>Page Status</th>\r\n                                    <th>Created Date</th>\r\n                                    <th>Action</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let page of pageData; let i=index\">\r\n                                    <td>{{i+1+(offset?offset*10:0)}}</td>\r\n                                    <td>{{page.page_heading || '-'}}</td>\r\n                                    <td>{{page.status || '-'}}</td>\r\n                                    <td>{{page.created_at || '-'}}</td>\r\n                                    <td>\r\n                                        <div class=\"groupBtn\">\r\n                                            <a class=\"btn btnEdit\" [routerLink]=\"['/books/view-page', page.id]\">View</a>\r\n                                            <a class=\"btn btnEdit\" [routerLink]=\"['/books/edit-page', page.id]\">Edit</a>\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                        <p-paginator class=\"paginCustome\" *ngIf=\"paginationVal\" rows=\"10\" totalRecords={{total}} (onPageChange)=\"paginate($event)\"></p-paginator>\r\n                    </div>\r\n                    <div class=\"card-block\" *ngIf=\"pageData?.length==0\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-4\">&nbsp;</div>\r\n                            <div class=\"col-md-4\">\r\n                                <h4>NO RESULT FOUND</h4>\r\n                            </div>\r\n                            <div class=\"col-md-4\">&nbsp;</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/chapters/view-chapter/view-chapter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewChapterComponent; });
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



var ViewChapterComponent = /** @class */ (function () {
    function ViewChapterComponent(router, bookApi, _cookieService, _lightbox, confirmationService, appLoginApi, loopAuth, route) {
        this.router = router;
        this.bookApi = bookApi;
        this._cookieService = _cookieService;
        this._lightbox = _lightbox;
        this.confirmationService = confirmationService;
        this.appLoginApi = appLoginApi;
        this.loopAuth = loopAuth;
        this.route = route;
        this.submited = false;
        this.backLink = "";
        this.emptyMessage = "No Result Found";
        this.displayConfirm = false;
        this.msgs = [];
        this.bookStatus = "";
        this.loading = true;
        this.paginationVal = false;
        this.perPageLimit = 10;
        this.offset = 0;
        this._albums = [];
        this.chapterData = [];
        this.pageData = [];
        this.ifEmpty = false;
        this.pageStatus = "";
        this.pageStatusSearch = "";
        this.id = this.route.snapshot.params['id'];
        this.maxDate = new Date();
    }
    ViewChapterComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('this is called');
        var dataObj = {};
        var uid = this.id;
        var dataArrObj = {
            "id": this.id
        };
        var loginFlagToken = this._cookieService.get(sdkPrefix + 'id');
        this.busy = this.bookApi.getChapters(dataArrObj).subscribe(function (data) {
            if (data.result.length > 0) {
                if (data.result[0].status == 1) {
                    data.result[0].status = 'Active';
                }
                else {
                    data.result[0].status = 'Inactive';
                }
                if (data.result[0].created_at) {
                    data.result[0].created_at = __WEBPACK_IMPORTED_MODULE_3_moment__(data.result[0].created_at).format("DD - MMM - YYYY");
                }
                _this.chapterData = data.result[0];
                _this.getCount();
            }
        }, function (err) {
        }, function () {
        });
    };
    ViewChapterComponent.prototype.getCount = function () {
        var _this = this;
        this.loading = true;
        if (this.createdAt) {
            this.createdAtSearch = __WEBPACK_IMPORTED_MODULE_3_moment__(this.createdAt).format("YYYY-MM-DD hh:mm:ss.SSS");
        }
        var dataArrObj = {
            "chapter_id": this.id,
            "page_heading": this.pageHeadingSearch,
            "created_at": this.createdAtSearch,
            "status": this.pageStatusSearch,
            "page": this.offset,
            "limit": this.perPageLimit
        };
        this.busy = this.bookApi.getPagesCount(dataArrObj).subscribe(function (data) {
            _this.total = data['result'][0]['total'];
            if (_this.total <= 10) {
                _this.paginationVal = false;
            }
            else {
                _this.paginationVal = true;
            }
            _this.getData(dataArrObj);
        }, function (err) {
        }, function () {
        });
    };
    ViewChapterComponent.prototype.getData = function (dataArrObj) {
        var _this = this;
        var loginFlagToken = this._cookieService.get(sdkPrefix + 'id');
        this._albums = [];
        this.busy = this.bookApi.getPages(dataArrObj).subscribe(function (data) {
            _this.loading = false;
            var totalData = data.result.length;
            _this.ifEmpty = false;
            if (totalData == 0) {
                _this.ifEmpty = true;
            }
            for (var i = 0; i < totalData; i++) {
                if (data.result[i].status == 1) {
                    data.result[i].status = 'Active';
                }
                else {
                    data.result[i].status = 'Inactive';
                }
                data.result[i].created_at = __WEBPACK_IMPORTED_MODULE_3_moment__(data.result[i].createdAt).format("DD - MMM - YYYY");
            }
            _this.pageData = data.result;
            console.log("pageData", _this.pageData);
        }, function (err) { }, function () { });
    };
    ViewChapterComponent.prototype.activeInactiveClick = function () {
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
    ViewChapterComponent.prototype.activeInactiveSubmit = function () {
        var _this = this;
        var dataObj = {};
        if (this.chapterData['status'] == 'Active') {
            dataObj['status'] = 0;
        }
        else {
            dataObj['status'] = 1;
        }
        var chapterId = this.id;
        this.msgs.length = 0;
        this.busy = this.bookApi.addEditChapters(dataObj, chapterId).subscribe(function (respData) {
            _this.msgs.push({ severity: 'success', summary: 'Success Message', detail: 'Chapter Status Has Been Changed Successfully.' });
            setTimeout(function () {
                window.location.reload();
            }, 3000);
        }, function (error) {
            //console.log('respData error',error);
            _this.msgs.push({ severity: 'warn', summary: 'Error Message', detail: 'Somthing Went Wrong. Please try again later.' });
        });
    };
    ViewChapterComponent.prototype.paginate = function (event) {
        this.pageData = [];
        this.offset = event.page;
        this.paginationVal = true;
        if (this.createdAt) {
            this.createdAtSearch = __WEBPACK_IMPORTED_MODULE_3_moment__(this.createdAt).format("YYYY-MM-DD hh:mm:ss.SSS");
        }
        var dataArrObj = {
            "chapter_id": this.id,
            "page_heading": this.pageHeadingSearch,
            "created_at": this.createdAtSearch,
            "status": this.pageStatusSearch,
            "page": this.offset,
            "limit": this.perPageLimit
        };
        this.getData(dataArrObj);
    };
    ViewChapterComponent.prototype.searchData = function () {
        this.offset = 0;
        this.paginationVal = false;
        this.ifEmpty = false;
        this.pageData = [];
        this.pageHeadingSearch = this.pageHeading;
        this.createdAtSearch = this.createdAt;
        this.pageStatusSearch = this.pageStatus;
        this.getCount();
    };
    ViewChapterComponent.prototype.resetPage = function () {
        this.offset = 0;
        this.paginationVal = false;
        this.pageHeading = "";
        this.pageStatus = "";
        this.createdAt = "";
        this.createdAtSearch = "";
        this.pageStatusSearch = "";
        this.pageHeadingSearch = "";
        this.getCount();
    };
    ViewChapterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "viewBook",
            template: __webpack_require__("./src/app/pages/chapters/view-chapter/view-chapter.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["ConfirmationService"]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_2__shared_loopback_sdk__["c" /* BooksApi */], __WEBPACK_IMPORTED_MODULE_6_angular2_cookie_core__["CookieService"], __WEBPACK_IMPORTED_MODULE_5_angular2_lightbox__["Lightbox"], __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["ConfirmationService"], __WEBPACK_IMPORTED_MODULE_2__shared_loopback_sdk__["a" /* App_loginApi */], __WEBPACK_IMPORTED_MODULE_2__shared_loopback_sdk__["e" /* LoopBackAuth */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]])
    ], ViewChapterComponent);
    return ViewChapterComponent;
}());



/***/ }),

/***/ "./src/app/pages/chapters/view-chapter/view-chapter.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewChapterModule", function() { return ViewChapterModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__view_chapter_component__ = __webpack_require__("./src/app/pages/chapters/view-chapter/view-chapter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__view_chapter_routing_module__ = __webpack_require__("./src/app/pages/chapters/view-chapter/view-chapter-routing.module.ts");
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























var ViewChapterModule = /** @class */ (function () {
    function ViewChapterModule() {
    }
    ViewChapterModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__view_chapter_routing_module__["a" /* ViewBookRoutingModule */],
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
                __WEBPACK_IMPORTED_MODULE_4__view_chapter_component__["a" /* ViewChapterComponent */]
            ]
        })
    ], ViewChapterModule);
    return ViewChapterModule;
}());



/***/ })

});
//# sourceMappingURL=view-chapter.module.chunk.js.map