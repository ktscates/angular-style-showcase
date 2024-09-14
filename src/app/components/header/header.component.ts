import { CommonModule } from '@angular/common'
import { Component, Output, Input, EventEmitter } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Output() themeToggle = new EventEmitter<void>()
  @Input() isDarkTheme!: boolean
  isMenuOpen = false

  constructor(private router: Router) {}

  switchTheme() {
    this.themeToggle.emit()
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen
  }

  viewAllRecipes() {
    this.router.navigate(['/recipes'])
  }

  navigateToHome() {
    this.router.navigate(['/'])
  }

  onKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault() // Prevent scrolling on spacebar
      ;(event.target as HTMLElement).click()
    }
  }
}
