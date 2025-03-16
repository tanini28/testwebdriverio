import { Given, When, Then } from '@cucumber/cucumber';
import loginPage from '../pageobjects/login.page.js';

Given('User is located on the main page of saucedemo website', async () => {
    await loginPage.open();
});

When('User click {string} button', async (buttonName) => {
    if (buttonName === 'Login') {
        await loginPage.clickLogin();
    } else {
        throw new Error(`Button "${buttonName}" is not implemented`);
    }
});

Then('User should see {string} error message', async (expectedMessage) => {
    const errorMessage = await loginPage.getErrorMessage();
    await expect(errorMessage).toBe(expectedMessage);
});