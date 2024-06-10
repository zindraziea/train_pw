import { test, expect } from '@playwright/test';
import bookApi from '../keyword/api/book.api';

const env = process.env.ENV || 'dev';
const currentFileDir = __dirname;
const book_api = `${currentFileDir}/../data/${env}/book_api.json`;
const book_api_data = require(book_api);

test.describe('API Test', () => {

    test.beforeAll(async ({}) => {
        await bookApi.init();
    })

    test('test get request by base URL', async ({ request }) => {
        const url = '/api/v2/pokemon/ditto';
        const responst = await request.get(url);
        expect(responst.status()).toBe(200);
        const responstJson = await responst.json();
        console.log('response: ' + responst.status());
        console.log(responstJson);
    })

    test('test post request', async ({ request }) => {
        const url = 'https://demoqa.com/Account/v1/Login';
        const headers = { 'Content-Type': 'application/json' };
        const body = { userName: 'JirathEak', password: 'P@ssw0rd' };
        console.log(body);
        const responst = await request.post(url, { headers: headers, data: body });
        expect(responst.status()).toBe(200);
        const responstJson = await responst.json();
        const token = responstJson.token;

        console.log(responstJson);
        console.log(token);
    })


    test('test get book from controller', async ({}) => {
        const books = await bookApi.getBooks();
        console.log(books);
    })
    
    test('test login from controller', async ({}) => {
        let response = await bookApi.generateToken(book_api_data.default_user);
        console.log(response);
        response = await bookApi.login(book_api_data.default_user);
        console.log(response);
        const token = response.token;
        const userId = response.userId;
        response = await bookApi.listBook(token, userId);
        console.log(response);
    })
})
