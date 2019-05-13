webpackJsonp(["edit-contractor.module"],{

/***/ "./src/app/pages/contractor/edit-contractor/edit-contractor-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditContractorRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_contractor_component__ = __webpack_require__("./src/app/pages/contractor/edit-contractor/edit-contractor.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__edit_contractor_component__["a" /* EditContractorComponent */],
        data: {
            title: 'Edit Book'
        }
    }
];
var EditContractorRoutingModule = /** @class */ (function () {
    function EditContractorRoutingModule() {
    }
    EditContractorRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], EditContractorRoutingModule);
    return EditContractorRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/contractor/edit-contractor/edit-contractor.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"overlay\" *ngIf=\"loading\">\r\n    <i class=\"fa fa-spinner fa-pulse fa-3x fa-fw contCenter\"></i> <span class=\"sr-only\">Loading...</span>\r\n</div>\r\n<div class=\"animated fadeIn\" *ngIf=\"!loading\">\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <button type=\"button\" class=\"backBtn\" tabindex=\"0\" [routerLinkActive]=\"['active']\" [routerLink]=\"['/contractor']\"><i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i> Back</button>\r\n                    <div>\r\n                        Edit Book\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <form #contractorEditForm=\"ngForm\">\r\n                        <div class=\"col-md-12\">\r\n                            <div class=\"card-Wrapper\">\r\n                                <div class=\"card-block\">\r\n                                    <div class=\"primaryDetails\">\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-md-5\">\r\n                                                <div class=\"form-group\">\r\n                                                    <label for=\"name\">Contractor Name</label>\r\n                                                    <input type=\"text\" class=\"form-control\" disabled id=\"contractorNameId\" required name=\"contractorName\" placeholder=\"Enter book name\" [(ngModel)]=\"contractorName\" #contractorNameId=\"ngModel\" pattern=\"^[^-\\s][a-zA-Z0-9 '\\s-]+$\" maxlength=\"50\">\r\n\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"col-md-5\">\r\n                                                <div class=\"form-group\">\r\n                                                    <label for=\"email\">Contractor Email Id</label>\r\n                                                    <input type=\"text\" class=\"form-control\" disabled id=\"contractorEmailid\" required name=\"contractorEmailId\" placeholder=\"Enter Contractor Email Id\" [(ngModel)]=\"contractorEmailId\" #contractorEmailid=\"ngModel\" maxlength=\"70\">\r\n\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"col-md-3\">\r\n                                                <div class=\"form-group\">\r\n                                                    <label for=\"status\">Contractor Status</label>\r\n                                                    <p-toggleButton name=\"contractor_status\" [(ngModel)]=\"contractor_status\" #contractorStatusid=\"ngModel\" onLabel=\"Active\" offLabel=\"Inactive\" onIcon=\"fa-check-square\" offIcon=\"fa-square\" [style]=\"{'width':'150px'}\" (onChange)=\"contractorStatusChanged($event)\"></p-toggleButton>\r\n                                                </div>\r\n                                            </div>\r\n\r\n                                            <!-- <div class=\"form-group col-sm-4\">\r\n                                                <label for=\"profilePhoto\">Logo Image*</label>\r\n                                                <input (change)=\"onFileChange($event)\" type=\"file\" class=\"form-control\" id=\"logo\" name=\"logo\" [(ngModel)]=\"logoImage\" #idCardPhoto=\"ngModel\">\r\n                                                <label>jpg/jpeg/png(max 5Mb)</label>\r\n                                                <div class=\"row\" *ngIf=\"imgErrDisplay\" class=\"error\">\r\n                                                    <span>\r\n                                                        {{imgErr}}\r\n                                                    </span>\r\n                                                </div>\r\n                                            </div> -->\r\n                                            <!-- <div class=\"form-group col-sm-2\">\r\n                                                < ! - - <button class=\"removeBtn\" type=\"button\" (click)=\"removeimage('doc',i)\" label=\"Show\">\r\n                                                    <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\r\n                                                </button> - - >\r\n                                                <img *ngIf=\"show!=''\" src=\"{{bookImage}}\" width=\"150\" height=\"100\" />\r\n                                            </div>\r\n                                            <div class=\"col-md-5\">\r\n                                                <div class=\"form-group\">\r\n                                                    <label for=\"desc\">Description*</label>\r\n                                                    <textarea class=\"form-control\" id=\"desc\" required name=\"desc\" [(ngModel)]=\"description\" #desc=\"ngModel\">\r\n                                                    </textarea>\r\n                                                    <div class=\"error-place\">\r\n                                                        <div *ngIf=\"desc.errors && (desc.dirty || desc.touched || submitted)\" class=\"error\">\r\n                                                            <span *ngIf=\"desc.errors.required\">Description is required.</span>\r\n                                                            < ! - - <span *ngIf=\"description.errors.pattern\">Please enter a valid address.</span> - - >\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div> -->\r\n                                            <div class=\"col-md-5\" *ngIf=\"appDataArr.length > 0\">\r\n                                                <div class=\"form-group\">\r\n                                                    <label for=\"desc\">Select App</label>\r\n                                                    <div class=\"ui-g-100 \" style=\"width:30px;margin-bottom:10px\">\r\n                                                        <div class=\"ui-g-12\" *ngFor=\" let appItem of appDataArr\">\r\n                                                            <p-checkbox name=\"contractorAppId\" [disabled]=\"!contractor_status\" [value]=\"appItem.appId\" label=\"{{appItem.appName}}\" [(ngModel)]=\"contractorAppId\"></p-checkbox>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-12\">\r\n                            <div class=\"buttonContainer\">\r\n                                <div class=\"form-group\">\r\n                                    <button *ngIf=\"!loading\" class=\"btn darkBtn\" type=\"button\" (click)=\"submit(contractorEditForm)\">Submit</button>\r\n                                    <div class=\"loader\" *ngIf=\"loading\"><i class=\"fa fa-spinner fa-spin fa-2x fa-fw\"></i></div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"dargPop\">\r\n    <p-dialog [modal]=\"true\" (onHide)=\"goToListing()\" [(visible)]=\"display\" *ngIf=\"result == 'success'\">\r\n        <h6>Contractor Updated Successfully</h6>\r\n    </p-dialog>\r\n    <p-dialog header=\"New Book Added\" [modal]=\"true\" [(visible)]=\"display\" *ngIf=\"result != 'success'\">\r\n        <p>{{result}}</p>\r\n    </p-dialog>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/contractor/edit-contractor/edit-contractor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditContractorComponent; });
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







var EditContractorComponent = /** @class */ (function () {
    function EditContractorComponent(loopAuth, route, http, _cookieService, router, containerApi, share, contractorProfileApi, appDetailsApi) {
        this.loopAuth = loopAuth;
        this.route = route;
        this.http = http;
        this._cookieService = _cookieService;
        this.router = router;
        this.containerApi = containerApi;
        this.share = share;
        this.contractorProfileApi = contractorProfileApi;
        this.appDetailsApi = appDetailsApi;
        this.display = false;
        this.submitted = false;
        this.description = "";
        this.imgErrDisplay = false;
        this.loading = false;
        this.imgErr = '';
        this.allData = [];
        this.contractorApp = [];
        this.contractor_status = false;
        this.appDataArr = [];
        this.contractorAppId = [];
        this.userDetails = this.loopAuth.getCurrentUserData();
        this.rolename = this.userDetails.userDet.roles;
        this.id = this.route.snapshot.params['id'];
        this.loginFlagToken = this._cookieService.get(sdkPrefix + 'id');
    }
    EditContractorComponent.prototype.ngOnInit = function () {
        var _this = this;
        var dataArrObj = {
            "contractor_id": this.id
        };
        this.appDetailsApi.find({ "where": { "status": 1 } }).subscribe(function (appResultdata) {
            if (appResultdata.length) {
                for (var key in appResultdata) {
                    var appObj = {
                        appId: appResultdata[key]['app_id'],
                        appName: appResultdata[key]['app_name'],
                    };
                    _this.appDataArr.push(appObj);
                }
            }
            //console.log("app Array",this.appDataArr);
            //console.log("App Result data",appResultdata);
        });
        this.contractorProfileApi.get_contractor_details(dataArrObj).subscribe(function (data) {
            if (data) {
                var contractorData = data.data.contractorDetails;
                var appArr = data.data.apps;
                _this.contractorName = contractorData.name_of_contractor;
                _this.contractorEmailId = contractorData.contractor_email_id;
                _this.contractorProfilePic = hostname + "/api/containers/contractorImage/download/" + contractorData.contractor_photo + '?access_token=' + _this.loginFlagToken;
                _this.contractor_status = contractorData.status;
                if (appArr.length > 0) {
                    for (var key in appArr) {
                        _this.contractorApp.push(appArr[key].app_id);
                    }
                    _this.contractorAppId = _this.contractorApp;
                }
            }
        });
        // this.busy = this.books.getBooks(dataArrObj).subscribe(data=>{
        // 	if(data){
        // 		let result = data.result[0];
        // 		this.contractorName = result.name;
        // 		this.description = result.description;
        // 		this.bookPriority = result.priority;
        // 		if(result.logo_image){
        // 			this.bookImage = result.logo_image+'?access_token='+this.loginFlagToken;
        // 		}
        // 	}
        // });
    };
    EditContractorComponent.prototype.contractorStatusChanged = function (event) {
        if (!this.contractor_status) {
            this.contractorAppId = [];
        }
    };
    EditContractorComponent.prototype.goToListing = function () {
        // window.location.reload();
        //this.router.navigate(["books"]);
        this.hideDialog();
    };
    EditContractorComponent.prototype.showDialog = function () {
        this.display = true;
    };
    EditContractorComponent.prototype.hideDialog = function () {
        this.result = '';
        this.display = false;
    };
    EditContractorComponent.prototype.submit = function (formData) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var contractorSubmitedValues;
            return __generator(this, function (_a) {
                this.submitted = true;
                contractorSubmitedValues = {
                    "contractor_id": this.id,
                    "app_id": (formData.value.contractorAppId != undefined && formData.value.contractorAppId != null && formData.value.contractorAppId.length > 0) ? formData.value.contractorAppId : [],
                    "status": (formData.value.contractor_status) ? 'Active' : 'Inactive'
                };
                //console.log("contractorSubmitedValues :",contractorSubmitedValues);
                this.loading = true;
                this.contractorProfileApi.edit_contractor(contractorSubmitedValues).subscribe(function () {
                    _this.loading = false;
                    _this.result = 'success';
                    _this.showDialog();
                }, function (err) {
                    _this.result = 'Something went wrong';
                    _this.loading = false;
                    _this.showDialog();
                });
                return [2 /*return*/];
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('name'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["NgModel"])
    ], EditContractorComponent.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('priority'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["NgModel"])
    ], EditContractorComponent.prototype, "priority", void 0);
    EditContractorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("./src/app/pages/contractor/edit-contractor/edit-contractor.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__shared_loopback_sdk__["m" /* LoopBackAuth */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"], __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_4_angular2_cookie_core__["CookieService"], __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_3__shared_loopback_sdk__["g" /* ContainerApi */], __WEBPACK_IMPORTED_MODULE_6__providers_share_service_share_service__["a" /* ShareService */], __WEBPACK_IMPORTED_MODULE_3__shared_loopback_sdk__["i" /* Contractor_profileApi */], __WEBPACK_IMPORTED_MODULE_3__shared_loopback_sdk__["a" /* App_detailsApi */]])
    ], EditContractorComponent);
    return EditContractorComponent;
}());



/***/ }),

/***/ "./src/app/pages/contractor/edit-contractor/edit-contractor.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditContractorModule", function() { return EditContractorModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_contractor_component__ = __webpack_require__("./src/app/pages/contractor/edit-contractor/edit-contractor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__edit_contractor_routing_module__ = __webpack_require__("./src/app/pages/contractor/edit-contractor/edit-contractor-routing.module.ts");
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










var EditContractorModule = /** @class */ (function () {
    function EditContractorModule() {
    }
    EditContractorModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__edit_contractor_routing_module__["a" /* EditContractorRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["DialogModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["EditorModule"],
                __WEBPACK_IMPORTED_MODULE_7_angular2_busy__["BusyModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["CheckboxModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["ToggleButtonModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__edit_contractor_component__["a" /* EditContractorComponent */]
            ]
        })
    ], EditContractorModule);
    return EditContractorModule;
}());



/***/ })

});
//# sourceMappingURL=edit-contractor.module.chunk.js.map