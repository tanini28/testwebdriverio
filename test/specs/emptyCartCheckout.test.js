import LoginPage from '../pageobjects/login.page.js';
import InventoryPage from '../pageobjects/inventory.page.js';
import CartPage from '../pageobjects/cart.page.js';

describe('Checkout without products', () => {
    beforeEach(async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
    });

    it('should verify the cart is empty', async () => {
        await InventoryPage.openCart();

        await expect(CartPage.isCartItemDisplayed()).resolves.toBe(false);
    });
});