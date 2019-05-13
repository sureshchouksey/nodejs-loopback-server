webpackJsonp(["sub-type-of-housing.module"],{

/***/ "./src/app/pages/sub-type-of-housing/sub-type-of-housing/sub-type-of-housing-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubTypeOfHousingRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sub_type_of_housing_component__ = __webpack_require__("./src/app/pages/sub-type-of-housing/sub-type-of-housing/sub-type-of-housing.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__sub_type_of_housing_component__["a" /* SubTypeOfHousingComponent */],
        data: {
            title: 'Sub Type of Housing'
        }
    }
];
var SubTypeOfHousingRoutingModule = /** @class */ (function () {
    function SubTypeOfHousingRoutingModule() {
    }
    SubTypeOfHousingRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], SubTypeOfHousingRoutingModule);
    return SubTypeOfHousingRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/sub-type-of-housing/sub-type-of-housing/sub-type-of-housing.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"overlay\" *ngIf=\"loading\">\r\n    <i class=\"fa fa-spinner fa-pulse fa-3x fa-fw contCenter\"></i> <span class=\"sr-only\">Loading...</span>\r\n</div>\r\n<div class=\"animated fadeIn\">\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n            <div class=\"card\">\r\n                <div class=\"addUser\">\r\n                    <button type=\"button\" (click)=\"addProvince()\" class=\"btn btnUser\">Add Sub Type Of Housing</button>\r\n                </div>\r\n                <div class=\"card-header\">\r\n                    Search\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                        <div class=\"card-Wrapper\">\r\n                            <div class=\"card-block\">\r\n                                <div class=\"primaryDetails\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-4\">\r\n                                            <div class=\"form-group\">\r\n                                                <label>Sub Type Of Housing Name</label>\r\n                                                <input class=\"form-control\" [(ngModel)]=\"subTypOfHousngName\" />\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-4\">\r\n                                            <div class=\"form-group\">\r\n                                                <label>Type of Housing</label>\r\n                                                <select name=\"typeOghousingName\" class=\"form-control\" [(ngModel)]=\"typeOghousingName\">\r\n                                                    <option value=\"\">All</option>\r\n                                                    <option value=\"2\">Housing</option>\r\n                                                    <option value=\"3\">Building</option>\r\n                                                </select>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-4\">\r\n                                            <div class=\"form-group\">\r\n                                                <label>Status</label>\r\n                                                <select name=\"subTypeOfHousingStatus\" class=\"form-control\" [(ngModel)]=\"subTypeOfHousingStatus\">\r\n                                                    <option value=\"\">All</option>\r\n                                                    <option value=\"1\">Active</option>\r\n                                                    <option value=\"0\">Inactive</option>\r\n                                                </select>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <!-- <div class=\"col-md-4\">\r\n                                            <div class=\"form-group\">\r\n                                                <label>Created From</label>\r\n                                                <p-calendar name=\"createdAt\" [maxDate]=\"maxDate\" dateFormat=\"dd M yy\" [(ngModel)]=\"createdAt\"></p-calendar>\r\n                                            </div>\r\n                                        </div> -->\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-12\">\r\n                        <div class=\"buttonContainer\">\r\n                            <div class=\"form-group\">\r\n                                <!-- <label style=\"visibility:hidden;\">Search</label> -->\r\n                                <a href=\"javascript:;\" (click)=\"searchData()\" class=\"btn darkBtn\">Apply</a>\r\n                                <a href=\"javascript:;\" (click)=\"resetPage()\" class=\"btn darkBtn\">Reset</a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"card\">\r\n                <div class=\"ui-g-12 ui-md-4\">\r\n                    Displaying <span>{{(offset==0)?1:(perPageLimit*(offset+1))-perPageLimit+1}} - {{(offset==0)?perPageLimit-(perPageLimit-subTypeOfHousngData?.length):perPageLimit*(offset+1)-(perPageLimit-subTypeOfHousngData?.length)}} of {{total}}</span>\r\n                </div>\r\n                <div class=\"card-Wrapper\">\r\n                    <div class=\"card-block\">\r\n                        <table class=\"table table-bordered productRequestTable\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>Sr No.</th>\r\n                                    <th>Sub Type Of Housing Name</th>\r\n                                    <th>Type Of Housing Name</th>\r\n                                    <th>Sub Type Of Housing Status</th>\r\n                                    <th>Action</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let subTypeOfHousing of subTypeOfHousngData; let i=index\">\r\n                                    <td>{{i+1+(offset?offset*10:0)}}</td>\r\n                                    <td>{{subTypeOfHousing.name || '-'}}</td>\r\n                                    <td>{{subTypeOfHousing.type_of_housing || '-'}}</td>\r\n                                    <td>{{subTypeOfHousing.status || '-'}}</td>\r\n                                    <td>\r\n                                        <div class=\"groupBtn\">\r\n                                            <a class=\"btn btnEdit\" [routerLink]=\"['/sub-type-of-housing/view-sub-type-of-housing', subTypeOfHousing.id]\">View</a>\r\n                                            <a class=\"btn btnEdit\" [routerLink]=\"['/sub-type-of-housing/edit-sub-type-of-housing', subTypeOfHousing.id]\">Edit</a>\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                        <p-paginator class=\"paginCustome\" *ngIf=\"paginationVal\" rows=\"10\" totalRecords={{total}} (onPageChange)=\"paginate($event)\"></p-paginator>\r\n                    </div>\r\n                    <div class=\"card-block\" *ngIf=\"subTypeOfHousngData?.length==0\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-4\">&nbsp;</div>\r\n                            <div class=\"col-md-4\">\r\n                                <h4>NO RESULT FOUND</h4>\r\n                            </div>\r\n                            <div class=\"col-md-4\">&nbsp;</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/sub-type-of-housing/sub-type-of-housing/sub-type-of-housing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubTypeOfHousingComponent; });
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


var SubTypeOfHousingComponent = /** @class */ (function () {
    function SubTypeOfHousingComponent(uApi, subTypHousngApi, _cookieService, router, loopAuth, _lightbox) {
        this.uApi = uApi;
        this.subTypHousngApi = subTypHousngApi;
        this._cookieService = _cookieService;
        this.router = router;
        this.loopAuth = loopAuth;
        this._lightbox = _lightbox;
        this.createdByErrors = false;
        this.display = false;
        this.ifEmpty = false;
        this.typeOghousingName = '';
        this.typeOfHousngSearch = '';
        this.loading = true;
        this._albums = [];
        this.exportData = [];
        this.subTypeOfHousingStatus = "";
        this.subTypeOfHousngStatusSearch = "";
        this.paginationVal = true;
        this.perPageLimit = 10;
        this.offset = 0;
        this.userDetails = this.loopAuth.getCurrentUserData();
        this.rolename = this.userDetails.userDet.roles[0].name;
        this.maxDate = new Date();
    }
    SubTypeOfHousingComponent.prototype.ngOnInit = function () {
        this.getCount();
    };
    SubTypeOfHousingComponent.prototype.getCount = function () {
        var _this = this;
        this.loading = true;
        if (this.createdAt) {
            this.createdAtSearch = __WEBPACK_IMPORTED_MODULE_3_moment__(this.createdAt).format("YYYY-MM-DD hh:mm:ss.SSS");
        }
        var dataArrObj = {
            "name": this.subTypeOfHousingNameSearch,
            //"created_at":this.createdAtSearch,
            "status": this.subTypeOfHousngStatusSearch,
            "parent_id": this.typeOfHousngSearch,
            "page": this.offset,
            "limit": this.perPageLimit
        };
        this.busy = this.subTypHousngApi.getSubTypOfHousngCount(dataArrObj).subscribe(function (data) {
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
    SubTypeOfHousingComponent.prototype.paginate = function (event) {
        this.subTypeOfHousngData = [];
        this.offset = event.page;
        this.paginationVal = true;
        if (this.createdAt) {
            this.createdAtSearch = __WEBPACK_IMPORTED_MODULE_3_moment__(this.createdAt).format("YYYY-MM-DD hh:mm:ss.SSS");
        }
        var dataArrObj = {
            "name": this.subTypeOfHousingNameSearch,
            //"created_at":this.createdAtSearch,
            "status": this.subTypeOfHousngStatusSearch,
            "parent_id": this.typeOfHousngSearch,
            "page": this.offset,
            "limit": this.perPageLimit
        };
        this.getData(dataArrObj);
    };
    SubTypeOfHousingComponent.prototype.searchData = function () {
        this.offset = 0;
        this.paginationVal = false;
        this.ifEmpty = false;
        this.subTypeOfHousngData = [];
        this.subTypeOfHousingNameSearch = this.subTypOfHousngName;
        //this.createdAtSearch = this.createdAt;
        this.subTypeOfHousngStatusSearch = this.subTypeOfHousingStatus;
        this.typeOfHousngSearch = this.typeOghousingName;
        this.getCount();
    };
    SubTypeOfHousingComponent.prototype.resetPage = function () {
        this.offset = 0;
        this.paginationVal = false;
        this.createdByErrors = false;
        this.subTypeOfHousingStatus = "";
        this.subTypOfHousngName = "";
        //this.createdAt = "";
        //this.createdAtSearch = "";
        this.subTypeOfHousngStatusSearch = "";
        this.subTypeOfHousingNameSearch = "";
        this.typeOfHousngSearch = "";
        this.getCount();
    };
    SubTypeOfHousingComponent.prototype.addProvince = function () {
        this.router.navigate(["sub-type-of-housing/add-sub-type-of-housing"]);
    };
    SubTypeOfHousingComponent.prototype.getData = function (dataArrObj) {
        var _this = this;
        this.loading = true;
        var loginFlagToken = this._cookieService.get(sdkPrefix + 'id');
        this._albums = [];
        this.busy = this.subTypHousngApi.getSubTypOfHousing(dataArrObj).subscribe(function (data) {
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
            _this.subTypeOfHousngData = data.result;
            console.log("subTypeOfHousngData", _this.subTypeOfHousngData);
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
    SubTypeOfHousingComponent.prototype.open = function (index) {
        // open lightbox
        this._lightbox.open(this._albums, index);
    };
    SubTypeOfHousingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("./src/app/pages/sub-type-of-housing/sub-type-of-housing/sub-type-of-housing.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_loopback_sdk__["c" /* App_usersApi */], __WEBPACK_IMPORTED_MODULE_2__shared_loopback_sdk__["q" /* Sub_type_of_housing_masterApi */], __WEBPACK_IMPORTED_MODULE_5_angular2_cookie_core__["CookieService"], __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_2__shared_loopback_sdk__["k" /* LoopBackAuth */], __WEBPACK_IMPORTED_MODULE_4_angular2_lightbox__["Lightbox"]])
    ], SubTypeOfHousingComponent);
    return SubTypeOfHousingComponent;
}());



/***/ }),

/***/ "./src/app/pages/sub-type-of-housing/sub-type-of-housing/sub-type-of-housing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubTypeOfHousingModule", function() { return SubTypeOfHousingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sub_type_of_housing_component__ = __webpack_require__("./src/app/pages/sub-type-of-housing/sub-type-of-housing/sub-type-of-housing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sub_type_of_housing_routing_module__ = __webpack_require__("./src/app/pages/sub-type-of-housing/sub-type-of-housing/sub-type-of-housing-routing.module.ts");
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














var SubTypeOfHousingModule = /** @class */ (function () {
    function SubTypeOfHousingModule() {
    }
    SubTypeOfHousingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["PaginatorModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__sub_type_of_housing_routing_module__["a" /* SubTypeOfHousingRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["DialogModule"],
                __WEBPACK_IMPORTED_MODULE_7_angular2_busy__["BusyModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["AutoCompleteModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["CalendarModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["ButtonModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["DropdownModule"],
                __WEBPACK_IMPORTED_MODULE_8_angular2_lightbox__["LightboxModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__sub_type_of_housing_component__["a" /* SubTypeOfHousingComponent */]
            ]
        })
    ], SubTypeOfHousingModule);
    return SubTypeOfHousingModule;
}());



/***/ })

});
//# sourceMappingURL=sub-type-of-housing.module.chunk.js.map