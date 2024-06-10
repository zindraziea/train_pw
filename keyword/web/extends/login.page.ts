import { Page, Locator } from '@playwright/test';

class LoginPage {
    page: Page
    txtUsername: Locator;
    txtPassword: Locator;

    constructor(page: Page) {
        this.page = page;
        this.txtUsername = page.locator('#txt-username');
        this.txtPassword = page.locator('#txt-password');
    }

    async navigate() {
        await this.page.goto('https://katalon-demo-cura.herokuapp.com/profile.php#login');
    }

    async login(username: string, password: string) {
        await this.txtUsername.fill(username);
        await this.txtPassword.fill(password);
    }
}

export default LoginPage;