import { test, expect } from '@playwright/test';

test.describe('Variable', () => {

    test('Constant', async ({}) => {
        const sum: number = 1 + 2;
        console.log(sum);
        expect(sum).toBe(3);
    })

    test('Variable', async ({}) => {
        var sum: number = 1 + 2;
        console.log(sum);
        sum = 5;
        console.log(sum);
        expect(sum).not.toBe(3);
    })

    test('Let', async ({}) => {
        let sum: number = 1 + 2;
        console.log(sum);
        sum = 5;
        console.log(sum);
        expect(sum).not.toEqual('5');
    })    
})
