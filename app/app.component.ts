import { Component } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>EmojiCal<i class="em em-clipboard"></i><i class="em em-cookie"></i><i class="em em-ok_hand"></i></h1>
    <div>
      <new-food (newFoodSender)="addFood($event)"></new-food>
    </div>
    <div>
      <food-list
        [childFoodList]="masterFoodList" (editSender)="editFood($event)">
      </food-list>
    </div>
    <div>
      <edit-food [childSelectedFood]="selectedFood" (sendDoneEditting)="endEditFood()">
      </edit-food>
    </div>
  </div>
  `
})

export class AppComponent {
  public masterFoodList: Food []  = [
    new Food("16 oz curry rice", "Japanese comfort food", 740),
    new Food("12 oz vanilla sweet cream nitro cold brew", "actually coffee, not beer", 100),
    new Food("2pcs grilled fatty tuna nigiri", "tastes like charred", 240)
  ];
  selectedFood: Food = null;
  editFood(clickedFood: Food){
    this.selectedFood = clickedFood;
  }
  endEditFood(){
    this.selectedFood = null;
  }
  addFood(newFoodFromChild: Food){
    this.masterFoodList.push(newFoodFromChild)
  }
}
