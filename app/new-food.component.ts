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
  </div>
  <div>
    <button (click)="newFoodSubmit(newFoodName.value, newFoodDescription.value, newFoodCalories.value); newFoodName.value=''; newFoodDescription.value=''; newFoodCalories.value='';" class="btn btn-block btn-primary">OK, I Ate This</button>
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
