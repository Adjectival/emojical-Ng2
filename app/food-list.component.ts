import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'food-list',
  template: `
  <div>
    <select class="form-control selcls" (change)="onChange($event.target.value)">
      <optgroup label="Unsorted">
        <option value="all" selected="selected">Show All Foods</option>
      </optgroup>
      <optgroup label="Sort by Calories">
        <option value="no">Show Healthy Foods</option>
        <option value="yes">Show Piggy Foods</option>
      </optgroup>
    </select>
  </div>
  <div *ngFor="let selectedFood of childFoodList | piggy:caloriesSort">
    <h2>{{ selectedFood.name }}</h2>
    <h4>{{ selectedFood.description }}</h4>
    <h4 class="calNumber">{{ selectedFood.calories }}</h4>
    <div>
      <button (click)="editFood(selectedFood)" class="btn btn-lg btn-info">Edit this Food</button>
    </div>
  </div>
  `
})
export class FoodListComponent {
  @Input() childFoodList: Food[];
  @Output() editSender = new EventEmitter();
  editFood(foodToEdit: Food) {
    this.editSender.emit(foodToEdit);
  }
  public caloriesSort: string = "all"
  onChange(selectMenuChoice) {
    this.caloriesSort = selectMenuChoice;
    console.log(this.caloriesSort);
  }
}
