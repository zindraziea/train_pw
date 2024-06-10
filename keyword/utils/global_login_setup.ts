import { FullConfig, chromium } from "@playwright/test";

async function globalSetup(config: FullConfig) {
    const browser = await chromium.launch();
    const page = await browser.newPage();

    // login
    await page.goto('https://practice.sdetunicorns.com/my-account');
    
    // save signed-in stage to 'notLoggedInStage.json'
    await page.context().storageState({ path: 'stageNotLogin.json' });
    
    await page.locator('#username').fill('practiceuser1');
    await page.locator('#password').fill('PracticePass1!');
    await page.locator('button[name="login"]').click();

    // save signed-in stage to 'IoggedInStage.json'
    await page.context().storageState({ path: 'stageLogin.json' });
    await browser.close();
}

export default globalSetup;
