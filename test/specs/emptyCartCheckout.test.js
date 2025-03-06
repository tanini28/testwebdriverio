
import LoginPage from '../pageobjects/login.page';
import InventoryPage from '../pageobjects/inventory.page';
import CartPage from '../pageobjects/cart.page';

describe('Checkout without products', () => {
    before(async () => {
 
        await LoginPage.openLoginPage();
        await LoginPage.login('standard_user', 'secret_sauce');
    });

    it('should display empty cart message', async () => {
   
        await InventoryPage.openCart();
        await expect(CartPage.cartItem).not.toBeDisplayed();
        await expect(CartPage.errorMessage).toHaveText('Cart is empty');
    });
});