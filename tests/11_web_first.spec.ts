import { test, expect } from '@playwright/test';

test.describe('Appointment first', () => {
    test('Make appointment login', async ({ page }) => {
        await page.goto('https://katalon-demo-cura.herokuapp.com/', {timeout: 5000});
        // 1. click on Make Appointment
        // locator by text
        await page.locator('text=Make Appointment').click({timeout: 5000});
        // locator by css id
        // await page.locator('#btn-make-appointment').click();
        // locator by css class index 2 (3rd element)
        // await page.locator('.btn').nth(2).click();
        // locator by css class and attribute
        // await page.locator('a[href="./profile.php#login"]').click();
        // locator by css class with text
        // await page.locator('a:has-text("Make Appointment")').click();
        // locator by css class parent and child
        // await page.locator('.text-vertical-center a').click();
        // locator by xpath
        //await page.locator('//a[text()="Make Appointment"]').click();

        // 2. verify title and url
        // add timeout to wait for page to load
        // await page.waitForTimeout(1000);
        expect(await page.title()).toBe('CURA Healthcare Service');
        // add timeout in expect
        expect(await page.title()).toBe('CURA Healthcare Service');
        expect(page.url()).toBe('https://katalon-demo-cura.herokuapp.com/profile.php#login');
        // verify url with regex
        expect(page.url()).toMatch(/profile\.php/);
        // verify url contains text
        expect(page.url()).toContain('profile.php');
        // get url and verify
        const url = page.url();
        expect(url).toContain('profile.php');

        // 3. login
        // enter username
        await page.fill('#txt-username', 'John Doe');
        // enter password
        await page.fill('#txt-password', 'ThisIsNotAPassword');
        // click login
        await page.locator('button').click();
        
        // 4. verify title and url
        expect(await page.title()).toBe('CURA Healthcare Service');
        expect(page.url()).toContain('#appointment');
        // verify h2 text
        expect(await page.locator('h2').innerText()).toBe('Make Appointment');
    })

    test('Make appointment capture', async ({ page }, testInfo ) => {
        await page.goto('https://katalon-demo-cura.herokuapp.com/');
        
        const timestamp = new Date().getTime();
        const testtile_lower = testInfo.title.toLowerCase().replace(/ /g, '_');
        const resultPath = `${process.cwd()}/test-results/${testtile_lower}_page_${timestamp}.png`;
        await page.screenshot({ path: resultPath });
        testInfo.attachments.push({ name: 'screenshot', contentType: 'image/png', path: resultPath});
        await page.pause();
        await page.locator('.text-vertical-center').screenshot({ path: `${process.cwd()}/test-results/${testtile_lower}_element_${timestamp}.png` });
        await page.screenshot({ path: resultPath });
        testInfo.attachments.push({ name: 'screenshot', contentType: 'image/png', path: resultPath});
    })

    test('Web Console log', async ({ page }) => {
        await page.goto('https://pokeapi.co/');
        const msgPromise = page.waitForEvent('console');
        const msg = await msgPromise;
        console.log(msg); 
        page.on('console', msg => console.log(msg));
    })

    test('Upload image', async ({ page }) => {
        await page.goto('https://img.doerig.dev/');
        //<input type="file" name="image" class="fixed hidden">
        const input = await page.locator('input[type="file"]');
        // change class = ''
        // await page.evaluate(() => {
        //     const input = document.querySelector('input[type="file"]');
        //     if (input) {
        //         input.className = '';
        //     }
        // });
        await input.evaluate((el: any) => el.className = '');
        await page.waitForTimeout(1000);
        await input.setInputFiles('data/image/cat.jpg');
        await page.waitForTimeout(1000);
    })
    
    
})
