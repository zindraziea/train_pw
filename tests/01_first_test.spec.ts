import { test, expect } from '@playwright/test';

// test suite
test.describe('My first test', () => {
    //test case
    test('Frist Test', async ({}) => {
        const sum: number = 1 + 2;
        console.log(sum);
        expect(sum).toEqual(3);
        expect(sum).toBeGreaterThan(2);
    })
})