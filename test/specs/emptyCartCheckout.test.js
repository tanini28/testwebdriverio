import loginPage from '../pageobjects/login.page.js';
import inventoryPage from '../pageobjects/inventory.page.js';
import cartPage from '../pageobjects/cart.page.js';

describe('Checkout without products', () => {
    beforeEach(async () => {
        await loginPage.open();
        await loginPage.login('standard_user', 'secret_sauce');
    });

    it('should verify the cart is empty', async () => {
        await inventoryPage.openCart();

        await expect(cartPage.isCartItemDisplayed()).resolves.toBe(false);
    });
});