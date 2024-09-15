import { ComponentFixture, TestBed } from '@angular/core/testing'
import { HeaderComponent } from './header.component'
import { Router } from '@angular/router'

describe('HeaderComponent', () => {
  let component: HeaderComponent
  let fixture: ComponentFixture<HeaderComponent>
  const mockRouter = { navigate: jest.fn() }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
      providers: [{ provide: Router, useValue: mockRouter }],
    }).compileComponents()

    fixture = TestBed.createComponent(HeaderComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should switch theme', () => {
    jest.spyOn(component.themeToggle, 'emit')
    component.switchTheme()
    expect(component.themeToggle.emit).toHaveBeenCalled()
  })

  it('should toggle the menu', () => {
    expect(component.isMenuOpen).toBe(false)
    component.toggleMenu()
    expect(component.isMenuOpen).toBe(true)
    component.toggleMenu()
    expect(component.isMenuOpen).toBe(false)
  })

  it('should navigate to recipes', () => {
    component.viewAllRecipes()
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/recipes'])
  })

  it('should navigate to home', () => {
    component.navigateToHome()
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/'])
  })

  it('should handle Enter keypress', () => {
    const mockEvent = {
      key: 'Enter',
      preventDefault: jest.fn(),
      target: { click: jest.fn() },
    } as unknown as KeyboardEvent
    component.onKeydown(mockEvent)
    expect(mockEvent.preventDefault).toHaveBeenCalled()
    expect((mockEvent.target as HTMLElement).click).toHaveBeenCalled()
  })

  it('should handle Space keypress', () => {
    const mockEvent = {
      key: ' ',
      preventDefault: jest.fn(),
      target: { click: jest.fn() },
    } as unknown as KeyboardEvent

    component.onKeydown(mockEvent)

    expect(mockEvent.preventDefault).toHaveBeenCalled()
    expect((mockEvent.target as HTMLElement).click).toHaveBeenCalled()
  })
})
