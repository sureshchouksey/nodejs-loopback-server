webpackJsonp(["view-book.module"],{

/***/ "./src/app/pages/books/view-book/view-book-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewBookRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view_book_component__ = __webpack_require__("./src/app/pages/books/view-book/view-book.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__view_book_component__["a" /* ViewBookComponent */],
        data: {
            title: 'View Book'
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

/***/ "./src/app/pages/books/view-book/view-book.component.html":
/***/ (function(module, exports) {

module.exports = "<p-growl [(value)]=\"msgs\"></p-growl>\r\n<div class=\"confirmPopup\">\r\n    <p-confirmDialog></p-confirmDialog>\r\n</div>\r\n<div class=\"overlay\" *ngIf=\"loading\">\r\n    <i class=\"fa fa-spinner fa-pulse fa-3x fa-fw contCenter\"></i> <span class=\"sr-only\">Loading...</span>\r\n</div>\r\n<div class=\"animated fadeIn\">\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header topGroup\">\r\n                    <button type=\"button\" class=\"backBtn\" [routerLinkActive]=\"['active']\" [routerLink]=\"['/books']\">\r\n                        <i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i> Back</button>\r\n                    <div class=\"btnGroup\">\r\n                        <button type=\"button\" class=\"btn\" (click)=\"activeInactiveClick()\">\r\n                            <i class=\"fa fa-ban fa-lg mt-4\"></i> {{bookData['status']=='Active'?\"Inactivate Book\":\"Activate Book\"}}</button>\r\n                    </div>\r\n                </div>\r\n                <div class=\"productImages\">\r\n                    <div class=\"card-items user-pic\">\r\n                        <img class=\"img-frame\" [src]=\"bookData.logo_image\" (click)=\"open(bookData.profileArr,0)\" width=\"100\" height=\"100\" />\r\n                    </div>\r\n                </div>\r\n                <div class=\"detailsContainer productContainer\">\r\n                    <div class=\"card-details\">\r\n                        <div class=\"card-block\">\r\n                            <div class=\"blockTop productBlock\">\r\n                                <div class=\"items\">\r\n                                    <div class=\"gutter-space\">\r\n                                        <div class=\"panelWrapper\">\r\n                                            <div class=\"panelHead\">\r\n                                                <h3>Book Details</h3>\r\n                                            </div>\r\n                                            <div class=\"panelBody\">\r\n                                                <ul class=\"panelitem panelInfo\">\r\n                                                    <li>\r\n                                                        <p>Book Name</p>\r\n                                                        <h4>{{bookData.name || '0'}}</h4>\r\n                                                    </li>\r\n                                                    <li>\r\n                                                        <p>Book Status</p>\r\n                                                        <h4>{{bookData.status || '-'}}</h4>\r\n                                                    </li>\r\n                                                    <li>\r\n                                                        <p>Created Date</p>\r\n                                                        <h4>{{bookData.created_at || '-'}}</h4>\r\n                                                    </li>\r\n                                                    <li>\r\n                                                        <p>Priority</p>\r\n                                                        <h4>{{bookData.priority || '-'}}</h4>\r\n                                                    </li>\r\n                                                    <li>\r\n                                                        <p>Description</p>\r\n                                                        <h4>{{bookData.description|| '-'}}</h4>\r\n                                                    </li>\r\n                                                </ul>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"animated fadeIn\">\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n            <div class=\"card\">\r\n                <div class=\"addUser\">\r\n                    <button type=\"button\" [routerLink]=\"['/books/add-chapter', id]\" class=\"btn btnUser\">Add Chapter</button>\r\n                </div>\r\n                <div class=\"card-header\">\r\n                    Search Chapter\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                        <div class=\"card-Wrapper\">\r\n                            <div class=\"card-block\">\r\n                                <div class=\"primaryDetails\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-4\">\r\n                                            <div class=\"form-group\">\r\n                                                <label>Chapter Name</label>\r\n                                                <input class=\"form-control\" [(ngModel)]=\"chapterName\" />\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-4\">\r\n                                            <div class=\"form-group\">\r\n                                                <label>Status</label>\r\n                                                <select name=\"chapterStatus\" class=\"form-control\" [(ngModel)]=\"chapterStatus\">\r\n                                                    <option value=\"\">All</option>\r\n                                                    <option value=\"1\">Active</option>\r\n                                                    <option value=\"0\">Inactive</option>\r\n                                                </select>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-4\">\r\n                                            <div class=\"form-group\">\r\n                                                <label>Created From</label>\r\n                                                <p-calendar name=\"createdAt\" [maxDate]=\"maxDate\" dateFormat=\"dd M yy\" [(ngModel)]=\"createdAt\"></p-calendar>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-12\">\r\n                        <div class=\"buttonContainer\">\r\n                            <div class=\"form-group\">\r\n                                <!-- <label style=\"visibility:hidden;\">Search</label> -->\r\n                                <a href=\"javascript:;\" (click)=\"searchData()\" class=\"btn darkBtn\">Apply</a>\r\n                                <a href=\"javascript:;\" (click)=\"resetPage()\" class=\"btn darkBtn\">Reset</a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"card\">\r\n                <div class=\"ui-g-12 ui-md-4\">\r\n                    Displaying\r\n                    <span>{{(offset==0)?1:(perPageLimit*(offset+1))-perPageLimit+1}} - {{(offset==0)?perPageLimit-(perPageLimit-chapterData?.length):perPageLimit*(offset+1)-(perPageLimit-chapterData?.length)}}\r\n                        of {{total}}</span>\r\n                </div>\r\n                <div class=\"card-Wrapper\">\r\n                    <div class=\"card-block\">\r\n                        <table class=\"table table-bordered productRequestTable\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>Sr No.</th>\r\n                                    <th>Chapter Name</th>\r\n                                    <th>Chapter Status</th>\r\n                                    <th>Created Date</th>\r\n                                    <th>Action</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let chapter of chapterData; let i=index\">\r\n                                    <td>{{i+1+(offset?offset*10:0)}}</td>\r\n                                    <td>{{chapter.name || '-'}}</td>\r\n                                    <td>{{chapter.status || '-'}}</td>\r\n                                    <td>{{chapter.created_at || '-'}}</td>\r\n                                    <td>\r\n                                        <div class=\"groupBtn\">\r\n                                            <a class=\"btn btnEdit\" [routerLink]=\"['/books/view-chapter', chapter.id]\">View</a>\r\n                                            <a class=\"btn btnEdit\" [routerLink]=\"['/books/edit-chapter', chapter.id]\">Edit</a>\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                        <p-paginator class=\"paginCustome\" *ngIf=\"paginationVal\" rows=\"10\" totalRecords={{total}} (onPageChange)=\"paginate($event)\"></p-paginator>\r\n                    </div>\r\n                    <div class=\"card-block\" *ngIf=\"chapterData?.length==0\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-4\">&nbsp;</div>\r\n                            <div class=\"col-md-4\">\r\n                                <h4>NO RESULT FOUND</h4>\r\n                            </div>\r\n                            <div class=\"col-md-4\">&nbsp;</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/books/view-book/view-book.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewBookComponent; });
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



var ViewBookComponent = /** @class */ (function () {
    function ViewBookComponent(router, bookApi, _cookieService, _lightbox, confirmationService, appLoginApi, loopAuth, route) {
        this.router = router;
        this.bookApi = bookApi;
        this._cookieService = _cookieService;
        this._lightbox = _lightbox;
        this.confirmationService = confirmationService;
        this.appLoginApi = appLoginApi;
        this.loopAuth = loopAuth;
        this.route = route;
        this.submited = false;
        this.bookData = [];
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
        this.id = this.route.snapshot.params['id'];
        this.maxDate = new Date();
    }
    ViewBookComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        var dataObj = {};
        var uid = this.id;
        var dataArrObj = {
            "id": this.id
        };
        var loginFlagToken = this._cookieService.get(sdkPrefix + 'id');
        this.bookApi.getBooks(dataArrObj).subscribe(function (data) {
            _this.loading = false;
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
                if (data.result[0].logo_image) {
                    data.result[0].logo_image = data.result[0].logo_image + '?access_token=' + loginFlagToken;
                    data.result[0].profileArr = [{ src: data.result[0].logo_image, thumb: data.result[0].logo_image }];
                }
                _this.bookData = data.result[0];
                _this.getCount();
            }
        }, function (err) {
            _this.loading = false;
        }, function () {
        });
    };
    ViewBookComponent.prototype.getCount = function () {
        var _this = this;
        this.loading = true;
        if (this.createdAt) {
            this.createdAtSearch = __WEBPACK_IMPORTED_MODULE_3_moment__(this.createdAt).format("YYYY-MM-DD hh:mm:ss.SSS");
        }
        var dataArrObj = {
            "book_id": this.id,
            "name": this.chapterNameSearch,
            "created_at": this.createdAtSearch,
            "status": this.chapterStatusSearch,
            "page": this.offset,
            "limit": this.perPageLimit
        };
        this.bookApi.getChaptersCount(dataArrObj).subscribe(function (data) {
            _this.total = data['result'][0]['total'];
            if (_this.total <= 10) {
                _this.paginationVal = false;
            }
            else {
                _this.paginationVal = true;
            }
            _this.getData(dataArrObj);
        }, function (err) {
            _this.loading = false;
        }, function () {
        });
    };
    ViewBookComponent.prototype.getData = function (dataArrObj) {
        var _this = this;
        this.loading = true;
        var loginFlagToken = this._cookieService.get(sdkPrefix + 'id');
        this._albums = [];
        this.bookApi.getChapters(dataArrObj).subscribe(function (data) {
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
            _this.chapterData = data.result;
            console.log("chapterData", _this.chapterData);
        }, function (err) {
            _this.loading = false;
        }, function () { });
    };
    ViewBookComponent.prototype.activeInactiveClick = function () {
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
    ViewBookComponent.prototype.activeInactiveSubmit = function () {
        var _this = this;
        this.loading = true;
        var dataObj = {};
        if (this.bookData['status'] == 'Active') {
            dataObj['status'] = 0;
        }
        else {
            dataObj['status'] = 1;
        }
        var bookId = this.id;
        this.msgs.length = 0;
        this.bookApi.addEditBooks(dataObj, bookId).subscribe(function (respData) {
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
    ViewBookComponent.prototype.paginate = function (event) {
        this.chapterData = [];
        this.offset = event.page;
        this.paginationVal = true;
        if (this.createdAt) {
            this.createdAtSearch = __WEBPACK_IMPORTED_MODULE_3_moment__(this.createdAt).format("YYYY-MM-DD hh:mm:ss.SSS");
        }
        var dataArrObj = {
            "book_id": this.id,
            "name": this.chapterNameSearch,
            "created_at": this.createdAtSearch,
            "status": this.chapterStatusSearch,
            "page": this.offset,
            "limit": this.perPageLimit
        };
        this.getData(dataArrObj);
    };
    ViewBookComponent.prototype.searchData = function () {
        this.offset = 0;
        this.paginationVal = false;
        this.ifEmpty = false;
        this.chapterData = [];
        this.chapterNameSearch = this.chapterName;
        this.createdAtSearch = this.createdAt;
        this.chapterStatusSearch = this.chapterStatus;
        this.getCount();
    };
    ViewBookComponent.prototype.resetPage = function () {
        this.offset = 0;
        this.paginationVal = false;
        this.chapterName = "";
        this.createdAt = "";
        this.createdAtSearch = "";
        this.chapterStatusSearch = "";
        this.chapterNameSearch = "";
        this.getCount();
    };
    ViewBookComponent.prototype.open = function (data, index) {
        // override the default config
        this._lightbox.open(data, index, { wrapAround: true, showImageNumberLabel: true });
    };
    ViewBookComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "viewBook",
            template: __webpack_require__("./src/app/pages/books/view-book/view-book.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["ConfirmationService"]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_2__shared_loopback_sdk__["d" /* BooksApi */], __WEBPACK_IMPORTED_MODULE_6_angular2_cookie_core__["CookieService"], __WEBPACK_IMPORTED_MODULE_5_angular2_lightbox__["Lightbox"], __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["ConfirmationService"], __WEBPACK_IMPORTED_MODULE_2__shared_loopback_sdk__["b" /* App_loginApi */], __WEBPACK_IMPORTED_MODULE_2__shared_loopback_sdk__["k" /* LoopBackAuth */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]])
    ], ViewBookComponent);
    return ViewBookComponent;
}());



/***/ }),

/***/ "./src/app/pages/books/view-book/view-book.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewBookModule", function() { return ViewBookModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__view_book_component__ = __webpack_require__("./src/app/pages/books/view-book/view-book.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__view_book_routing_module__ = __webpack_require__("./src/app/pages/books/view-book/view-book-routing.module.ts");
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























var ViewBookModule = /** @class */ (function () {
    function ViewBookModule() {
    }
    ViewBookModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__view_book_routing_module__["a" /* ViewBookRoutingModule */],
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
                __WEBPACK_IMPORTED_MODULE_4__view_book_component__["a" /* ViewBookComponent */]
            ]
        })
    ], ViewBookModule);
    return ViewBookModule;
}());



/***/ })

});
//# sourceMappingURL=view-book.module.chunk.js.map