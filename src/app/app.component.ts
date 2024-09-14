import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { HeaderComponent } from './components/header/header.component'
import { FooterComponent } from './components/footer/footer.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-style-showcase'
  isDarkTheme = false

  constructor() {
    this.initializeTheme()
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme
    this.applyTheme()

    localStorage.setItem('theme', this.isDarkTheme ? 'dark' : 'light')
  }

  private applyTheme() {
    if (this.isDarkTheme) {
      document.body.classList.add('dark-theme')
      document.body.classList.remove('light-theme')
    } else {
      document.body.classList.add('light-theme')
      document.body.classList.remove('dark-theme')
    }
  }

  private initializeTheme() {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
      this.isDarkTheme = true
    } else {
      this.isDarkTheme = false
    }
    this.applyTheme()
  }
}
