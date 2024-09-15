import { ComponentFixture, TestBed } from '@angular/core/testing'
import { RecipesComponent } from './recipes.component'
import { Recipes } from '../../../model/recipe.model'
import { RecipesService } from '../../../services/recipes.service'
import { Router } from '@angular/router'
import { of } from 'rxjs'

const mockRecipes: Recipes = {
  recipes: [
    {
      id: 1,
      name: 'Spaghetti',
      ingredients: ['pasta', 'tomato', 'garlic'],
      instructions: ['Boil water', 'Cook pasta', 'Prepare sauce'],
      prepTimeMinutes: 10,
      cookTimeMinutes: 15,
      servings: 4,
      difficulty: 'Easy',
      cuisine: 'Italian',
      caloriesPerServing: 300,
      tags: ['dinner', 'quick'],
      userId: 1,
      image: 'spaghetti.jpg',
      rating: 4.5,
      reviewCount: 10,
      mealType: ['dinner'],
    },
  ],
  total: 1,
  skip: 0,
  limit: 10,
}

describe('RecipesComponent', () => {
  let component: RecipesComponent
  let fixture: ComponentFixture<RecipesComponent>
  let mockRecipeService: RecipesService
  let mockRouter: Router

  beforeEach(async () => {
    const recipesServiceSpy = {
      getRecipes: jest.fn().mockReturnValue(of(mockRecipes)),
    }
    const routerSpy = {
      navigate: jest.fn(),
    }

    await TestBed.configureTestingModule({
      imports: [RecipesComponent],
      providers: [
        { provide: RecipesService, useValue: recipesServiceSpy },
        { provide: Router, useValue: routerSpy },
      ],
    }).compileComponents()

    fixture = TestBed.createComponent(RecipesComponent)
    component = fixture.componentInstance
    mockRecipeService = TestBed.inject(RecipesService)
    mockRouter = TestBed.inject(Router)
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should populate recipes on init', () => {
    expect(mockRecipeService.getRecipes).toHaveBeenCalled()
    expect(component.recipes.length).toBe(1)
    expect(component.recipes[0].name).toBe('Spaghetti')
  })

  it('should navigate to the recipe details page', () => {
    const recipeId = 1
    component.viewRecipe(recipeId)
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/recipe', recipeId])
  })
})
