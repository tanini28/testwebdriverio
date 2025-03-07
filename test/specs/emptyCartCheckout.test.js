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
  
        try {
           await CartPage.cartItem.waitForDisplayed({ timeout: 1000, reverse: true });
           await expect(true).toBe(true);
        } catch (error) {
           await expect(false).toBe(true, 'Cart should be empty but items were found');
        }
    });
});