import { test, expect, Page } from '@playwright/test';

test.describe.serial('My account authen with before all', () => {
    let page: Page

    test.beforeAll('Login ', async ({ browser }) => {
        page = await browser.newPage();
        // login
        await page.goto('https://practice.sdetunicorns.com/my-account');
        await page.locator('#username').fill('practiceuser1');
        await page.locator('#password').fill('PracticePass1!');
        await page.locator('button[name="login"]').click();
        await expect(page.locator('li a:has-text("Log out")')).toBeVisible({timeout: 10000});
    })

    test('Access Orders', async () => {
        await page.locator(`li a[href*='orders']`).click();
        await expect(page).toHaveURL(/.*orders/);
    })

    test('Access downloads', async () => {
        await page.locator(`li a[href*='downloads']`).click();
        await expect(page).toHaveURL(/.*downloads/);
    })
})