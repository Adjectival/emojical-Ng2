import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>EmojiCal<i class="em em-clipboard"></i><i class="em em-cookie"></i><i class="em em-ok_hand"></i></h1>
    <div *ngFor="let thisFood of foods" (click)="reportMethod(thisFood)">
      <h2>{{ thisFood.name }}</h2>
      <h4>{{ thisFood.description }}</h4>
      <h4 class="calNumber">{{ thisFood.calories }}</h4>
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
  reportMethod(clickedFood: Food) {
    if(clickedFood.calories >= 500) {
      alert("Uh oh, over 500");
    } else {
      alert("Good job, you are what you eat!");
    }
  }
}

export class Food {
  constructor(public name: string, public description: string, public calories: number) {}
}
