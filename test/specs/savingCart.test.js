import LoginPage from '../pageobjects/login.page';
import InventoryPage from '../pageobjects/inventory.page';
import CartPage from '../pageobjects/cart.page';

describe('Saving the card after logout', () => {
    it('should save the cart after logout and login again', async () => {
        
        await LoginPage.openLoginPage();
        await LoginPage.login('standard_user', 'secret_sauce');

        
        await InventoryPage.addItemToCart();
        await expect(InventoryPage.cartBadge).toHaveText('1');

        
        await InventoryPage.logout();

        
        await LoginPage.login('standard_user', 'secret_sauce');

        
        await InventoryPage.openCart();
        await expect(CartPage.cartItem).toBeDisplayed();
    });
});