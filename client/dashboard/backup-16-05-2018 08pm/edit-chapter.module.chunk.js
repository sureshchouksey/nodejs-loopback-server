webpackJsonp(["edit-chapter.module"],{

/***/ "./src/app/pages/chapters/edit-chapter/edit-chapter-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditChapterRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_chapter_component__ = __webpack_require__("./src/app/pages/chapters/edit-chapter/edit-chapter.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__edit_chapter_component__["a" /* EditChapterComponent */],
        data: {
            title: 'Edit Book'
        }
    }
];
var EditChapterRoutingModule = /** @class */ (function () {
    function EditChapterRoutingModule() {
    }
    EditChapterRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], EditChapterRoutingModule);
    return EditChapterRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/chapters/edit-chapter/edit-chapter.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"overlay\" *ngIf=\"loading\">\r\n    <i class=\"fa fa-spinner fa-pulse fa-3x fa-fw contCenter\"></i> <span class=\"sr-only\">Loading...</span>\r\n</div>\r\n<div class=\"animated fadeIn\">\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <button type=\"button\" class=\"backBtn\" tabindex=\"0\" [routerLinkActive]=\"['active']\" [routerLink]=\"['/books/view-book', bookId]\"><i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i> Back</button>\r\n                    <div>\r\n                        Edit Chapter\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <form #chapters=\"ngForm\">\r\n                        <div class=\"col-md-12\">\r\n                            <div class=\"card-Wrapper\">\r\n                                <div class=\"card-block\">\r\n                                    <div class=\"primaryDetails\">\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-md-4\">\r\n                                                <div class=\"form-group\">\r\n                                                    <label for=\"book\">Book*</label>\r\n                                                    <input type=\"text\" class=\"form-control\" id=\"book\" required name=\"book\" placeholder=\"Enter Book Name\" [(ngModel)]=\"bookName\" #name=\"ngModel\" readonly>\r\n                                                    <!-- <div class=\"error-place\" maxlength=\"50\">\r\n                                                        <div *ngIf=\"book.errors && (book.dirty || book.touched || submitted)\" class=\"error\">\r\n                                                            <span *ngIf=\"book.errors.required\">\r\n                                                                Book name is required\r\n                                                            </span>\r\n                                                            <span *ngIf=\"book.errors.pattern\">\r\n                                                                Please enter a valid book name.\r\n                                                            </span>\r\n                                                        </div>\r\n                                                    </div> -->\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"col-md-4\">\r\n                                                <div class=\"form-group\">\r\n                                                    <label for=\"name\">Chapter Name*</label>\r\n                                                    <input type=\"text\" class=\"form-control\" id=\"name\" required name=\"name\" placeholder=\"Enter chapter name\" [(ngModel)]=\"chapterName\" #name=\"ngModel\" pattern=\"^[^-\\s][a-zA-Z0-9 '\\s-]+$\">\r\n                                                    <div class=\"error-place\" maxlength=\"50\">\r\n                                                        <div *ngIf=\"name.errors && (name.dirty || name.touched || submitted)\" class=\"error\">\r\n                                                            <span *ngIf=\"name.errors.required\">\r\n                                                                Chapter name is required\r\n                                                            </span>\r\n                                                            <span *ngIf=\"name.errors.pattern\">\r\n                                                                Please enter a valid chapter name.\r\n                                                            </span>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"col-md-4\">\r\n                                                <div class=\"form-group\">\r\n                                                    <label for=\"name\">Chapter Priority*</label>\r\n                                                    <input type=\"text\" class=\"form-control\" id=\"priority\" required name=\"priority\" placeholder=\"Enter chapter priority\" [(ngModel)]=\"chapterPriority\" #priority=\"ngModel\" maxlength=\"4\" pattern=\"[0-9]*\">\r\n                                                    <div class=\"error-place\">\r\n                                                        <div *ngIf=\"priority.errors && (priority.dirty || priority.touched || submitted)\" class=\"error\">\r\n                                                            <span *ngIf=\"priority.errors.required\">\r\n                                                                Chapter priority is required\r\n                                                            </span>\r\n                                                            <span *ngIf=\"priority.errors.pattern\">\r\n                                                                Only numbers are allowed.\r\n                                                            </span>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-12\">\r\n                            <div class=\"buttonContainer\">\r\n                                <div class=\"form-group\">\r\n                                    <button *ngIf=\"!loading\" class=\"btn darkBtn\" type=\"submit\" (click)=\"submit()\">Submit</button>\r\n                                    <div class=\"loader\" *ngIf=\"loading\"><i class=\"fa fa-spinner fa-spin fa-2x fa-fw\"></i></div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"dargPop\">\r\n    <p-dialog [modal]=\"true\" (onHide)=\"goToListing()\" [(visible)]=\"display\" *ngIf=\"result == 'success'\">\r\n        <h6>Chapter Updated Successfully</h6>\r\n    </p-dialog>\r\n    <p-dialog header=\"New Chapter Added\" [modal]=\"true\" [(visible)]=\"display\" *ngIf=\"result != 'success'\">\r\n        <p>{{result}}</p>\r\n    </p-dialog>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/chapters/edit-chapter/edit-chapter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditChapterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_loopback_sdk__ = __webpack_require__("./src/shared/loopback-sdk/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_cookie_core__ = __webpack_require__("./node_modules/angular2-cookie/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_cookie_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_share_service_share_service__ = __webpack_require__("./src/providers/share-service/share-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EditChapterComponent = /** @class */ (function () {
    function EditChapterComponent(loopAuth, route, http, _cookieService, books, router, containerApi, share) {
        this.loopAuth = loopAuth;
        this.route = route;
        this.http = http;
        this._cookieService = _cookieService;
        this.books = books;
        this.router = router;
        this.containerApi = containerApi;
        this.share = share;
        this.display = false;
        this.submitted = false;
        this.description = "";
        this.imgErrDisplay = false;
        this.loading = false;
        this.imgErr = '';
        this.allData = [];
        this.chapterPriority = 0;
        this.userDetails = this.loopAuth.getCurrentUserData();
        this.rolename = this.userDetails.userDet.roles;
        this.id = this.route.snapshot.params['id'];
    }
    EditChapterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        var dataArrObj = {
            "id": this.id
        };
        this.books.getChapters(dataArrObj).subscribe(function (data) {
            _this.loading = false;
            if (data) {
                var result = data.result[0];
                _this.chapterName = result.name;
                _this.bookId = result.book_id;
                _this.bookName = result.book_name;
                _this.chapterPriority = result.priority;
            }
        }, function (err) {
            _this.loading = false;
        });
    };
    EditChapterComponent.prototype.showDialog = function () {
        this.display = true;
    };
    EditChapterComponent.prototype.submit = function () {
        var _this = this;
        this.submitted = true;
        if (this.name.valid && this.priority.valid) {
            this.loading = true;
            //function call to change base64 format data to Image
            var dataArrObj = {
                "name": this.chapterName,
                "book_id": this.bookId,
                "priority": this.chapterPriority
            };
            this.books.addEditChapters(dataArrObj, this.id).subscribe(function (data) {
                _this.loading = false;
                if (data) {
                    console.log(data);
                    if (data.result.id > 0) {
                        _this.result = 'success';
                    }
                    _this.display = true;
                }
                else {
                    _this.display = false;
                    _this.result = 'Something went wrong.';
                }
            }, function (err) {
                console.log("err", err);
                _this.loading = false;
            }, function () {
            });
        }
    };
    EditChapterComponent.prototype.goToListing = function () {
        // window.location.reload();
        this.router.navigate(["books/view-book", this.bookId]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('name'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["NgModel"])
    ], EditChapterComponent.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('priority'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["NgModel"])
    ], EditChapterComponent.prototype, "priority", void 0);
    EditChapterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("./src/app/pages/chapters/edit-chapter/edit-chapter.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__shared_loopback_sdk__["g" /* LoopBackAuth */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"], __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_4_angular2_cookie_core__["CookieService"], __WEBPACK_IMPORTED_MODULE_3__shared_loopback_sdk__["d" /* BooksApi */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_3__shared_loopback_sdk__["e" /* ContainerApi */], __WEBPACK_IMPORTED_MODULE_6__providers_share_service_share_service__["a" /* ShareService */]])
    ], EditChapterComponent);
    return EditChapterComponent;
}());



/***/ }),

/***/ "./src/app/pages/chapters/edit-chapter/edit-chapter.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditChapterModule", function() { return EditChapterModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_chapter_component__ = __webpack_require__("./src/app/pages/chapters/edit-chapter/edit-chapter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__edit_chapter_routing_module__ = __webpack_require__("./src/app/pages/chapters/edit-chapter/edit-chapter-routing.module.ts");
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









var EditChapterModule = /** @class */ (function () {
    function EditChapterModule() {
    }
    EditChapterModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__edit_chapter_routing_module__["a" /* EditChapterRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["DialogModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["EditorModule"],
                __WEBPACK_IMPORTED_MODULE_7_angular2_busy__["BusyModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__edit_chapter_component__["a" /* EditChapterComponent */]
            ]
        })
    ], EditChapterModule);
    return EditChapterModule;
}());



/***/ })

});
//# sourceMappingURL=edit-chapter.module.chunk.js.map