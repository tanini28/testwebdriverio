import LoginPage from '../pageobjects/login.page.js';
import InventoryPage from '../pageobjects/inventory.page.js';

describe('Logout', () => {
    beforeEach(async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');

        await browser.waitUntil(
            async () => {
                const url = await browser.getUrl();
                return url.includes('inventory.html');
            },
            {
                timeout: 15000,
                timeoutMsg: 'Expected URL to include inventory.html after login'
            }
        );
    });

    it('should logout successfully', async () => {
        try {
            await InventoryPage.logout();

            await browser.waitUntil(
                async () => {
                    const url = await browser.getUrl();
                    return url === 'https://www.saucedemo.com/' || 
                           url === 'https://www.saucedemo.com/index.html';
                },
                {
                    timeout: 15000,
                    timeoutMsg: 'Expected URL to be the login page after logout'
                }
            );
            
            await expect(LoginPage.loginButton).toBeDisplayed();
        } catch (error) {
            console.error('Logout test failed:', error.message);
            throw error;
        }
    });
});