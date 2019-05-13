webpackJsonp(["videos.module"],{

/***/ "./src/app/pages/videos/video/videos-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideosRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__videos_component__ = __webpack_require__("./src/app/pages/videos/video/videos.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__videos_component__["a" /* VideosComponent */],
        data: {
            title: 'Videos'
        }
    }
];
var VideosRoutingModule = /** @class */ (function () {
    function VideosRoutingModule() {
    }
    VideosRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], VideosRoutingModule);
    return VideosRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/videos/video/videos.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"overlay\" *ngIf=\"loading\">\r\n  <i class=\"fa fa-spinner fa-pulse fa-3x fa-fw contCenter\"></i> <span class=\"sr-only\">Loading...</span>\r\n</div>\r\n<div class=\"animated fadeIn\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-12\">\r\n      <div class=\"card\">\r\n        <div class=\"addUser\">\r\n            <button type=\"button\" (click)=\"addVideo()\" class=\"btn btnUser\">Add Video</button>\r\n        </div>\r\n        <div class=\"card-header\">\r\n          Search\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"card-Wrapper\">\r\n              <div class=\"card-block\">\r\n                <div class=\"primaryDetails\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-md-4\">\r\n                      <div class=\"form-group\">\r\n                        <label>Video Name</label>\r\n                        <input class=\"form-control\" [(ngModel)]=\"videoTitle\" />\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-md-4\">\r\n                      <div class=\"form-group\">\r\n                        <label>Status</label>\r\n                        <select name=\"videoStatus\" class=\"form-control\" [(ngModel)]=\"videoStatus\">\r\n                          <option value=\"\">All</option>\r\n                          <option value=\"1\">Active</option>\r\n                          <option value=\"0\">Inactive</option>\r\n                        </select>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-md-4\">\r\n                      <div class=\"form-group\">\r\n                          <label>Created From</label>\r\n                          <p-calendar name=\"createdAt\" [maxDate]=\"maxDate\" dateFormat=\"dd M yy\" [(ngModel)]=\"createdAt\"></p-calendar>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-12\">\r\n            <div class=\"buttonContainer\">\r\n              <div class=\"form-group\">\r\n                <!-- <label style=\"visibility:hidden;\">Search</label> -->\r\n                <a href=\"javascript:;\" (click)=\"searchData()\" class=\"btn darkBtn\">Apply</a>\r\n                <a href=\"javascript:;\" (click)=\"resetPage()\" class=\"btn darkBtn\">Reset</a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card\">\r\n        <div class=\"ui-g-12 ui-md-4\">\r\n          Displaying <span>{{(offset==0)?1:(perPageLimit*(offset+1))-perPageLimit+1}} - {{(offset==0)?perPageLimit-(perPageLimit-videoData?.length):perPageLimit*(offset+1)-(perPageLimit-videoData?.length)}} of {{total}}</span>\r\n        </div>\r\n        <div class=\"card-Wrapper\">\r\n          <div class=\"card-block\">\r\n            <table class=\"table table-bordered productRequestTable\">\r\n              <thead>\r\n                <tr>\r\n\t\t\t\t\t        <th>Sr No.</th>\r\n                  <th>Logo</th>\r\n                  <th>Video Name</th>\r\n                  <th>Video URL</th>\r\n                  <th>Video Status</th>\r\n                  <th>Created Date</th>\r\n                  <th>Action</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let video of videoData; let i=index\">\r\n                  <td>{{i+1+(offset?offset*10:0)}}</td>\r\n                  <td>\r\n\t\t\t\t\t          <img [src]=\"video.logo_image\" (click)=\"open(i)\" width=\"100\" />\r\n                  </td>\r\n                  <td>{{video.title || '-'}}</td>\r\n                  <td><a target=\"_blank\" [href]=\"video.video_url\">{{video.video_url}}</a></td>\r\n                  <td>{{video.status || '-'}}</td>\r\n                  <td>{{video.created_at || '-'}}</td>\r\n                  <td>\r\n                    <div class=\"groupBtn\">\r\n                      <a class=\"btn btnEdit\" [routerLink]=\"['/videos/edit-video', video.id]\">Edit</a>\r\n                    </div>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n            <p-paginator class=\"paginCustome\" *ngIf=\"paginationVal\" rows=\"10\" totalRecords={{total}} (onPageChange)=\"paginate($event)\"></p-paginator>\r\n          </div>\r\n          <div class=\"card-block\" *ngIf=\"videoData?.length==0\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-4\">&nbsp;</div>\r\n              <div class=\"col-md-4\">\r\n                <h4>NO RESULT FOUND</h4>\r\n              </div>\r\n              <div class=\"col-md-4\">&nbsp;</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/videos/video/videos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideosComponent; });
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


var VideosComponent = /** @class */ (function () {
    function VideosComponent(uApi, videoApi, _cookieService, router, loopAuth, _lightbox) {
        this.uApi = uApi;
        this.videoApi = videoApi;
        this._cookieService = _cookieService;
        this.router = router;
        this.loopAuth = loopAuth;
        this._lightbox = _lightbox;
        this.createdByErrors = false;
        this.display = false;
        this.ifEmpty = false;
        this.loading = true;
        this._albums = [];
        this.exportData = [];
        this.videoStatus = "";
        this.videoStatusSearch = "";
        this.paginationVal = true;
        this.perPageLimit = 10;
        this.offset = 0;
        this.userDetails = this.loopAuth.getCurrentUserData();
        this.rolename = this.userDetails.userDet.roles[0].name;
        this.maxDate = new Date();
    }
    VideosComponent.prototype.ngOnInit = function () {
        this.getCount();
    };
    VideosComponent.prototype.getCount = function () {
        var _this = this;
        this.loading = true;
        if (this.createdAt) {
            this.createdAt = __WEBPACK_IMPORTED_MODULE_3_moment__(this.createdAt).format("YYYY-MM-DD hh:mm:ss.SSS");
        }
        var dataArrObj = {
            "title": this.videoTitleSearch,
            "created_at": this.createdAtSearch,
            "status": this.videoStatusSearch,
            "page": this.offset,
            "limit": this.perPageLimit
        };
        this.busy = this.videoApi.getVideosCount(dataArrObj).subscribe(function (data) {
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
    VideosComponent.prototype.showDialog = function () {
        this.display = true;
    };
    VideosComponent.prototype.paginate = function (event) {
        this.videoData = [];
        this.offset = event.page;
        this.paginationVal = true;
        if (this.createdAt) {
            this.createdAt = __WEBPACK_IMPORTED_MODULE_3_moment__(this.createdAt).format("YYYY-MM-DD hh:mm:ss.SSS");
        }
        var dataArrObj = {
            "name": this.videoTitleSearch,
            "created_at": this.createdAtSearch,
            "status": this.videoStatusSearch,
            "page": this.offset,
            "limit": this.perPageLimit
        };
        this.getData(dataArrObj);
    };
    VideosComponent.prototype.searchData = function () {
        this.offset = 0;
        this.paginationVal = false;
        this.ifEmpty = false;
        this.videoData = [];
        this.videoTitleSearch = this.videoTitle;
        this.createdAtSearch = this.createdAt;
        this.videoStatusSearch = this.videoStatus;
        this.getCount();
    };
    VideosComponent.prototype.resetPage = function () {
        this.offset = 0;
        this.paginationVal = false;
        this.createdByErrors = false;
        this.videoStatus = "";
        this.videoTitle = "";
        this.createdAt = "";
        this.createdAtSearch = "";
        this.videoStatusSearch = "";
        this.videoTitleSearch = "";
        this.getCount();
    };
    VideosComponent.prototype.addVideo = function () {
        this.router.navigate(["videos/add-video"]);
    };
    VideosComponent.prototype.getData = function (dataArrObj) {
        var _this = this;
        this.loading = true;
        var loginFlagToken = this._cookieService.get(sdkPrefix + 'id');
        this._albums = [];
        this.busy = this.videoApi.getVideos(dataArrObj).subscribe(function (data) {
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
                if (data.result[i].logo_image) {
                    data.result[i].logo_image = data.result[i].logo_image + '?access_token=' + loginFlagToken;
                }
                data.result[i].created_at = __WEBPACK_IMPORTED_MODULE_3_moment__(data.result[i].createdAt).format("DD - MMM - YYYY");
                _this._albums.push({
                    src: data.result[i].logo_image,
                    thumb: data.result[i].logo_image
                });
            }
            _this.videoData = data.result;
        }, function (err) {
            _this.loading = false;
        }, function () { });
    };
    VideosComponent.prototype.open = function (index) {
        // open lightbox
        this._lightbox.open(this._albums, index);
    };
    VideosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("./src/app/pages/videos/video/videos.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_loopback_sdk__["c" /* App_usersApi */], __WEBPACK_IMPORTED_MODULE_2__shared_loopback_sdk__["m" /* VideosApi */], __WEBPACK_IMPORTED_MODULE_5_angular2_cookie_core__["CookieService"], __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_2__shared_loopback_sdk__["g" /* LoopBackAuth */], __WEBPACK_IMPORTED_MODULE_4_angular2_lightbox__["Lightbox"]])
    ], VideosComponent);
    return VideosComponent;
}());



/***/ }),

/***/ "./src/app/pages/videos/video/videos.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideosModule", function() { return VideosModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__videos_component__ = __webpack_require__("./src/app/pages/videos/video/videos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__videos_routing_module__ = __webpack_require__("./src/app/pages/videos/video/videos-routing.module.ts");
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














var VideosModule = /** @class */ (function () {
    function VideosModule() {
    }
    VideosModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["PaginatorModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__videos_routing_module__["a" /* VideosRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["DialogModule"],
                __WEBPACK_IMPORTED_MODULE_7_angular2_busy__["BusyModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["AutoCompleteModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["CalendarModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["ButtonModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["DropdownModule"],
                __WEBPACK_IMPORTED_MODULE_8_angular2_lightbox__["LightboxModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__videos_component__["a" /* VideosComponent */]
            ]
        })
    ], VideosModule);
    return VideosModule;
}());



/***/ })

});
//# sourceMappingURL=videos.module.chunk.js.map