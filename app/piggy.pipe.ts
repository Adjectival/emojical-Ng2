import { Pipe, PipeTransform } from '@angular/core';
import { Food } from './food.model';

@Pipe({
  name: "piggy",
  pure: false
})

export class PiggyPipe implements PipeTransform {
  transform(input: Food[], sortByPiggy) {
    var pipedOutput: Food[] = [];
    if(sortByPiggy === "yes") {
      for (var i=0; i < input.length; i++) {
        if (input[i].calories >= 500) {
          pipedOutput.push(input[i]);
        }
      }
      return pipedOutput;
    } else if (sortByPiggy === "no") {
      for (var i=0; i < input.length; i++) {
        if (input[i].calories < 500) {
          pipedOutput.push(input[i]);
        }
      }
      return pipedOutput;
    } else {
      return input;
    }
  }
}
