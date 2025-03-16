import loginPage from '../pageobjects/login.page.js';
import inventoryPage from '../pageobjects/inventory.page.js';
import cartPage from '../pageobjects/cart.page.js';

describe('Saving the cart after logout', () => {
    it('should save the cart after logout and login again', async () => {

        await loginPage.open();
        await loginPage.login('standard_user', 'secret_sauce');

        await inventoryPage.addItemToCart();
        await expect(inventoryPage.cartBadge).toBeDisplayed();
        await expect(inventoryPage.cartBadge).toHaveText('1');

        await inventoryPage.logout();

        await loginPage.login('standard_user', 'secret_sauce');

        await inventoryPage.openCart();
        await cartPage.cartItem.waitForDisplayed({ timeout: 5000 });
        await expect(cartPage.cartItem).toBeDisplayed();
    });
});