import { test, expect } from '@playwright/test';

test.describe('My account authen with before each', () => {
    test.beforeEach('Login ', async ({ page }) => {
        // login
        await page.goto('https://practice.sdetunicorns.com/my-account');
        
        // save signed-in stage to 'notLoggedInStage.json'
        await page.context().storageState({ path: 'stageNotLogin.json' });
        
        await page.locator('#username').fill('practiceuser1');  
        await page.locator('#password').fill('PracticePass1!');
        await page.locator('button[name="login"]').click();

        // save signed-in stage to 'IoggedInStage.json'
        await page.context().storageState({ path: 'stageLogin.json' });
        await expect(page.locator('li a:has-text("Log out")')).toBeVisible({timeout: 10000});
    })

    test('Access Orders', async ({ page }) => {
        await page.locator(`li a[href*='orders']`).click();
        await expect(page).toHaveURL(/.*orders/);
    })

    test('Access downloads', async ({ page }) => {
        await page.locator(`li a[href*='downloads']`).click();
        await expect(page).toHaveURL(/.*downloads/);
    })
})