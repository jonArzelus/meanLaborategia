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
var filma_service_1 = require("../../services/filma.service");
var FilmakComponent = (function () {
    function FilmakComponent(filmakService) {
        var _this = this;
        this.filmakService = filmakService;
        this.filmakService.getFilmak()
            .subscribe(function (filmak) {
            _this.filmak = filmak;
        });
    }
    FilmakComponent.prototype.addFilma = function (event) {
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
    FilmakComponent.prototype.deleteFilma = function (id) {
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
    FilmakComponent.prototype.updateFilmaIzena = function (filma, dataizena) {
        if (filma.izena != dataizena) {
            console.log(filma.izena + " " + dataizena);
            var newFilma = {
                _id: filma._id,
                izena: dataizena,
                deskribapena: filma.deskribapena,
                gogokoak: filma.gogokoak,
                bozkak: filma.bozkak
            };
            this.filmakService.updateFilma(newFilma)
                .subscribe(function (data) {
                filma.izena = newFilma.izena;
            });
        }
    };
    FilmakComponent.prototype.updateFilmaDesk = function (filma, datadesk) {
        if (filma.deskribapena != datadesk) {
            console.log(filma.deskribapena + " " + datadesk);
            var newFilma = {
                _id: filma._id,
                izena: filma.izena,
                deskribapena: datadesk,
                gogokoak: filma.gogokoak,
                bozkak: filma.bozkak
            };
            this.filmakService.updateFilma(newFilma)
                .subscribe(function (data) {
                filma.deskribapena = newFilma.deskribapena;
            });
        }
    };
    FilmakComponent.prototype.updateFilma = function (filma, dataizen, datadesk) {
        if (filma.izena != dataizen || filma.deskribapena != datadesk) {
            console.log(filma.izena + " eguneratzen...");
            var newFilma = {
                _id: filma._id,
                gogokoak: filma.gogokoak,
                bozkak: filma.bozkak
            };
            if (filma.izena != dataizen) {
                newFilma.izena = dataizen;
            }
            if (filma.deskribapena != datadesk) {
                newFilma.deskribapena = datadesk;
            }
            this.filmakService.updateFilma(newFilma)
                .subscribe(function (data) {
                filma.izena = newFilma.izena;
                filma.deskribapena = newFilma.deskribapena;
            });
        }
    };
    return FilmakComponent;
}());
FilmakComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'filmak',
        templateUrl: 'filmak.component.html'
    }),
    __metadata("design:paramtypes", [filma_service_1.FilmakService])
], FilmakComponent);
exports.FilmakComponent = FilmakComponent;
//# sourceMappingURL=filmak.component.js.map