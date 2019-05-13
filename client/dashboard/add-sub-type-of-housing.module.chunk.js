webpackJsonp(["add-sub-type-of-housing.module"],{

/***/ "./src/app/pages/sub-type-of-housing/add-sub-type-of-housing/add-sub-type-of-housing-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubTypeOfHousingCrudRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_sub_type_of_housing_component__ = __webpack_require__("./src/app/pages/sub-type-of-housing/add-sub-type-of-housing/add-sub-type-of-housing.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__add_sub_type_of_housing_component__["a" /* AddSubTypeOfHousingComponent */],
        data: {
            title: 'Add Sub Type of Housing'
        }
    }
];
var SubTypeOfHousingCrudRoutingModule = /** @class */ (function () {
    function SubTypeOfHousingCrudRoutingModule() {
    }
    SubTypeOfHousingCrudRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], SubTypeOfHousingCrudRoutingModule);
    return SubTypeOfHousingCrudRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/sub-type-of-housing/add-sub-type-of-housing/add-sub-type-of-housing.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"overlay\" *ngIf=\"loading\">\r\n    <i class=\"fa fa-spinner fa-pulse fa-3x fa-fw contCenter\"></i> <span class=\"sr-only\">Loading...</span>\r\n</div>\r\n<div class=\"animated fadeIn\" *ngIf=\"!loading\">\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <button type=\"button\" class=\"backBtn\" tabindex=\"0\" [routerLinkActive]=\"['active']\" [routerLink]=\"['/sub-type-of-housing']\"><i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i> Back</button>\r\n                    <div>\r\n                        Add Sub Type of Housing\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <form #subTypOffHousingForm=\"ngForm\">\r\n                        <div class=\"col-md-12\">\r\n                            <div class=\"card-Wrapper\">\r\n                                <div class=\"card-block\">\r\n                                    <div class=\"primaryDetails\">\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-md-4\">\r\n                                                <div class=\"form-group\">\r\n                                                    <label for=\"name\">Sub Type of Housing Name*</label>\r\n                                                    <input type=\"text\" class=\"form-control\" id=\"subTypOfHusngNameId\" required name=\"subTypOfHusngName\" placeholder=\"Enter sub type of housing name\" [(ngModel)]=\"subTypOfHusngName\" #subTypOfHusngNameId=\"ngModel\" pattern=\"^[^-\\s][a-zA-Z - & () \\/ '\\s-]+$\" maxlength=\"50\">\r\n                                                    <div class=\"error-place\">\r\n                                                        <div *ngIf=\"subTypOfHusngNameId.errors && (subTypOfHusngNameId.dirty || subTypOfHusngNameId.touched || submitted)\" class=\"error\">\r\n                                                            <span *ngIf=\"subTypOfHusngNameId.errors.required\">\r\n                                                                Sub Type of Housing name is required\r\n                                                            </span>\r\n                                                            <span *ngIf=\"subTypOfHusngNameId.errors.pattern\">\r\n                                                                Please enter a valid sub type of housing name.\r\n                                                            </span>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"col-md-4\">\r\n                                                <div class=\"form-group\">\r\n                                                    <label for=\"name\">Type of Housing Name*</label>\r\n                                                    <select class=\"form-control\" id=\"typeOfHousingNameId\" required name=\"typeOfHousingName\" [(ngModel)]=\"typeOfHousingName\" #typeOfHousingNameId=\"ngModel\">\r\n                                                        <!-- <option value=\"2\">Housing</option>\r\n                                                        <option value=\"3\">Building</option> -->\r\n                                                        <option *ngFor=\"let item of housingNameData\"  [value]=\"item.id\">{{item.type_of_housing}}</option>\r\n                                                    </select>\r\n                                                    <div *ngIf=\"typeOfHousingNameId.errors && (typeOfHousingNameId.dirty || typeOfHousingNameId.touched || submitted)\" class=\"error\">\r\n                                                        <span *ngIf=\"typeOfHousingNameId.errors.required\">\r\n                                                            Type of Housing name is required\r\n                                                        </span>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"col-md-3\">\r\n                                                <div class=\"form-group selectAppWrap\">\r\n                                                    <label for=\"status\">Sub Type of Housing Status</label>\r\n                                                    <!-- <p-toggleButton name=\"contractor_status\" [(ngModel)]=\"contractor_status\" #contractorStatusid=\"ngModel\" onLabel=\"Active\" offLabel=\"Inactive\" onIcon=\"fa-check-square\" offIcon=\"fa-square\" [style]=\"{'width':'150px'}\" (onChange)=\"contractorStatusChanged($event)\"></p-toggleButton> -->\r\n                                                    <div class=\"selectRadio\">\r\n                                                        <div class=\"radio\">\r\n                                                            <label><input type=\"radio\" [value]=\"true\"  name=\"subTypeOfHousngStatus\" [(ngModel)]=\"subTypeOfHousngStatus\">Active</label>\r\n                                                        </div>\r\n                                                        <div class=\"radio\">\r\n                                                            <label><input type=\"radio\" [value]=\"false\" name=\"subTypeOfHousngStatus\" [(ngModel)]=\"subTypeOfHousngStatus\">Inactive</label>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"col-md-12\">\r\n                            <div class=\"buttonContainer\">\r\n                                <div class=\"form-group\">\r\n                                    <button *ngIf=\"!loading\" class=\"btn darkBtn\" type=\"button\" (click)=\"submit(subTypOffHousingForm)\">Submit</button>\r\n                                    <div class=\"loader\" *ngIf=\"loading\"><i class=\"fa fa-spinner fa-spin fa-2x fa-fw\"></i></div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"dargPop\">\r\n    <p-dialog [modal]=\"true\" (onHide)=\"goToListing()\" [(visible)]=\"display\" *ngIf=\"result == 'success'\">\r\n        <h6>Sub Type of Housing Added Successfully</h6>\r\n    </p-dialog>\r\n    <p-dialog header=\"Sub Type of Housing\" [modal]=\"true\" [(visible)]=\"display\" *ngIf=\"result != 'success'\">\r\n        <p>{{result}}</p>\r\n    </p-dialog>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/sub-type-of-housing/add-sub-type-of-housing/add-sub-type-of-housing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddSubTypeOfHousingComponent; });
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







var AddSubTypeOfHousingComponent = /** @class */ (function () {
    function AddSubTypeOfHousingComponent(loopAuth, http, _cookieService, books, router, containerApi, share, cityApi, subTypHousngApi, type_of_housing_api) {
        this.loopAuth = loopAuth;
        this.http = http;
        this._cookieService = _cookieService;
        this.books = books;
        this.router = router;
        this.containerApi = containerApi;
        this.share = share;
        this.cityApi = cityApi;
        this.subTypHousngApi = subTypHousngApi;
        this.type_of_housing_api = type_of_housing_api;
        this.display = false;
        this.submitted = false;
        this.loading = false;
        this.perPageLimit = 10;
        this.offset = 0;
        this.housingNameData = [];
        this.subTypeOfHousngStatus = false;
        this.userDetails = this.loopAuth.getCurrentUserData();
        this.rolename = this.userDetails.userDet.roles;
    }
    AddSubTypeOfHousingComponent.prototype.submit = function (form) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var validFlag, dataObj, totalCount_1;
            return __generator(this, function (_a) {
                this.submitted = true;
                validFlag = true;
                if (form.valid) {
                    dataObj = {
                        "name": this.capital_letter(this.subTypOfHusngName),
                        "parent_id": this.typeOfHousingName,
                        "status": false
                    };
                    this.loading = true;
                    this.ifNameExist(dataObj).then(function (count) {
                        totalCount_1 = count;
                        console.log(totalCount_1);
                        if (totalCount_1 > 0) {
                            _this.loading = false;
                            _this.display = true;
                            _this.result = 'Sub type of housing name already exist.';
                        }
                        else {
                            _this.subTypHousngApi.upsert(dataObj).subscribe(function (data) {
                                _this.loading = false;
                                _this.display = true;
                                _this.result = 'success';
                            }, function (err) {
                                _this.loading = false;
                                _this.display = true;
                                _this.result = 'Something went wrong.';
                            });
                        }
                    }, function (err) {
                        _this.loading = false;
                        _this.display = true;
                        _this.result = 'Something went wrong.';
                    });
                }
                return [2 /*return*/];
            });
        });
    };
    AddSubTypeOfHousingComponent.prototype.ifNameExist = function (dataObj) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                _this.subTypHousngApi.getSubTypOfHousngCountName({ "name": dataObj.name, "parent_id": dataObj.parent_id }).subscribe(function (data) {
                    console.log("count", data);
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
    AddSubTypeOfHousingComponent.prototype.ngOnInit = function () {
        this.getTypeOfHousing();
    };
    AddSubTypeOfHousingComponent.prototype.capital_letter = function (str) {
        if (str != '' && str != null && str != undefined) {
            str = str.split(" ");
            for (var i = 0, x = str.length; i < x; i++) {
                str[i] = str[i][0].toUpperCase() + str[i].substr(1);
            }
            return str.join(" ");
        }
        else {
            return str;
        }
    };
    AddSubTypeOfHousingComponent.prototype.goToListing = function () {
        // window.location.reload();
        this.router.navigate(["sub-type-of-housing"]);
    };
    AddSubTypeOfHousingComponent.prototype.getTypeOfHousing = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                _this.type_of_housing_api.find().subscribe(function (data) {
                    _this.housingNameData = [];
                    for (var key in data) {
                        if (data[key].id != 1 && data[key].id != 4) {
                            _this.housingNameData.push(data[key]);
                        }
                    }
                    resolve(_this.housingNameData);
                }, function (err) {
                    _this.loading = false;
                    _this.display = false;
                    _this.result = 'Something went wrong.';
                    reject(true);
                });
            }
            catch (err) {
                _this.loading = false;
                _this.display = false;
                _this.result = 'Something went wrong.';
                reject(true);
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('typeOfHousingName'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["NgModel"])
    ], AddSubTypeOfHousingComponent.prototype, "name", void 0);
    AddSubTypeOfHousingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("./src/app/pages/sub-type-of-housing/add-sub-type-of-housing/add-sub-type-of-housing.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__shared_loopback_sdk__["m" /* LoopBackAuth */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_4_angular2_cookie_core__["CookieService"], __WEBPACK_IMPORTED_MODULE_3__shared_loopback_sdk__["d" /* BooksApi */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_3__shared_loopback_sdk__["g" /* ContainerApi */], __WEBPACK_IMPORTED_MODULE_6__providers_share_service_share_service__["a" /* ShareService */], __WEBPACK_IMPORTED_MODULE_3__shared_loopback_sdk__["e" /* CityApi */], __WEBPACK_IMPORTED_MODULE_3__shared_loopback_sdk__["s" /* Sub_type_of_housing_masterApi */], __WEBPACK_IMPORTED_MODULE_3__shared_loopback_sdk__["t" /* Type_of_housing_masterApi */]])
    ], AddSubTypeOfHousingComponent);
    return AddSubTypeOfHousingComponent;
}());



/***/ }),

/***/ "./src/app/pages/sub-type-of-housing/add-sub-type-of-housing/add-sub-type-of-housing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSubTypeOfHousingModule", function() { return AddSubTypeOfHousingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_sub_type_of_housing_component__ = __webpack_require__("./src/app/pages/sub-type-of-housing/add-sub-type-of-housing/add-sub-type-of-housing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__add_sub_type_of_housing_routing_module__ = __webpack_require__("./src/app/pages/sub-type-of-housing/add-sub-type-of-housing/add-sub-type-of-housing-routing.module.ts");
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









var AddSubTypeOfHousingModule = /** @class */ (function () {
    function AddSubTypeOfHousingModule() {
    }
    AddSubTypeOfHousingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__add_sub_type_of_housing_routing_module__["a" /* SubTypeOfHousingCrudRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["DialogModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["EditorModule"],
                __WEBPACK_IMPORTED_MODULE_7_angular2_busy__["BusyModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__add_sub_type_of_housing_component__["a" /* AddSubTypeOfHousingComponent */]
            ]
        })
    ], AddSubTypeOfHousingModule);
    return AddSubTypeOfHousingModule;
}());



/***/ })

});
//# sourceMappingURL=add-sub-type-of-housing.module.chunk.js.map