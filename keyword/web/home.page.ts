import { Page, Locator } from '@playwright/test';

class HomePage {
    page: Page
    btnMakeAppointment: Locator;

    constructor(page: Page) {
        this.page = page;
        this.btnMakeAppointment = page.locator('text=Make Appointment');
    }

    async navigate() {
        await this.page.goto('https://katalon-demo-cura.herokuapp.com/');
    }

    async clickMakeAppointment() {
        await this.btnMakeAppointment.click();
    }
}

export default HomePage;