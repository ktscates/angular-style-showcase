import { ComponentFixture, TestBed } from '@angular/core/testing'
import { RecipeDetailComponent } from './recipe-detail.component'
import { Recipe } from '../../../model/recipe.model'
import { RecipesService } from '../../../services/recipes.service'
import { ActivatedRoute } from '@angular/router'
import { of } from 'rxjs'

const mockRecipe: Recipe = {
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
}

describe('RecipeDetailComponent', () => {
  let component: RecipeDetailComponent
  let fixture: ComponentFixture<RecipeDetailComponent>
  let mockRecipeService: RecipesService
  let mockActivatedRoute: ActivatedRoute

  beforeEach(async () => {
    const recipesServiceSpy = {
      getRecipeById: jest.fn().mockReturnValue(of(mockRecipe)),
    }
    const activatedRouteSpy = {
      snapshot: { paramMap: { get: jest.fn().mockReturnValue('1') } },
    }

    await TestBed.configureTestingModule({
      imports: [RecipeDetailComponent],
      providers: [
        { provide: RecipesService, useValue: recipesServiceSpy },
        { provide: ActivatedRoute, useValue: activatedRouteSpy },
      ],
    }).compileComponents()

    fixture = TestBed.createComponent(RecipeDetailComponent)
    component = fixture.componentInstance
    mockRecipeService = TestBed.inject(RecipesService)
    mockActivatedRoute = TestBed.inject(ActivatedRoute)
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should retrieve the recipe by id on init', () => {
    expect(mockActivatedRoute.snapshot.paramMap.get).toHaveBeenCalledWith('id')
    expect(mockRecipeService.getRecipeById).toHaveBeenCalledWith(1)
    expect(component.recipe).toEqual(mockRecipe)
  })

  it('should log the recipe to the console', () => {
    const consoleSpy = jest.spyOn(console, 'log')
    component.ngOnInit()
    expect(consoleSpy).toHaveBeenCalledWith(mockRecipe)
  })
})
