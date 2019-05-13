webpackJsonp(["view-contractor.module"],{

/***/ "./src/app/pages/contractor/view-contractor/view-contractor-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewContractorRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view_contractor_component__ = __webpack_require__("./src/app/pages/contractor/view-contractor/view-contractor.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__view_contractor_component__["a" /* ViewContractorComponent */],
        data: {
            title: 'View Contractor'
        }
    }
];
var ViewContractorRoutingModule = /** @class */ (function () {
    function ViewContractorRoutingModule() {
    }
    ViewContractorRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], ViewContractorRoutingModule);
    return ViewContractorRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/contractor/view-contractor/view-contractor.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"overlay\" *ngIf=\"loading\">\r\n    <i class=\"fa fa-spinner fa-pulse fa-3x fa-fw contCenter\"></i> <span class=\"sr-only\">Loading...</span>\r\n</div>\r\n<p-growl [(value)]=\"msgs\"></p-growl>\r\n<div class=\"confirmPopup\">\r\n    <p-confirmDialog></p-confirmDialog>\r\n</div>\r\n<div class=\"animated fadeIn\" [ngBusy]=\"{busy: busy,backdrop: true, minDuration: 600}\">\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header topGroup\">\r\n                    <button type=\"button\" class=\"backBtn\" [routerLinkActive]=\"['active']\" [routerLink]=\"['/contractor']\">\r\n                        <i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i> Back</button>\r\n                    <!-- <button type=\"button\" class=\"backBtn\" [routerLinkActive]=\"['active']\" [routerLink]=\"['/projects', id]\">Projects</button> -->\r\n                    <a class=\"backBtn\" *ngIf=\"project_count > 0\" target=\"_blank\" [routerLink]=\"['/projects', id]\">Projects</a>\r\n                    <!-- <div class=\"btnGroup\">\r\n                        <button type=\"button\" class=\"btn\" (click)=\"activeInactiveClick()\">\r\n                            <i class=\"fa fa-ban fa-lg mt-4\"></i> {{bookData['status']=='Active'?\"Inactive Book\":\"Active Book\"}}</button>\r\n                    </div>-->\r\n                </div>\r\n                <div class=\"productImages\">\r\n\r\n                    <div class=\"row\">\r\n                        <form #contractorEditForm=\"ngForm\">\r\n                            <div class=\"col-md-12\">\r\n                                <div class=\"card-Wrapper\">\r\n                                    <div class=\"card-block\">\r\n                                        <div class=\"primaryDetails\">\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-md-3 card-items user-pic\">\r\n                                                    <img class=\"img-frame\" *ngIf=\"contractorPhoto\" [src]=\"contractorPhoto\" width=\"100\" height=\"100\" />\r\n                                                    <img class=\"img-frame\" *ngIf=\"!contractorPhoto\" src=\"assets/img/photo.jpg\" width=\"100\" height=\"100\" />\r\n                                                </div>\r\n                                                <div class=\"col-md-3\">\r\n                                                    <div class=\"form-group selectAppWrap\">\r\n                                                        <label for=\"status\">Contractor Status</label>\r\n                                                        <!-- <p-toggleButton name=\"contractor_status\" [(ngModel)]=\"contractor_status\" #contractorStatusid=\"ngModel\" onLabel=\"Active\" offLabel=\"Inactive\" onIcon=\"fa-check-square\" offIcon=\"fa-square\" [style]=\"{'width':'150px'}\" (onChange)=\"contractorStatusChanged($event)\"></p-toggleButton> -->\r\n                                                        <div class=\"selectRadio\">\r\n                                                            <div class=\"radio\">\r\n                                                                <label><input type=\"radio\" [value]=\"true\" name=\"contractor_status\" [(ngModel)]=\"contractor_status\" (change)=\"contractorStatusChanged($event)\">Active</label>\r\n                                                            </div>\r\n                                                            <div class=\"radio\">\r\n                                                                <label><input type=\"radio\" [value]=\"false\" name=\"contractor_status\" [(ngModel)]=\"contractor_status\" (change)=\"contractorStatusChanged($event)\">Inactive</label>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"col-md-5\" *ngIf=\"appDataArr.length > 0\">\r\n                                                    <div class=\"form-group selectAppWrap\">\r\n                                                        <label for=\"desc\">Select App</label>\r\n                                                        <div class=\"selectItem\" *ngFor=\" let appItem of appDataArr\">\r\n                                                            <p-checkbox class=\"selectApp\" name=\"contractorAppId\" [disabled]=\"!contractor_status\" [value]=\"appItem.appId\" label=\"{{appItem.appName}}\" [(ngModel)]=\"contractorAppId\"></p-checkbox>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-12\">\r\n                                <div class=\"buttonContainer\">\r\n                                    <div class=\"form-group\">\r\n                                        <button *ngIf=\"!loading\" class=\"btn darkBtn\" type=\"button\" (click)=\"submit(contractorEditForm)\">Submit</button>\r\n                                        <!-- <div class=\"loader\" *ngIf=\"loading\"><i class=\"fa fa-spinner fa-spin fa-2x fa-fw\"></i></div> -->\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n                <div class=\"detailsContainer productContainer\">\r\n                    <div class=\"card-details\">\r\n                        <div class=\"card-block\">\r\n                            <div class=\"blockTop productBlock\">\r\n                                <div class=\"items\">\r\n                                    <div class=\"gutter-space\">\r\n                                        <div class=\"panelWrapper\">\r\n                                            <div class=\"panelHead\">\r\n                                                <h3>Contractor Details</h3>\r\n                                            </div>\r\n                                            <div class=\"panelBody\" *ngIf=\"contractorDetails\">\r\n                                                <ul class=\"panelitem panelInfo\">\r\n                                                    <!-- <li *ngFor=\"let item  of contractordetailLabel\">\r\n                                                        <p>{{item}}</p>\r\n\r\n                                                        <h4 *ngIf=\"item != 'credentials'\">{{contractorDetails[item]}}</h4>\r\n\r\n                                                        <div *ngIf=\"item == 'credentials'\">\r\n                                                            \r\n                                                        </div>\r\n\r\n                                                    </li> -->\r\n                                                    <li>\r\n                                                        <p>Contractor Id</p>\r\n                                                        <h4>{{contractorDetails.contractor_id || '-'}}</h4>\r\n                                                    </li>\r\n                                                    <li>\r\n                                                        <p>Contractor Name</p>\r\n                                                        <h4>{{contractorDetails.name_of_contractor || '-'}}</h4>\r\n                                                    </li>\r\n\r\n\r\n                                                    <li>\r\n                                                        <p>Contractor Email Id</p>\r\n                                                        <h4>\r\n                                                            <a href=\"mailto:{{contractorDetails.contractor_email_id}}\">\r\n                                                                {{contractorDetails.contractor_email_id || '-'}}\r\n                                                            </a>\r\n                                                        </h4>\r\n                                                    </li>\r\n                                                    <li>\r\n                                                        <p>Company Name</p>\r\n                                                        <h4>{{contractorDetails.company_name || '-'}}</h4>\r\n                                                    </li>\r\n                                                    <li>\r\n                                                        <p>Mobile Number</p>\r\n                                                        <h4>{{contractorDetails.mobile_no || '-'}}</h4>\r\n                                                    </li>\r\n                                                    <li>\r\n                                                        <p>Address</p>\r\n                                                        <h4>{{contractorDetails.address || '-'}}</h4>\r\n                                                    </li>\r\n                                                    <li>\r\n                                                        <p>Province</p>\r\n                                                        <h4>{{contractorDetails.city_name || '-'}}</h4>\r\n                                                    </li>\r\n                                                    <li>\r\n                                                        <p>Municipality</p>\r\n                                                        <h4>{{contractorDetails.municipality_name || '-'}}</h4>\r\n                                                    </li>\r\n                                                    <li>\r\n                                                        <p>Education Qualification</p>\r\n                                                        <h4>{{contractorDetails.education_qualification || '-'}}</h4>\r\n                                                    </li>\r\n                                                    <li>\r\n                                                        <p>About me</p>\r\n                                                        <h4>{{contractorDetails.about_me || '-'}}</h4>\r\n                                                    </li>\r\n\r\n                                                    <li>\r\n                                                        <p>Contractor Status</p>\r\n                                                        <h4 *ngIf=\"contractorDetails.status\">\r\n                                                            Active\r\n                                                        </h4>\r\n                                                        <h4 *ngIf=\"!contractorDetails.status\">\r\n                                                            Inactive\r\n                                                        </h4>\r\n                                                    </li>\r\n                                                    <li>\r\n                                                        <p>Created Date</p>\r\n                                                        <h4 *ngIf=\"contractorDetails.created_date\">{{contractorDetails.created_date | date:'dd - MMM - yyyy' }}</h4>\r\n                                                        <h4 *ngIf=\"!contractorDetails.created_date\">-</h4>\r\n                                                    </li>\r\n                                                    <li>\r\n                                                        <p>Updated Date</p>\r\n                                                        <h4 *ngIf=\"contractorDetails.updated_date\">{{contractorDetails.updated_date | date:'dd - MMM - yyyy' }}</h4>\r\n                                                        <h4 *ngIf=\"!contractorDetails.updated_date\">-</h4>\r\n                                                    </li>\r\n                                                    <li class=\"specialization\">\r\n                                                        <p>Credentials</p>\r\n                                                        <div *ngIf=\"credentialValue.length > 0\">\r\n                                                            <h4 *ngFor=\"let credItem of credentialValue\">\r\n                                                                {{credItem.name}}\r\n                                                            </h4>\r\n                                                        </div>\r\n                                                        <div *ngIf=\"credentialValue.length == 0\">\r\n                                                            <h4>\r\n                                                                -\r\n                                                            </h4>\r\n                                                        </div>\r\n\r\n                                                    </li>\r\n\r\n                                                    <li class=\"specialization\">\r\n                                                        <p>Affiliation</p>\r\n                                                        <div *ngIf=\"contractorData.affiliations.length > 0\">\r\n                                                            <h4 *ngFor=\"let item of contractorData.affiliations\">{{(item.certificate_name != 'Other')?item.certificate_name:item.others}}</h4>\r\n                                                        </div>\r\n                                                        <div *ngIf=\"contractorData.affiliations.length == 0\">\r\n                                                            <h4>-</h4>\r\n                                                        </div>\r\n\r\n                                                        <!-- <h4 *ngIf=\"item.certificate_name != 'Other'\">  </h4>\r\n                                                            <h4 *ngIf=\"item.certificate_name == 'Other'\">{{item.others}}</h4> -->\r\n\r\n                                                    </li>\r\n                                                    <li class=\"specialization\">\r\n                                                        <p>Specialization</p>\r\n                                                        <div *ngIf=\"contractorData.specialization.length > 0\">\r\n                                                            <h4 *ngFor=\"let item of contractorData.specialization\">{{item.specialization_name}}</h4>\r\n                                                        </div>\r\n                                                        <div *ngIf=\"contractorData.specialization.length == 0\">\r\n                                                            <h4>-</h4>\r\n                                                        </div>\r\n\r\n                                                    </li>\r\n                                                    <!-- <li class=\"specialization\">\r\n                                                        <p>Sub Specialization</p>\r\n                                                        <h4 *ngFor=\"let item of contractorData.sub_specialization\">{{item.sub_specialization}}</h4>\r\n                                                    </li> -->\r\n                                                    <li>\r\n                                                        <p>Equipment</p>\r\n                                                        <div *ngIf=\"contractorData.equipment.length > 0\">\r\n                                                            <h4 *ngFor=\"let item of contractorData.equipment\">{{item.equipment_name}}</h4>\r\n                                                        </div>\r\n                                                        <div *ngIf=\"contractorData.equipment.length == 0\">\r\n                                                            <h4>-</h4>\r\n                                                        </div>\r\n\r\n                                                    </li>\r\n                                                    <!-- <li>\r\n                                                        <p>Contractor Team</p>\r\n                                                        <div *ngFor=\"let item of workGroup\">\r\n                                                            <p>{{item.memter_type}}</p>\r\n                                                            <h4 *ngFor=\"let wrkGrpItem of item.members_name\">{{wrkGrpItem.name}}</h4>\r\n                                                        </div>\r\n                                                    </li> -->\r\n                                                    <li class=\"projectTeam\" *ngIf=\"workGroupArr.length > 0\">\r\n                                                        <p>Contractor Team</p>\r\n                                                        <!-- <ul class=\"panelitem panelInfo\" *ngFor=\"let item of workGroupArr\">\r\n    \r\n                                                                <li>\r\n                                                                    <p>{{item.memter_type}}</p>\r\n    \r\n                                                                </li>\r\n                                                                <li *ngFor=\"let memberItem of item.members_name\">\r\n                                                                    {{memberItem.name}}\r\n                                                                </li>\r\n    \r\n                                                            </ul> -->\r\n\r\n                                                        <table class=\"table table-bordered\">\r\n                                                            <tr>\r\n                                                                <th *ngFor=\"let item of workGroupArr\">{{item.memter_type | uppercase }}</th>\r\n\r\n                                                            </tr>\r\n                                                            <tr>\r\n                                                                <td *ngFor=\"let item of workGroupArr\">{{item.members_name[0].name || '-'}}\r\n                                                                </td>\r\n                                                            </tr>\r\n                                                            <tr>\r\n                                                                <td *ngFor=\"let item of workGroupArr\">{{item.members_name[1].name || '-'}}\r\n                                                                </td>\r\n                                                            </tr>\r\n                                                            <tr>\r\n                                                                <td *ngFor=\"let item of workGroupArr\">{{item.members_name[2].name || '-'}}\r\n                                                                </td>\r\n                                                            </tr>\r\n                                                            <tr>\r\n                                                                <td *ngFor=\"let item of workGroupArr\">{{item.members_name[3].name || '-'}}\r\n                                                                </td>\r\n                                                            </tr>\r\n                                                            <tr>\r\n                                                                <td *ngFor=\"let item of workGroupArr\">{{item.members_name[4].name || '-'}}\r\n                                                                </td>\r\n                                                            </tr>\r\n                                                            <!-- <tr>\r\n                                                                <td *ngIf=\"workGroupArr[0].memter_type == 'architect'\">{{workGroupArr[0].members_name[1].name || '-'}}</td>\r\n                                                                <td *ngIf=\"workGroupArr[1].memter_type == 'engineer'\">{{workGroupArr[1].members_name[1].name || '-'}}</td>\r\n                                                                <td *ngIf=\"workGroupArr[2].memter_type == 'designer'\">{{workGroupArr[2].members_name[1].name || '-'}}</td>\r\n                                                                <td *ngIf=\"workGroupArr[3].memter_type == 'manager'\">{{workGroupArr[3].members_name[1].name || '-'}}</td>\r\n                                                                <td *ngIf=\"workGroupArr[4].memter_type == 'supplier'\">{{workGroupArr[4].members_name[1].name || '-'}}</td>\r\n                                                            </tr>\r\n                                                            <tr>\r\n                                                                <td *ngIf=\"workGroupArr[0].memter_type == 'architect'\">{{workGroupArr[0].members_name[2].name || '-'}}</td>\r\n                                                                <td *ngIf=\"workGroupArr[1].memter_type == 'engineer'\">{{workGroupArr[1].members_name[2].name || '-'}}</td>\r\n                                                                <td *ngIf=\"workGroupArr[2].memter_type == 'designer'\">{{workGroupArr[2].members_name[2].name || '-'}}</td>\r\n                                                                <td *ngIf=\"workGroupArr[3].memter_type == 'manager'\">{{workGroupArr[3].members_name[2].name || '-'}}</td>\r\n                                                                <td *ngIf=\"workGroupArr[4].memter_type == 'supplier'\">{{workGroupArr[4].members_name[2].name || '-'}}</td>\r\n                                                            </tr>\r\n                                                            <tr>\r\n                                                                <td *ngIf=\"workGroupArr[0].memter_type == 'architect'\">{{workGroupArr[0].members_name[3].name || '-'}}</td>\r\n                                                                <td *ngIf=\"workGroupArr[1].memter_type == 'engineer'\">{{workGroupArr[1].members_name[3].name || '-'}}</td>\r\n                                                                <td *ngIf=\"workGroupArr[2].memter_type == 'designer'\">{{workGroupArr[2].members_name[3].name || '-'}}</td>\r\n                                                                <td *ngIf=\"workGroupArr[3].memter_type == 'manager'\">{{workGroupArr[3].members_name[3].name || '-'}}</td>\r\n                                                                <td *ngIf=\"workGroupArr[4].memter_type == 'supplier'\">{{workGroupArr[4].members_name[3].name || '-'}}</td>\r\n                                                            </tr>\r\n                                                            <tr>\r\n                                                                <td *ngIf=\"workGroupArr[0].memter_type == 'architect'\">{{workGroupArr[0].members_name[4].name || '-'}}</td>\r\n                                                                <td *ngIf=\"workGroupArr[1].memter_type == 'engineer'\">{{workGroupArr[1].members_name[4].name || '-'}}</td>\r\n                                                                <td *ngIf=\"workGroupArr[2].memter_type == 'designer'\">{{workGroupArr[2].members_name[4].name || '-'}}</td>\r\n                                                                <td *ngIf=\"workGroupArr[3].memter_type == 'manager'\">{{workGroupArr[3].members_name[4].name || '-'}}</td>\r\n                                                                <td *ngIf=\"workGroupArr[4].memter_type == 'supplier'\">{{workGroupArr[4].members_name[4].name || '-'}}</td>\r\n                                                            </tr> -->\r\n                                                        </table>\r\n\r\n                                                    </li>\r\n                                                </ul>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"dargPop\">\r\n    <p-dialog [modal]=\"true\" (onHide)=\"hideDialog()\" [(visible)]=\"display\" *ngIf=\"result == 'success'\">\r\n        <h6>Contractor Updated Successfully</h6>\r\n    </p-dialog>\r\n    <p-dialog header=\"New Book Added\" [modal]=\"true\" [(visible)]=\"display\" *ngIf=\"result != 'success'\">\r\n        <p>{{result}}</p>\r\n    </p-dialog>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/contractor/view-contractor/view-contractor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewContractorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_loopback_sdk__ = __webpack_require__("./src/shared/loopback-sdk/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__ = __webpack_require__("./node_modules/primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_primeng_primeng__);
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







var ViewContractorComponent = /** @class */ (function () {
    function ViewContractorComponent(router, _cookieService, _lightbox, confirmationService, appLoginApi, loopAuth, route, contratorProfileApi, appDetailsApi) {
        this.router = router;
        this._cookieService = _cookieService;
        this._lightbox = _lightbox;
        this.confirmationService = confirmationService;
        this.appLoginApi = appLoginApi;
        this.loopAuth = loopAuth;
        this.route = route;
        this.contratorProfileApi = contratorProfileApi;
        this.appDetailsApi = appDetailsApi;
        this.display = false;
        this.submitted = false;
        this.backLink = "";
        this.emptyMessage = "No Result Found";
        this.displayConfirm = false;
        this.msgs = [];
        this.loading = false;
        this.ifEmpty = false;
        this.contractorData = {};
        this.contractordetailLabel = [];
        this.credentialValue = [];
        this.workGroupArr = [];
        this.contractorPhoto = '';
        this.contractor_status = false;
        this.contractorAppId = [];
        this.appDataArr = [];
        this.contractorApp = [];
        this.project_count = 0;
        this.id = this.route.snapshot.params['id'];
        this.maxDate = new Date();
    }
    ViewContractorComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('this is called');
        var dataObj = {};
        var uid = this.id;
        var dataArrObj = {
            "id": this.id
        };
        this.loginFlagToken = this._cookieService.get(sdkPrefix + 'id');
        this.loading = true;
        // this.getContractorData().then((contractorResult)=>{
        // 	console.log("contractorResult",contractorResult);
        // 	this.loading = false;
        // },(err)=>{
        // 	this.loading = false;
        // });
        // this.loading = true;
        Promise.all([
            this.getContractorData(),
            this.getAppDetails()
        ]).then(function (result) {
            _this.loading = false;
        }, function (err) {
            _this.loading = false;
        });
    };
    ViewContractorComponent.prototype.hideDialog = function () {
        this.display = false;
    };
    ViewContractorComponent.prototype.submit = function (formData) {
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
                this.busy = this.contratorProfileApi.edit_contractor(contractorSubmitedValues).subscribe(function () {
                    _this.loading = false;
                    _this.result = 'success';
                    _this.display = true;
                }, function (err) {
                    _this.result = 'Something went wrong';
                    _this.loading = false;
                    _this.display = true;
                });
                return [2 /*return*/];
            });
        });
    };
    ViewContractorComponent.prototype.contractorStatusChanged = function (event) {
        if (!this.contractor_status) {
            this.contractorAppId = [];
        }
    };
    ViewContractorComponent.prototype.getContractorData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var contractorObj = {
                    "contractor_id": _this.id
                };
                _this.contratorProfileApi.get_contractor_details(contractorObj).subscribe(function (data) {
                    _this.contractorData = data.data;
                    _this.contractorDetails = data.data.contractorDetails;
                    var appArr = data.data.apps;
                    _this.project_count = data.data.project_count;
                    //removing key app_id
                    delete _this.contractorDetails['app_id'];
                    for (var key in _this.contractorDetails) {
                        _this.contractordetailLabel.push(key);
                        if (key == 'credentials') {
                            if (_this.contractorDetails[key] != '') {
                                var credentialsArr = JSON.parse(_this.contractorDetails[key]);
                                _this.credentialValue = (credentialsArr != null && credentialsArr != undefined) ? credentialsArr : [];
                            }
                        }
                        if (key == 'affiliations') {
                            for (var item in _this.contractorDetails[key]) {
                                if (_this.contractorDetails[key].item.certificate_name == 'Other') {
                                    _this.contractorDetails[key].item.certificate_name = _this.contractorDetails[key].item.others;
                                }
                            }
                        }
                        if (key == 'contractor_photo') {
                            //console.log("contractor_photo :", this.contractorDetails[key]);
                            if (_this.contractorDetails[key] != null && _this.contractorDetails[key] != undefined && _this.contractorDetails[key] != "") {
                                _this.contractorPhoto = hostname + "/api/containers/contractorImage/download/" + _this.contractorDetails[key] + "?access_token=" + _this.loginFlagToken;
                                //console.log("contractor_photo :", this.contractorPhoto);
                            }
                            else {
                                _this.contractorPhoto = '';
                                //console.log("contractor_photo :", this.contractorPhoto);
                            }
                        }
                    }
                    //getting workgroup data
                    if (data.data.workGroup.length > 0) {
                        for (var key in data.data.workGroup) {
                            var wrkGrpType = data.data.workGroup[key].member_type;
                            var wrkGropNamesArr = JSON.parse(data.data.workGroup[key].member_name);
                            var wrkGroupNamesArr = [];
                            for (var i = 0; i < 5; i++) {
                                if (wrkGropNamesArr[i] != undefined && wrkGropNamesArr[i] != null && wrkGropNamesArr[i] != '') {
                                    wrkGroupNamesArr.push(wrkGropNamesArr[i]);
                                }
                                else {
                                    wrkGroupNamesArr.push({ 'name': '-' });
                                }
                            }
                            var wrkGrpObj = {
                                memter_type: wrkGrpType,
                                members_name: wrkGroupNamesArr
                            };
                            _this.workGroupArr.push(wrkGrpObj);
                        }
                    }
                    //getting apps id in appay
                    if (appArr.length > 0) {
                        for (var key in appArr) {
                            _this.contractorApp.push(appArr[key].app_id);
                        }
                        _this.contractorAppId = _this.contractorApp;
                    }
                    _this.contractor_status = data.data.contractorDetails.status;
                    resolve(_this.contractorData);
                }, function () {
                    reject(true);
                });
            }
            catch (err) {
                reject(err);
            }
        });
    };
    ViewContractorComponent.prototype.getAppDetails = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                _this.appDetailsApi.find({ "where": { "status": 1 } }).subscribe(function (appResultdata) {
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
                    //this.loading = false;
                    resolve(_this.appDataArr);
                }, function (err) {
                    //this.loading = false;
                    reject(true);
                });
            }
            catch (err) {
                reject(true);
            }
        });
    };
    ViewContractorComponent.prototype.open = function (data, index) {
        // override the default config
        this._lightbox.open(data, index, { wrapAround: true, showImageNumberLabel: true });
    };
    ViewContractorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "viewContractor",
            template: __webpack_require__("./src/app/pages/contractor/view-contractor/view-contractor.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["ConfirmationService"]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_5_angular2_cookie_core__["CookieService"], __WEBPACK_IMPORTED_MODULE_4_angular2_lightbox__["Lightbox"], __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["ConfirmationService"], __WEBPACK_IMPORTED_MODULE_2__shared_loopback_sdk__["b" /* App_loginApi */], __WEBPACK_IMPORTED_MODULE_2__shared_loopback_sdk__["m" /* LoopBackAuth */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"], __WEBPACK_IMPORTED_MODULE_2__shared_loopback_sdk__["i" /* Contractor_profileApi */], __WEBPACK_IMPORTED_MODULE_2__shared_loopback_sdk__["a" /* App_detailsApi */]])
    ], ViewContractorComponent);
    return ViewContractorComponent;
}());



/***/ }),

/***/ "./src/app/pages/contractor/view-contractor/view-contractor.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewContractorModule", function() { return ViewContractorModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__view_contractor_component__ = __webpack_require__("./src/app/pages/contractor/view-contractor/view-contractor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__view_contractor_routing_module__ = __webpack_require__("./src/app/pages/contractor/view-contractor/view-contractor-routing.module.ts");
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
























var ViewContractorModule = /** @class */ (function () {
    function ViewContractorModule() {
    }
    ViewContractorModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__view_contractor_routing_module__["a" /* ViewContractorRoutingModule */],
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
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["PaginatorModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["CheckboxModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["RadioButtonModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__view_contractor_component__["a" /* ViewContractorComponent */]
            ]
        })
    ], ViewContractorModule);
    return ViewContractorModule;
}());



/***/ })

});
//# sourceMappingURL=view-contractor.module.chunk.js.map