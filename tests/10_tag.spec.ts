import { test, expect } from '@playwright/test';

test.describe('Tag grep', () => {

    test('Test case 1', {tag: ['@regression', '@smoke']}, async ({}) => {
        console.log('Test case 1');
    })

    test('Test case 2', {tag: ['@regression', '@notReady']}, async ({}) => {
        console.log('Test case 2');
    })    

    test('Test case 3', {tag: ['@smoke']}, async ({}) => {
        console.log('Test case 3');
    })
        
})
