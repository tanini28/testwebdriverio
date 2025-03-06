import LoginPage from '../pageobjects/login.page';
import InventoryPage from '../pageobjects/inventory.page';
import CartPage from '../pageobjects/cart.page';
import CheckoutPage from '../pageobjects/checkout.page';

describe('Valid Checkout', () => {
    before(async () => {
        await LoginPage.open(); 
        await LoginPage.login('standard_user', 'secret_sauce');
    });
    it('should complete checkout successfully', async () => {
        
        await InventoryPage.addItemToCart();
        await expect(InventoryPage.cartIcon).toHaveText('1');

        await InventoryPage.openCart();
        await expect(browser).toHaveUrlContaining('cart.html');

        await CartPage.proceedToCheckout();
        await expect(browser).toHaveUrlContaining('checkout-step-one.html');

        await CheckoutPage.fillCheckoutForm('John', 'Doe', '12345');
        await CheckoutPage.completeCheckout();

        await expect(browser).toHaveUrlContaining('checkout-complete.html');
        await expect($('.complete-header')).toHaveText('Thank you for your order!');

      
        await CheckoutPage.returnToInventory();
        await expect(browser).toHaveUrlContaining('inventory.html');
    });
});