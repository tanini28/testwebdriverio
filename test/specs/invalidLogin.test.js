import LoginPage from '../pageobjects/login.page.js';

describe('Login with invalid credentials', () => {
    beforeEach(async () => {
        await LoginPage.open();
    });

    it('should display error message for invalid username', async () => {
        await LoginPage.login('invalid_user', 'secret_sauce');
        
        const errorMessage = await LoginPage.getErrorMessage();
        await expect(errorMessage).toBe('Epic sadface: Username and password do not match any user in this service');
    });
});