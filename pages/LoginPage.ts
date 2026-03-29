import { type Locator, type Page } from '@playwright/test'

export class LoginPage {
  // Оголошуємо поля класу для сторінки та локаторів
  readonly page: Page
  readonly usernameInput: Locator
  readonly passwordInput: Locator
  readonly loginButton: Locator

  // Конструктор приймає об'єкт page, який Playwright створює для кожного тесту
  constructor(page: Page) {
    this.page = page

    // Ініціалізація локаторів (централізація ідентифікаторів)
    // Якщо ID елемента зміниться, ми виправимо це лише тут, в одному місці.
    this.usernameInput = page.locator('#user-name')
    this.passwordInput = page.locator('#password')
    this.loginButton = page.locator('#login-button')
    //this.errorMessage = page.locator('#error-message')
  }

  // Метод навігації (відкриття сторінки)
  async goto() {
    await this.page.goto('https://www.saucedemo.com/')
  }

  // Атомарна дія: Введення логіну та паролю
  async fillLoginForm(user: string, pass: string) {
    await this.usernameInput.fill(user)
    await this.passwordInput.fill(pass)
  }

  // Атомарна дія: Натискання кнопки входу
  async submit() {
    await this.loginButton.click()
  }

  /**
   * Високорівневий метод (Flow):
   * Об'єднує дрібні дії у повноцінний сценарій.
   */
  async login(user: string, pass: string) {
    await this.fillLoginForm(user, pass)
    await this.submit()
  }
}