import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>EmojiCal<i class="em em-clipboard"></i><i class="em em-cookie"></i><i class="em em-ok_hand"></i></h1>
    <h2 *ngFor="let thisFood of foods">{{ thisFood.name }}</h2>
  </div>
  `
})

export class AppComponent {
  public foods: Food[] = [
    new Food("16 oz curry rice", "Japanese comfort food", 740),
    new Food("12 oz vanilla sweet cream nitro cold brew", "actually coffee, not beer", 100),
    new Food("2pcs grilled fatty tuna nigiri", "tastes like charred", 240)
  ];
}

export class Food {
  constructor(public name: string, public description: string, public calories: number) {}
}
