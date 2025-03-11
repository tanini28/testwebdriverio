import LoginPage from '../pageobjects/login.page.js';
import InventoryPage from '../pageobjects/inventory.page.js';

describe('Logout', () => {
    beforeEach(async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
        await LoginPage.waitForUrl('inventory.html');
    });

    it('should logout successfully', async () => {
        await InventoryPage.logout();
       await LoginPage.waitForUrl('/');

        const isLoginButtonDisplayed = await LoginPage.loginButton.isDisplayed();
        await expect(isLoginButtonDisplayed).toBe(true);
    });
});