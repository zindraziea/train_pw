import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import HomePage from '../keyword/web/home.page';
import LoginPage from '../keyword/web/login.page';
import AppointmentPage from '../keyword/web/appointment.page';

import LoginPageEx from '../keyword/web/extends/login.extend.page';

test.describe('Appointment page object', () => {
    let homePage: HomePage;
    let loginPage: LoginPage;
    let appointmentPage: AppointmentPage;

    let loginPageEx: LoginPageEx;
    
    test('Make Appointment', async ({ page }) => {
        homePage = new HomePage(page);
        loginPage = new LoginPage(page);
        appointmentPage = new AppointmentPage(page);
        const appointment = {
            facility: 'Hongkong CURA Healthcare Center',
            readmission: true,
            program: 'Medicaid',
            date: '25/12/2024',
            comment: 'This is a comment'
        }

        await homePage.navigate();
        await homePage.clickMakeAppointment();
        expect(page.url()).toContain('#login');
        await loginPage.login('John Doe', 'ThisIsNotAPassword');
        expect(page.url()).toContain('#appointment');
        await appointmentPage.waitForPageLoad();
        await appointmentPage.makeAppointment(
            appointment.facility, 
            appointment.readmission, 
            appointment.program, 
            appointment.date, 
            appointment.comment);
    })

    test('Make Appointment with faker', async ({ page }) => {
        homePage = new HomePage(page);
        loginPage = new LoginPage(page);
        appointmentPage = new AppointmentPage(page);

        const name = faker.person.firstName();
        const lastName = faker.person.lastName();
        const email = faker.internet.email();
        let comment = faker.lorem.paragraphs(2);
        //add name and last name to comment at 1st line
        comment = `${name} ${lastName}\n${email}\n${comment}`;
        console.log(comment);

        const appointment = {
            facility: 'Hongkong CURA Healthcare Center',
            readmission: true,
            program: 'Medicaid',
            date: '20/12/2024',
            comment: comment
        }

        await homePage.navigate();
        await homePage.clickMakeAppointment();
        expect(page.url()).toContain('#login');
        await loginPage.login('John Doe', 'ThisIsNotAPassword');
        expect(page.url()).toContain('#appointment');
        await appointmentPage.waitForPageLoad();
        await appointmentPage.makeAppointment(appointment.facility, appointment.readmission, appointment.program, appointment.date, appointment.comment);        
    })

    test('Login with extend class', async ({ page }) => {
        loginPageEx = new LoginPageEx(page);
        await loginPageEx.navigate();
        await loginPageEx.login('John Doe', 'ThisIsNotAPassword');
        await loginPageEx.clicklogin();
    })

})
