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
var core_1 = require('@angular/core');
var PiggyPipe = (function () {
    function PiggyPipe() {
    }
    PiggyPipe.prototype.transform = function (input, sortByPiggy) {
        var pipedOutput = [];
        if (sortByPiggy === "yes") {
            for (var i = 0; i < input.length; i++) {
                if (input[i].calories >= 500) {
                    pipedOutput.push(input[i]);
                }
            }
            return pipedOutput;
        }
        else if (sortByPiggy === "no") {
            for (var i = 0; i < input.length; i++) {
                if (input[i].calories < 500) {
                    pipedOutput.push(input[i]);
                }
            }
            return pipedOutput;
        }
        else {
            return input;
        }
    };
    PiggyPipe = __decorate([
        core_1.Pipe({
            name: "piggy",
            pure: false
        }), 
        __metadata('design:paramtypes', [])
    ], PiggyPipe);
    return PiggyPipe;
}());
exports.PiggyPipe = PiggyPipe;
//# sourceMappingURL=piggy.pipe.js.map