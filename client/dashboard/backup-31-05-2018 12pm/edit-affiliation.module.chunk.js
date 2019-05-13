webpackJsonp(["edit-affiliation.module"],{

/***/ "./src/app/pages/affiliation/edit-affiliation/edit-affiliation-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditAffiliationRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_affiliation_component__ = __webpack_require__("./src/app/pages/affiliation/edit-affiliation/edit-affiliation.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__edit_affiliation_component__["a" /* EditAffiliationComponent */],
        data: {
            title: 'Edit Affiliation'
        }
    }
];
var EditAffiliationRoutingModule = /** @class */ (function () {
    function EditAffiliationRoutingModule() {
    }
    EditAffiliationRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], EditAffiliationRoutingModule);
    return EditAffiliationRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/affiliation/edit-affiliation/edit-affiliation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"overlay\" *ngIf=\"loading\">\r\n    <i class=\"fa fa-spinner fa-pulse fa-3x fa-fw contCenter\"></i> <span class=\"sr-only\">Loading...</span>\r\n</div>\r\n<div class=\"animated fadeIn\" *ngIf=\"!loading\">\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <button type=\"button\" class=\"backBtn\" tabindex=\"0\" [routerLinkActive]=\"['active']\" [routerLink]=\"['/affiliation']\"><i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i> Back</button>\r\n                    <div>\r\n                        Edit Affiliation\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <form #equipmentForm=\"ngForm\">\r\n                        <div class=\"col-md-12\">\r\n                            <div class=\"card-Wrapper\">\r\n                                <div class=\"card-block\">\r\n                                    <div class=\"primaryDetails\">\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-md-4\">\r\n                                                <div class=\"form-group\">\r\n                                                    <label for=\"name\">Affiliation Name*</label>\r\n                                                    <input type=\"text\" class=\"form-control\" id=\"affiliationNameId\" required name=\"affiliationName\" placeholder=\"Enter Affiliation name\" [(ngModel)]=\"affiliationName\" #affiliationNameId=\"ngModel\" pattern=\"^[^-\\s][a-zA-Z - () \\/ '\\s-]+$\">\r\n                                                    <div class=\"error-place\" maxlength=\"50\">\r\n                                                        <div *ngIf=\"affiliationNameId.errors && (affiliationNameId.dirty || affiliationNameId.touched || submitted)\" class=\"error\">\r\n                                                            <span *ngIf=\"affiliationNameId.errors?.required\">\r\n                                                                Affiliation name is required\r\n                                                            </span>\r\n                                                            <span *ngIf=\"affiliationNameId.errors.pattern\">\r\n                                                                Please enter a valid affiliation name.\r\n                                                            </span>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"col-md-3\">\r\n                                                <div class=\"form-group selectAppWrap\">\r\n                                                    <label for=\"status\">Affiliation Status</label>\r\n                                                    <!-- <p-toggleButton name=\"contractor_status\" [(ngModel)]=\"contractor_status\" #contractorStatusid=\"ngModel\" onLabel=\"Active\" offLabel=\"Inactive\" onIcon=\"fa-check-square\" offIcon=\"fa-square\" [style]=\"{'width':'150px'}\" (onChange)=\"contractorStatusChanged($event)\"></p-toggleButton> -->\r\n                                                    <div class=\"selectRadio\">\r\n                                                        <div class=\"radio\">\r\n                                                            <label><input type=\"radio\" [value]=\"true\"  name=\"affiliationStatus\" [(ngModel)]=\"affiliationStatus\">Active</label>\r\n                                                        </div>\r\n                                                        <div class=\"radio\" *ngIf=\"!contractorCount > 0\">\r\n                                                            <label><input type=\"radio\" [value]=\"false\" name=\"affiliationStatus\" [(ngModel)]=\"affiliationStatus\">Inactive</label>\r\n                                                        </div>\r\n                                                        <p *ngIf=\"contractorCount > 0\">\r\n                                                            Affiliation is already been used so it cannot be inactive\r\n                                                        </p>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-12\">\r\n                            <div class=\"buttonContainer\">\r\n                                <div class=\"form-group\">\r\n                                    <button *ngIf=\"!loading\" class=\"btn darkBtn\" type=\"submit\" (click)=\"submit(equipmentForm)\">Submit</button>\r\n                                    <div class=\"loader\" *ngIf=\"loading\"><i class=\"fa fa-spinner fa-spin fa-2x fa-fw\"></i></div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"dargPop\">\r\n    <p-dialog [modal]=\"true\" (onHide)=\"goToListing()\" [(visible)]=\"display\" *ngIf=\"result == 'success'\">\r\n        <h6>Affiliation Updated Successfully</h6>\r\n    </p-dialog>\r\n    <p-dialog header=\"Affiliation\" [modal]=\"true\" [(visible)]=\"display\" *ngIf=\"result != 'success'\">\r\n        <p>{{result}}</p>\r\n    </p-dialog>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/affiliation/edit-affiliation/edit-affiliation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditAffiliationComponent; });
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






var EditAffiliationComponent = /** @class */ (function () {
    function EditAffiliationComponent(loopAuth, route, http, _cookieService, books, router, containerApi, share, cityApi, affiliationApi) {
        this.loopAuth = loopAuth;
        this.route = route;
        this.http = http;
        this._cookieService = _cookieService;
        this.books = books;
        this.router = router;
        this.containerApi = containerApi;
        this.share = share;
        this.cityApi = cityApi;
        this.affiliationApi = affiliationApi;
        this.display = false;
        this.submitted = false;
        this.loading = false;
        this.affiliationStatus = false;
        this.contractorCount = 0;
        this.municipalityCount = 0;
        this.certificateId = 0;
        this.equipmentPreviousStatus = false;
        this.editAffiliation = {
            "certificate_id": 0,
            "certificate_name": "",
            "status": 0,
        };
        this.userDetails = this.loopAuth.getCurrentUserData();
        this.rolename = this.userDetails.userDet.roles;
        this.id = this.route.snapshot.params['id'];
        this.loginFlagToken = this._cookieService.get(sdkPrefix + 'id');
    }
    EditAffiliationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        var dataArrObj = {
            "certificate_id": this.id
        };
        this.affiliationApi.getAffiliation(dataArrObj).subscribe(function (data) {
            if (data) {
                var result = data.result[0];
                _this.certificateId = result.certificate_id;
                _this.affiliationName = result.certificate_name;
                _this.affiliationStatus = (result.status) ? true : false;
                _this.contractorCount = result.total;
                console.log("contractorCount ", _this.contractorCount);
                _this.editAffiliation = {
                    "certificate_id": result.certificate_id,
                    "certificate_name": result.certificate_name,
                    "status": result.status,
                };
            }
            _this.loading = false;
        }, function (err) {
            console.log("err", err);
            _this.loading = false;
        }, function () {
        });
    };
    EditAffiliationComponent.prototype.goToListing = function () {
        // window.location.reload();
        this.router.navigate(["affiliation"]);
    };
    EditAffiliationComponent.prototype.submit = function (affiliationForm) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var date, currentdate;
            return __generator(this, function (_a) {
                this.submitted = true;
                if (affiliationForm.valid) {
                    this.loading = true;
                    date = new Date();
                    currentdate = date.getTime();
                    this.editAffiliation.certificate_id = this.certificateId;
                    this.editAffiliation.certificate_name = this.capital_letter(this.affiliationName);
                    this.editAffiliation.status = (this.affiliationStatus) ? 1 : 0;
                    //this.editAffiliation.updated_date = currentdate;
                    //updating equipments-master
                    // this.ifNameExist(this.editAffiliation).then((total)=>{
                    // 	if(total > 0){
                    // 		this.loading = false;
                    // 		this.result = "Equipment name already exist";
                    // 		this.display = true;
                    // 	}else{
                    // 		console.log("this.editAffiliation ",this.editAffiliation);
                    this.affiliationApi.upsertPatch(this.editAffiliation).subscribe(function (data) {
                        _this.loading = false;
                        _this.result = "success";
                        _this.display = true;
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
    EditAffiliationComponent.prototype.ifNameExist = function (dataObj) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                _this.affiliationApi.getAffiliationCountName({ "certificate_name": dataObj.certificate_name }).subscribe(function (data) {
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
    EditAffiliationComponent.prototype.capital_letter = function (str) {
        str = str.split(" ");
        for (var i = 0, x = str.length; i < x; i++) {
            str[i] = str[i][0].toUpperCase() + str[i].substr(1);
        }
        return str.join(" ");
    };
    EditAffiliationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("./src/app/pages/affiliation/edit-affiliation/edit-affiliation.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_loopback_sdk__["k" /* LoopBackAuth */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"], __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_core__["CookieService"], __WEBPACK_IMPORTED_MODULE_2__shared_loopback_sdk__["d" /* BooksApi */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_2__shared_loopback_sdk__["g" /* ContainerApi */], __WEBPACK_IMPORTED_MODULE_5__providers_share_service_share_service__["a" /* ShareService */], __WEBPACK_IMPORTED_MODULE_2__shared_loopback_sdk__["e" /* CityApi */], __WEBPACK_IMPORTED_MODULE_2__shared_loopback_sdk__["h" /* Contractor_affiliation_masterApi */]])
    ], EditAffiliationComponent);
    return EditAffiliationComponent;
}());



/***/ }),

/***/ "./src/app/pages/affiliation/edit-affiliation/edit-affiliation.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAffiliationModule", function() { return EditAffiliationModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_affiliation_component__ = __webpack_require__("./src/app/pages/affiliation/edit-affiliation/edit-affiliation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__edit_affiliation_routing_module__ = __webpack_require__("./src/app/pages/affiliation/edit-affiliation/edit-affiliation-routing.module.ts");
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









var EditAffiliationModule = /** @class */ (function () {
    function EditAffiliationModule() {
    }
    EditAffiliationModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__edit_affiliation_routing_module__["a" /* EditAffiliationRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["DialogModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["EditorModule"],
                __WEBPACK_IMPORTED_MODULE_7_angular2_busy__["BusyModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__edit_affiliation_component__["a" /* EditAffiliationComponent */]
            ]
        })
    ], EditAffiliationModule);
    return EditAffiliationModule;
}());



/***/ })

});
//# sourceMappingURL=edit-affiliation.module.chunk.js.map