import loginPage from '../pageobjects/login.page.js';

describe('Login with invalid credentials', () => {
    beforeEach(async () => {
        await loginPage.open();
    });

    it('should display error message for invalid username', async () => {
        await loginPage.login('invalid_user', 'secret_sauce');
        
        const errorMessage = await loginPage.getErrorMessage();
        await expect(errorMessage).toBe('Epic sadface: Username and password do not match any user in this service');
    });
});