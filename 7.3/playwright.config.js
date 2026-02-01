module.exports = {
  testDir: './playwright/tests', // ← путь ОТНОСИТЕЛЬНО корня проекта
  timeout: 30000,
  use: {
    baseURL: 'https://netology.ru',
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    ignoreHTTPSErrors: true,
  },
  reporter: [['html'], ['list']],
};
