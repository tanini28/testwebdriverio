import loginPage from '../pageobjects/login.page.js';
import inventoryPage from '../pageobjects/inventory.page.js';

describe('Logout', () => {
    beforeEach(async () => {
        await loginPage.open();
        await loginPage.login('standard_user', 'secret_sauce');
        await loginPage.waitForUrl('inventory.html');
    });

    it('should logout successfully', async () => {
        await inventoryPage.logout();
       await loginPage.waitForUrl('/');

        const isLoginButtonDisplayed = await loginPage.loginButton.isDisplayed();
        await expect(isLoginButtonDisplayed).toBe(true);
    });
});