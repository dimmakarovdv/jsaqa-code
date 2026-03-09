describe("Github page tests", () => {
  let page;

beforeEach(async () => {
  page = await browser.newPage();
  await page.goto("https://github.com/team");
});

afterEach(() => {
  page.close();
});
  
  
  test("The page has correct title", async () => {
    const title = await page.title();
    expect(title).toContain('GitHub');
  }, 30000);

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", link => link.getAttribute('href'));
    expect(actual).toEqual("#start-of-content");
  }, 30000);

  test("The page contains Sign in button", async () => {
    await page.waitForXPath('//a[contains(text(), "Sign in")]');
    const [signInLink] = await page.$x('//a[contains(text(), "Sign in")]');
    expect(signInLink).toBeTruthy();
  }, 30000);
});

describe("GitHub About page", () => {
  let page;
  
  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto("https://github.com/about");
  });

  afterEach(async () => {
    if (page) {
      try {
        await page.close();
      } catch (e) {
      }
    }
  });

  test("Page has correct title", async () => {
    await page.waitForSelector('h1');
    const title = await page.title();
    expect(title).toContain('About');
  }, 30000);

  test("H1 header exists on page", async () => {
    const h1 = await page.$('h1');
    expect(h1).toBeTruthy();
  }, 30000);
});

describe("GitHub accelerator page", () => {
  let page;
  
  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto("https://github.com/open-source/accelerator");
  });

  afterEach(async () => {
    if (page) {
      try {
        await page.close();
      } catch (e) {
      }
    }
  });

  test("Page has correct title", async () => {
    await page.waitForSelector('h1');
    const title = await page.title();
    expect(title).toContain('GitHub Accelerator');
  }, 30000);

  test("H1 header exists on page", async () => {
    const h1 = await page.$('h1');
    expect(h1).toBeTruthy();
  }, 30000);
});

describe("GitHub sponsors page", () => {
  let page;
  
  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto("https://github.com/open-source/sponsors");
  });

  afterEach(async () => {
    if (page) {
      try {
        await page.close();
      } catch (e) {
      }
    }
  });

  test("Page has correct title", async () => {
    await page.waitForSelector('h1');
    const title = await page.title();
    expect(title).toContain('GitHub Sponsors')
  }, 30000);

  test("H1 header exists on page", async () => {
    const h1 = await page.$('h1');
    expect(h1).toBeTruthy();
  }, 30000);
});