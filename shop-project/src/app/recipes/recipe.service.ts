import { Recipe } from "./recipe.model";
import { EventEmitter } from "@angular/core";


export class RecipeService {
    recipeSelected =  new EventEmitter<Recipe>(); 

    private recipes: Recipe[] = [
        new Recipe('A test recipe', 'test2', 'https://danangcuisine.com/wp-content/uploads/2012/09/P1060471.jpg'),
        new Recipe('A second test recipe', 'test2', 'https://danangcuisine.com/wp-content/uploads/2012/09/P1060471.jpg')
    ];

    getRecipes(){
        return this.recipes.slice();
    }
}