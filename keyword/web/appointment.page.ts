import { Page, Locator, expect } from '@playwright/test';

class AppointmentPage {
    page: Page
    labelMakeAppointment: Locator;
    comboFacility: Locator;
    chkApplyHospitalReadmission: Locator;
    radioHealthcareProgram: Locator;
    dateVisitDate: Locator;
    txtComment: Locator;
    btnBookAppointment: Locator;

    constructor(page: Page) {
        this.page = page;
        this.labelMakeAppointment = page.locator('h2');
        this.comboFacility = page.locator('#combo_facility');
        this.chkApplyHospitalReadmission = page.locator('#chk_hospotal_readmission');
        // this.radioHealthcareProgram = page.locator('input[id^=radio_program]');
        this.dateVisitDate = page.locator('#txt_visit_date');
        this.txtComment = page.locator('#txt_comment');
        this.btnBookAppointment = page.locator('button');
    }

    async waitForPageLoad() {
        await expect(this.labelMakeAppointment).toHaveText('Make Appointment');
    }

    async makeAppointment(facility: string, readmission: boolean, program: string, date: string, comment: string) {
        await this.comboFacility.selectOption({ label: facility });
        if (readmission) {
            await this.chkApplyHospitalReadmission.check();
        }
        await this.page.locator(`input[id^=radio_program][value=${program}]`).check();

        // await this.dateVisitDate.fill(date);
        await this.page.evaluate((date: any) => {
                const datePicker = document.querySelector('#txt_visit_date');
                if (datePicker) {
                    datePicker.setAttribute('value', date);
                }
            },
            date
        )
        // await this.dateVisitDate.evaluate((el: any, value: any) => el.value = value, date);
        await this.txtComment.fill(comment);
        await this.btnBookAppointment.click();
        // await this.page.pause();
    }
}

export default AppointmentPage;