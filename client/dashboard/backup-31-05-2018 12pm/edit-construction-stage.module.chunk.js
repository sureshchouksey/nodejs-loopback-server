webpackJsonp(["edit-construction-stage.module"],{

/***/ "./src/app/pages/construction-stage/edit-construction-stage/edit-construction-stage-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditConstructionStageRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_construction_stage_component__ = __webpack_require__("./src/app/pages/construction-stage/edit-construction-stage/edit-construction-stage.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__edit_construction_stage_component__["a" /* EditConstructionStageComponent */],
        data: {
            title: 'Edit Construction-Stage'
        }
    }
];
var EditConstructionStageRoutingModule = /** @class */ (function () {
    function EditConstructionStageRoutingModule() {
    }
    EditConstructionStageRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], EditConstructionStageRoutingModule);
    return EditConstructionStageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/construction-stage/edit-construction-stage/edit-construction-stage.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"overlay\" *ngIf=\"loading\">\r\n    <i class=\"fa fa-spinner fa-pulse fa-3x fa-fw contCenter\"></i> <span class=\"sr-only\">Loading...</span>\r\n</div>\r\n<div class=\"animated fadeIn\" *ngIf=\"!loading\">\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <button type=\"button\" class=\"backBtn\" tabindex=\"0\" [routerLinkActive]=\"['active']\" [routerLink]=\"['/construction-stage']\"><i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i> Back</button>\r\n                    <div>\r\n                        Edit Construction-Stage\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <form #equipmentForm=\"ngForm\">\r\n                        <div class=\"col-md-12\">\r\n                            <div class=\"card-Wrapper\">\r\n                                <div class=\"card-block\">\r\n                                    <div class=\"primaryDetails\">\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-md-4\">\r\n                                                <div class=\"form-group\">\r\n                                                    <label for=\"name\">Construction-Stage Name*</label>\r\n                                                    <input type=\"text\" class=\"form-control\" id=\"constrctnStgNameId\" required name=\"constructionStageName\" placeholder=\"Enter Province name\" [(ngModel)]=\"constructionStageName\" #constrctnStgNameId=\"ngModel\" pattern=\"^[^-\\s][a-zA-Z - () \\/ '\\s-]+$\">\r\n                                                    <div class=\"error-place\" maxlength=\"50\">\r\n                                                        <div *ngIf=\"constrctnStgNameId.errors && (constrctnStgNameId.dirty || constrctnStgNameId.touched || submitted)\" class=\"error\">\r\n                                                            <span *ngIf=\"constrctnStgNameId.errors?.required\">\r\n                                                                Construction-Stage name is required\r\n                                                            </span>\r\n                                                            <span *ngIf=\"constrctnStgNameId.errors.pattern\">\r\n                                                                Please enter a valid Construction-Stage name.\r\n                                                            </span>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"col-md-4\">\r\n                                                <div class=\"form-group\">\r\n                                                    <label>Project Status*</label>\r\n                                                    <select name=\"constctnStagePrjtType\" id=\"constctnStagePrjtTypeId\" required class=\"form-control\" [(ngModel)]=\"constctnStagePrjtType\" #constctnStagePrjtTypeId=\"ngModel\">\r\n                                                            <option value=\"upcoming\">Completed/Upcoming</option>\r\n                                                            <option value=\"current\">Current</option>\r\n                                                        </select>\r\n                                                    <div *ngIf=\"constctnStagePrjtTypeId.errors && (constctnStagePrjtTypeId.dirty || constctnStagePrjtTypeId.touched || submitted)\" class=\"error\">\r\n                                                        <span *ngIf=\"constctnStagePrjtTypeId.errors.required\" class=\"error\">\r\n                                                                    Construction-Stage project status is required\r\n                                                            </span>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"col-md-3\">\r\n                                                <div class=\"form-group selectAppWrap\">\r\n                                                    <label for=\"status\">Construction-Stage Status</label>\r\n                                                    <!-- <p-toggleButton name=\"contractor_status\" [(ngModel)]=\"contractor_status\" #contractorStatusid=\"ngModel\" onLabel=\"Active\" offLabel=\"Inactive\" onIcon=\"fa-check-square\" offIcon=\"fa-square\" [style]=\"{'width':'150px'}\" (onChange)=\"contractorStatusChanged($event)\"></p-toggleButton> -->\r\n                                                    <div class=\"selectRadio\">\r\n                                                        <div class=\"radio\">\r\n                                                            <label><input type=\"radio\" [value]=\"true\"  name=\"constStgStatus\" [(ngModel)]=\"constStgStatus\">Active</label>\r\n                                                        </div>\r\n                                                        <div class=\"radio\" *ngIf=\"!projectCount > 0\">\r\n                                                            <label><input type=\"radio\" [value]=\"false\" name=\"constStgStatus\" [(ngModel)]=\"constStgStatus\">Inactive</label>\r\n                                                        </div>\r\n                                                        <p *ngIf=\"projectCount > 0\">\r\n                                                            Construction-Stage is already been used so it cannot be inactive\r\n                                                        </p>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-12\">\r\n                            <div class=\"buttonContainer\">\r\n                                <div class=\"form-group\">\r\n                                    <button *ngIf=\"!loading\" class=\"btn darkBtn\" type=\"submit\" (click)=\"submit(equipmentForm)\">Submit</button>\r\n                                    <div class=\"loader\" *ngIf=\"loading\"><i class=\"fa fa-spinner fa-spin fa-2x fa-fw\"></i></div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"dargPop\">\r\n    <p-dialog [modal]=\"true\" (onHide)=\"goToListing()\" [(visible)]=\"display\" *ngIf=\"result == 'success'\">\r\n        <h6>Construction-Stage Updated Successfully</h6>\r\n    </p-dialog>\r\n    <p-dialog header=\"Construction-Stage Updated\" [modal]=\"true\" [(visible)]=\"display\" *ngIf=\"result != 'success'\">\r\n        <p>{{result}}</p>\r\n    </p-dialog>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/construction-stage/edit-construction-stage/edit-construction-stage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditConstructionStageComponent; });
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






var EditConstructionStageComponent = /** @class */ (function () {
    function EditConstructionStageComponent(loopAuth, route, http, _cookieService, books, router, containerApi, share, cityApi, constStgApi) {
        this.loopAuth = loopAuth;
        this.route = route;
        this.http = http;
        this._cookieService = _cookieService;
        this.books = books;
        this.router = router;
        this.containerApi = containerApi;
        this.share = share;
        this.cityApi = cityApi;
        this.constStgApi = constStgApi;
        this.display = false;
        this.submitted = false;
        this.loading = false;
        this.constStgStatus = false;
        this.constctnStagePrjtType = '';
        this.projectCount = 0;
        this.municipalityCount = 0;
        this.construction_stage_id = 0;
        this.equipmentPreviousStatus = false;
        this.editConstnStg = {
            "construction_stage_id": 0,
            "construction_stage_name": "",
            "project_status": "",
            "status": 0,
        };
        this.userDetails = this.loopAuth.getCurrentUserData();
        this.rolename = this.userDetails.userDet.roles;
        this.id = this.route.snapshot.params['id'];
        this.loginFlagToken = this._cookieService.get(sdkPrefix + 'id');
    }
    EditConstructionStageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        var dataArrObj = {
            "construction_stage_id": this.id
        };
        this.constStgApi.getConstructionStage(dataArrObj).subscribe(function (data) {
            if (data) {
                var result = data.result[0];
                _this.construction_stage_id = result.construction_stage_id;
                _this.constructionStageName = result.construction_stage_name;
                _this.constctnStagePrjtType = result.project_status;
                _this.constStgStatus = (result.status) ? true : false;
                _this.projectCount = result.usedProjects;
                console.log("projectCount ", _this.projectCount);
                _this.editConstnStg = {
                    "construction_stage_id": result.construction_stage_id,
                    "project_status": result.project_status,
                    "construction_stage_name": result.construction_stage_name,
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
    EditConstructionStageComponent.prototype.goToListing = function () {
        // window.location.reload();
        this.router.navigate(["construction-stage"]);
    };
    EditConstructionStageComponent.prototype.submit = function (constrctnStgForm) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var date, currentdate;
            return __generator(this, function (_a) {
                this.submitted = true;
                if (constrctnStgForm.valid) {
                    this.loading = true;
                    date = new Date();
                    currentdate = date.getTime();
                    this.editConstnStg.construction_stage_id = this.construction_stage_id;
                    this.editConstnStg.construction_stage_name = this.capital_letter(this.constructionStageName);
                    this.editConstnStg.project_status = this.constctnStagePrjtType;
                    this.editConstnStg.status = (this.constStgStatus) ? 1 : 0;
                    //this.editConstnStg.updated_date = currentdate;
                    //updating equipments-master
                    // this.ifNameExist(this.editConstnStg).then((total)=>{
                    // 	if(total > 0){
                    // 		this.loading = false;
                    // 		this.result = "Equipment name already exist";
                    // 		this.display = true;
                    // 	}else{
                    // 		console.log("this.editConstnStg ",this.editConstnStg);
                    this.constStgApi.upsertPatch(this.editConstnStg).subscribe(function (data) {
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
    EditConstructionStageComponent.prototype.ifNameExist = function (dataObj) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var access_token = _this.loopAuth.getAccessTokenId();
                var constrctStgNameString = dataObj.construction_stage_name;
                var constrctStgPrjtTypString = dataObj.project_status;
                var cond = { "construction_stage_name": constrctStgNameString.toString(), "project_status": constrctStgPrjtTypString };
                var api = "/api/construction_stage_masters/count?where=";
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
    EditConstructionStageComponent.prototype.capital_letter = function (str) {
        str = str.split(" ");
        for (var i = 0, x = str.length; i < x; i++) {
            str[i] = str[i][0].toUpperCase() + str[i].substr(1);
        }
        return str.join(" ");
    };
    EditConstructionStageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("./src/app/pages/construction-stage/edit-construction-stage/edit-construction-stage.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_loopback_sdk__["k" /* LoopBackAuth */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"], __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_core__["CookieService"], __WEBPACK_IMPORTED_MODULE_2__shared_loopback_sdk__["d" /* BooksApi */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_2__shared_loopback_sdk__["g" /* ContainerApi */], __WEBPACK_IMPORTED_MODULE_5__providers_share_service_share_service__["a" /* ShareService */], __WEBPACK_IMPORTED_MODULE_2__shared_loopback_sdk__["e" /* CityApi */], __WEBPACK_IMPORTED_MODULE_2__shared_loopback_sdk__["f" /* Construction_stage_masterApi */]])
    ], EditConstructionStageComponent);
    return EditConstructionStageComponent;
}());



/***/ }),

/***/ "./src/app/pages/construction-stage/edit-construction-stage/edit-construction-stage.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditConstructionStageModule", function() { return EditConstructionStageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_construction_stage_component__ = __webpack_require__("./src/app/pages/construction-stage/edit-construction-stage/edit-construction-stage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__edit_construction_stage_routing_module__ = __webpack_require__("./src/app/pages/construction-stage/edit-construction-stage/edit-construction-stage-routing.module.ts");
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









var EditConstructionStageModule = /** @class */ (function () {
    function EditConstructionStageModule() {
    }
    EditConstructionStageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__edit_construction_stage_routing_module__["a" /* EditConstructionStageRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["DialogModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["EditorModule"],
                __WEBPACK_IMPORTED_MODULE_7_angular2_busy__["BusyModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__edit_construction_stage_component__["a" /* EditConstructionStageComponent */]
            ]
        })
    ], EditConstructionStageModule);
    return EditConstructionStageModule;
}());



/***/ })

});
//# sourceMappingURL=edit-construction-stage.module.chunk.js.map