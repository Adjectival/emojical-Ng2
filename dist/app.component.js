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
var food_model_1 = require('./food.model');
var AppComponent = (function () {
    function AppComponent() {
        this.masterFoodList = [
            new food_model_1.Food("16 oz curry rice", "Japanese comfort food", 740, "curry"),
            new food_model_1.Food("12 oz vanilla sweet cream nitro cold brew", "actually coffee, not beer", 100, "coffee"),
            new food_model_1.Food("2pcs grilled fatty tuna nigiri", "tastes like charred", 240, "sushi"),
            new food_model_1.Food("double double animal style", "not yet in Poetland", 770, "hamburger"),
            new food_model_1.Food("$10 Osan AB punchbowl", "soju + kool-aid powder of choice", 80, "tropical_drink")
        ];
        this.selectedFood = null;
    }
    AppComponent.prototype.editFood = function (clickedFood) {
        this.selectedFood = clickedFood;
    };
    AppComponent.prototype.endEditFood = function () {
        this.selectedFood = null;
    };
    AppComponent.prototype.addFood = function (newFoodFromChild) {
        this.masterFoodList.push(newFoodFromChild);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n  <div class=\"container\">\n    <h1><i class=\"em em-clipboard\"></i><i class=\"em em-cookie\"></i><i class=\"em em-ok_hand\"></i> \u2726 EmojiCal</h1>\n    <div class=\"NEWdiv\">\n      <new-food (newFoodSender)=\"addFood($event)\"></new-food>\n    </div>\n    <div class=\"EDITdiv\">\n      <edit-food [childSelectedFood]=\"selectedFood\" (sendDoneEditting)=\"endEditFood()\">\n      </edit-food>\n    </div>\n    <div class=\"LISTdiv\">\n      <food-list\n        [childFoodList]=\"masterFoodList\" (editSender)=\"editFood($event)\">\n      </food-list>\n    </div>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map