import { Page, Locator, expect } from '@playwright/test';

class SummaryPage {
    page: Page
    labelSummary: Locator;
    labelFacility: Locator;
    labelReadmission: Locator;
    labelProgram: Locator;
    labelDate: Locator;
    labelComment: Locator;
    btnGoToHome: Locator;
    btnMenuToggle: Locator;
    btnHistory: Locator;

    constructor(page: Page) {
        this.page = page;
        this.labelSummary = page.locator('h2:has-text("Appointment Confirmation")');
        this.labelFacility = page.locator('#facility');
        this.labelReadmission = page.locator('#hospital_readmission');
        this.labelProgram = page.locator('#program');
        this.labelDate = page.locator('#visit_date');
        this.labelComment = page.locator('#comment');
        this.btnGoToHome = page.locator('.btn-default');
        this.btnMenuToggle = page.locator('#menu-toggle');
        this.btnHistory = page.locator('a[href$="#history"]');
    }

    async waitForPageLoad() {
        await expect(this.labelSummary).toBeVisible();
    }

    async verifySummary(facility: string, readmission: boolean, program: string, date: string, comment: string) {
        await expect(this.labelFacility).toHaveText(facility);
        await expect(this.labelReadmission).toHaveText(readmission ? 'Yes' : 'No');
        await expect(this.labelProgram).toHaveText(program);
        await expect(this.labelDate).toHaveText(date);
        await expect(this.labelComment).toHaveText(comment);
    }

    async goToHome() {
        await this.btnGoToHome.click();
    }

    async goToviewHistory() {
        await this.btnMenuToggle.click();
        await this.btnHistory.click();
    }
}

export default SummaryPage;