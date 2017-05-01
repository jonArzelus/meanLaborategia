"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var ErabiltzaileakService = (function () {
    function ErabiltzaileakService(http) {
        this.http = http;
        console.log('Erabiltzaileen zerbitzua abiarazita...');
    }
    ErabiltzaileakService.prototype.getErabiltzaileak = function () {
        return this.http.get('/api/erabiltzaileak')
            .map(function (res) { return res.json(); });
    };
    //TODO
    ErabiltzaileakService.prototype.addErabiltzailea = function (newFilma) {
        console.log(newFilma);
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/filma', JSON.stringify(newFilma), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //TODO
    ErabiltzaileakService.prototype.deleteErabiltzailea = function (id) {
        return this.http.delete('/api/filma/' + id)
            .map(function (res) { return res.json(); });
    };
    return ErabiltzaileakService;
}());
ErabiltzaileakService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ErabiltzaileakService);
exports.ErabiltzaileakService = ErabiltzaileakService;
//# sourceMappingURL=erabiltzailea.service.js.map