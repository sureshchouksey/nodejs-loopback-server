webpackJsonp(["edit-book.module"],{

/***/ "./src/app/pages/books/edit-book/edit-book-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditBookRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_book_component__ = __webpack_require__("./src/app/pages/books/edit-book/edit-book.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__edit_book_component__["a" /* EditBookComponent */],
        data: {
            title: 'Edit Book'
        }
    }
];
var EditBookRoutingModule = /** @class */ (function () {
    function EditBookRoutingModule() {
    }
    EditBookRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], EditBookRoutingModule);
    return EditBookRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/books/edit-book/edit-book.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"overlay\" *ngIf=\"loading\">\r\n    <i class=\"fa fa-spinner fa-pulse fa-3x fa-fw contCenter\"></i> <span class=\"sr-only\">Loading...</span>\r\n</div>\r\n<div class=\"animated fadeIn\" *ngIf=\"!loading\">\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <button type=\"button\" class=\"backBtn\" tabindex=\"0\" [routerLinkActive]=\"['active']\" [routerLink]=\"['/books']\"><i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i> Back</button>\r\n                    <div>\r\n                        Edit Book\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <form #books=\"ngForm\">\r\n                        <div class=\"col-md-12\">\r\n                            <div class=\"card-Wrapper\">\r\n                                <div class=\"card-block\">\r\n                                    <div class=\"primaryDetails\">\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-md-4\">\r\n                                                <div class=\"form-group\">\r\n                                                    <label for=\"name\">Book Name*</label>\r\n                                                    <input type=\"text\" class=\"form-control\" id=\"name\" required name=\"name\" placeholder=\"Enter book name\" [(ngModel)]=\"bookName\" #name=\"ngModel\" pattern=\"^[^-\\s][a-zA-Z0-9 '\\s-]+$\">\r\n                                                    <div class=\"error-place\" maxlength=\"50\">\r\n                                                        <div *ngIf=\"name.errors && (name.dirty || name.touched || submitted)\" class=\"error\">\r\n                                                            <span *ngIf=\"name.errors.required\">\r\n                                                                Book name is required\r\n                                                            </span>\r\n                                                            <span *ngIf=\"name.errors.pattern\">\r\n                                                                Please enter a valid book name.\r\n                                                            </span>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"col-md-3\">\r\n                                                <div class=\"form-group\">\r\n                                                    <label for=\"name\">Book Priority*</label>\r\n                                                    <input type=\"text\" class=\"form-control\" id=\"priority\" required name=\"priority\" placeholder=\"Enter book priority\" [(ngModel)]=\"bookPriority\" #priority=\"ngModel\" maxlength=\"4\" pattern=\"[0-9]*\">\r\n                                                    <div class=\"error-place\">\r\n                                                        <div *ngIf=\"priority.errors && (priority.dirty || priority.touched || submitted)\" class=\"error\">\r\n                                                            <span *ngIf=\"priority.errors.required\">\r\n                                                                Book priority is required\r\n                                                            </span>\r\n                                                            <span *ngIf=\"priority.errors.pattern\">\r\n                                                                Only numbers are allowed.\r\n                                                            </span>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"form-group col-sm-4\">\r\n                                                <label for=\"profilePhoto\">Logo Image*</label>\r\n                                                <input (change)=\"onFileChange($event)\" type=\"file\" class=\"form-control\" id=\"logo\" name=\"logo\" [(ngModel)]=\"logoImage\"\r\n                                                    #idCardPhoto=\"ngModel\">\r\n                                                <label>jpg/jpeg/png(max 5Mb)</label>\r\n                                                <div class=\"row\" *ngIf=\"imgErrDisplay\" class=\"error\">\r\n                                                    <span>\r\n                                                        {{imgErr}}\r\n                                                    </span>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"form-group col-sm-2\">\r\n                                                <!-- <button class=\"removeBtn\" type=\"submit\" (click)=\"removeimage('doc',i)\" label=\"Show\">\r\n                                                    <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\r\n                                                </button> -->\r\n                                                <img *ngIf=\"show!=''\" src=\"{{bookImage}}\" width=\"150\" height=\"100\" />\r\n                                            </div>\r\n                                            <div class=\"col-md-5\">\r\n                                                <div class=\"form-group\">\r\n                                                    <label for=\"desc\">Description</label>\r\n                                                    <textarea class=\"form-control\" id=\"desc\" name=\"desc\" [(ngModel)]=\"description\" #desc=\"ngModel\">\r\n                                                    </textarea>\r\n                                                    <!-- <div class=\"error-place\">\r\n                                                        <div *ngIf=\"desc.errors && (desc.dirty || desc.touched || submitted)\" class=\"error\">\r\n                                                            <span *ngIf=\"desc.errors.required\">Description is required.</span>\r\n                                                            <span *ngIf=\"description.errors.pattern\">Please enter a valid address.</span>\r\n                                                        </div>\r\n                                                    </div> -->\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-12\">\r\n                            <div class=\"buttonContainer\">\r\n                                <div class=\"form-group\">\r\n                                    <button *ngIf=\"!loading\" class=\"btn darkBtn\" type=\"submit\" (click)=\"submit()\">Submit</button>\r\n                                    <div class=\"loader\" *ngIf=\"loading\"><i class=\"fa fa-spinner fa-spin fa-2x fa-fw\"></i></div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"dargPop\">\r\n    <p-dialog [modal]=\"true\" (onHide)=\"goToListing()\" [(visible)]=\"display\" *ngIf=\"result == 'success'\">\r\n        <h6>Book Updated Successfully</h6>\r\n    </p-dialog>\r\n    <p-dialog header=\"New Book Added\" [modal]=\"true\" [(visible)]=\"display\" *ngIf=\"result != 'success'\">\r\n        <p>{{result}}</p>\r\n    </p-dialog>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/books/edit-book/edit-book.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditBookComponent; });
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







var EditBookComponent = /** @class */ (function () {
    function EditBookComponent(loopAuth, route, http, _cookieService, books, router, containerApi, share) {
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
        this.bookPriority = 0;
        this.userDetails = this.loopAuth.getCurrentUserData();
        this.rolename = this.userDetails.userDet.roles;
        this.id = this.route.snapshot.params['id'];
        this.loginFlagToken = this._cookieService.get(sdkPrefix + 'id');
    }
    EditBookComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        var dataArrObj = {
            "id": this.id
        };
        this.books.getBooks(dataArrObj).subscribe(function (data) {
            _this.loading = false;
            if (data) {
                var result = data.result[0];
                _this.bookName = result.name;
                _this.description = result.description;
                _this.bookPriority = result.priority;
                if (result.logo_image) {
                    _this.bookImage = result.logo_image + '?access_token=' + _this.loginFlagToken;
                }
            }
        }, function (err) {
            console.log("err", err);
            _this.loading = false;
        }, function () {
        });
    };
    EditBookComponent.prototype.goToListing = function () {
        // window.location.reload();
        this.router.navigate(["books"]);
    };
    EditBookComponent.prototype.submit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var uploadFlag1, dataArrObj;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.submitted = true;
                        if (!(this.name.valid && this.priority.valid)) return [3 /*break*/, 3];
                        uploadFlag1 = true;
                        if (!(this.allData != "" && this.allData != undefined)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.uploadImage(this.allData[0])];
                    case 1:
                        uploadFlag1 = _a.sent();
                        _a.label = 2;
                    case 2:
                        dataArrObj = {
                            "name": this.bookName,
                            "description": this.description,
                            "logo_image": this.imgName,
                            "priority": this.bookPriority
                        };
                        this.loading = true;
                        this.books.addEditBooks(dataArrObj, this.id).subscribe(function (data) {
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
                            _this.loading = false;
                            console.log("err", err);
                        }, function () {
                        });
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    EditBookComponent.prototype.onFileChange = function (file) {
        var _this = this;
        console.log("file", file);
        this.imgErrDisplay = false;
        this.data = new FormData();
        var imageData = new FileReader();
        if (file.target.files[0]) {
            var fileSize = Math.round((file.target.files[0].size) / 1024);
            var imgExt = file.target.files[0].name.split(".");
            console.log("file.target.files[0].type", file.target.files[0].type);
            if (imgExt.length > 2) {
                this.imgErr = "Invalid Image Format / Image name";
                this.imgErrDisplay = true;
            }
            else if (((file.target.files[0].type) != "image/jpg") && ((file.target.files[0].type) != "image/png") && ((file.target.files[0].type) != "image/jpeg")) {
                this.imgErr = "Invalid Image Format";
                this.imgErrDisplay = true;
            }
            else if (fileSize > 7000) {
                this.imgErr = "Invalid Image Size";
                this.imgErrDisplay = true;
            }
            else {
                imageData.onload = function (event) {
                    var img = new Image();
                    img.src = event.target.result;
                    if (img.width > 500 || img.height > 500) {
                        _this.imgErr = "Invalid Image Dimension. It needs to be of max 500*500";
                        _this.imgErrDisplay = true;
                    }
                    else {
                        var targetFile = file.target.files[0];
                        var fileExtension = '.' + targetFile['name'].split('.').pop();
                        var filename = Math.random().toString(36).substring(7) + new Date().getTime() + fileExtension;
                        _this.data.append("file", file.target.files[0], filename);
                        _this.allData.push(_this.data);
                    }
                };
                imageData.readAsDataURL(file.target.files[0]);
            }
        }
    };
    EditBookComponent.prototype.uploadImage = function (fdata) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var fileUrl = hostname + "/api/containers/logo_image";
            //let fileUrl = "http://phapi.experiencecommerce.com:4500/api/containers/logo_image";
            _this.loading = true;
            _this.http.post(fileUrl + '/upload?access_token=' + _this.loginFlagToken, fdata).subscribe(function (res) {
                var dataimg = res['_body'];
                dataimg = JSON.parse(dataimg);
                if (dataimg) {
                    var imgName = dataimg['result']['files']['file'][0]['name'];
                    _this.imgName = fileUrl + "/download/" + imgName;
                    resolve(true);
                }
                else {
                    resolve(false);
                }
            }, function (err) {
                _this.imgErr = "Image upload failed";
                //this.imgshow = this.defaultImg;
                _this.imgErrDisplay = true;
                _this.loading = false;
                resolve(false);
            }, function () {
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('name'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["NgModel"])
    ], EditBookComponent.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('priority'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["NgModel"])
    ], EditBookComponent.prototype, "priority", void 0);
    EditBookComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("./src/app/pages/books/edit-book/edit-book.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__shared_loopback_sdk__["g" /* LoopBackAuth */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"], __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_4_angular2_cookie_core__["CookieService"], __WEBPACK_IMPORTED_MODULE_3__shared_loopback_sdk__["d" /* BooksApi */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_3__shared_loopback_sdk__["e" /* ContainerApi */], __WEBPACK_IMPORTED_MODULE_6__providers_share_service_share_service__["a" /* ShareService */]])
    ], EditBookComponent);
    return EditBookComponent;
}());



/***/ }),

/***/ "./src/app/pages/books/edit-book/edit-book.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditBookModule", function() { return EditBookModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_book_component__ = __webpack_require__("./src/app/pages/books/edit-book/edit-book.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__edit_book_routing_module__ = __webpack_require__("./src/app/pages/books/edit-book/edit-book-routing.module.ts");
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









var EditBookModule = /** @class */ (function () {
    function EditBookModule() {
    }
    EditBookModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__edit_book_routing_module__["a" /* EditBookRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["DialogModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["EditorModule"],
                __WEBPACK_IMPORTED_MODULE_7_angular2_busy__["BusyModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__edit_book_component__["a" /* EditBookComponent */]
            ]
        })
    ], EditBookModule);
    return EditBookModule;
}());



/***/ })

});
//# sourceMappingURL=edit-book.module.chunk.js.map