webpackJsonp(["construction-stage.module"],{

/***/ "./src/app/pages/construction-stage/construction-stage/construction-stage-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConstructionStageRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__construction_stage_component__ = __webpack_require__("./src/app/pages/construction-stage/construction-stage/construction-stage.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__construction_stage_component__["a" /* ConstructionStageComponent */],
        data: {
            title: 'Construction-Stage'
        }
    }
];
var ConstructionStageRoutingModule = /** @class */ (function () {
    function ConstructionStageRoutingModule() {
    }
    ConstructionStageRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], ConstructionStageRoutingModule);
    return ConstructionStageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/construction-stage/construction-stage/construction-stage.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"overlay\" *ngIf=\"loading\">\r\n    <i class=\"fa fa-spinner fa-pulse fa-3x fa-fw contCenter\"></i> <span class=\"sr-only\">Loading...</span>\r\n</div>\r\n<div class=\"animated fadeIn\">\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n            <div class=\"card\">\r\n                <div class=\"addUser\">\r\n                    <button type=\"button\" (click)=\"addConstructionStage()\" class=\"btn btnUser\">Add Construction-stage</button>\r\n                </div>\r\n                <div class=\"card-header\">\r\n                    Search\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                        <div class=\"card-Wrapper\">\r\n                            <div class=\"card-block\">\r\n                                <div class=\"primaryDetails\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-4\">\r\n                                            <div class=\"form-group\">\r\n                                                <label>Construction-Stage Name</label>\r\n                                                <input class=\"form-control\" [(ngModel)]=\"constStgName\" />\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-4\">\r\n                                            <div class=\"form-group\">\r\n                                                <label>Status</label>\r\n                                                <select name=\"constructionStageStatus\" class=\"form-control\" [(ngModel)]=\"constructionStageStatus\">\r\n                          <option value=\"\">All</option>\r\n                          <option value=\"1\">Active</option>\r\n                          <option value=\"0\">Inactive</option>\r\n                        </select>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-4\">\r\n                                            <div class=\"form-group\">\r\n                                                <label>Project Status</label>\r\n                                                <select name=\"constctnStagePrjtType\" class=\"form-control\" [(ngModel)]=\"constctnStagePrjtType\">\r\n                          <option value=\"\">All</option>\r\n                          <option value=\"upcoming\">Early Stage</option>\r\n                          <option value=\"current\">Late Stage</option>\r\n                        </select>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-12\">\r\n                        <div class=\"buttonContainer\">\r\n                            <div class=\"form-group\">\r\n                                <!-- <label style=\"visibility:hidden;\">Search</label> -->\r\n                                <a href=\"javascript:;\" (click)=\"searchData()\" class=\"btn darkBtn\">Apply</a>\r\n                                <a href=\"javascript:;\" (click)=\"resetPage()\" class=\"btn darkBtn\">Reset</a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"card\">\r\n                <div class=\"ui-g-12 ui-md-4\">\r\n                    Displaying <span>{{(offset==0)?1:(perPageLimit*(offset+1))-perPageLimit+1}} - {{(offset==0)?perPageLimit-(perPageLimit-constrctnStgData?.length):perPageLimit*(offset+1)-(perPageLimit-constrctnStgData?.length)}} of {{total}}</span>\r\n                </div>\r\n                <div class=\"card-Wrapper\">\r\n                    <div class=\"card-block\">\r\n                        <table class=\"table table-bordered productRequestTable\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>Sr No.</th>\r\n                                    <th>Construction-Stage Name</th>\r\n                                    <th>Project Status</th>\r\n                                    <th>Status</th>\r\n                                    <th>Action</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let constrctnStg of constrctnStgData; let i=index\">\r\n                                    <td>{{i+1+(offset?offset*10:0)}}</td>\r\n                                    <td>{{constrctnStg.construction_stage_name || '-'}}</td>\r\n\r\n                                    <td *ngIf=\"constrctnStg.project_status == 'upcoming'\">Early Stage</td>\r\n                                    <td *ngIf=\"constrctnStg.project_status == 'current'\">Late Stage</td>\r\n                                    <td *ngIf=\"constrctnStg.project_status == 'all'\">All</td>\r\n\r\n                                    <td>{{constrctnStg.status || '-'}}</td>\r\n                                    <td>\r\n                                        <div class=\"groupBtn\">\r\n                                            <a class=\"btn btnEdit\" [routerLink]=\"['/construction-stage/view-construction-stage', constrctnStg.construction_stage_id]\">View</a>\r\n                                            <a class=\"btn btnEdit\" [routerLink]=\"['/construction-stage/edit-construction-stage', constrctnStg.construction_stage_id]\">Edit</a>\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                        <p-paginator class=\"paginCustome\" *ngIf=\"paginationVal\" rows=\"10\" totalRecords={{total}} (onPageChange)=\"paginate($event)\"></p-paginator>\r\n                    </div>\r\n                    <div class=\"card-block\" *ngIf=\"constrctnStgData?.length==0\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-4\">&nbsp;</div>\r\n                            <div class=\"col-md-4\">\r\n                                <h4>NO RESULT FOUND</h4>\r\n                            </div>\r\n                            <div class=\"col-md-4\">&nbsp;</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/construction-stage/construction-stage/construction-stage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConstructionStageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_loopback_sdk__ = __webpack_require__("./src/shared/loopback-sdk/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__("./node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_lightbox__ = __webpack_require__("./node_modules/angular2-lightbox/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_lightbox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_lightbox__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_cookie_core__ = __webpack_require__("./node_modules/angular2-cookie/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_cookie_core__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



 //for date manupalation


var ConstructionStageComponent = /** @class */ (function () {
    function ConstructionStageComponent(uApi, cityApi, _cookieService, router, loopAuth, _lightbox, constStgApi) {
        this.uApi = uApi;
        this.cityApi = cityApi;
        this._cookieService = _cookieService;
        this.router = router;
        this.loopAuth = loopAuth;
        this._lightbox = _lightbox;
        this.constStgApi = constStgApi;
        this.createdByErrors = false;
        this.display = false;
        this.ifEmpty = false;
        this.loading = true;
        this._albums = [];
        this.exportData = [];
        this.constructionStageStatus = "";
        this.constctnStagePrjtType = "";
        this.constStgStatusSearch = "";
        this.paginationVal = true;
        this.perPageLimit = 10;
        this.offset = 0;
        this.userDetails = this.loopAuth.getCurrentUserData();
        this.rolename = this.userDetails.userDet.roles[0].name;
        this.maxDate = new Date();
    }
    ConstructionStageComponent.prototype.ngOnInit = function () {
        this.getCount();
    };
    ConstructionStageComponent.prototype.getCount = function () {
        var _this = this;
        this.loading = true;
        if (this.createdAt) {
            this.createdAtSearch = __WEBPACK_IMPORTED_MODULE_3_moment__(this.createdAt).format("YYYY-MM-DD hh:mm:ss.SSS");
        }
        var dataArrObj = {
            "construction_stage_name": this.constructionStageName,
            "project_status": this.constctnStagePrjtType,
            //"created_at":this.createdAtSearch,
            "status": this.constStgStatusSearch,
            "page": this.offset,
            "limit": this.perPageLimit
        };
        this.busy = this.constStgApi.getConstructionStageCount(dataArrObj).subscribe(function (data) {
            _this.total = data['result'][0]['total'];
            if (_this.total <= 10) {
                _this.paginationVal = false;
            }
            else {
                _this.paginationVal = true;
            }
            _this.getData(dataArrObj);
        }, function (err) {
        }, function () {
        });
    };
    ConstructionStageComponent.prototype.paginate = function (event) {
        this.constrctnStgData = [];
        this.offset = event.page;
        this.paginationVal = true;
        if (this.createdAt) {
            this.createdAtSearch = __WEBPACK_IMPORTED_MODULE_3_moment__(this.createdAt).format("YYYY-MM-DD hh:mm:ss.SSS");
        }
        var dataArrObj = {
            "construction_stage_name": this.constructionStageName,
            "project_status": this.constctnStagePrjtType,
            //"created_at":this.createdAtSearch,
            "status": this.constStgStatusSearch,
            "page": this.offset,
            "limit": this.perPageLimit
        };
        this.getData(dataArrObj);
    };
    ConstructionStageComponent.prototype.searchData = function () {
        this.offset = 0;
        this.paginationVal = false;
        this.ifEmpty = false;
        this.constrctnStgData = [];
        this.constructionStageName = this.constStgName;
        //this.createdAtSearch = this.createdAt;
        this.constStgStatusSearch = this.constructionStageStatus;
        this.getCount();
    };
    ConstructionStageComponent.prototype.resetPage = function () {
        this.offset = 0;
        this.paginationVal = false;
        this.createdByErrors = false;
        this.constructionStageStatus = "";
        this.constctnStagePrjtType = "";
        this.constStgName = "";
        //this.createdAt = "";
        //this.createdAtSearch = "";
        this.constStgStatusSearch = "";
        this.constructionStageName = "";
        this.getCount();
    };
    ConstructionStageComponent.prototype.addConstructionStage = function () {
        this.router.navigate(["construction-stage/add-construction-stage"]);
    };
    ConstructionStageComponent.prototype.capital_letter = function (str) {
        str = str.split(" ");
        for (var i = 0, x = str.length; i < x; i++) {
            str[i] = str[i][0].toUpperCase() + str[i].substr(1);
        }
        return str.join(" ");
    };
    ConstructionStageComponent.prototype.getData = function (dataArrObj) {
        var _this = this;
        this.loading = true;
        var loginFlagToken = this._cookieService.get(sdkPrefix + 'id');
        this._albums = [];
        this.busy = this.constStgApi.getConstructionStage(dataArrObj).subscribe(function (data) {
            _this.loading = false;
            var totalData = data.result.length;
            _this.ifEmpty = false;
            if (totalData == 0) {
                _this.ifEmpty = true;
            }
            for (var i = 0; i < totalData; i++) {
                if (data.result[i].status == 1) {
                    data.result[i].status = 'Active';
                }
                else {
                    data.result[i].status = 'Inactive';
                }
            }
            _this.constrctnStgData = data.result;
            //console.log("constrctnStgData", this.constrctnStgData);
        }, function (err) {
            _this.loading = false;
        }, function () { });
    };
    // filterFullName(event){ 
    // 	let query = event.query;
    // 	this.busy = this.createdApi.getCreatedBy("hpb_info_tbl",this.perPageLimit,"",query).subscribe((dataRes)=>{
    // 		this.allUsersFullName = dataRes['result'];
    // 		this.filteredUserFullName = this.filterAutocompleteData(query, this.allUsersFullName,'sph_name');
    // 	});
    // }
    // filterAutocompleteData(query, filterAllData: any[],keyName):any[] {
    // 	//in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
    // 	let filtered : any[] = [];
    // 	for(let i = 0; i < filterAllData.length; i++) {
    // 		let currData = filterAllData[i];
    // 			if(query=='' || query==null){
    // 				filtered.push(currData);
    // 				if(i==this.perPageLimit){
    // 					break;
    // 				}
    // 			}else if(currData[keyName].toString().toLowerCase().includes(query.toLowerCase())) {
    // 				  filtered.push(currData);
    // 			}
    // 	} 
    // 	return filtered;
    // }
    ConstructionStageComponent.prototype.goToListing = function () {
        // window.location.reload();
        this.router.navigate(["equipment"]);
    };
    ConstructionStageComponent.prototype.open = function (index) {
        // open lightbox
        this._lightbox.open(this._albums, index, { positionFromTop: 60 });
    };
    ConstructionStageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("./src/app/pages/construction-stage/construction-stage/construction-stage.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_loopback_sdk__["c" /* App_usersApi */], __WEBPACK_IMPORTED_MODULE_2__shared_loopback_sdk__["e" /* CityApi */], __WEBPACK_IMPORTED_MODULE_5_angular2_cookie_core__["CookieService"], __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_2__shared_loopback_sdk__["m" /* LoopBackAuth */], __WEBPACK_IMPORTED_MODULE_4_angular2_lightbox__["Lightbox"], __WEBPACK_IMPORTED_MODULE_2__shared_loopback_sdk__["f" /* Construction_stage_masterApi */]])
    ], ConstructionStageComponent);
    return ConstructionStageComponent;
}());



/***/ }),

/***/ "./src/app/pages/construction-stage/construction-stage/construction-stage.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConstructionStageModule", function() { return ConstructionStageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__construction_stage_component__ = __webpack_require__("./src/app/pages/construction-stage/construction-stage/construction-stage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__construction_stage_routing_module__ = __webpack_require__("./src/app/pages/construction-stage/construction-stage/construction-stage-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__ = __webpack_require__("./node_modules/primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_busy__ = __webpack_require__("./node_modules/angular2-busy/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_busy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_busy__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_lightbox__ = __webpack_require__("./node_modules/angular2-lightbox/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_lightbox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angular2_lightbox__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var ConstructionStageModule = /** @class */ (function () {
    function ConstructionStageModule() {
    }
    ConstructionStageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["PaginatorModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__construction_stage_routing_module__["a" /* ConstructionStageRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["DialogModule"],
                __WEBPACK_IMPORTED_MODULE_7_angular2_busy__["BusyModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["AutoCompleteModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["CalendarModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["ButtonModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["DropdownModule"],
                __WEBPACK_IMPORTED_MODULE_8_angular2_lightbox__["LightboxModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__construction_stage_component__["a" /* ConstructionStageComponent */]
            ]
        })
    ], ConstructionStageModule);
    return ConstructionStageModule;
}());



/***/ })

});
//# sourceMappingURL=construction-stage.module.chunk.js.map