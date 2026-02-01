const { test, expect } = require('@playwright/test');
const userData = require('../user');

test.describe('Авторизация на netology.ru', () => {
  test('Валидный вход', async ({ page }) => {
    await page.goto('https://netology.ru', { waitUntil: 'networkidle' });
    await page.click('.styles_loginLink__gCSBh.styles_login__X_ArT');
    await page.click('div.styles_button__MYGdj');
    await page.waitForSelector('input[type="email"]', { timeout: 10000 });
    await page.fill('input[type="email"]', userData.validEmail);
    await page.fill('input[type="password"]', userData.validPassword);
    await page.click('button:has-text("Войти")');
    await page.waitForTimeout(3000);
    const profileElements = await page
      .locator('text=Профиль, text=Мой профиль')
      .count();
    expect(profileElements).toBeGreaterThan(0);
  });

  test('Попытка входа с неверным логином и паролем', async ({ page }) => {
    await page.goto('https://netology.ru', { waitUntil: 'networkidle' });
    await page.click('.styles_loginLink__gCSBh.styles_login__X_ArT');
    await page.click('div.styles_button__MYGdj');
    await page.waitForSelector('input[type="email"]', { timeout: 10000 });
    await page.fill('input[type="email"]', userData.invalidEmail);
    await page.fill('input[type="password"]', userData.invalidPassword);
    await page.click('button:has-text("Войти")');
    await page.waitForTimeout(3000);
    const errorCount = await page
      .locator(
        '.notification, .error, .toast, [role="alert"], text=неверный, text=Неверный'
      )
      .count();
    expect(errorCount).toBeGreaterThan(0);
  });
});
