import LoginPage from '../pageobjects/login.page.js';

describe('Login with invalid password', () => {
    beforeEach(async () => {
        await LoginPage.open();
    });

    it('should display error message for invalid password', async () => {
        await LoginPage.login('standard_user', 'invalid_password');
        
        const errorMessage = await LoginPage.getErrorMessage();
        await expect(errorMessage).toBe('Epic sadface: Username and password do not match any user in this service');
    });
});