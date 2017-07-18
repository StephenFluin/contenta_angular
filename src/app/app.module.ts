import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import {
  MdToolbarModule,
  MdButtonModule,
  MdCheckboxModule,
  MdSidenavModule,
  MdSelectModule,
  MdIconModule,
  MdIconRegistry,
  MdChipsModule,
  MdInputModule,
  MdListModule,
  MdOptionModule,
  MdProgressSpinnerModule,
  MdCardModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { RecipesAndFiltersComponent } from './components/recipes-and-filters/recipes-and-filters.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { FiltersComponent } from './components/filters/filters.component';
import { CardComponent } from './components/card/card.component';
import { FeaturesComponent } from './components/features/features.component';
import { environment } from './../environments/environment';

import { Backend } from './services/backend.service';
import { MaterialIconsService } from './services/material-icons/material-icons.service';
import { appReducer } from './store/reducers/reducers';
import { RecipesEffects } from './store/effects/effects';
import { initialState } from './models/state.model';

import { ContentaServiceModule, ContentaDatastore, BASE_URL } from 'contenta-angular-service';

declare var ga;

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    FeaturesComponent,
    HeaderComponent,
    SidenavComponent,
    RecipesAndFiltersComponent,
    RecipesComponent,
    RecipeDetailsComponent,
    RecipeComponent,
    FiltersComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    ContentaServiceModule,
    BrowserAnimationsModule,
    MdInputModule,
    MdCheckboxModule,
    MdToolbarModule,
    MdButtonModule,
    MdSidenavModule,
    MdChipsModule,
    MdIconModule,
    MdListModule,
    MdOptionModule,
    MdSelectModule,
    MdProgressSpinnerModule,
    MdCardModule,
    RouterModule.forRoot([
      { path: '', pathMatch: 'full', redirectTo: 'recipes' },
      { path: 'features', component: FeaturesComponent, data: { title: 'Features', page: 'features' } },
      { path: 'recipes', pathMatch: 'full', component: RecipesAndFiltersComponent, data: { title: 'Recipe List', page: 'recipes' } },
      { path: 'recipe/:id', component: RecipeDetailsComponent, data: { title: false, page: 'recipe' } }
    ]),

    StoreModule.forRoot(<any>{ app: appReducer }, { initialState }),

    EffectsModule.forRoot([
      RecipesEffects
    ]),

    StoreRouterConnectingModule
  ],
  providers: [
    Backend,
    RecipesEffects,
    MdIconRegistry,
    MaterialIconsService,
    ContentaDatastore,
    {
      provide: BASE_URL,
      useValue: environment.jsonapi
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(title: Title, router: Router) {
    router.events.filter(e => e instanceof NavigationEnd).subscribe((n: NavigationEnd) => {
      const pageTitle = router.routerState.snapshot.root.children[0].data['title'];
      if (pageTitle) {
        title.setTitle(pageTitle + ' | Umami Magazine');
      } else if (pageTitle !== false) {
        title.setTitle('Umami Magazine');
      }
      window.scrollTo(0, 0);
      //ga('send', 'pageview', n.urlAfterRedirects);
    });
  }
}
