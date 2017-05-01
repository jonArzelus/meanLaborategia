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
var erabiltzailea_service_1 = require("../../services/erabiltzailea.service");
var ErabiltzaileakComponent = (function () {
    function ErabiltzaileakComponent(erabiltzaileakService) {
        var _this = this;
        this.erabiltzaileakService = erabiltzaileakService;
        this.erabiltzaileakService.getErabiltzaileak()
            .subscribe(function (erab) {
            _this.erab = erab;
        });
    }
    //TODO
    ErabiltzaileakComponent.prototype.addFilma = function (event) {
        var _this = this;
        event.preventDefault();
        console.log(this.izena);
        var newFilma = {
            izena: this.izena,
            deskribapena: this.deskribapena,
            gogokoak: [],
            bozkak: []
        };
        this.filmakService.addFilma(newFilma)
            .subscribe(function (filma) {
            _this.filmak.push(filma);
            _this.izena = '';
            _this.deskribapena = '';
        });
    };
    //TODO
    ErabiltzaileakComponent.prototype.deleteFilma = function (id) {
        var filmak = this.filmak;
        console.log("ezabatzen " + id);
        this.filmakService.deleteFilma(id)
            .subscribe(function (data) {
            if (data.n == 1) {
                for (var i = 0; i < filmak.length; i++)
                    if (filmak[i]._id == id) {
                        filmak.splice(i, 1);
                    }
            }
        });
    };
    return ErabiltzaileakComponent;
}());
ErabiltzaileakComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'erabiltzaileak',
        templateUrl: 'erabiltzaileak.component.html'
    }),
    __metadata("design:paramtypes", [erabiltzailea_service_1.ErabiltzaileakService])
], ErabiltzaileakComponent);
exports.ErabiltzaileakComponent = ErabiltzaileakComponent;
//# sourceMappingURL=erabiltzaileak.component.js.map