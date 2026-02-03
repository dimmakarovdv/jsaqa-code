module.exports = {
  testDir: './playwright/tests',
  timeout: 30000,
  use: {
    baseURL: 'https://netology.ru',
    headless: false,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    ignoreHTTPSErrors: true,
  },
  reporter: [['html'], ['list']],
};
