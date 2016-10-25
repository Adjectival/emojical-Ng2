import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'edit-food',
  template: `
  <div *ngIf="childSelectedFood" class="well" width="70%">
    <h3>You sure you aren't fibbing?</h3>
    <div>
      <label>Food Name:</label>
      <input [(ngModel)]="childSelectedFood.name">
    </div>
    <div>
      <label>Food Description:</label>
      <input [(ngModel)]="childSelectedFood.description">
    </div>
    <div>
      <label>Food Calories:</label>
      <input [(ngModel)]="childSelectedFood.calories">
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
