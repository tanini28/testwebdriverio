import LoginPage from '../pageobjects/login.page.js';
import InventoryPage from '../pageobjects/inventory.page.js';

describe('Valid Login', () => {
    beforeEach(async () => {
        await LoginPage.open();
    });

    it('should redirect to inventory page after successful login', async () => {
        await LoginPage.login('standard_user', 'secret_sauce');
        
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        const isInventoryDisplayed = await InventoryPage.isInventoryDisplayed();
        await expect(isInventoryDisplayed).toBe(true);
    });
});