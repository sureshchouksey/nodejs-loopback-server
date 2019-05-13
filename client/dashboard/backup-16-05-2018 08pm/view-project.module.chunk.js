webpackJsonp(["view-project.module"],{

/***/ "./src/app/pages/projects/view-project/view-project-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewProjectRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view_project_component__ = __webpack_require__("./src/app/pages/projects/view-project/view-project.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__view_project_component__["a" /* ViewProjectComponent */],
        data: {
            title: 'View Project'
        }
    }
];
var ViewProjectRoutingModule = /** @class */ (function () {
    function ViewProjectRoutingModule() {
    }
    ViewProjectRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], ViewProjectRoutingModule);
    return ViewProjectRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/projects/view-project/view-project.component.html":
/***/ (function(module, exports) {

module.exports = "<p-growl [(value)]=\"msgs\"></p-growl>\r\n<div class=\"confirmPopup\">\r\n    <p-confirmDialog></p-confirmDialog>\r\n</div>\r\n<div class=\"animated fadeIn\" [ngBusy]=\"{busy: busy,backdrop: true, minDuration: 600}\">\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header topGroup\">\r\n                    <button type=\"button\" class=\"backBtn\" [routerLinkActive]=\"['active']\" [routerLink]=\"['/projects','all']\">\r\n                        <i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i> Back</button>\r\n                </div>\r\n                <div class=\"productImages\">\r\n                    <div class=\"card-items user-pic\" *ngFor=\"let alb of _albums; let i=index\">\r\n                        <img *ngIf=\"i == 0\" [src]=\"alb.src\" (click)=\"open(i)\" height=\"100\" width=\"100\" />\r\n                    </div>\r\n                </div>\r\n                <div class=\"detailsContainer productContainer\">\r\n                    <div class=\"card-details\">\r\n                        <div class=\"card-block\">\r\n                            <div class=\"blockTop productBlock\">\r\n                                <div class=\"items\">\r\n                                    <div class=\"gutter-space\">\r\n                                        <div class=\"panelWrapper\">\r\n                                            <div class=\"panelHead\">\r\n                                                <h3>Project Details</h3>\r\n                                            </div>\r\n                                            <div class=\"panelBody\">\r\n                                                <ul class=\"panelitem panelInfo\">\r\n                                                    <li>\r\n                                                        <p>Project Name</p>\r\n                                                        <h4>{{projectData.project_name || '-'}}</h4>\r\n                                                    </li>\r\n\r\n                                                    <li>\r\n                                                        <p>Project Type</p>\r\n                                                        <h4>{{projectData.project_type || '-'}}</h4>\r\n                                                    </li>\r\n                                                    <li>\r\n                                                        <p>Project Location</p>\r\n                                                        <h4>{{projectData.project_location || '-'}}</h4>\r\n                                                    </li>\r\n                                                    <li>\r\n                                                        <p>Project Province</p>\r\n                                                        <h4>{{projectData.city_name || '-'}}</h4>\r\n                                                    </li>\r\n                                                    <li>\r\n                                                        <p>Project Municipality</p>\r\n                                                        <h4>{{projectData.muncipality_name || '-'}}</h4>\r\n                                                    </li>\r\n                                                    <li>\r\n                                                        <p>Construction Area</p>\r\n                                                        <h4>{{projectData.construction_area || '-'}} {{ projectData.measurement_unit || 'sq.m'}}</h4>\r\n                                                    </li>\r\n                                                    <li>\r\n                                                        <p>Project Cost</p>\r\n                                                        <h4>{{projectData.project_cost || '-'}}</h4>\r\n                                                    </li>\r\n                                                    <li>\r\n                                                        <p>Start Date</p>\r\n                                                        <h4>{{projectData.project_start_date || '-'}}</h4>\r\n                                                    </li>\r\n                                                    <li>\r\n                                                        <p>Completion Date</p>\r\n                                                        <h4>{{projectData.project_completion_date || '-'}}</h4>\r\n                                                    </li>\r\n                                                    <li>\r\n                                                        <p>Project Duration</p>\r\n                                                        <h4>{{projectData.project_duration_years || '0'}} Year and {{projectData.project_duration_months || '0'}} Month</h4>\r\n                                                    </li>\r\n\r\n                                                    <li>\r\n                                                        <p>Contractor Name</p>\r\n                                                        <h4>{{projectData.name_of_contractor || '-'}}</h4>\r\n                                                    </li>\r\n                                                    <li *ngIf=\"projectData.contact_reference_mobile\">\r\n                                                        <p>Contact Mobile</p>\r\n                                                        <h4>{{projectData.contact_reference_mobile || '-'}}</h4>\r\n                                                    </li>\r\n                                                    <li *ngIf=\"projectData.contact_reference_landline\">\r\n                                                        <p>Contact Landline</p>\r\n                                                        <h4>{{projectData.contact_reference_landline || '-'}}</h4>\r\n                                                    </li>\r\n                                                    <li>\r\n                                                        <p>Project Status</p>\r\n                                                        <h4>{{projectData.status || '-'}}</h4>\r\n                                                    </li>\r\n                                                    <li>\r\n                                                        <p>Created Date</p>\r\n                                                        <h4>{{projectData.created_date || '-'}}</h4>\r\n                                                    </li>\r\n                                                    <li>\r\n                                                        <p>updated_date</p>\r\n                                                        <h4>{{projectData.updated_date || '-'}}</h4>\r\n                                                    </li>\r\n\r\n\r\n                                                    <li>\r\n                                                        <p>Type of housing</p>\r\n                                                        <div *ngFor=\"let item of projectTypeHousingArr\">\r\n                                                            <h4 *ngIf=\"item.type_of_housing != 'Other'\">{{item.type_of_housing}}</h4>\r\n                                                            <h4 *ngIf=\"item.type_of_housing == 'Other'\">{{item.others}}</h4>\r\n                                                        </div>\r\n                                                    </li>\r\n\r\n\r\n                                                    <li>\r\n                                                        <p>\r\n                                                            Construction stage\r\n                                                        </p>\r\n                                                        <div *ngFor=\"let item of projectConstructionStagging\">\r\n                                                            <h4>{{item.construction_stage_name}}</h4>\r\n                                                        </div>\r\n                                                    </li>\r\n\r\n                                                    <!-- <li>\r\n                                                        <p>Project Team</p>\r\n                                                        <div *ngFor=\"let item of workGroupArr\">\r\n                                                            <div>\r\n                                                                <p>{{item.memter_type}}</p>\r\n                                                                <h4 *ngFor=\"let memberItem of item.members_name\">\r\n                                                                    {memberItem.name}}\r\n                                                                </h4>\r\n                                                            </div>\r\n                                                        </div>\r\n\r\n                                                    </li> -->\r\n                                                    <li>\r\n                                                        <p>Project Team</p>\r\n                                                        <ul class=\"panelitem panelInfo\" *ngFor=\"let item of workGroupArr\">\r\n\r\n                                                            <li>\r\n                                                                <p>{{item.memter_type}}</p>\r\n\r\n                                                            </li>\r\n                                                            <li *ngFor=\"let memberItem of item.members_name\">\r\n                                                                {{memberItem.name}}\r\n                                                            </li>\r\n\r\n                                                        </ul>\r\n                                                    </li>\r\n                                                </ul>\r\n\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/projects/view-project/view-project.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewProjectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_loopback_sdk__ = __webpack_require__("./src/shared/loopback-sdk/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__("./node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__ = __webpack_require__("./node_modules/primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_lightbox__ = __webpack_require__("./node_modules/angular2-lightbox/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_lightbox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_lightbox__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_cookie_core__ = __webpack_require__("./node_modules/angular2-cookie/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_cookie_core__);
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



var ViewProjectComponent = /** @class */ (function () {
    function ViewProjectComponent(router, projectApi, photosApi, _cookieService, _lightbox, confirmationService, appLoginApi, loopAuth, route) {
        this.router = router;
        this.projectApi = projectApi;
        this.photosApi = photosApi;
        this._cookieService = _cookieService;
        this._lightbox = _lightbox;
        this.confirmationService = confirmationService;
        this.appLoginApi = appLoginApi;
        this.loopAuth = loopAuth;
        this.route = route;
        this.submited = false;
        this._albums = [];
        this.projectData = [];
        this.backLink = "";
        this.emptyMessage = "No Result Found";
        this.displayConfirm = false;
        this.msgs = [];
        this.loading = true;
        this.chapterStatus = "";
        this.chapterStatusSearch = "";
        this.paginationVal = false;
        this.perPageLimit = 10;
        this.offset = 0;
        this.chapterData = [];
        this.ifEmpty = false;
        this.projectConstructionStagging = [];
        this.projectTypeHousingArr = [];
        this.workGroupArr = [];
        this.id = this.route.snapshot.params['id'];
        this.loginFlagToken = this._cookieService.get(sdkPrefix + 'id');
        this.maxDate = new Date();
    }
    ViewProjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('this is called');
        var dataObj = {};
        var uid = this.id;
        var dataArrObj = {
            "project_id": this.id
        };
        this.busy = this.projectApi.getProjects(dataArrObj).subscribe(function (projectData) {
            var projectResult = projectData.result[0];
            var data = {
                result: [projectResult.project_details]
            };
            _this._albums = [];
            if (data.result.length > 0) {
                if (data.result[0].status == 1) {
                    data.result[0].status = 'Active';
                }
                else {
                    data.result[0].status = 'Inactive';
                }
                if (data.result[0].created_date) {
                    data.result[0].created_date = __WEBPACK_IMPORTED_MODULE_3_moment__(data.result[0].created_date).format("DD - MMM - YYYY");
                }
                else {
                    data.result[0].created_date = "";
                }
                if (data.result[0].updated_date) {
                    data.result[0].updated_date = __WEBPACK_IMPORTED_MODULE_3_moment__(data.result[0].updated_date).format("DD - MMM - YYYY");
                }
                else {
                    data.result[0].updated_date = "";
                }
                if (data.result[0].project_start_date) {
                    data.result[0].project_start_date = __WEBPACK_IMPORTED_MODULE_3_moment__(data.result[0].project_start_date).format("DD - MMM - YYYY");
                }
                if (data.result[0].project_completion_date) {
                    data.result[0].project_completion_date = __WEBPACK_IMPORTED_MODULE_3_moment__(data.result[0].project_completion_date).format("DD - MMM - YYYY");
                }
                if (data.result[0].project_cover_photo) {
                    var img = data.result[0].project_cover_photo;
                    data.result[0].project_cover_photo = hostname + "/api/containers/projectImage/download/" + img + '?access_token=' + _this.loginFlagToken;
                    _this._albums.push({
                        src: data.result[0].project_cover_photo,
                        thumb: data.result[0].project_cover_photo
                    });
                }
                _this.projectData = data.result[0];
                _this.getProjectPhotos();
            }
            if (projectResult.construction_stage.length > 0) {
                for (var item in projectResult.construction_stage) {
                    _this.projectConstructionStagging.push(projectResult.construction_stage[item]);
                }
            }
            if (projectResult.typeOfHousingObj.length > 0) {
                for (var key in projectResult.typeOfHousingObj) {
                    _this.projectTypeHousingArr.push(projectResult.typeOfHousingObj[key]);
                }
            }
            if (projectResult.work_group.length > 0) {
                _this.workGroupArr = [];
                for (var key in projectResult.work_group) {
                    var wrkGrpType = projectResult.work_group[key].member_type;
                    var wrkGropNames = JSON.parse(projectResult.work_group[key].member_name);
                    var wrkGrpObj = {
                        memter_type: wrkGrpType,
                        members_name: wrkGropNames
                    };
                    _this.workGroupArr.push(wrkGrpObj);
                }
            }
        }, function (err) {
        }, function () {
        });
    };
    ViewProjectComponent.prototype.getProjectPhotos = function () {
        var _this = this;
        this.busy = this.photosApi.find({ where: { and: [{ "project_id": this.id }, { "status": 1 }] } }).subscribe(function (data) {
            var result = data;
            if (data.length > 0) {
                for (var i = 0; i < data.length; i++) {
                    if (data[i]['project_photo_source']) {
                        var img = data[i]['project_photo_source'];
                        img = "http://phapi.experiencecommerce.com:4500/api/containers/projectImage/download/" + img + '?access_token=' + _this.loginFlagToken;
                        _this._albums.push({
                            src: img,
                            thumb: img
                        });
                    }
                }
                console.log("albums", _this._albums);
            }
        }, function (err) {
        }, function () {
        });
    };
    ViewProjectComponent.prototype.open = function (index) {
        // open lightbox
        this._lightbox.open(this._albums, index);
    };
    ViewProjectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "view Project",
            template: __webpack_require__("./src/app/pages/projects/view-project/view-project.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["ConfirmationService"]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_2__shared_loopback_sdk__["j" /* ProjectsApi */], __WEBPACK_IMPORTED_MODULE_2__shared_loopback_sdk__["i" /* Project_photosApi */], __WEBPACK_IMPORTED_MODULE_6_angular2_cookie_core__["CookieService"], __WEBPACK_IMPORTED_MODULE_5_angular2_lightbox__["Lightbox"], __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["ConfirmationService"], __WEBPACK_IMPORTED_MODULE_2__shared_loopback_sdk__["b" /* App_loginApi */], __WEBPACK_IMPORTED_MODULE_2__shared_loopback_sdk__["g" /* LoopBackAuth */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]])
    ], ViewProjectComponent);
    return ViewProjectComponent;
}());



/***/ }),

/***/ "./src/app/pages/projects/view-project/view-project.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewProjectModule", function() { return ViewProjectModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__view_project_component__ = __webpack_require__("./src/app/pages/projects/view-project/view-project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__view_project_routing_module__ = __webpack_require__("./src/app/pages/projects/view-project/view-project-routing.module.ts");
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























var ViewProjectModule = /** @class */ (function () {
    function ViewProjectModule() {
    }
    ViewProjectModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__view_project_routing_module__["a" /* ViewProjectRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["DialogModule"],
                __WEBPACK_IMPORTED_MODULE_7_angular2_busy__["BusyModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["FieldsetModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["ButtonModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["DropdownModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["AutoCompleteModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["InputTextModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["DataListModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["ConfirmDialogModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["GrowlModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["MessagesModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["SplitButtonModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["TabViewModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["SelectButtonModule"],
                __WEBPACK_IMPORTED_MODULE_8_angular2_lightbox__["LightboxModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["CalendarModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["PaginatorModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__view_project_component__["a" /* ViewProjectComponent */]
            ]
        })
    ], ViewProjectModule);
    return ViewProjectModule;
}());



/***/ })

});
//# sourceMappingURL=view-project.module.chunk.js.map