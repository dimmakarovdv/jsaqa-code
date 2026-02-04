const { test, expect } = require('@playwright/test');
const userData = require('../user');

test.describe('Авторизация на netology.ru', () => {
  test('Валидный вход', async ({ page }) => {
    await page.goto('https://netology.ru/?al=sign_in');
    await expect(page).toHaveURL('https://netology.ru/?al=sign_in');

    await page
      .locator('a')
      .filter({ hasText: 'Войти' }, { timeout: 30000 })
      .first()
      .click();

    await page.locator(':text-is("Войти по почте")').click();
    await page.locator('[placeholder="Email"]').click();
    await page.locator('[placeholder="Email"]').fill(userData.validEmail);

    await page.locator('[placeholder="Пароль"]').click();
    await page.locator('[placeholder="Пароль"]').fill(userData.validPassword);

    await page.locator('[data-testid="login-submit-btn"]').click();

    await page.waitForURL(`https://netology.ru/profile/${userData.userID}`);
    await expect(page).toHaveURL(
      `https://netology.ru/profile/${userData.userID}`
    );
  });

  test('Попытка входа с неверным логином и паролем', async ({ page }) => {
    await page.goto('https://netology.ru/?al=sign_in');
    await expect(page).toHaveURL('https://netology.ru/?al=sign_in');

    await page
      .locator('a')
      .filter({ hasText: 'Войти' }, { timeout: 30000 })
      .first()
      .click();

    await page.locator(':text-is("Войти по почте")').click();

    await page.locator('[placeholder="Email"]').click();
    await page.locator('[placeholder="Email"]').fill(userData.invalidEmail);

    await page.locator('[placeholder="Пароль"]').click();
    await page.locator('[placeholder="Пароль"]').fill(userData.invalidPassword);

    await page.locator('[data-testid="login-submit-btn"]').click();

    const error = await page.locator('[data-testid="login-error-hint"]');
    await expect(error).toHaveText('Вы ввели неправильно логин или пароль');
  });
});
