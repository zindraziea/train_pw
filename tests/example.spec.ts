import { test, expect } from '@playwright/test';

test('has title', async ({ page}, testInfo) => {
  await page.goto('https://playwright.dev/');
  // screen shot with test title
  const resultPath = `test-results/screenshot/${testInfo.title}.png`;
  await page.screenshot({ path: resultPath });
  // attach screenshot path to test result
  testInfo.attachments.push({ name: 'screenshot', contentType: 'image/png', path: resultPath});
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
