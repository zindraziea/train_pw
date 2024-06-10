import { test, expect } from '@playwright/test';
import CommonUtils from '../keyword/utils/common_utils';

test.describe('Control Flow', () => {
    
    test('Condition Testing 1', async ({}) => {
        const number = 10;
        if (number > 5) {
            console.log('Number is greater than 5');
        } else {
            console.log('Number is less than 5');
        }
    })

    test('Condition Testing 2', async ({}) => {
        const number = 5;
        if (number == 5) {
            console.log('Number is equal 5');
        }
    })

    test('Repleating', async ({}) => {
        for (let i = 0; i < 5; i++) {
            console.log(i);
        }
    })

    test('Nested Loop', async ({}) => {
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                console.log(i, j);
            }
        }
    })

    test('Data Driven', async ({}) => {
        const obj = {a:1, b:2, c:3}
        for (const key in obj) {
            console.log(key, obj[key]);
        }
    })
    
    test('Load Other Function', async ({}) => {
        const a = 10;
        const b = 20;
        const expected = 30;
        const result = CommonUtils.addOperation(a, b);
        console.log(result);
        expect(result).toBe(expected);
    })
    

    
})
