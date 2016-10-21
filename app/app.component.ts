import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>EmojiCal<i class="em em-clipboard"></i><i class="em em-cookie"></i><i class="em em-ok_hand"></i></h1>
    <div *ngFor="let selectedFood of foods" (click)="editFood(selectedFood)">
      <h2>{{ selectedFood.name }}</h2>
      <h4>{{ selectedFood.description }}</h4>
      <h4 class="calNumber">{{ selectedFood.calories }}</h4>
    </div>
    <div class="well">
      <h3>Click a Food Item above to Edit it</h3>
      <div>
        <label>Food Name:</label>
        <input [(ngModel)]="selectedFood.name">
      </div>
      <div>
        <label>Food Description:</label>
        <input [(ngModel)]="selectedFood.description">
      </div>
      <div>
        <label>Food Calories:</label>
        <input [(ngModel)]="selectedFood.calories">
      </div>
    </div>
  </div>
  `
})

export class AppComponent {
  public foods: Food[] = [
    new Food("16 oz curry rice", "Japanese comfort food", 740),
    new Food("12 oz vanilla sweet cream nitro cold brew", "actually coffee, not beer", 100),
    new Food("2pcs grilled fatty tuna nigiri", "tastes like charred", 240)
  ];
  selectedFood: Food = this.foods[0];
  editFood(clickedFood: Food){
    this.selectedFood = clickedFood;
  }
}

export class Food {
  constructor(public name: string, public description: string, public calories: number) {}
}
