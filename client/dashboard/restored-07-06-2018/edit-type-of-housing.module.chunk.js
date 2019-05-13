webpackJsonp(["edit-type-of-housing.module"],{

/***/ "./src/app/pages/type-of-housing/edit-type-of-housing/edit-type-of-housing-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditTypeOfHousingRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_type_of_housing_component__ = __webpack_require__("./src/app/pages/type-of-housing/edit-type-of-housing/edit-type-of-housing.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__edit_type_of_housing_component__["a" /* EditTypeOfHousingComponent */],
        data: {
            title: 'Edit Type of Housing'
        }
    }
];
var EditTypeOfHousingRoutingModule = /** @class */ (function () {
    function EditTypeOfHousingRoutingModule() {
    }
    EditTypeOfHousingRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], EditTypeOfHousingRoutingModule);
    return EditTypeOfHousingRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/type-of-housing/edit-type-of-housing/edit-type-of-housing.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"overlay\" *ngIf=\"loading\">\r\n    <i class=\"fa fa-spinner fa-pulse fa-3x fa-fw contCenter\"></i> <span class=\"sr-only\">Loading...</span>\r\n</div>\r\n<div class=\"animated fadeIn\" *ngIf=\"!loading\">\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <button type=\"button\" class=\"backBtn\" tabindex=\"0\" [routerLinkActive]=\"['active']\" [routerLink]=\"['/type-of-housing']\"><i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i> Back</button>\r\n                    <div>\r\n                        Edit Type of Housing\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <form #typOfHoungForm=\"ngForm\">\r\n                        <div class=\"col-md-12\">\r\n                            <div class=\"card-Wrapper\">\r\n                                <div class=\"card-block\">\r\n                                    <div class=\"primaryDetails\">\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-md-4\">\r\n                                                <div class=\"form-group\">\r\n                                                    <label for=\"name\">Type of Housing Name*</label>\r\n                                                    <input type=\"text\" class=\"form-control\" id=\"typeOfHousingNameId\" required name=\"typOfHousngName\" placeholder=\"Enter Type of Housing name\" [(ngModel)]=\"typOfHousngName\" #typeOfHousingNameId=\"ngModel\" pattern=\"^[^-\\s][a-zA-Z - () \\/ '\\s-]+$\" maxlength=\"50\">\r\n                                                    <div class=\"error-place\">\r\n                                                        <div *ngIf=\"typeOfHousingNameId.errors && (typeOfHousingNameId.dirty || typeOfHousingNameId.touched || submitted)\" class=\"error\">\r\n                                                            <span *ngIf=\"typeOfHousingNameId.errors?.required\">\r\n                                                                Type Of Housing name is required\r\n                                                            </span>\r\n                                                            <span *ngIf=\"typeOfHousingNameId.errors.pattern\">\r\n                                                                Please enter a valid type of housing name.\r\n                                                            </span>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"col-md-3\">\r\n                                                <div class=\"form-group selectAppWrap\">\r\n                                                    <label for=\"status\">Type of Housing Status</label>\r\n                                                    <!-- <p-toggleButton name=\"contractor_status\" [(ngModel)]=\"contractor_status\" #contractorStatusid=\"ngModel\" onLabel=\"Active\" offLabel=\"Inactive\" onIcon=\"fa-check-square\" offIcon=\"fa-square\" [style]=\"{'width':'150px'}\" (onChange)=\"contractorStatusChanged($event)\"></p-toggleButton> -->\r\n                                                    <div class=\"selectRadio\">\r\n                                                        <div class=\"radio\" *ngIf=\"!subTypeCount < 1\">\r\n                                                            <label><input type=\"radio\" [value]=\"true\"  name=\"typOfHusngStatus\" [(ngModel)]=\"typOfHusngStatus\">Active</label>\r\n                                                        </div>\r\n                                                        <div class=\"radio\" *ngIf=\"!projectCount > 0\">\r\n                                                            <label><input type=\"radio\" [value]=\"false\" name=\"typOfHusngStatus\" [(ngModel)]=\"typOfHusngStatus\">Inactive</label>\r\n                                                        </div>\r\n                                                        <p *ngIf=\"projectCount > 0\">\r\n                                                            Type of housing is already been used so it cannot be inactive\r\n                                                        </p>\r\n                                                        <p *ngIf=\"subTypeCount < 1\">No Sub Type of housing assigned so cannot be Active</p>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-12\">\r\n                            <div class=\"buttonContainer\">\r\n                                <div class=\"form-group\">\r\n                                    <button *ngIf=\"!loading\" class=\"btn darkBtn\" type=\"button\" (click)=\"submit(typOfHoungForm)\">Submit</button>\r\n                                    <div class=\"loader\" *ngIf=\"loading\"><i class=\"fa fa-spinner fa-spin fa-2x fa-fw\"></i></div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"dargPop\">\r\n    <p-dialog [modal]=\"true\" (onHide)=\"goToListing()\" [(visible)]=\"display\" *ngIf=\"result == 'success'\">\r\n        <h6>Type Of Housing Updated Successfully</h6>\r\n    </p-dialog>\r\n    <p-dialog header=\"Type Of Housing Updated\" [modal]=\"true\" [(visible)]=\"display\" *ngIf=\"result != 'success'\">\r\n        <p>{{result}}</p>\r\n    </p-dialog>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/type-of-housing/edit-type-of-housing/edit-type-of-housing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditTypeOfHousingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_loopback_sdk__ = __webpack_require__("./src/shared/loopback-sdk/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_core__ = __webpack_require__("./node_modules/angular2-cookie/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_cookie_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_share_service_share_service__ = __webpack_require__("./src/providers/share-service/share-service.ts");
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






var EditTypeOfHousingComponent = /** @class */ (function () {
    function EditTypeOfHousingComponent(loopAuth, route, http, _cookieService, books, router, containerApi, share, cityApi, typeOfHousingApi) {
        this.loopAuth = loopAuth;
        this.route = route;
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
        this.typOfHusngStatus = false;
        this.projectCount = 0;
        this.subTypeCount = 0;
        this.equipmentId = 0;
        this.equipmentPreviousStatus = false;
        this.editTypeOfHusng = {
            "id": 0,
            "type_of_housing": "",
            "status": 0,
        };
        this.userDetails = this.loopAuth.getCurrentUserData();
        this.rolename = this.userDetails.userDet.roles;
        this.id = this.route.snapshot.params['id'];
        this.loginFlagToken = this._cookieService.get(sdkPrefix + 'id');
    }
    EditTypeOfHousingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        var dataArrObj = {
            "id": this.id
        };
        this.typeOfHousingApi.getTypeOfHousingStage(dataArrObj).subscribe(function (data) {
            if (data) {
                var result = data.result[0];
                _this.equipmentId = result.id;
                _this.typOfHousngName = result.type_of_housing;
                _this.typOfHusngStatus = (result.status) ? true : false;
                _this.projectCount = result.usedProject;
                console.log("projectCount ", _this.projectCount);
                _this.editTypeOfHusng = {
                    "id": result.id,
                    "type_of_housing": result.type_of_housing,
                    "status": result.status,
                };
                _this.checkSubTypeCount(_this.editTypeOfHusng).then(function (total) {
                    _this.loading = false;
                    _this.subTypeCount = total;
                    //this.result = "Type of housing is already been used so it cannot be inactive";
                    //this.display = true;
                }, function (err) {
                    console.log("err", err);
                    _this.loading = false;
                });
            }
            _this.loading = false;
        }, function (err) {
            console.log("err", err);
            _this.loading = false;
        }, function () {
        });
    };
    EditTypeOfHousingComponent.prototype.goToListing = function () {
        // window.location.reload();
        this.router.navigate(["type-of-housing"]);
    };
    EditTypeOfHousingComponent.prototype.submit = function (equipmentForm) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var date, currentdate;
            return __generator(this, function (_a) {
                this.submitted = true;
                if (equipmentForm.valid) {
                    this.loading = true;
                    date = new Date();
                    currentdate = date.getTime();
                    this.editTypeOfHusng.id = this.equipmentId;
                    this.editTypeOfHusng.type_of_housing = this.capital_letter(this.typOfHousngName);
                    this.editTypeOfHusng.status = (this.typOfHusngStatus) ? 1 : 0;
                    //this.editTypeOfHusng.updated_date = currentdate;
                    //updating equipments-master
                    // this.ifNameExist(this.editTypeOfHusng).then((total)=>{
                    // 	if(total > 0){
                    // 		this.loading = false;
                    // 		this.result = "Equipment name already exist";
                    // 		this.display = true;
                    // 	}else{
                    // 		console.log("this.editTypeOfHusng ",this.editTypeOfHusng);
                    this.checkCount(this.editTypeOfHusng).then(function (total) {
                        if (total > 0 && !_this.editTypeOfHusng.status) {
                            _this.loading = false;
                            _this.result = "Type of housing is already been used so it cannot be inactive";
                            _this.display = true;
                        }
                        else {
                            _this.typeOfHousingApi.upsertPatch(_this.editTypeOfHusng).subscribe(function (data) {
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
                    // 	}
                    // },(err)=>{
                    // 	this.loading = false;
                    // 	this.result = "Something went wrong";
                    // 	this.display = true;
                    // });
                }
                return [2 /*return*/];
            });
        });
    };
    EditTypeOfHousingComponent.prototype.ifNameExist = function (dataObj) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var access_token = _this.loopAuth.getAccessTokenId();
                var typeOfHusngString = dataObj.type_of_housing;
                var cond = { "type_of_housing": typeOfHusngString.toString() };
                var api = "/api/type_of_housing_masters/count?where=";
                var url = hostname + api + encodeURI(JSON.stringify(cond)) + "&access_token=" + access_token;
                _this.http.get(url).subscribe(function (data) {
                    console.log("Count ", data.json());
                    resolve(data.json().count);
                }, function (err) {
                    reject(err);
                });
            }
            catch (err) {
                reject(err);
            }
        });
    };
    EditTypeOfHousingComponent.prototype.checkCount = function (dataObj) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var access_token = _this.loopAuth.getAccessTokenId();
                var type_of_housing_id = dataObj.id;
                var cond = { "type_of_housing_id": type_of_housing_id };
                var api = "/api/type_of_housing_mappings/count?where=";
                var url = hostname + api + encodeURI(JSON.stringify(cond)) + "&access_token=" + access_token;
                _this.http.get(url).subscribe(function (data) {
                    //console.log("Count ",data.json());
                    resolve(data.json().count);
                }, function (err) {
                    reject(err);
                });
            }
            catch (err) {
                reject(true);
            }
        });
    };
    EditTypeOfHousingComponent.prototype.checkSubTypeCount = function (dataObj) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var access_token = _this.loopAuth.getAccessTokenId();
                var type_of_housing_id = dataObj.id;
                var cond = { "parent_id": type_of_housing_id, "status": 1 };
                var api = "/api/sub_type_of_housing_masters/count?where=";
                var url = hostname + api + encodeURI(JSON.stringify(cond)) + "&access_token=" + access_token;
                _this.http.get(url).subscribe(function (data) {
                    //console.log("Count ",data.json());
                    resolve(data.json().count);
                }, function (err) {
                    reject(err);
                });
            }
            catch (err) {
                reject(true);
            }
        });
    };
    EditTypeOfHousingComponent.prototype.capital_letter = function (str) {
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
    EditTypeOfHousingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("./src/app/pages/type-of-housing/edit-type-of-housing/edit-type-of-housing.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_loopback_sdk__["m" /* LoopBackAuth */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"], __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_core__["CookieService"], __WEBPACK_IMPORTED_MODULE_2__shared_loopback_sdk__["d" /* BooksApi */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_2__shared_loopback_sdk__["g" /* ContainerApi */], __WEBPACK_IMPORTED_MODULE_5__providers_share_service_share_service__["a" /* ShareService */], __WEBPACK_IMPORTED_MODULE_2__shared_loopback_sdk__["e" /* CityApi */], __WEBPACK_IMPORTED_MODULE_2__shared_loopback_sdk__["t" /* Type_of_housing_masterApi */]])
    ], EditTypeOfHousingComponent);
    return EditTypeOfHousingComponent;
}());



/***/ }),

/***/ "./src/app/pages/type-of-housing/edit-type-of-housing/edit-type-of-housing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTypeOfHousingModule", function() { return EditTypeOfHousingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_type_of_housing_component__ = __webpack_require__("./src/app/pages/type-of-housing/edit-type-of-housing/edit-type-of-housing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__edit_type_of_housing_routing_module__ = __webpack_require__("./src/app/pages/type-of-housing/edit-type-of-housing/edit-type-of-housing-routing.module.ts");
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









var EditTypeOfHousingModule = /** @class */ (function () {
    function EditTypeOfHousingModule() {
    }
    EditTypeOfHousingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__edit_type_of_housing_routing_module__["a" /* EditTypeOfHousingRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["DialogModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["EditorModule"],
                __WEBPACK_IMPORTED_MODULE_7_angular2_busy__["BusyModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__edit_type_of_housing_component__["a" /* EditTypeOfHousingComponent */]
            ]
        })
    ], EditTypeOfHousingModule);
    return EditTypeOfHousingModule;
}());



/***/ })

});
//# sourceMappingURL=edit-type-of-housing.module.chunk.js.map