import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss',
})
export class MainContentComponent {
  constructor(private router: Router) {}

  viewAllRecipes() {
    this.router.navigate(['/recipes'])
  }
}
