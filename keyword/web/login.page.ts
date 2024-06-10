import { Page, Locator } from '@playwright/test';

class LoginPage {
    page: Page
    txtUsername: Locator;
    txtPassword: Locator;
    btnLogin: Locator;

    constructor(page: Page) {
        this.page = page;
        this.txtUsername = page.locator('#txt-username');
        this.txtPassword = page.locator('#txt-password');
        this.btnLogin = page.locator('button[type="submit"]');
    }

    async login(username: string, password: string) {
        await this.txtUsername.fill(username);
        await this.txtPassword.fill(password);
        await this.btnLogin.click();
    }
}

export default LoginPage;