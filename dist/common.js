(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/layout/event/event-service/event.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/layout/event/event-service/event.service.ts ***!
  \*************************************************************/
/*! exports provided: EventService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventService", function() { return EventService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EventService = /** @class */ (function () {
    function EventService(_http) {
        this._http = _http;
        this._url = 'http://35.231.222.247:1880/notificacao';
        this._clientsUrl = 'http://api.hack.platformbuilders.io/iguatemi/v1/clientes';
        this.requestOptions = {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
        };
    }
    EventService.prototype.addEvent = function (data) {
        console.log('data', data);
        localStorage.setItem('event', JSON.stringify(data));
        return this._http.post(this._url, data);
    };
    EventService.prototype.getClients = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'api-key': 'ef0ea7e8b7bd4087a6ab4d76f0d37b06'
        });
        return this._http.get(this._clientsUrl, { headers: headers });
    };
    EventService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], EventService);
    return EventService;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map