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
var NewFoodComponent = (function () {
    function NewFoodComponent() {
        this.newFoodSender = new core_1.EventEmitter();
    }
    NewFoodComponent.prototype.newFoodSubmit = function (name, description, calories, emoji) {
        var newFoodSubmit = new food_model_1.Food(name, description, calories, emoji);
        this.newFoodSender.emit(newFoodSubmit);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], NewFoodComponent.prototype, "newFoodSender", void 0);
    NewFoodComponent = __decorate([
        core_1.Component({
            selector: 'new-food',
            template: "\n  <h3>What did You just Consume??</h3>\n  <div>\n    <label>Food Name:</label>\n    <input #newFoodName class=\"form-control\">\n    <label>Food Description:</label>\n    <input #newFoodDescription class=\"form-control\">\n    <label>Food Calories:</label>\n    <input #newFoodCalories class=\"form-control\">\n    <label>Food Emoji:</label>\n    <select #newFoodEmoji class=\"form-control selcls\">\n      <optgroup label=\"Drinks\">\n        <option value=\"coffee\">Coffee/Chai</option>\n        <option value=\"tea\">Tea</option>\n        <option value=\"baby_bottle\">Dairy Drink</option>\n        <option value=\"beer\">Brewed Drink</option>\n        <option value=\"tropical_drink\">Concoction</option>\n        <option value=\"sake\">Grain Wine</option>\n        <option value=\"wine_glass\">Fruit Wine</option>\n      </optgroup>\n      <optgroup label=\"Meals\">\n      <option value=\"pizza\">Bread+</option>\n        <option value=\"egg\">Simple Protein</option>\n        <option value=\"bento\">Small, Healthy</option>\n        <option value=\"hamburger\">Sandwich/Burger</option>\n        <option value=\"meat_on_bone\">Cooked Meat</option>\n        <option value=\"sushi\">Raw Meat</option>\n        <option value=\"fries\">Potato Based</option>\n        <option value=\"curry\">Rice Based</option>\n        <option value=\"stew\">Stew</option>\n      </optgroup>\n      <optgroup label=\"Snacks\">\n        <option value=\"green_apple\">Healthy</option>\n        <option value=\"cookie\">Small Snacks</option>\n        <option value=\"cake\">Piggy Treat</option>\n        <option value=\"candy\">Candy</option>\n      </optgroup>\n    </select>\n  </div>\n  <div>\n    <button (click)=\"newFoodSubmit(newFoodName.value, newFoodDescription.value, newFoodCalories.value, newFoodEmoji.value); newFoodName.value=''; newFoodDescription.value=''; newFoodCalories.value=''; newFoodEmoji.value='';\" class=\"btn btn-block btn-primary\">OK, I Ate This</button>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], NewFoodComponent);
    return NewFoodComponent;
}());
exports.NewFoodComponent = NewFoodComponent;
//# sourceMappingURL=new-food.component.js.map