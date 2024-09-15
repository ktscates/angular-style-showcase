import { Component, OnInit } from '@angular/core'
import { RecipesService } from '../../../services/recipes.service'
import { Router } from '@angular/router'
import { Recipe } from '../../../model/recipe.model'

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.scss',
})
export class RecipesComponent implements OnInit {
  recipes!: Recipe[]

  constructor(
    private recipeService: RecipesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.recipeService.getRecipes().subscribe(data => {
      this.recipes = data.recipes
    })
  }
  viewRecipe(id: number) {
    this.router.navigate(['/recipe', id])
    console.log('Viewing recipe with id:', id)
  }
}
