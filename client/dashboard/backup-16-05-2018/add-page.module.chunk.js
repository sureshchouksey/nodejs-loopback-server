webpackJsonp(["add-page.module"],{

/***/ "./src/app/pages/pages/add-page/add-page-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPageRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_page_component__ = __webpack_require__("./src/app/pages/pages/add-page/add-page.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__add_page_component__["a" /* AddPageComponent */],
        data: {
            title: 'Add Book'
        }
    }
];
var AddPageRoutingModule = /** @class */ (function () {
    function AddPageRoutingModule() {
    }
    AddPageRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], AddPageRoutingModule);
    return AddPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/pages/add-page/add-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"overlay\" *ngIf=\"loading\">\r\n    <i class=\"fa fa-spinner fa-pulse fa-3x fa-fw contCenter\"></i> <span class=\"sr-only\">Loading...</span>\r\n</div>\r\n<div class=\"animated fadeIn\" *ngIf=\"!loading\">\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <button type=\"button\" class=\"backBtn\" tabindex=\"0\" [routerLinkActive]=\"['active']\" [routerLink]=\"['/books/view-chapter', chapterId]\"><i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i> Back</button>\r\n                    <div>\r\n                        Add Pages\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <form #chapter=\"ngForm\">\r\n                        <div class=\"col-md-12\">\r\n                            <div class=\"card-Wrapper\">\r\n                                <div class=\"card-block\">\r\n                                    <div class=\"primaryDetails\">\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-md-4\">\r\n                                                <div class=\"form-group\">\r\n                                                    <label for=\"name\">Chapter Name*</label>\r\n                                                    <input type=\"text\" class=\"form-control\" id=\"chapter\" required name=\"chapter\" placeholder=\"Enter chapter name\" [(ngModel)]=\"chapterName\" #chapter=\"ngModel\" readonly>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"col-md-4\">\r\n                                                <div class=\"form-group\">\r\n                                                    <label for=\"name\">Page Heading*</label>\r\n                                                    <input type=\"text\" class=\"form-control\" id=\"name\" required name=\"name\" placeholder=\"Enter chapter name\" [(ngModel)]=\"prodName\" #name=\"ngModel\">\r\n                                                    <div class=\"error-place\" maxlength=\"50\">\r\n                                                        <div *ngIf=\"name.errors && (name.dirty || name.touched || submitted)\" class=\"error\">\r\n                                                            <span *ngIf=\"name.errors.required\">\r\n                                                                Page heading is required\r\n                                                            </span>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"col-md-4\">\r\n                                                <div class=\"form-group\">\r\n                                                    <label for=\"name\">Page Priority*</label>\r\n                                                    <input type=\"text\" class=\"form-control\" id=\"priority\" required name=\"priority\" placeholder=\"Enter page priority\" [(ngModel)]=\"pagePriority\" #priority=\"ngModel\" maxlength=\"4\" pattern=\"[0-9]*\">\r\n                                                    <div class=\"error-place\">\r\n                                                        <div *ngIf=\"priority.errors && (priority.dirty || priority.touched || submitted)\" class=\"error\">\r\n                                                            <span *ngIf=\"priority.errors.required\">\r\n                                                                Page priority is required\r\n                                                            </span>\r\n                                                            <span *ngIf=\"priority.errors.pattern\">\r\n                                                                Only numbers are allowed.\r\n                                                            </span>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"col-md-8\">\r\n                                                <div class=\"form-group\">\r\n                                                    <label>Description*</label>\r\n                                                    <p-editor [(ngModel)]=\"description\" required #pckeditor=\"ngModel\" (onInit)=\"editorInit($event)\" [ngModelOptions]=\"{standalone: true}\" [style]=\"{'height':'320px'}\"></p-editor>\r\n                                                    <div class=\"error-place\">\r\n                                                        <div *ngIf=\"pckeditor.errors && (pckeditor.dirty || pckeditor.touched || submitted)\" class=\"error\">\r\n                                                            <span *ngIf=\"pckeditor.errors.required\">\r\n                                                                Page description is required\r\n                                                            </span>\r\n                                                            <span *ngIf=\"pckeditor.errors.pattern\">\r\n                                                                Only numbers are allowed.\r\n                                                            </span>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-12\">\r\n                            <div class=\"buttonContainer\">\r\n                                <div class=\"form-group\">\r\n                                    <button *ngIf=\"!loading\" class=\"btn darkBtn\" type=\"submit\" (click)=\"submit()\">Submit</button>\r\n                                    <div class=\"loader\" *ngIf=\"loading\"><i class=\"fa fa-spinner fa-spin fa-2x fa-fw\"></i></div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"dargPop\">\r\n    <p-dialog [modal]=\"true\" (onHide)=\"goToListing()\" [(visible)]=\"display\" *ngIf=\"result == 'success'\">\r\n        <h6>Page Inserted Successfully</h6>\r\n    </p-dialog>\r\n    <p-dialog header=\"New Chapter Added\" [modal]=\"true\" [(visible)]=\"display\" *ngIf=\"result != 'success'\">\r\n        <p>{{result}}</p>\r\n    </p-dialog>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/pages/add-page/add-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPageComponent; });
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var AddPageComponent = /** @class */ (function () {
    function AddPageComponent(loopAuth, route, http, _cookieService, books, router, containerApi, share) {
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
        this.pagePriority = 0;
        this.loading = false;
        this.userDetails = this.loopAuth.getCurrentUserData();
        this.rolename = this.userDetails.userDet.roles;
        this.chapterId = this.route.snapshot.params['id'];
        this.initialData();
    }
    AddPageComponent.prototype.initialData = function () {
        var _this = this;
        var dataArrObj = {
            "id": this.chapterId
        };
        this.busy = this.books.getChapters(dataArrObj, null).subscribe(function (data) {
            if (data) {
                if (data.result.length > 0) {
                    var chapterData = data.result[0];
                    _this.chapterName = chapterData.name;
                }
            }
        });
        this.busy = this.books.getHighestPriority("pages", this.chapterId).subscribe(function (data) {
            if (data) {
                if (data.result.length == 1) {
                    console.log("priority data", data);
                    var priorityVal = data.result[0].priority;
                    _this.pagePriority = priorityVal + 1;
                }
            }
        });
    };
    AddPageComponent.prototype.submit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var description, dataArrObj;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.submitted = true;
                        if (!(this.name.valid && this.pckeditor.valid)) return [3 /*break*/, 2];
                        this.loading = true;
                        return [4 /*yield*/, this.share.parsePageToReplaceImg(this.description)];
                    case 1:
                        description = _a.sent();
                        console.log("description", description);
                        dataArrObj = {
                            "page_heading": this.prodName,
                            "chapter_id": this.chapterId,
                            "content": description,
                            "priority": this.pagePriority
                        };
                        this.busy = this.books.addEditPages(dataArrObj, null).subscribe(function (data) {
                            _this.loading = false;
                            if (data) {
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
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    AddPageComponent.prototype.ngOnInit = function () {
    };
    AddPageComponent.prototype.goToListing = function () {
        // window.location.reload();
        this.router.navigate(["books/view-chapter", this.chapterId]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('name'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["NgModel"])
    ], AddPageComponent.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('pckeditor'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["NgModel"])
    ], AddPageComponent.prototype, "pckeditor", void 0);
    AddPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("./src/app/pages/pages/add-page/add-page.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__shared_loopback_sdk__["e" /* LoopBackAuth */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"], __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_4_angular2_cookie_core__["CookieService"], __WEBPACK_IMPORTED_MODULE_3__shared_loopback_sdk__["c" /* BooksApi */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_3__shared_loopback_sdk__["d" /* ContainerApi */], __WEBPACK_IMPORTED_MODULE_6__providers_share_service_share_service__["a" /* ShareService */]])
    ], AddPageComponent);
    return AddPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/pages/add-page/add-page.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPageModule", function() { return AddPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_page_component__ = __webpack_require__("./src/app/pages/pages/add-page/add-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__add_page_routing_module__ = __webpack_require__("./src/app/pages/pages/add-page/add-page-routing.module.ts");
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









var AddPageModule = /** @class */ (function () {
    function AddPageModule() {
    }
    AddPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__add_page_routing_module__["a" /* AddPageRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["DialogModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["EditorModule"],
                __WEBPACK_IMPORTED_MODULE_7_angular2_busy__["BusyModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__add_page_component__["a" /* AddPageComponent */]
            ]
        })
    ], AddPageModule);
    return AddPageModule;
}());



/***/ })

});
//# sourceMappingURL=add-page.module.chunk.js.map