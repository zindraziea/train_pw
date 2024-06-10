import { request, APIRequestContext, expect } from "@playwright/test";

class BookApi {
    private requestContext: APIRequestContext;
    async init() {
        this.requestContext = await request.newContext({
            baseURL: 'https://demoqa.com'
        })
    }

    async getBooks() {
        const url = '/v1/Books';
        const headers = { 'Content-Type': 'application/json' };
        const response = await this.requestContext.get(url, { headers: headers });
        return response;
    }

    async generateToken(body: any) {
        const url = '/Account/v1/GenerateToken';
        const headers = { 'Content-Type': 'application/json' };
        // const body = { userName: userName, password: password };
        console.log(body);
        const response = await this.requestContext.post(url, { headers: headers, data: body });
        expect(response.status()).toBe(200);
        return await response.json();
    }

    async login(body: any) {
        const url = '/Account/v1/Login';
        const headers = { 'Content-Type': 'application/json' };
        // const body = { userName: userName, password: password };
        console.log(body);  
        const response = await this.requestContext.post(url, { headers: headers, data: body });
        expect(response.status()).toBe(200);
        return await response.json();
    }

    async listBook(token: string, userId: string) {
        const url = '/Account/v1/User/' + userId;
        const headers = { 
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        };
        const response = await this.requestContext.get(url, { headers: headers });
        expect(response.status()).toBe(200);
        return await response.json();
    }
}

export default new BookApi();