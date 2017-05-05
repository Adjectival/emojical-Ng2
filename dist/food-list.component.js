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
var FoodListComponent = (function () {
    function FoodListComponent() {
        this.editSender = new core_1.EventEmitter();
        this.caloriesSort = "all";
    }
    FoodListComponent.prototype.editFood = function (foodToEdit) {
        this.editSender.emit(foodToEdit);
    };
    FoodListComponent.prototype.onChange = function (selectMenuChoice) {
        this.caloriesSort = selectMenuChoice;
        console.log(this.caloriesSort);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], FoodListComponent.prototype, "childFoodList", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], FoodListComponent.prototype, "editSender", void 0);
    FoodListComponent = __decorate([
        core_1.Component({
            selector: 'food-list',
            template: "\n  <div>\n    <select class=\"form-control selcls\" (change)=\"onChange($event.target.value)\">\n      <optgroup label=\"Unsorted\">\n        <option value=\"all\" selected=\"selected\">Show All Foods</option>\n      </optgroup>\n      <optgroup label=\"Sort by Calories\">\n        <option value=\"no\">Show Healthy Foods (under 500 cal)</option>\n        <option value=\"yes\">Show Piggy Foods (500+ calories)</option>\n      </optgroup>\n    </select>\n  </div>\n  <div *ngFor=\"let selectedFood of childFoodList | piggy:caloriesSort\">\n    <div>\n      <h2><i class=\"em em-{{ selectedFood.emoji }}\"></i> ~ {{ selectedFood.name }}</h2>\n      <h4>{{ selectedFood.description }}</h4>\n      <h4 class=\"calNumber\">{{ selectedFood.calories }} kcalories</h4>\n      <button (click)=\"editFood(selectedFood)\" class=\"btn btn-lg btn-info\">Edit this Food</button>\n    </div>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], FoodListComponent);
    return FoodListComponent;
}());
exports.FoodListComponent = FoodListComponent;
//# sourceMappingURL=food-list.component.js.map