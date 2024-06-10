import { Page, Locator, expect } from '@playwright/test';

class HistoryPage {
    page: Page
    labelHistory: Locator;
    labelFacility: Locator;
    labelReadmission: Locator;
    labelProgram: Locator;
    labelDate: Locator;
    labelComment: Locator;
    btnHome: Locator;

    constructor(page: Page) {
        this.page = page;
        this.labelHistory = page.locator('h2:has-text("History")');
        this.labelFacility = page.locator('#facility');
        this.labelReadmission = page.locator('#hospital_readmission');
        this.labelProgram = page.locator('#program');
        this.labelDate = page.locator('.panel-headinge');
        this.labelComment = page.locator('#comment');
        this.btnHome = page.locator('.btn-default');
    }

    async waitForPageLoad() {
        await expect(this.labelHistory).toBeVisible();
    }

    async verifyHistory(data: any, index: number) {
        expect(await this.labelFacility.nth(index).textContent()).toBe(data.facility);
        expect(await this.labelReadmission.nth(index).textContent()).toBe(data.readmission ? 'Yes' : 'No');
        expect(await this.labelProgram.nth(index).textContent()).toBe(data.program);
        // expect(await this.labelDate.nth(index).textContent()).toBe(data.date);
        expect(await this.labelComment.nth(index).textContent()).toBe(data.comment);
    }

    async goToHome() {
        await this.btnHome.click();
    }
}

export default HistoryPage;