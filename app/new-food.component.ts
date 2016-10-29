import { Component, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'new-food',
  template: `
  <h3>What did You just Consume??</h3>
  <div>
    <label>Food Name:</label>
    <input #newFoodName class="form-control">
    <label>Food Description:</label>
    <input #newFoodDescription class="form-control">
    <label>Food Calories:</label>
    <input #newFoodCalories class="form-control">
    <label>Food Emoji:</label>
    <select #newFoodEmoji class="form-control selcls">
      <optgroup label="Drinks">
        <option value="coffee">Coffee/Chai</option>
        <option value="tea">Tea</option>
        <option value="baby_bottle">Dairy Drink</option>
        <option value="beer">Brewed Drink</option>
        <option value="tropical_drink">Concoction</option>
        <option value="sake">Grain Wine</option>
        <option value="wine_glass">Fruit Wine</option>
      </optgroup>
      <optgroup label="Meals">
      <option value="pizza">Bread+</option>
        <option value="egg">Simple Protein</option>
        <option value="bento">Small, Healthy</option>
        <option value="hamburger">Sandwich/Burger</option>
        <option value="meat_on_bone">Cooked Meat</option>
        <option value="sushi">Raw Meat</option>
        <option value="fries">Potato Based</option>
        <option value="curry">Rice Based</option>
        <option value="stew">Stew</option>
      </optgroup>
      <optgroup label="Snacks">
        <option value="green_apple">Healthy</option>
        <option value="cookie">Small Snacks</option>
        <option value="cake">Piggy Treat</option>
        <option value="candy">Candy</option>
      </optgroup>
    </select>
  </div>
  <div>
    <button (click)="newFoodSubmit(newFoodName.value, newFoodDescription.value, newFoodCalories.value, newFoodEmoji.value); newFoodName.value=''; newFoodDescription.value=''; newFoodCalories.value=''; newFoodEmoji.value='';" class="btn btn-block btn-primary">OK, I Ate This</button>
  </div>
  `
})

export class NewFoodComponent {
  @Output() newFoodSender = new EventEmitter();
  newFoodSubmit(name: string, description: string, calories: number, emoji: string) {
    var newFoodSubmit: Food = new Food(name, description, calories, emoji);
    this.newFoodSender.emit(newFoodSubmit);
  }
}
