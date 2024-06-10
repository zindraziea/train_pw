import { test, expect } from '@playwright/test';

test.describe.serial('Before After', () => {

    test.beforeAll(async ({}) => {
        console.log('Before All');
    })

    test.beforeEach(async ({}) => {
        console.log('Before Each');
    })

    test('Test case 1', async ({}) => {
        console.log('Test case 1');
    })

    test('Test case 2', async ({}) => {
        console.log('Test case 2');
    })    

    test('Test case 3', async ({}) => {
        console.log('Test case 3');
    })

    test.afterEach(async ({}) => {
        console.log('After Each');
    })

    test.afterAll(async ({}) => {
        console.log('After All');
    })
        
})
