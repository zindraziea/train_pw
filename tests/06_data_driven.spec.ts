import { test, expect } from '@playwright/test';

test.describe('Data driven', () => {
    const data = [1,2,3];
    for (const item of data) {

        test(`Test case ${item}`, async ({}) => {
            console.log(`Test case ${item}`);
        })

    }
})
