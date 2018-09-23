(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["event-event-module"],{

/***/ "./src/app/layout/event/event-dialog/event-dialog.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/layout/event/event-dialog/event-dialog.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/event/event-dialog/event-dialog.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/layout/event/event-dialog/event-dialog.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/event/event-dialog/event-dialog.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/layout/event/event-dialog/event-dialog.component.ts ***!
  \*********************************************************************/
/*! exports provided: EventDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventDialogComponent", function() { return EventDialogComponent; });
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _event_form_event_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../event-form/event-form.component */ "./src/app/layout/event/event-form/event-form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventDialogComponent = /** @class */ (function () {
    function EventDialogComponent(dialog) {
        this.dialog = dialog;
    }
    EventDialogComponent.prototype.ngOnInit = function () { };
    EventDialogComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(_event_form_event_form_component__WEBPACK_IMPORTED_MODULE_2__["EventFormComponent"], {
            width: '250px',
            data: {}
        });
    };
    EventDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-event-dialog',
            template: __webpack_require__(/*! ./event-dialog.component.html */ "./src/app/layout/event/event-dialog/event-dialog.component.html"),
            styles: [__webpack_require__(/*! ./event-dialog.component.scss */ "./src/app/layout/event/event-dialog/event-dialog.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_0__["MatDialog"]])
    ], EventDialogComponent);
    return EventDialogComponent;
}());



/***/ }),

/***/ "./src/app/layout/event/event-form/event-form.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/layout/event/event-form/event-form.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Cadastrar Novo Evento</h2>\n\n<div class=\"example-container\">\n\n  <form [formGroup]=\"eventForm\" (ngSubmit)=\"onSubmit()\">\n    <mat-form-field>\n      <input matInput placeholder=\"Event Name\" formControlName=\"eventName\">\n    </mat-form-field>\n\n    <mat-form-field>\n      <input matInput placeholder=\"Branding\" formControlName=\"branding\">\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput placeholder=\"Date\"  type=\"date\" formControlName=\"date\">\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput placeholder=\"Description\" formControlName=\"description\">\n    </mat-form-field>\n\n      <input type=\"file\" placeholder=\"Enviar Arquivo\" formControlName=\"file\" (change)=\"onFileSelected($event)\">\n      <!-- <button (click)=\"onUpload()\"> Upload</button>   -->\n    \n    <br>  \n    <button mat-raised-button color=\"primary\" type=\"submit\" class=\"btnSalvar\">Salvar</button>\n\n  </form>\n\n\n\n\n</div>"

/***/ }),

/***/ "./src/app/layout/event/event-form/event-form.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/layout/event/event-form/event-form.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  display: flex;\n  flex-direction: column; }\n\n.example-container > * {\n  width: 100%; }\n\n.btnSalvar {\n  background-color: black !important;\n  color: #C4AF95 !important;\n  float: right; }\n"

/***/ }),

/***/ "./src/app/layout/event/event-form/event-form.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/layout/event/event-form/event-form.component.ts ***!
  \*****************************************************************/
/*! exports provided: EventFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventFormComponent", function() { return EventFormComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _event_service_event_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../event-service/event.service */ "./src/app/layout/event/event-service/event.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var EventFormComponent = /** @class */ (function () {
    function EventFormComponent(eventService, formBuilder, dialogRef, data, http) {
        this.eventService = eventService;
        this.formBuilder = formBuilder;
        this.dialogRef = dialogRef;
        this.data = data;
        this.http = http;
        this.foods = [
            { value: 'steak-0', viewValue: 'Steak' },
            { value: 'pizza-1', viewValue: 'Pizza' },
            { value: 'tacos-2', viewValue: 'Tacos' }
        ];
        this.selectedFile = null;
        this._fileUrl = 'http://35.231.222.247:1880/eventos';
        this.eventCreated = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    EventFormComponent.prototype.ngOnInit = function () {
        this.buildForm();
    };
    EventFormComponent.prototype.buildForm = function () {
        this.eventForm = this.formBuilder.group({
            'eventName': [''],
            'branding': [''],
            'date': [''],
            'description': [''],
            'file': ''
        });
    };
    EventFormComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    EventFormComponent.prototype.clearForm = function () {
        // TODO: limpar formulario limpo
    };
    EventFormComponent.prototype.onFileSelected = function (event) {
        this.selectedFile = event.target.files[0];
    };
    EventFormComponent.prototype.onUpload = function () {
        var fd = new FormData();
        fd.append('image', this.selectedFile, this.selectedFile.name);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        headers.append('Authorization', "Bearer AIzaSyBbLJbgepvcHVXbS6GW2bk8Os-Y0IARcnU");
        headers.append('Content-Type', 'multipart/form-data');
        this.http.post(this._fileUrl, fd, { headers: headers }).subscribe(function (res) {
            console.log('dt', res);
        });
    };
    EventFormComponent.prototype.onSubmit = function () {
        this.eventService.addEvent(this.eventForm.value).subscribe(function () {
            console.log('dados enviados com sucesso');
        });
        this.dialogRef.close();
    };
    EventFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: './app-event-form',
            template: __webpack_require__(/*! ./event-form.component.html */ "./src/app/layout/event/event-form/event-form.component.html"),
            styles: [__webpack_require__(/*! ./event-form.component.scss */ "./src/app/layout/event/event-form/event-form.component.scss")]
        }),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_event_service_event_service__WEBPACK_IMPORTED_MODULE_4__["EventService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], EventFormComponent);
    return EventFormComponent;
}());



/***/ }),

/***/ "./src/app/layout/event/event.component.html":
/*!***************************************************!*\
  !*** ./src/app/layout/event/event.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mb-20\" fxLayout=\"row\" fxLayout.lt-md=\"column\" fxFlex fxLayoutGap=\"20px\">\n    <button mat-button class=\"add-event\" (click)=\"openDialog()\">Adicinar Novo Evento</button>\n</div>\n\n<div class=\"mb-20\" fxLayout=\"row\" fxLayout.lt-md=\"column\" fxFlex fxLayoutGap=\"20px\">\n    <div fxFlex *ngFor=\"let item of places\">\n        <mat-card>\n            <img mat-card-image [src]=\"item.imgSrc\" class=\"img\">\n            <mat-card-header style=\"justify-content: center\">\n                <mat-card-title>\n                    <h3 class=\"m-0\">{{item.place}}</h3>\n                </mat-card-title>\n            </mat-card-header>\n            <mat-card-content>\n                <p>\n                    {{item.description}}\n                </p>\n            </mat-card-content>\n\n            <mat-card-actions>\n                <button mat-button>{{item.charge}}</button>\n                <button mat-button>\n                    <mat-icon class=\"nav-icon\">location_on</mat-icon> {{item.location}}\n                </button>\n            </mat-card-actions>\n        </mat-card>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/layout/event/event.component.scss":
/*!***************************************************!*\
  !*** ./src/app/layout/event/event.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".add-event {\n  border: 1px dashed gray; }\n"

/***/ }),

/***/ "./src/app/layout/event/event.component.ts":
/*!*************************************************!*\
  !*** ./src/app/layout/event/event.component.ts ***!
  \*************************************************/
/*! exports provided: EventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventComponent", function() { return EventComponent; });
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _event_form_event_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event-form/event-form.component */ "./src/app/layout/event/event-form/event-form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventComponent = /** @class */ (function () {
    function EventComponent(dialog) {
        this.dialog = dialog;
        // tslint:disable-next-line:member-ordering
        this.places = [];
        this.places = [
            {
                imgSrc: 'assets/images/prada.jpg',
                place: 'Prada Exclusive Party',
                description: 'New Prada Collection of Bags and Dresses Launch Event',
                charge: '$399/night',
                location: 'Sao Paulo, Brazil'
            },
            {
                imgSrc: 'assets/images/dolce2.jpg',
                place: 'Dolce and Gabanna Exclusive Party',
                description: 'From mans with styles and tendencies of fashion trending.',
                charge: '$850/night',
                location: 'Sao Paulo, Brazil'
            },
            {
                imgSrc: 'assets/images/louis.jpg',
                place: 'Birthday Sephora ',
                description: 'Come with us to celebrate 20 years of Success at Sephora and earn more points for Lounge One',
                charge: '$199/night',
                location: 'Sao Paulo, Brazil'
            }
        ];
    }
    EventComponent.prototype.ngOnInit = function () {
        console.log('carregado');
    };
    EventComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_event_form_event_form_component__WEBPACK_IMPORTED_MODULE_2__["EventFormComponent"], {
            width: '400px',
            height: '400px',
            data: {}
        });
        dialogRef.afterClosed().subscribe(function (result) {
            var data = {
                imgSrc: 'assets/images/louis.jpg',
                place: 'Birthday Sephora ',
                description: 'Come with us to celebrate 20 years of Success at Sephora and earn more points for Lounge One',
                charge: '$199/night',
                location: 'Sao Paulo, Brazil'
            };
            _this.places.push(data);
        });
    };
    EventComponent.prototype.receiveEvent = function (createdEvent) {
        console.log('evento criado', createdEvent);
    };
    EventComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-event',
            template: __webpack_require__(/*! ./event.component.html */ "./src/app/layout/event/event.component.html"),
            styles: [__webpack_require__(/*! ./event.component.scss */ "./src/app/layout/event/event.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_0__["MatDialog"]])
    ], EventComponent);
    return EventComponent;
}());



/***/ }),

/***/ "./src/app/layout/event/event.module.ts":
/*!**********************************************!*\
  !*** ./src/app/layout/event/event.module.ts ***!
  \**********************************************/
/*! exports provided: EventModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventModule", function() { return EventModule; });
/* harmony import */ var _event_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event.routing.module */ "./src/app/layout/event/event.routing.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _event_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./event.component */ "./src/app/layout/event/event.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _event_dialog_event_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./event-dialog/event-dialog.component */ "./src/app/layout/event/event-dialog/event-dialog.component.ts");
/* harmony import */ var _event_form_event_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./event-form/event-form.component */ "./src/app/layout/event/event-form/event-form.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var EventModule = /** @class */ (function () {
    function EventModule() {
    }
    EventModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
                _event_routing_module__WEBPACK_IMPORTED_MODULE_0__["EventRoutesModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"]
            ],
            declarations: [
                _event_component__WEBPACK_IMPORTED_MODULE_6__["EventComponent"],
                _event_dialog_event_dialog_component__WEBPACK_IMPORTED_MODULE_8__["EventDialogComponent"],
                _event_form_event_form_component__WEBPACK_IMPORTED_MODULE_9__["EventFormComponent"]
            ],
            entryComponents: [
                _event_form_event_form_component__WEBPACK_IMPORTED_MODULE_9__["EventFormComponent"]
            ]
        })
    ], EventModule);
    return EventModule;
}());



/***/ }),

/***/ "./src/app/layout/event/event.routing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/layout/event/event.routing.module.ts ***!
  \******************************************************/
/*! exports provided: EventRoutesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventRoutesModule", function() { return EventRoutesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _event_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event.component */ "./src/app/layout/event/event.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _event_component__WEBPACK_IMPORTED_MODULE_2__["EventComponent"]
    }
];
var EventRoutesModule = /** @class */ (function () {
    function EventRoutesModule() {
    }
    EventRoutesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], EventRoutesModule);
    return EventRoutesModule;
}());



/***/ })

}]);
//# sourceMappingURL=event-event-module.js.map