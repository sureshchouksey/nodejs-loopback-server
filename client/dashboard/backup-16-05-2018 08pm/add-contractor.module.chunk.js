webpackJsonp(["add-contractor.module"],{

/***/ "./src/app/pages/contractor/add-contractor/add-contractor-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContractorCrudRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_contractor_component__ = __webpack_require__("./src/app/pages/contractor/add-contractor/add-contractor.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__add_contractor_component__["a" /* AddContractorComponent */],
        data: {
            title: 'Add Contractor'
        }
    }
];
var ContractorCrudRoutingModule = /** @class */ (function () {
    function ContractorCrudRoutingModule() {
    }
    ContractorCrudRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], ContractorCrudRoutingModule);
    return ContractorCrudRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/contractor/add-contractor/add-contractor.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"overlay\" *ngIf=\"loading\">\r\n    <i class=\"fa fa-spinner fa-pulse fa-3x fa-fw contCenter\"></i> <span class=\"sr-only\">Loading...</span>\r\n</div>\r\n<div class=\"animated fadeIn\" *ngIf=\"!loading\">\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <button type=\"button\" class=\"backBtn\" tabindex=\"0\" [routerLinkActive]=\"['active']\" [routerLink]=\"['/contractor']\"><i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i> Back</button>\r\n                    <div>\r\n                        Add Contractor\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <form #contractorForm=\"ngForm\">\r\n                        <div class=\"col-md-12\">\r\n                            <div class=\"card-Wrapper\">\r\n                                <div class=\"card-block\">\r\n                                    <div class=\"primaryDetails\">\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-md-4\">\r\n                                                <div class=\"form-group\">\r\n                                                    <label for=\"name\">Contractor Name*</label>\r\n                                                    <input type=\"text\" class=\"form-control\" id=\"contractorNameId\" required name=\"contractorName\" placeholder=\"Enter contractor name\" [(ngModel)]=\"contractorName\" #contractorNameId=\"ngModel\" pattern=\"^[^-\\s][a-zA-Z '\\s-]+$\">\r\n                                                    <div class=\"error-place\" maxlength=\"50\">\r\n                                                        <div *ngIf=\"contractorNameId.errors && (contractorNameId.dirty || contractorNameId.touched || submitted)\" class=\"error\">\r\n                                                            <span *ngIf=\"contractorNameId.errors.required\">\r\n                                                                Contractor name is required\r\n                                                            </span>\r\n                                                            <span *ngIf=\"contractorNameId.errors.pattern\">\r\n                                                                Please enter a valid contractor name.\r\n                                                            </span>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"col-md-4\">\r\n                                                <div class=\"form-group\">\r\n                                                    <label for=\"name\">Contractor Email Id*</label>\r\n                                                    <input type=\"email\" class=\"form-control\" id=\"contractorEmail\" required name=\"contractorEmailId\" placeholder=\"Enter Contractor Email ID\" [(ngModel)]=\"contractorEmailId\" #contractorEmail=\"ngModel\" [pattern]=\"emailRegex\">\r\n                                                    <div class=\"error-place\">\r\n                                                        <div *ngIf=\"contractorEmail.errors && (contractorEmail.dirty || contractorEmail.touched || submitted)\" class=\"error\">\r\n                                                            <span *ngIf=\"contractorEmail.errors.required\">\r\n                                                                Contractor Email is required\r\n                                                            </span>\r\n                                                            <span *ngIf=\"contractorEmail.errors.pattern\">\r\n                                                                Please enter valid Email Id\r\n                                                            </span>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"col-md-4\">\r\n                                                <div class=\"form-group\">\r\n                                                    <label for=\"profilePhoto\">Profile Image</label>\r\n                                                    <input (change)=\"onFileChange($event)\" type=\"file\" accept=\"image/jpeg\" class=\"form-control\" id=\"idCardPhoto\" name=\"profileImage\" [(ngModel)]=\"profileImage\" #idCardPhoto=\"ngModel\">\r\n                                                    <label>jpg/jpeg(max 5Mb)</label>\r\n                                                    <div class=\"row\" *ngIf=\"imgErrDisplay\" class=\"error\">\r\n                                                        <span>\r\n                                                            {{imgErr}}\r\n                                                        </span>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"col-md-4\">\r\n                                                <div class=\"form-group\">\r\n                                                    <label for=\"status\">Contractor Status</label>\r\n                                                    <div class=\"radio\">\r\n                                                        <label><input type=\"radio\" [value]=\"true\" name=\"contractor_status\" [(ngModel)]=\"contractor_status\" (change)=\"contractorStatusChanged($event)\"> Active</label>\r\n                                                    </div>\r\n                                                    <div class=\"radio\">\r\n                                                        <label><input type=\"radio\" [value]=\"false\" name=\"contractor_status\" [(ngModel)]=\"contractor_status\" (change)=\"contractorStatusChanged($event)\"> Inactive</label>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"col-md-4\">\r\n                                                <div class=\"form-group\">\r\n                                                    <label for=\"desc\">Select App*</label>\r\n                                                    <div class=\"ui-g\" style=\"width:30px;margin-bottom:10px\">\r\n                                                        <div class=\"ui-g-12\" *ngFor=\" let appItem of appDataArr\">\r\n                                                            <p-checkbox name=\"contractorAppId\" [disabled]=\"!contractor_status\" [value]=\"appItem.appId\" label=\"{{appItem.appName}}\" [(ngModel)]=\" contractorAppId\"></p-checkbox>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-12 \">\r\n                            <div class=\"buttonContainer \">\r\n                                <div class=\"form-group \">\r\n                                    <button *ngIf=\"!loading \" class=\"btn darkBtn \" type=\"submit \" (click)=\"submit(contractorForm) \">Submit</button>\r\n                                    <div class=\"loader \" *ngIf=\"loading \"><i class=\"fa fa-spinner fa-spin fa-2x fa-fw \"></i></div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"dargPop \">\r\n    <p-dialog [modal]=\"true\" (onHide)=\"goToListing()\" [(visible)]=\"display\" *ngIf=\"result=='success'\">\r\n        <h6>Contractor Added Successfully</h6>\r\n    </p-dialog>\r\n    <p-dialog header=\"Contractor Added\" [modal]=\"true\" [(visible)]=\"display \" *ngIf=\"result !='success'\">\r\n        <p>{{result}}</p>\r\n    </p-dialog>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/contractor/add-contractor/add-contractor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddContractorComponent; });
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







var AddContractorComponent = /** @class */ (function () {
    //bookPriority:Number=0;
    function AddContractorComponent(loopAuth, http, _cookieService, books, router, containerApi, share, appDetailsApi, contractorApi) {
        this.loopAuth = loopAuth;
        this.http = http;
        this._cookieService = _cookieService;
        this.books = books;
        this.router = router;
        this.containerApi = containerApi;
        this.share = share;
        this.appDetailsApi = appDetailsApi;
        this.contractorApi = contractorApi;
        this.display = false;
        this.submitted = false;
        this.imgErrDisplay = false;
        this.loading = false;
        this.imgErr = '';
        this.allImageDataArr = [];
        this.emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.appDataArr = [];
        this.contractorName = '';
        this.contractorEmailId = '';
        this.contractorAppId = [];
        this.contractor_status = false;
        this.userDetails = this.loopAuth.getCurrentUserData();
        this.rolename = this.userDetails.userDet.roles;
    }
    AddContractorComponent.prototype.showDialog = function () {
        this.display = true;
    };
    AddContractorComponent.prototype.submit = function (contractorForm) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var validFlag, uploadFlag1, contractorObj_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.submitted = true;
                        validFlag = true;
                        uploadFlag1 = true;
                        if (!contractorForm.valid) return [3 /*break*/, 4];
                        this.loading = true;
                        contractorObj_1 = {
                            name_of_contractor: contractorForm.value.contractorName,
                            contractor_email_id: contractorForm.value.contractorEmailId.toLowerCase(),
                            contractor_photo: '',
                            app_id: (this.contractorAppId.length > 0) ? this.contractorAppId : [],
                            status: (this.contractor_status) ? 'Active' : 'Inactive'
                        };
                        console.log("form submited", contractorForm);
                        if (!(this.allImageDataArr != "" && this.allImageDataArr != undefined)) return [3 /*break*/, 2];
                        console.log("this.allImageDataArr[0]", this.allImageDataArr[0]);
                        return [4 /*yield*/, this.uploadImage(this.allImageDataArr[0]).then(function () { return __awaiter(_this, void 0, void 0, function () {
                                var _this = this;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            console.log("this.imgName", this.imgName);
                                            contractorObj_1.contractor_photo = this.imgName;
                                            return [4 /*yield*/, this.contractorApi.add_contractor(contractorObj_1).subscribe(function () {
                                                    console.log("Contractor added successfully");
                                                    _this.contractorName = '';
                                                    _this.contractorEmailId = '';
                                                    _this.profileImage = '';
                                                    _this.contractorAppId = [];
                                                    _this.loading = false;
                                                    _this.result = 'success';
                                                    _this.showDialog();
                                                }, function (error) {
                                                    if (error.message == 'user result already exist') {
                                                        _this.result = 'Contractor already exist';
                                                        _this.loading = false;
                                                        _this.showDialog();
                                                    }
                                                    else {
                                                        console.log("Add contractor error occured", error);
                                                        _this.result = 'Something went wrong';
                                                        _this.loading = false;
                                                        _this.showDialog();
                                                    }
                                                })];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        uploadFlag1 = _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.contractorApi.add_contractor(contractorObj_1).subscribe(function () {
                            console.log("Contractor added successfully");
                            _this.contractorName = '';
                            _this.contractorEmailId = '';
                            _this.profileImage = '';
                            _this.contractorAppId = [];
                            _this.loading = false;
                            _this.result = 'success';
                            _this.showDialog();
                        }, function (error) {
                            if (error.message == 'user result already exist') {
                                _this.result = 'Contractor already exist';
                                _this.loading = false;
                                _this.showDialog();
                            }
                            else {
                                console.log("Add contractor error occured", error);
                                _this.result = 'Something went wrong';
                                _this.loading = false;
                                _this.showDialog();
                            }
                        })];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AddContractorComponent.prototype.ngOnInit = function () {
        var _this = this;
        // var dataArrObj = {
        // 	"limit":1
        // }
        // this.busy = this.books.getBooks(dataArrObj, null).subscribe(data=>{
        // 	if(data){
        // 		if(data.result.length == 1){
        // 			let priorityVal = data.result[0].priority;
        // 			this.bookPriority = priorityVal+1;
        // 		}
        // 	}
        // });
        this.loading = true;
        this.appDetailsApi.find({ "where": { "status": 1 } }).subscribe(function (appResultdata) {
            _this.loading = false;
            if (appResultdata.length) {
                for (var key in appResultdata) {
                    var appObj = {
                        appId: appResultdata[key]['app_id'],
                        appName: appResultdata[key]['app_name'],
                    };
                    _this.appDataArr.push(appObj);
                }
            }
            console.log("app Array", _this.appDataArr);
            console.log("App Result data", appResultdata);
        }, function (err) {
            _this.loading = false;
        });
    };
    AddContractorComponent.prototype.goToListing = function () {
        // window.location.reload();
        //this.router.navigate(["books"]);
    };
    AddContractorComponent.prototype.onFileChange = function (file) {
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
                        _this.allImageDataArr.push(_this.data);
                        //this.contractorProfileImage = this.data;
                    }
                };
                imageData.readAsDataURL(file.target.files[0]);
            }
        }
    };
    AddContractorComponent.prototype.uploadImage = function (fdata) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            console.log("fdata", fdata);
            var fileUrl = hostname + "/api/containers/contractorImage";
            //let fileUrl = "http://phapi.experiencecommerce.com:4500/api/containers/logo_image";
            var loginFlagToken = _this._cookieService.get(sdkPrefix + 'id');
            //this.loading = true;
            _this.http.post(fileUrl + '/upload?access_token=' + loginFlagToken, fdata).subscribe(function (res) {
                var dataimg = res['_body'];
                dataimg = JSON.parse(dataimg);
                if (dataimg) {
                    _this.imgName = dataimg['result']['files']['file'][0]['name'];
                    // this.imgName = fileUrl+"/download/"+imgName;
                    //this.loading = false;
                    resolve(true);
                }
                else {
                    //this.loading = false;
                    resolve(false);
                }
            }, function (err) {
                _this.imgErr = "Image upload failed";
                //this.imgshow = this.defaultImg;
                _this.imgErrDisplay = true;
                //this.loading = false;
                resolve(false);
            }, function () {
            });
        });
    };
    AddContractorComponent.prototype.contractorStatusChanged = function (event) {
        if (!this.contractor_status) {
            this.contractorAppId = [];
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('contractorNameId'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["NgModel"])
    ], AddContractorComponent.prototype, "contractorNameId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('contractorEmail'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["NgModel"])
    ], AddContractorComponent.prototype, "contractorEmail", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('idcontractorApp'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["NgModel"])
    ], AddContractorComponent.prototype, "idcontractorApp", void 0);
    AddContractorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("./src/app/pages/contractor/add-contractor/add-contractor.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__shared_loopback_sdk__["g" /* LoopBackAuth */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_4_angular2_cookie_core__["CookieService"], __WEBPACK_IMPORTED_MODULE_3__shared_loopback_sdk__["d" /* BooksApi */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_3__shared_loopback_sdk__["e" /* ContainerApi */], __WEBPACK_IMPORTED_MODULE_6__providers_share_service_share_service__["a" /* ShareService */], __WEBPACK_IMPORTED_MODULE_3__shared_loopback_sdk__["a" /* App_detailsApi */], __WEBPACK_IMPORTED_MODULE_3__shared_loopback_sdk__["f" /* Contractor_profileApi */]])
    ], AddContractorComponent);
    return AddContractorComponent;
}());



/***/ }),

/***/ "./src/app/pages/contractor/add-contractor/add-contractor.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddContractorModule", function() { return AddContractorModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_contractor_component__ = __webpack_require__("./src/app/pages/contractor/add-contractor/add-contractor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__add_contractor_routing_module__ = __webpack_require__("./src/app/pages/contractor/add-contractor/add-contractor-routing.module.ts");
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










var AddContractorModule = /** @class */ (function () {
    function AddContractorModule() {
    }
    AddContractorModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__add_contractor_routing_module__["a" /* ContractorCrudRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["DialogModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["EditorModule"],
                __WEBPACK_IMPORTED_MODULE_7_angular2_busy__["BusyModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["CheckboxModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["ToggleButtonModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__add_contractor_component__["a" /* AddContractorComponent */]
            ]
        })
    ], AddContractorModule);
    return AddContractorModule;
}());



/***/ })

});
//# sourceMappingURL=add-contractor.module.chunk.js.map