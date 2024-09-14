import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { RecipesService } from '../../../services/recipes.service'
import { Recipe } from '../../../model/recipe.model'

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [],
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.scss',
})
export class RecipeDetailComponent implements OnInit {
  recipe!: Recipe

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipesService
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')! // Get the 'id' from the route
    this.recipeService.getRecipeById(id).subscribe(data => {
      this.recipe = data
      console.log(this.recipe)
    })
  }
}
