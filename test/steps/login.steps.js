import { Given, When, Then } from '@cucumber/cucumber';
import LoginPage from '../pageobjects/login.page.js';

Given('User is located on the main page of saucedemo website', async () => {
    await LoginPage.open();
});

When('User click {string} button', async (buttonName) => {
    // buttonName is not used here but could be useful for other scenarios
    await LoginPage.clickLogin();
});

Then('User should see {string} error message', async (expectedMessage) => {
    const errorMessage = await LoginPage.getErrorMessage();
    await expect(errorMessage).toBe(expectedMessage);
});