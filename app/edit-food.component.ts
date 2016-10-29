import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'edit-food',
  template: `
  <div *ngIf="childSelectedFood" class="well" width="70%">
    <h3>You sure you aren't fibbing?</h3>
    <div>
      <label>Food Name:</label>
      <input [(ngModel)]="childSelectedFood.name" class="form-control">
    </div>
    <div>
      <label>Food Description:</label>
      <input [(ngModel)]="childSelectedFood.description" class="form-control">
    </div>
    <div>
      <label>Food Calories:</label>
      <input [(ngModel)]="childSelectedFood.calories" class="form-control">
    </div>
    <div>
      <label>Food Emoji:</label>
      <select [(ngModel)]="childSelectedFood.emoji" class="form-control selcls">
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
      <button (click)="doneEditting(childSelectedFood)" class ="btn btn-lg btn-primary">OK, Save Edit</button>
    </div>
  </div>
  `
})

export class EditFoodComponent {
  @Input() childSelectedFood: Food;
  @Output() sendDoneEditting = new EventEmitter();
  doneEditting() {
    this.sendDoneEditting.emit();
  }
}
