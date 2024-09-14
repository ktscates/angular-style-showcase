import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Recipe, Recipes } from '../model/recipe.model'

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  private apiUrl = 'https://dummyjson.com/recipes'

  constructor(private http: HttpClient) {}

  getRecipes(): Observable<Recipes> {
    return this.http.get<Recipes>(this.apiUrl)
  }

  getRecipeById(id: number): Observable<Recipe> {
    return this.http.get<Recipe>(`${this.apiUrl}/${id}`)
  }
}
