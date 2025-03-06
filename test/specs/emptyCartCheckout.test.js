import LoginPage from '../pageobjects/login.page.js';
import InventoryPage from '../pageobjects/inventory.page.js';
import CartPage from '../pageobjects/cart.page.js';

describe('Checkout without products', () => {
    beforeEach(async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
    });

    it('should display empty cart message', async () => {
        await InventoryPage.openCart();
        
        const isCartItemDisplayed = await CartPage.isCartItemDisplayed();
        await expect(isCartItemDisplayed).toBe(false);
        
        const errorMessage = await CartPage.getErrorMessage();
        await expect(errorMessage).toBe('Cart is empty');
    });
});