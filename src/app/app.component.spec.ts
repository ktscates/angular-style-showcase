import { ComponentFixture, TestBed } from '@angular/core/testing'
import { AppComponent } from './app.component'

describe('AppComponent', () => {
  let component: AppComponent
  let fixture: ComponentFixture<AppComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(AppComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should initialize with the correct theme from localStorage', () => {
    component.toggleTheme()
    expect(component.isDarkTheme).toBe(true)
    expect(document.body.classList.contains('dark-theme')).toBe(true)
    expect(document.body.classList.contains('light-theme')).toBe(false)
  })

  it('should toggle theme from saved local storage', () => {
    component.toggleTheme()
    expect(component.isDarkTheme).toBe(false)
    expect(document.body.classList.contains('dark-theme')).toBe(false)
    expect(document.body.classList.contains('light-theme')).toBe(true)
  })
})
