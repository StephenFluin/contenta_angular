import { Component, Input } from '@angular/core';
import { Backend } from '../../services/backend.service';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/mergeMap';
import { State } from '../../models/state.model';
import { Recipe } from 'contenta-angular-service';
import { Store } from '@ngrx/store';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-recipe-details-cmp',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent {
  recipe: Recipe;

  constructor(private route: ActivatedRoute, private store: Store<State>, title: Title) {
    store.select('app').subscribe(t => {
      const id = route.snapshot.paramMap.get('id');
      this.recipe = t.recipes[id];
      title.setTitle(this.recipe.title + ` | Umami Magazine`);
    });
  }
}
