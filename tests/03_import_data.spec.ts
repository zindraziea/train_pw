import { test, expect } from '@playwright/test';
import personJson from '../data/porson.json';

const env = process.env.ENV || 'dev';
const currentFileDir = __dirname;
const personJsonPath = `${currentFileDir}/../data/${env}/porson.json`;
const personJsonEnv = require(personJsonPath);

test.describe('Variable', () => {
    
    test('Object literal', async ({}) => {
        const person: { name: String, age: number} = {
            "name": 'John',
            "age": 30
        }
        console.log(person);
        expect(person).toHaveProperty('name');
        expect(person.age).toBe(30);
    })

    test('JSON form data', async ({}) => {
        console.log(personJson);
        expect(personJson).toHaveProperty('name');
        expect(personJson.age).toBe(40);
    })

    test('JSON form data ENV', async ({}) => {
        console.log(personJsonEnv);
        expect(personJsonEnv).toHaveProperty('name');
        expect(personJsonEnv.age).toBe(20);
    })
})
