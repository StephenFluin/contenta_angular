import { Component, Input } from '@angular/core';
import { Recipe } from 'contenta-angular-service';

@Component({
  selector: 'app-recipe-cmp',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss'],
  moduleId: module.id,
})
export class RecipeComponent {
  @Input() recipe: Recipe;
  @Input() image;
}
