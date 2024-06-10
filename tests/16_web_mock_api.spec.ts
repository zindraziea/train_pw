import { test, expect } from '@playwright/test';

test.describe('mock api', () => {

    test('book store with out mock data', async ({ page }) => {
        //go to page
        await page.goto('https://demoqa.com/books', {timeout: 60000});
    })

    test('book store with mock data', async ({ page }) => {
        //mock
        await page.route('**/BookStore/v1/Books', route => {
            route.fulfill({
                status: 200,
                contentType: 'application/json',
                body: JSON.stringify({
                    books: [
                        {
                            "isbn": "9781449325862",
                            "title": "This is mock title",
                            "subTitle": "This is mock subtitle",
                            "author": "mock author",
                            "publish_date": "2020-06-04T08:48:39.000Z",
                            "publisher": "mock publisher",
                            "pages": 234,
                            "description": "This pocket guide is the perfect on-the-job companion to Git, the distributed version control system. It provides a compact, readable introduction to Git for new users, as well as a reference to common commands and procedures for those of you with Git exp",
                            "website": "http://chimera.labs.oreilly.com/books/1230000000561/index.html"
                        }
                    ]
                })
            })
        })
        //go to page
        await page.goto('https://demoqa.com/books', {timeout: 60000});
        // expect(await page.locator('text=This is mock title').isVisible());
        expect (await page.locator('.rt-tr:has-text("This is mock title")').isVisible());
    })

    test('book store with mock data file', async ({ page }) => {
        //mock
        const mockData = require('../data/mocks/bookstore.json');
        await page.route('**/BookStore/v1/Books', route => {
            route.fulfill({
                status: 200,
                contentType: 'application/json',
                body: JSON.stringify(mockData)
            })
        })
        //go to page
        await page.goto('https://demoqa.com/books', {timeout: 60000});
        expect(await page.locator('text=This is mock title').isVisible());
    })
    
})
