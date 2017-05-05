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
var EditFoodComponent = (function () {
    function EditFoodComponent() {
        this.sendDoneEditting = new core_1.EventEmitter();
    }
    EditFoodComponent.prototype.doneEditting = function () {
        this.sendDoneEditting.emit();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', food_model_1.Food)
    ], EditFoodComponent.prototype, "childSelectedFood", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], EditFoodComponent.prototype, "sendDoneEditting", void 0);
    EditFoodComponent = __decorate([
        core_1.Component({
            selector: 'edit-food',
            template: "\n  <div *ngIf=\"childSelectedFood\" class=\"well\" width=\"70%\">\n    <h3>You sure you aren't fibbing?</h3>\n    <div>\n      <label>Food Name:</label>\n      <input [(ngModel)]=\"childSelectedFood.name\" class=\"form-control\">\n    </div>\n    <div>\n      <label>Food Description:</label>\n      <input [(ngModel)]=\"childSelectedFood.description\" class=\"form-control\">\n    </div>\n    <div>\n      <label>Food Calories:</label>\n      <input [(ngModel)]=\"childSelectedFood.calories\" class=\"form-control\">\n    </div>\n    <div>\n      <label>Food Emoji:</label>\n      <select [(ngModel)]=\"childSelectedFood.emoji\" class=\"form-control selcls\">\n        <optgroup label=\"Drinks\">\n          <option value=\"coffee\">Coffee/Chai</option>\n          <option value=\"tea\">Tea</option>\n          <option value=\"baby_bottle\">Dairy Drink</option>\n          <option value=\"beer\">Brewed Drink</option>\n          <option value=\"tropical_drink\">Concoction</option>\n          <option value=\"sake\">Grain Wine</option>\n          <option value=\"wine_glass\">Fruit Wine</option>\n        </optgroup>\n        <optgroup label=\"Meals\">\n        <option value=\"pizza\">Bread+</option>\n          <option value=\"egg\">Simple Protein</option>\n          <option value=\"bento\">Small, Healthy</option>\n          <option value=\"hamburger\">Sandwich/Burger</option>\n          <option value=\"meat_on_bone\">Cooked Meat</option>\n          <option value=\"sushi\">Raw Meat</option>\n          <option value=\"fries\">Potato Based</option>\n          <option value=\"curry\">Rice Based</option>\n          <option value=\"stew\">Stew</option>\n        </optgroup>\n        <optgroup label=\"Snacks\">\n          <option value=\"green_apple\">Healthy</option>\n          <option value=\"cookie\">Small Snacks</option>\n          <option value=\"cake\">Piggy Treat</option>\n          <option value=\"candy\">Candy</option>\n        </optgroup>\n      </select>\n\n    </div>\n    <div>\n      <button (click)=\"doneEditting(childSelectedFood)\" class =\"btn btn-lg btn-primary\">OK, Save Edit</button>\n    </div>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], EditFoodComponent);
    return EditFoodComponent;
}());
exports.EditFoodComponent = EditFoodComponent;
//# sourceMappingURL=edit-food.component.js.map