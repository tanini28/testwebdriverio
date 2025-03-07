import LoginPage from '../pageobjects/login.page.js';
import InventoryPage from '../pageobjects/inventory.page.js';
import CartPage from '../pageobjects/cart.page.js';

describe('Saving the cart after logout', () => {
    it('should save the cart after logout and login again', async () => {

        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');

        await InventoryPage.addItemToCart();
        await expect(InventoryPage.cartBadge).toBeDisplayed();
        await expect(InventoryPage.cartBadge).toHaveText('1');

        await InventoryPage.logout();

        await LoginPage.login('standard_user', 'secret_sauce');

        await InventoryPage.openCart();
        await CartPage.cartItem.waitForDisplayed({ timeout: 5000 });
        await expect(CartPage.cartItem).toBeDisplayed();
    });
});