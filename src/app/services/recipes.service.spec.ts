import { TestBed } from '@angular/core/testing'
import { RecipesService } from './recipes.service'
import { Recipes } from '../model/recipe.model'
import { Recipe } from '../model/recipe.model'
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing'

const mockRecipes: Recipes = {
  recipes: [
    {
      id: 1,
      name: 'Spaghetti Bolognese',
      ingredients: ['Spaghetti', 'Tomato', 'Beef'],
      instructions: ['Boil pasta', 'Cook beef', 'Mix together'],
      prepTimeMinutes: 10,
      cookTimeMinutes: 30,
      servings: 4,
      difficulty: 'Easy',
      cuisine: 'Italian',
      caloriesPerServing: 500,
      tags: ['Pasta', 'Dinner'],
      userId: 1,
      image: 'spaghetti.jpg',
      rating: 4.5,
      reviewCount: 100,
      mealType: ['Lunch', 'Dinner'],
    },
  ],
  total: 1,
  skip: 0,
  limit: 10,
}

describe('RecipesService', () => {
  let service: RecipesService
  let httpMock: HttpTestingController

  const mockRecipe: Recipe = mockRecipes.recipes[0]

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RecipesService],
    })
    service = TestBed.inject(RecipesService)
    httpMock = TestBed.inject(HttpTestingController)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('should retrieve all recipes', () => {
    service.getRecipes().subscribe(recipesData => {
      expect(recipesData).toEqual(mockRecipes)
    })
    const req = httpMock.expectOne('https://dummyjson.com/recipes')
    expect(req.request.method).toBe('GET')
    req.flush(mockRecipes)
  })

  it('should retrieve a recipe by id', () => {
    const recipeId = 1
    service.getRecipeById(recipeId).subscribe(recipeData => {
      expect(recipeData).toEqual(mockRecipe)
    })
    const req = httpMock.expectOne(`https://dummyjson.com/recipes/${recipeId}`)
    expect(req.request.method).toBe('GET')
    req.flush(mockRecipe)
  })
})
