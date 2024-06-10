import { test, expect } from '@playwright/test';

test.describe('Include Exclude', () => {

    test('Test case 1', async ({}) => {
        console.log('Test case 1');
    })

    test('Test case 2', async ({}) => {
        console.log('Test case 2');
    })    

    test.skip('Test case 3', async ({}) => {
        console.log('Test case 3');
    })
        
})
