import { test, expect } from '@playwright/test'

test('Practice #3 script test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/')

  await page.locator('#user-name').fill('standard_user')
  await page.screenshot({ path: 'custom_screenshot.png' })
  await page.locator('#password').fill('secret_sauce')
  await page.locator('#login-button').click()

  await expect(page).toHaveURL(/inventory/)
})
