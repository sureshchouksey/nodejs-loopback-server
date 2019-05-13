webpackJsonp(["contractor.module"],{

/***/ "./src/app/pages/contractor/contractor/contractor-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContractorRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contractor_component__ = __webpack_require__("./src/app/pages/contractor/contractor/contractor.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__contractor_component__["a" /* ContractorComponent */],
        data: {
            title: 'Contractor'
        }
    }
];
var ContractorRoutingModule = /** @class */ (function () {
    function ContractorRoutingModule() {
    }
    ContractorRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], ContractorRoutingModule);
    return ContractorRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/contractor/contractor/contractor.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"overlay\" *ngIf=\"loading\">\r\n    <i class=\"fa fa-spinner fa-pulse fa-3x fa-fw contCenter\"></i> <span class=\"sr-only\">Loading...</span>\r\n</div>\r\n<div class=\"animated fadeIn\" [ngBusy]=\"{busy: busy,backdrop: true, minDuration: 600}\">\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n            <div class=\"card\">\r\n                <div class=\"addUser\">\r\n                    <button type=\"button\" (click)=\"addContractor()\" class=\"btn btnUser\">Add Contractor</button>\r\n                </div>\r\n                <div class=\"card-header\">\r\n                    Search\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                        <div class=\"card-Wrapper\">\r\n                            <div class=\"card-block\">\r\n                                <div class=\"primaryDetails\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-4\">\r\n                                            <div class=\"form-group\">\r\n                                                <label>Contractor Name</label>\r\n                                                <input class=\"form-control\" [(ngModel)]=\"contractorName\" />\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-4\">\r\n                                            <div class=\"form-group\">\r\n                                                <label>Status</label>\r\n                                                <select name=\"bookStatus\" class=\"form-control\" [(ngModel)]=\"contractorStatus\">\r\n                          <option value=\"\">All</option>\r\n                          <option value=\"1\">Active</option>\r\n                          <option value=\"0\">Inactive</option>\r\n                        </select>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-4\">\r\n                                            <div class=\"form-group\">\r\n                                                <label>Created From</label>\r\n                                                <p-calendar name=\"createdAt\" [maxDate]=\"maxDate\" dateFormat=\"dd M yy\" [(ngModel)]=\"createdAt\"></p-calendar>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-12\">\r\n                        <div class=\"buttonContainer\">\r\n                            <div class=\"form-group\">\r\n                                <!-- <label style=\"visibility:hidden;\">Search</label> -->\r\n                                <a href=\"javascript:;\" (click)=\"searchData()\" class=\"btn darkBtn\">Apply</a>\r\n                                <a href=\"javascript:;\" (click)=\"resetPage()\" class=\"btn darkBtn\">Reset</a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"card\">\r\n                <div class=\"ui-g-12 ui-md-4\">\r\n                    Displaying <span>{{(offset==0)?1:(perPageLimit*(offset+1))-perPageLimit+1}} - {{(offset==0)?perPageLimit-(perPageLimit-contractorData?.length):perPageLimit*(offset+1)-(perPageLimit-contractorData?.length)}} of {{total}}</span>\r\n                </div>\r\n                <div class=\"card-Wrapper\">\r\n                    <div class=\"card-block\">\r\n                        <table class=\"table table-bordered productRequestTable\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>Sr No.</th>\r\n                                    <th>Profile Picture</th>\r\n                                    <th>Name</th>\r\n                                    <th>Email Id</th>\r\n                                    <th>Status</th>\r\n                                    <th>Created Date</th>\r\n                                    <th>Action</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let contractor of contractorData; let i=index\">\r\n                                    <td>{{i+1+(offset?offset*10:0)}}</td>\r\n                                    <td>\r\n                                        <img [src]=\"contractor.contractor_photo\" (click)=\"open(i)\" width=\"100\" />\r\n                                    </td>\r\n                                    <td>{{contractor.name_of_contractor || '-'}}</td>\r\n                                    <td>{{contractor.contractor_email_id || '-'}}</td>\r\n                                    <td>{{contractor.status || '-'}}</td>\r\n                                    <td>{{contractor.created_at || '-'}}</td>\r\n                                    <td>\r\n                                        <div class=\"groupBtn\">\r\n                                            <a class=\"btn btnEdit\" [routerLink]=\"['/contractor/view-contractor', contractor.contractor_id]\">View</a>\r\n                                            <!--<a class=\"btn btnEdit\" [routerLink]=\"['/contractor/edit-contractor', contractor.contractor_id]\">Edit</a>-->\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                        <p-paginator class=\"paginCustome\" *ngIf=\"paginationVal\" rows=\"10\" totalRecords={{total}} (onPageChange)=\"paginate($event)\"></p-paginator>\r\n                    </div>\r\n                    <div class=\"card-block\" *ngIf=\"contractorData?.length==0\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-4\">&nbsp;</div>\r\n                            <div class=\"col-md-4\">\r\n                                <h4>NO RESULT FOUND</h4>\r\n                            </div>\r\n                            <div class=\"col-md-4\">&nbsp;</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/contractor/contractor/contractor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContractorComponent; });
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


var ContractorComponent = /** @class */ (function () {
    function ContractorComponent(uApi, booksApi, _cookieService, router, loopAuth, _lightbox, contractorProfileApi) {
        this.uApi = uApi;
        this.booksApi = booksApi;
        this._cookieService = _cookieService;
        this.router = router;
        this.loopAuth = loopAuth;
        this._lightbox = _lightbox;
        this.contractorProfileApi = contractorProfileApi;
        this.createdByErrors = false;
        this.contractorData = [];
        this.display = false;
        this.ifEmpty = false;
        this.loading = true;
        this._albums = [];
        this.exportData = [];
        this.contractorStatus = "";
        this.contractorStatusSearch = "";
        this.paginationVal = true;
        this.perPageLimit = 10;
        this.offset = 0;
        this.userDetails = this.loopAuth.getCurrentUserData();
        this.rolename = this.userDetails.userDet.roles[0].name;
        this.maxDate = new Date();
    }
    ContractorComponent.prototype.ngOnInit = function () {
        this.getCount();
    };
    ContractorComponent.prototype.getCount = function () {
        var _this = this;
        this.loading = true;
        if (this.createdAt) {
            this.createdAt = __WEBPACK_IMPORTED_MODULE_3_moment__(this.createdAt).format("YYYY-MM-DD hh:mm:ss.SSS");
        }
        var dataArrObj = {
            "name_of_contractor": this.contractorNameSearch,
            "created_date": (this.createdAtSearch != null && this.createdAtSearch != '' && this.createdAtSearch != undefined) ? this.createdAtSearch : 0,
            "status": this.contractorStatusSearch,
            "page": this.offset,
            "limit": this.perPageLimit
        };
        this.contractorProfileApi.getContractorsCount(dataArrObj).subscribe(function (data) {
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
    // editProd(id){
    // 	let navigationExtras: NavigationExtras = {
    // 		queryParams: {
    // 			"id": id,
    // 		}
    // 	};
    // 	this.router.navigate(["edit-hpb"], navigationExtras);
    // }
    // viewProd(id){
    // 	let navigationExtras: NavigationExtras = {
    // 		queryParams: {
    // 			"id": id,
    // 		}
    // 	};
    // 	this.router.navigate(["view-hpb"], navigationExtras);
    // }
    ContractorComponent.prototype.showDialog = function () {
        this.display = true;
    };
    ContractorComponent.prototype.paginate = function (event) {
        this.contractorData = [];
        this.offset = event.page;
        var user_id;
        if (this.rolename == "$ra") {
            user_id = this.userDetails.userDet.id;
        }
        else {
            this.rolename = "";
        }
        this.paginationVal = true;
        if (this.createdAt) {
            this.createdAt = __WEBPACK_IMPORTED_MODULE_3_moment__(this.createdAt).format("YYYY-MM-DD hh:mm:ss.SSS");
        }
        var dataArrObj = {
            "name_of_contractor": this.contractorNameSearch,
            "created_date": this.createdAtSearch,
            "status": this.contractorStatusSearch,
            "page": this.offset,
            "limit": this.perPageLimit
        };
        this.getData(dataArrObj);
    };
    ContractorComponent.prototype.searchData = function () {
        this.offset = 0;
        this.paginationVal = false;
        this.ifEmpty = false;
        this.contractorData = [];
        this.contractorNameSearch = this.contractorName;
        this.createdAtSearch = (this.createdAt != null && this.createdAt != '' && this.createdAt != undefined) ? new Date(this.createdAt).getTime() : 0,
            this.contractorStatusSearch = this.contractorStatus;
        this.getCount();
    };
    ContractorComponent.prototype.resetPage = function () {
        this.offset = 0;
        this.paginationVal = false;
        this.createdByErrors = false;
        this.contractorStatus = "";
        //this.bookName = "";
        this.createdAt = "";
        this.createdAtSearch = "";
        this.contractorStatusSearch = "";
        this.contractorNameSearch = "";
        this.getCount();
    };
    ContractorComponent.prototype.addContractor = function () {
        this.router.navigate(["contractor/add-contractor"]);
    };
    ContractorComponent.prototype.getData = function (dataArrObj) {
        var _this = this;
        var loginFlagToken = this._cookieService.get(sdkPrefix + 'id');
        this._albums = [];
        this.loading = true;
        this.contractorProfileApi.get_contractor(dataArrObj).subscribe(
        //this.busy=this.booksApi.getBooks(dataArrObj).subscribe(
        function (data) {
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
                if (data.result[i].contractor_photo) {
                    data.result[i].contractor_photo = hostname + "/api/containers/contractorImage/download/" + data.result[i].contractor_photo + '?access_token=' + loginFlagToken;
                }
                if (data.result[i].created_date != null && data.result[i].created_date != undefined) {
                    data.result[i].created_at = __WEBPACK_IMPORTED_MODULE_3_moment__(data.result[i].created_date).format("DD-MMM-YYYY");
                }
                else {
                    data.result[i].created_at = "";
                }
                _this._albums.push({
                    src: data.result[i].logo_image,
                    thumb: data.result[i].logo_image
                });
            }
            _this.contractorData = data.result;
            console.log("contractorData", _this.contractorData);
        }, function (err) {
            _this.loading = false;
        }, function () {
            _this.loading = false;
        });
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
    ContractorComponent.prototype.open = function (index) {
        // open lightbox
        this._lightbox.open(this._albums, index);
    };
    ContractorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("./src/app/pages/contractor/contractor/contractor.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_loopback_sdk__["c" /* App_usersApi */], __WEBPACK_IMPORTED_MODULE_2__shared_loopback_sdk__["d" /* BooksApi */], __WEBPACK_IMPORTED_MODULE_5_angular2_cookie_core__["CookieService"], __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_2__shared_loopback_sdk__["g" /* LoopBackAuth */], __WEBPACK_IMPORTED_MODULE_4_angular2_lightbox__["Lightbox"], __WEBPACK_IMPORTED_MODULE_2__shared_loopback_sdk__["f" /* Contractor_profileApi */]])
    ], ContractorComponent);
    return ContractorComponent;
}());



/***/ }),

/***/ "./src/app/pages/contractor/contractor/contractor.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractorModule", function() { return ContractorModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contractor_component__ = __webpack_require__("./src/app/pages/contractor/contractor/contractor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__contractor_routing_module__ = __webpack_require__("./src/app/pages/contractor/contractor/contractor-routing.module.ts");
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














var ContractorModule = /** @class */ (function () {
    function ContractorModule() {
    }
    ContractorModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["PaginatorModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__contractor_routing_module__["a" /* ContractorRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["DialogModule"],
                __WEBPACK_IMPORTED_MODULE_7_angular2_busy__["BusyModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["AutoCompleteModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["CalendarModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["ButtonModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["DropdownModule"],
                __WEBPACK_IMPORTED_MODULE_8_angular2_lightbox__["LightboxModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__contractor_component__["a" /* ContractorComponent */]
            ]
        })
    ], ContractorModule);
    return ContractorModule;
}());



/***/ })

});
//# sourceMappingURL=contractor.module.chunk.js.map