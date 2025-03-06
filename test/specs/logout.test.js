import LoginPage from '../pageobjects/login.page.js';
import InventoryPage from '../pageobjects/inventory.page.js';

describe('Logout', () => {
    beforeEach(async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
    });

    it('should logout successfully', async () => {
        await InventoryPage.logout();
        
        await expect(browser).toHaveUrl('https://www.saucedemo.com/');
        await expect(LoginPage.loginButton).toBeDisplayed();
    });
});