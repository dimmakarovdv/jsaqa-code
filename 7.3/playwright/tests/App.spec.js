const { test, expect } = require('@playwright/test');
const userData = require('../user');

test.describe('Авторизация на netology.ru', () => {
  test('Валидный вход', async ({ page }) => {
    await page.goto('https://netology.ru');

    await page.locator('a:has-text("Войти")').click();
    await page.getByText('Войти по почте', { exact: true }).click();

    await page.type('input[name="email"]', userData.validEmail);
    await page.type('input[name="password"]', userData.validPassword);

    await page.locator('button').filter({ hasText: 'Войти' }).first().click();

    await expect(page.getByText('Здравствуйте', { exact: true })).toBeVisible({
      timeout: 120000,
    });
  });

  test('Попытка входа с неверным логином и паролем', async ({ page }) => {
    await page.goto('https://netology.ru');
    await page.locator('a:has-text("Войти")').click();

    await expect(
      page.getByRole('link', { name: 'Войти по почте' })
    ).toBeVisible();
    await page.getByRole('link', { name: 'Войти по почте' }).click();

    await page.locator('input[type="email"]').fill(userData.invalidEmail);
    await page.locator('input[type="password"]').fill(userData.invalidPassword);
    await page.locator('button:has-text("Войти")').click();

    await page.waitForTimeout(1000);

    await expect(
      page.locator('.notification, .error, [role="alert"]')
    ).toHaveText(/неверный|Неверный/, { timeout: 5000 });
  });
});
