import { Routes } from '@angular/router'
import { MainContentComponent } from './components/main-content/main-content.component'
import { RecipesComponent } from './components/main-content/recipes/recipes.component'

export const routes: Routes = [
  { path: '', component: MainContentComponent },
  { path: 'recipes', component: RecipesComponent },
  {
    path: 'recipe/:id',
    loadComponent: () =>
      import(
        './components/main-content/recipe-detail/recipe-detail.component'
      ).then(m => m.RecipeDetailComponent),
  },
]
