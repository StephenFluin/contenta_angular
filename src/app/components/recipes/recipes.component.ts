import { Component, Input } from '@angular/core';
import { Recipe } from 'contenta-angular-service';

@Component({
  selector: 'app-recipes-cmp',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
  moduleId: module.id,
})
export class RecipesComponent {
  @Input() recipes: Recipe[];
}
