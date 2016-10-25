import { Component, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'new-food',
  template: `
  <h3>What did You just Consume??</h3>
  <div>
    <label>Food Name:</label>
    <input #newFoodName>
  </div>
  <div>
    <label>Food Description:</label>
    <input #newFoodDescription>
  </div>
  <div>
    <label>Food Calories:</label>
    <input #newFoodCalories>
  </div>
  <div>
    <button (click)="newFoodSubmit(newFoodName.value, newFoodDescription.value, newFoodCalories.value); newFoodName.value=''; newFoodDescription.value=''; newFoodCalories.value='';">OK, I Ate This</button>
  </div>
  `
})

export class NewFoodComponent {
  @Output() newFoodSender = new EventEmitter();
  newFoodSubmit(name: string, description: string, calories: number) {
    var newFoodSubmit: Food = new Food(name, description, calories);
    this.newFoodSender.emit(newFoodSubmit);
  }
}
