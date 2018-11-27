import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] =[
    new Recipe('A test recipe', 'test2','https://danangcuisine.com/wp-content/uploads/2012/09/P1060471.jpg'),
    new Recipe('A test recipe', 'test2','https://danangcuisine.com/wp-content/uploads/2012/09/P1060471.jpg')

  ];
  constructor() { }

  ngOnInit() {
  }

}