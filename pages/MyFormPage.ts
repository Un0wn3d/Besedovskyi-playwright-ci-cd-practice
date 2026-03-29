import { type Locator, type Page } from '@playwright/test'

export class MyFormPage {
  // Оголошуємо поля класу для сторінки та локаторів
  readonly page: Page
  readonly usernameInput: Locator
  readonly passwordInput: Locator
  readonly submitButton: Locator
  readonly errorMessage: Locator

  // Конструктор приймає об'єкт page, який Playwright створює для кожного тесту
  constructor(page: Page) {
    this.page = page

    // Ініціалізація локаторів (централізація ідентифікаторів)
    // Якщо селектор елемента зміниться, ми виправимо це лише тут, в одному місці.
    this.usernameInput = page.locator('#login')
    this.passwordInput = page.locator('#password')
    this.submitButton = page.locator('button.btn-primary')
    this.errorMessage = page.locator('.error-message')
  }

  // Метод навігації (відкриття сторінки)
  async goto() {
    await this.page.goto('https://jbot.khpcc.com/')
  }

  // Атомарна дія: Введення логіну та паролю
  async fillLoginForm(user: string, pass: string) {
    await this.usernameInput.fill(user)
    await this.passwordInput.fill(pass)
  }

  // Атомарна дія: Натискання кнопки входу
  async submit() {
    await this.submitButton.click()
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
