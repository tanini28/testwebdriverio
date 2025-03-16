import loginPage from '../pageobjects/login.page.js';

describe('Login with invalid password', () => {
    beforeEach(async () => {
        await loginPage.open();
    });

    it('should display error message for invalid password', async () => {
        await loginPage.login('standard_user', 'invalid_password');
        
        const errorMessage = await loginPage.getErrorMessage();
        await expect(errorMessage).toBe('Epic sadface: Username and password do not match any user in this service');
    });
});