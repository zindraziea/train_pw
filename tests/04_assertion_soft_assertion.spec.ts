import { test, expect } from '@playwright/test';

test.describe('Assertion - Soft Assertion', () => {

    test('Assertion String', async ({}) => {
        const expecData: string = 'Test String Data';
        const actualData: string = 'Test String Data';
        expect(actualData).toBe(expecData);
    })

    test('Assertion Number', async ({}) => {
        const expecData: number = 10;
        const actualData: number = 10;
        expect(actualData).toEqual(expecData);
    })

    test('Assertion JSON', async ({}) => {
        const data = {
            "name": "Using json to represent data",
            "email": "hello@world.io",
            "body": "any paragraph of text"
        }
        const expectData = {
            "email": "hello@world.io",
            "name": "Using json to represent data",
            "body": "any paragraph of text"
        }
        const expectData2 = {
            "name": "Using json to represent data",
            "email": "hello@world.io"
        }
        // expect(data).toBe(expectedData);
        expect(data).toEqual(expectData);
        expect(data).toMatchObject(expectData);
        expect(data).toMatchObject(expectData2);
        expect(data).toEqual(expect.objectContaining(expectData2));
        expect(data.body).toContain('paragraph');
    })

    test('Assertion Array', async ({}) => {
        const data = [3, 2, 1, 4, 5];
        const expectData = [3, 2, 1, 4, 5];
        const expectData2 = [1, 3, 4];
        expect.soft(data).toEqual(expectData);
        expect.soft(data).toContain(3);
        expect.soft(data).toHaveLength(5);
        expect.soft(data).toEqual(expect.arrayContaining(expectData2));
    })
    
})
