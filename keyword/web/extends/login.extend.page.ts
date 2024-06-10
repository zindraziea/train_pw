import { Page, Locator } from '@playwright/test';
import LoginPage from './login.page.ts';

class LoginPageEx extends LoginPage {

    btnLogin: Locator;
    
    constructor(page: Page) {
        super(page);
        this.btnLogin = page.locator('button[type="submit"]');
    }

    async clicklogin() {
        await this.btnLogin.click();
    }

    async waitForPageLoad() {
        await this.page.waitForSelector('#appointment');
    }

}

export default LoginPageEx;
