import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { FoodListComponent }   from './food-list.component';
import { EditFoodComponent }   from './edit-food.component';
import { NewFoodComponent }   from './new-food.component';
import { PiggyPipe }   from './piggy.pipe';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    FoodListComponent,
    EditFoodComponent,
    NewFoodComponent,
    PiggyPipe,
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
