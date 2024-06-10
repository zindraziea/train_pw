import { test, expect } from '@playwright/test';

test.describe('My account authen with global setup', () => {

    test('Access Orders', async ({ page }) => {
        await page.goto('https://practice.sdetunicorns.com/my-account');
        await page.locator(`li a[href*='orders']`).click();
        await expect(page).toHaveURL(/.*orders/);
    })

    test('Access downloads', async ({ page}) => {
        await page.goto('https://practice.sdetunicorns.com/my-account');
        await page.locator(`li a[href*='downloads']`).click();
        await expect(page).toHaveURL(/.*downloads/);
    })
})

test.describe('My account not authen with global setup', () => {
    test.use({ storageState: 'stageNotLogin.json' });
    test('Verify login and register is visible', async ({ page }) => {
        await page.goto('https://practice.sdetunicorns.com/my-account');
        await expect(page.locator('form[class*="login"]')).toBeVisible();
        await expect(page.locator('form[class*="register"]')).toBeVisible();
    })
})
