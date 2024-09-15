import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MainContentComponent } from './main-content.component'
import { Router } from '@angular/router'

describe('MainContentComponent', () => {
  let component: MainContentComponent
  let fixture: ComponentFixture<MainContentComponent>
  let router: Router

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainContentComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(MainContentComponent)
    component = fixture.componentInstance
    router = TestBed.inject(Router) // Inject Router for spy usage
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should navigate to /recipes when viewAllRecipes is called', () => {
    const navigateSpy = jest.spyOn(router, 'navigate')
    component.viewAllRecipes()
    expect(navigateSpy).toHaveBeenCalledWith(['/recipes'])
  })
})
