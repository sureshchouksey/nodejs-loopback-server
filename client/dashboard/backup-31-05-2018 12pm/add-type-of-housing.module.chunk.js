webpackJsonp(["add-type-of-housing.module"],{

/***/ "./src/app/pages/type-of-housing/add-type-of-housing/add-type-of-housing-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TypeOfHousingCrudRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_type_of_housing_component__ = __webpack_require__("./src/app/pages/type-of-housing/add-type-of-housing/add-type-of-housing.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__add_type_of_housing_component__["a" /* AddTypeOfHousingComponent */],
        data: {
            title: 'Add Type of Housing'
        }
    }
];
var TypeOfHousingCrudRoutingModule = /** @class */ (function () {
    function TypeOfHousingCrudRoutingModule() {
    }
    TypeOfHousingCrudRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], TypeOfHousingCrudRoutingModule);
    return TypeOfHousingCrudRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/type-of-housing/add-type-of-housing/add-type-of-housing.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"overlay\" *ngIf=\"loading\">\r\n    <i class=\"fa fa-spinner fa-pulse fa-3x fa-fw contCenter\"></i> <span class=\"sr-only\">Loading...</span>\r\n</div>\r\n<div class=\"animated fadeIn\" *ngIf=\"!loading\">\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <button type=\"button\" class=\"backBtn\" tabindex=\"0\" [routerLinkActive]=\"['active']\" [routerLink]=\"['/type-of-housing']\"><i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i> Back</button>\r\n                    <div>\r\n                        Add Type of Housing\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <form #typeOfHousingForm=\"ngForm\">\r\n                        <div class=\"col-md-12\">\r\n                            <div class=\"card-Wrapper\">\r\n                                <div class=\"card-block\">\r\n                                    <div class=\"primaryDetails\">\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-md-4\">\r\n                                                <div class=\"form-group\">\r\n                                                    <label for=\"name\">Type of Housing Name*</label>\r\n                                                    <input type=\"text\" class=\"form-control\" id=\"typeOfHousingNameId\" required name=\"typOfHousngName\" placeholder=\"Enter Type of Housing name\" [(ngModel)]=\"typOfHousngName\" #typeOfHousingNameId=\"ngModel\" pattern=\"^[^-\\s][a-zA-Z '\\s-]+$\">\r\n                                                    <div class=\"error-place\" maxlength=\"50\">\r\n                                                        <div *ngIf=\"typeOfHousingNameId.errors && (typeOfHousingNameId.dirty || typeOfHousingNameId.touched || submitted)\" class=\"error\">\r\n                                                            <span *ngIf=\"typeOfHousingNameId.errors.required\">\r\n                                                                Type of Housing name is required\r\n                                                            </span>\r\n                                                            <span *ngIf=\"typeOfHousingNameId.errors.pattern\">\r\n                                                                Please enter a valid type of housing name.\r\n                                                            </span>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"col-md-3\">\r\n                                                <div class=\"form-group selectAppWrap\">\r\n                                                    <label for=\"status\">Type of Housing Status</label>\r\n                                                    <!-- <p-toggleButton name=\"contractor_status\" [(ngModel)]=\"contractor_status\" #contractorStatusid=\"ngModel\" onLabel=\"Active\" offLabel=\"Inactive\" onIcon=\"fa-check-square\" offIcon=\"fa-square\" [style]=\"{'width':'150px'}\" (onChange)=\"contractorStatusChanged($event)\"></p-toggleButton> -->\r\n                                                    <div class=\"selectRadio\">\r\n                                                        <div class=\"radio\">\r\n                                                            <label><input type=\"radio\" [value]=\"true\"  name=\"typOfHusngStatus\" [(ngModel)]=\"typOfHusngStatus\">Active</label>\r\n                                                        </div>\r\n                                                        <div class=\"radio\">\r\n                                                            <label><input type=\"radio\" [value]=\"false\" name=\"typOfHusngStatus\" [(ngModel)]=\"typOfHusngStatus\">Inactive</label>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-12\">\r\n                            <div class=\"buttonContainer\">\r\n                                <div class=\"form-group\">\r\n                                    <button *ngIf=\"!loading\" class=\"btn darkBtn\" type=\"submit\" (click)=\"submit(typeOfHousingForm)\">Submit</button>\r\n                                    <div class=\"loader\" *ngIf=\"loading\"><i class=\"fa fa-spinner fa-spin fa-2x fa-fw\"></i></div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"dargPop\">\r\n    <p-dialog [modal]=\"true\" (onHide)=\"goToListing()\" [(visible)]=\"display\" *ngIf=\"result == 'success'\">\r\n        <h6>Type of housing added Successfully</h6>\r\n    </p-dialog>\r\n    <p-dialog header=\"Type of housing\" [modal]=\"true\" [(visible)]=\"display\" *ngIf=\"result != 'success'\">\r\n        <p>{{result}}</p>\r\n    </p-dialog>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/type-of-housing/add-type-of-housing/add-type-of-housing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddTypeOfHousingComponent; });
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







var AddTypeOfHousingComponent = /** @class */ (function () {
    function AddTypeOfHousingComponent(loopAuth, http, _cookieService, books, router, containerApi, share, cityApi, typeOfHousingApi) {
        this.loopAuth = loopAuth;
        this.http = http;
        this._cookieService = _cookieService;
        this.books = books;
        this.router = router;
        this.containerApi = containerApi;
        this.share = share;
        this.cityApi = cityApi;
        this.typeOfHousingApi = typeOfHousingApi;
        this.display = false;
        this.submitted = false;
        this.loading = false;
        this.perPageLimit = 10;
        this.offset = 0;
        this.typOfHusngStatus = false;
        this.userDetails = this.loopAuth.getCurrentUserData();
        this.rolename = this.userDetails.userDet.roles;
    }
    AddTypeOfHousingComponent.prototype.submit = function (form) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var validFlag, dataArrObj;
            return __generator(this, function (_a) {
                this.submitted = true;
                validFlag = true;
                if (form.valid) {
                    dataArrObj = {
                        "type_of_housing": this.capital_letter(this.typOfHousngName),
                        "status": (this.typOfHusngStatus) ? true : false
                    };
                    this.loading = true;
                    this.ifNameExist(dataArrObj).then(function (total) {
                        if (total > 0) {
                            _this.loading = false;
                            _this.result = "Type of housing name already exist";
                            _this.display = true;
                        }
                        else {
                            _this.typeOfHousingApi.upsert(dataArrObj).subscribe(function (data) {
                                _this.loading = false;
                                _this.result = "success";
                                _this.display = true;
                            }, function (err) {
                                _this.loading = false;
                                _this.result = "Something went wrong";
                                _this.display = true;
                            });
                        }
                    }, function (err) {
                        _this.loading = false;
                        _this.result = "Something went wrong";
                        _this.display = true;
                    });
                }
                return [2 /*return*/];
            });
        });
    };
    AddTypeOfHousingComponent.prototype.ifNameExist = function (dataObj) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                _this.typeOfHousingApi.getTypeOfHousingStageCountName({ "type_of_housing": dataObj.type_of_housing }).subscribe(function (data) {
                    resolve(data.result[0].total);
                }, function (err) {
                    reject(err);
                });
            }
            catch (err) {
                reject(err);
            }
        });
    };
    AddTypeOfHousingComponent.prototype.ngOnInit = function () {
    };
    AddTypeOfHousingComponent.prototype.capital_letter = function (str) {
        str = str.split(" ");
        for (var i = 0, x = str.length; i < x; i++) {
            str[i] = str[i][0].toUpperCase() + str[i].substr(1);
        }
        return str.join(" ");
    };
    AddTypeOfHousingComponent.prototype.goToListing = function () {
        // window.location.reload();
        this.router.navigate(["type-of-housing"]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('typOfHousngName'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["NgModel"])
    ], AddTypeOfHousingComponent.prototype, "name", void 0);
    AddTypeOfHousingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("./src/app/pages/type-of-housing/add-type-of-housing/add-type-of-housing.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__shared_loopback_sdk__["k" /* LoopBackAuth */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_4_angular2_cookie_core__["CookieService"], __WEBPACK_IMPORTED_MODULE_3__shared_loopback_sdk__["d" /* BooksApi */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_3__shared_loopback_sdk__["g" /* ContainerApi */], __WEBPACK_IMPORTED_MODULE_6__providers_share_service_share_service__["a" /* ShareService */], __WEBPACK_IMPORTED_MODULE_3__shared_loopback_sdk__["e" /* CityApi */], __WEBPACK_IMPORTED_MODULE_3__shared_loopback_sdk__["r" /* Type_of_housing_masterApi */]])
    ], AddTypeOfHousingComponent);
    return AddTypeOfHousingComponent;
}());



/***/ }),

/***/ "./src/app/pages/type-of-housing/add-type-of-housing/add-type-of-housing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTypeOfHousingModule", function() { return AddTypeOfHousingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_type_of_housing_component__ = __webpack_require__("./src/app/pages/type-of-housing/add-type-of-housing/add-type-of-housing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__add_type_of_housing_routing_module__ = __webpack_require__("./src/app/pages/type-of-housing/add-type-of-housing/add-type-of-housing-routing.module.ts");
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









var AddTypeOfHousingModule = /** @class */ (function () {
    function AddTypeOfHousingModule() {
    }
    AddTypeOfHousingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__add_type_of_housing_routing_module__["a" /* TypeOfHousingCrudRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["DialogModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["EditorModule"],
                __WEBPACK_IMPORTED_MODULE_7_angular2_busy__["BusyModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__add_type_of_housing_component__["a" /* AddTypeOfHousingComponent */]
            ]
        })
    ], AddTypeOfHousingModule);
    return AddTypeOfHousingModule;
}());



/***/ })

});
//# sourceMappingURL=add-type-of-housing.module.chunk.js.map